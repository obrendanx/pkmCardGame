FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .

COPY models ./models

EXPOSE 5001

CMD ["npm", "start"]