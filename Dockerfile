FROM nginx:alpine3.18-slim

COPY dist/simple-api /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 4200