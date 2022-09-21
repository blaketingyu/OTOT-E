FROM node:16-alpine

WORKDIR /app

COPY package*.json .
COPY yarn.lock .
COPY tsconfig*.json .
RUN yarn install

#copy over src codes
COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "node", "./dist/src/app.js" ]