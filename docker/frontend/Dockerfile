FROM node:19.6.0-alpine

ARG API_HOST_URL
ENV VITE_API_HOST_URL $API_HOST_URL

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
