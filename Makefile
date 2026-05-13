.PHONY: up down logs ps restart

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f litellm

ps:
	docker compose ps

restart:
	docker compose restart litellm
