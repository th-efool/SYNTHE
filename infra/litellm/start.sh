#!/usr/bin/env bash
set -Eeuo pipefail

export PYTHONUNBUFFERED=1
export PYTHONFAULTHANDLER=1

phase=init
log() { printf '[litellm-startup] phase=%s %s\n' "$phase" "$*" >&2; }
fail() {
  code=$?
  printf '[litellm-startup] fatal exit_code=%s phase=%s config=%s\n' "$code" "${phase:-unknown}" "${CONFIG_PATH:-unset}" >&2
  exit "$code"
}
trap fail ERR

phase=env
: "${CONFIG_PATH:=/tmp/litellm.generated.yaml}"
: "${OLLAMA_API_BASE:=http://host.docker.internal:11434}"
: "${LITELLM_MASTER_KEY:?LITELLM_MASTER_KEY is required}"
log "CONFIG_PATH=$CONFIG_PATH"
log "OLLAMA_API_BASE=$OLLAMA_API_BASE"
log "VLLM_API_BASE=${VLLM_API_BASE:-unset}"
log "VLLM_MODEL=${VLLM_MODEL:-unset}"

phase=ollama
python - <<'PY'
import json, os, sys, time, urllib.request
base=os.environ['OLLAMA_API_BASE'].rstrip('/')
for i in range(1,31):
    try:
        with urllib.request.urlopen(f'{base}/api/tags', timeout=5) as r:
            data=json.load(r)
        models=[m.get('name') or m.get('model') for m in data.get('models', [])]
        models=[m for m in models if m]
        print(f'[litellm-startup] phase=ollama reachable models={len(models)} names={models}', file=sys.stderr, flush=True)
        break
    except Exception as e:
        print(f'[litellm-startup] phase=ollama attempt={i}/30 error={e!r}', file=sys.stderr, flush=True)
        if i == 30:
            raise
        time.sleep(2)
PY

phase=config
python - <<'PY'
import json, os, pathlib, sys, urllib.request
base=os.environ['OLLAMA_API_BASE'].rstrip('/')
config=pathlib.Path(os.environ['CONFIG_PATH'])
vllm_base=os.environ.get('VLLM_API_BASE','').rstrip('/')
vllm_model=os.environ.get('VLLM_MODEL','').strip()
with urllib.request.urlopen(f'{base}/api/tags', timeout=10) as r:
    data=json.load(r)
models=[]
seen=set()
for item in data.get('models', []):
    name=item.get('name') or item.get('model')
    if name and name not in seen:
        seen.add(name)
        models.append(name)
lines=[
    'general_settings:',
    '  master_key: os.environ/LITELLM_MASTER_KEY',
    '  database_url: os.environ/DATABASE_URL',
    '  store_model_in_db: true',
    'litellm_settings:',
    '  drop_params: true',
    '  request_timeout: 600',
    '  set_verbose: true',
    'router_settings:',
    '  routing_strategy: simple-shuffle',
    'model_list:',
]
routes=[]
for name in models:
    routes.append(name)
    lines += [
        f'  - model_name: {name}',
        '    litellm_params:',
        f'      model: ollama/{name}',
        f'      api_base: {base}',
    ]
# wildcard passthrough for direct ollama/<model> requests
routes.append('ollama/*')
lines += [
    '  - model_name: ollama/*',
    '    litellm_params:',
    '      model: ollama/*',
    f'      api_base: {base}',
]
if vllm_base and vllm_model:
    routes.append(vllm_model)
    lines += [
        f'  - model_name: {vllm_model}',
        '    litellm_params:',
        f'      model: openai/{vllm_model}',
        f'      api_base: {vllm_base}',
        '      api_key: dummy',
    ]
config.write_text('\n'.join(lines)+'\n')
print(f'[litellm-startup] phase=config wrote={config}', file=sys.stderr, flush=True)
print(f'[litellm-startup] phase=config generated_routes={routes}', file=sys.stderr, flush=True)
print(config.read_text(), file=sys.stderr, flush=True)
PY

phase=launch
log "uvicorn startup pending host=0.0.0.0 port=4000"
log "readiness endpoint will activate at http://127.0.0.1:4000/health/readiness"
log "exec litellm config=$CONFIG_PATH"
exec litellm --config "$CONFIG_PATH" --host 0.0.0.0 --port 4000
