FROM node:latest as node
WORKDIR /angular
COPY ./ /angular/
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=node /angular/dist/Analisis /usr/share/nginx/html
