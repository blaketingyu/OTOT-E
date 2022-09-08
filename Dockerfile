FROM node:16-alpine

WORKDIR /app

COPY package*.json .
COPY package-lock.json* .

#npm install dependencies
RUN npm install 

#copy over src codes
COPY . .

EXPOSE 8080

CMD ["node", "./dist/app.js"]