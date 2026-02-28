FROM node:latest

WORKDIR /rushi

COPY . .

RUN npm install

EXPOSE  3000

CMD ["NPM","START"]
 