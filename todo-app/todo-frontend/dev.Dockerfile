FROM node:16

WORKDIR /usr/src/app

COPY . .

# npm ci instead of npm install since we are going to be in development mode
RUN npm install

# npm start is the command to start the application in development mode
CMD ["npm", "start"]