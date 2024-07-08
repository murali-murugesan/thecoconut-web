FROM node:current-alpine as build
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build


FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]