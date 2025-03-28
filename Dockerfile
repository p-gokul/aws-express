FROM --platform=linux/amd64 node:lts

WORKDIR /aws-app

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "node", "index.js"]