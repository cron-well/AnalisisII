FROM node

RUN npm i -g nodemon
RUN mkdir -p /home/app

WORKDIR /home/app

# COPY package*.json ./

# RUN npm install

EXPOSE 3000

CMD [ "nodemon", "./src/server.js" ]