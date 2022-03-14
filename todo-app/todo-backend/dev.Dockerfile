FROM node:16.13.2-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i
COPY . .

CMD ["npm", "run", "dev"]