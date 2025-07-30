include ./docker/.env
COMPOSER_ROOT ?= /var/www/html
DRUPAL_ROOT ?= /var/www/html/web

#Install commands
.PHONY: dependencies
dependencies:
	docker exec -t $(shell docker ps --filter name='^/$(PROJECT_NAME)_php' --format "{{ .ID }}") composer --working-dir=$(COMPOSER_ROOT) $(filter-out) install

.PHONY: si
si:
	docker exec -t $(shell docker ps --filter name='^/$(PROJECT_NAME)_php' --format "{{ .ID }}") drush -r $(DRUPAL_ROOT) $(filter-out) site:install $(DRUPAL_INSTALATION) --config-dir=../config/sync \
	--db-url=mysql://$(DB_USER):$(DB_PASSWORD)@$(DB_HOST)/$(DB_NAME) --account-name=admin --account-mail=hosting@ariadnacg.com -y

.PHONY: update
update: dependencies cr
	docker exec -t $(shell docker ps --filter name='^/$(PROJECT_NAME)_php' --format "{{ .ID }}") drush -r $(DRUPAL_ROOT) $(filter-out) cim -y

.PHONE: cr
cr:
	docker exec -t $(shell docker ps --filter name='^/$(PROJECT_NAME)_php' --format "{{ .ID }}") drush -r $(DRUPAL_ROOT) $(filter-out) cr

.PHONE: permissions
permissions:
	docker exec -t $(shell docker ps --filter name='^/$(PROJECT_NAME)_php' --format "{{ .ID }}") sudo chown -R www-data:www-data $(DRUPAL_ROOT)/sites/default/files

.PHONY: install
install: dependencies si permissions cr
