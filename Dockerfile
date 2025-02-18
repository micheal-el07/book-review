    FROM node:20.16

    WORKDIR /usr/src/app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 6500

    CMD ["npx", "nodemon", "index.js"]

