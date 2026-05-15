# FROM node

# ENV MONGO_DB_USERNAME=admin \
#     MONGO_DB_PASSWORD=qwerty123 

# RUN mkdir -p docker-testapp

# COPY . /docker-testapp

# # RUN npm install

# CMD ["node", "/docker-testapp/server.js"]

FROM node:18-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5600

CMD ["npm","start"]
