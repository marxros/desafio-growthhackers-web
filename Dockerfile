FROM node

WORKDIR /usr/web

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

