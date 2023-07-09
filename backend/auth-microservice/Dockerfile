FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install dotenv

COPY . .

COPY models ./models

COPY ..?* .env

EXPOSE 5001

CMD ["npm", "start"]