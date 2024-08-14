FROM node:16-alpine

WORKDIR /app

COPY package*.json .

RUN npm run install


COPY . .

CMD [ "node", "index.js"]