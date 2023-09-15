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

.PHONY: d-up d
d-up d: ## build and start in detached mode
	docker-compose up --build -d

-PHONY: d-up
d-up: ## start containers
	docker-compose up

.PHONY: d-down
d-down: ## shuts down containers
	docker-compose down -v

.PHONY: d-build
d-build: ## build images
	docker-compose build

.PHONY: d-ps
d-ps: ## dock status
	docker-compose ps


## DIVE HELPERS

.PHONY: run build dive
run build dive: ## build image with default tag 'dive_test" for Dive
	echo ${IMAGE_DIVE_VERSION}
	. dev/dive.sh ${IMAGE_DIVE}
	echo ${IMAGE_DIVE_VERSION}
