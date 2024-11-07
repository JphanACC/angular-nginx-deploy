#docker build -t nginx-build:1.0.0 .
#docker run -d -p 80:80 -e API_URL=http://my-api.com angular-nginx
FROM nginx:alpine3.18-slim

COPY dist/simple-api /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

EXPOSE 4200