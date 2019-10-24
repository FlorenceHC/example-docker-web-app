FROM node:8.16.2-alpine

WORKDIR /usr/src/app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile --production=true

COPY server.js .

EXPOSE 8080

CMD yarn start
