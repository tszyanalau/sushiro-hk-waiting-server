FROM node:14
WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update

RUN npm install --production

COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
