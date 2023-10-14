# FROM node

# RUN mkdir -p /home/app

# COPY . /home/app

# EXPOSE 3000

# CMD ["node", "/home/app/index.js"]

FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

CMD ["npm", "start"]