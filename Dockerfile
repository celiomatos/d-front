FROM node:10.16.0-alpine AS builder
COPY . ./d-front
WORKDIR /d-front
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /d-front/dist/d-front/ /usr/share/nginx/html
