FROM node:14

EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "build"]
