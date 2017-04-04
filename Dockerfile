
FROM node:latest

RUN npm config set registry http://registry.npmjs.org/

ENV ROOT /var/www/app
ENV HOST 0.0.0.0

COPY package.json $ROOT/

WORKDIR $ROOT

RUN npm install --loglevel=warn

EXPOSE 3000

CMD ["npm", "start"]