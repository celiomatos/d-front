# DFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

https://material.angular.io/components/categories
https://tburleson-layouts-demos.firebaseapp.com/#/docs
https://www.chartjs.org/
https://yarnpkg.com/pt-BR/

docker build --rm -t test-application:latest .
docker run --network d_network -d -p 90:80/tcp test-application:latest

## Gera build java
clean compile install

## gerando novos containers e images
gere um novo build do app java
clean compile install
depois
docker build -f Dockerfile -t d-docker-compose_d-server-main .
docker run --network d-docker-compose_d_network --name d_main -p 8084:8084 -d d-docker-compose_d-server-main

## build front
docker build -f Dockerfile -t d-docker-compose_d-server-front .
docker run --network d-docker-compose_d_network --name d_front -d -p 90:80/tcp d-docker-compose_d-server-front

##############################################################
#######
## Roteiro de Implantacao
## criar-se volume se nao existir
docker volume create my-vol

## criar-se o container minio se nao existir
docker run -d -p 9000:9000 --restart always --name my-minio -e "MINIO_ACCESS_KEY=C3AM3UQ867SPQQA43P2F" -e "MINIO_SECRET_KEY=zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG" -v my-vol:/data -v my-vol:/root/.minio -m 50M minio/minio server /data

## criar-se bucket e adciona policy
ppagamento
palert

## executa o p pagamento
docker run --name my-print-pagamentos --restart always -v my-vol:/app/capturas -d my-cron-pagamento

## e criar-se o crontab para print pagamentos
docker exec -it ID /bin/sh
crontab -e
5	16	*	*	*	cd /app && node index.js

## backup e load do my-cron-alert

## docker run na image my-cron-alert
docker run --name my-print-alert --restart always -v my-vol:/app/capturas -d my-cron-alert

## e criar-se o crontab para print alert
docker exec -it ID /bin/sh
crontab -e
5	*	*	*	*	cd /app && node index.js

##criar image docker my-d-admin e executar container
docker build -t my-d-admin .
docker run --name d-admin --restart always --network d-docker-compose_d_network -p 8087:8087 -d my-d-admin

##criar image docker my-d-auth e executar container
verificar IP do banco e do admin antes e alterar no application.properties
docker build -t my-d-auth .
docker run --name d-auth --restart always --network d-docker-compose_d_network -p 8081:8081 -d my-d-auth

##criar image docker my-d-scraper e executar container sem expor a porta
verificar IP do banco e do admin antes e alterar no application.properties
docker build -t my-d-scraper .
docker run --name d-scraper --restart always --network d-docker-compose_d_network -d my-d-scraper

##criar image docker my-d-main e executar container sem expor porta
verificar IP do banco e do admin antes e alterar no application.properties
docker build -t my-d-main .
docker run --name d-main --restart always --network d-docker-compose_d_network -d my-d-main

##criar image docker my-d-mail e executar container sem expor porta
verificar IP do main e do admin antes e alterar no application.properties
docker build -t my-d-mail .
docker run --name d-mail --restart always --network d-docker-compose_d_network -v my-vol:/app/capturas -d my-d-mail


##criar image docker my-d-scheduler e executar container sem expor porta
verificar IP do banco, scraper, mail e do admin antes e alterar no application.properties
docker build -t my-d-scheduler .
docker run --name d-scheduler --restart always --network d-docker-compose_d_network -d my-d-scheduler


##criar image docker my-d-gateway e executar container
verificar IP do auth, main e do admin antes e alterar no application.properties
docker build -t my-d-gateway .
docker run --name d-gateway --restart always --network d-docker-compose_d_network -p 8086:8086 -d my-d-gateway


## build front
verificar ip do servidor onde está od docker e mudar no enviroment
remover pasta node_module e yarn.lock
inserir d_gateway no auth_client
docker build -t d-server-front .
docker run --network d-docker-compose_d_network --name d_front --restart always -d -p 90:80/tcp d-server-front
