FROM ghcr.io/berriai/litellm:main-stable
USER root
RUN set -eux; \
    if command -v apt-get >/dev/null 2>&1; then \
      apt-get update; \
      apt-get install -y --no-install-recommends curl ca-certificates; \
      rm -rf /var/lib/apt/lists/*; \
    elif command -v apk >/dev/null 2>&1; then \
      apk add --no-cache curl ca-certificates; \
    else \
      echo 'no supported package manager for curl install' >&2; \
      exit 1; \
    fi
