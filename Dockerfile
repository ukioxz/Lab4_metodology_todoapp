FROM node:14.17-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

FROM gcr.io/distroless/nodejs:14

COPY . .


EXPOSE 3000

CMD ["npm", "start"]
