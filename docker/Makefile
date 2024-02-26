## yamlにimgaeを指定しているので、buildは不要
db-build:
	@docker-compose -f compose.yaml build

db-up:
	@docker-compose -f compose.yaml config
	@docker-compose -f compose.yaml up -d
	docker ps
	sleep 5
	docker logs company

db-down:
	@docker-compose -f compose.yaml down
	docker ps
	rm -rf ./tmp