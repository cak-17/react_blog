SHELL := /bin/bash

.PHONY: help
help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: bbash
bbash: ## access backend bash
	docker exec -it backend bash

.PHONY: fbash
fbash: ## access frontend bash
	docker exec -it frontend bash

.PHONY: wbash
wbash: ## access webserver bash
	docker exec -it webserver bash

.PHONY: dup d
dup d: ## build and start in detached mode
	docker-compose up --build -d

-PHONY: dup
dup: ## start containers
	docker-compose up

.PHONY: ddown
ddown: ## shuts down containers
	docker-compose down -v

.PHONY: dbuild
dbuild: ## build images
	docker-compose build

.PHONY: dps
dps: ## dock status
	docker-compose ps
