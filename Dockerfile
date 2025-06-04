FROM node:22.11.0
WORKDIR /Backend-III---Entrega/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm","start" ]