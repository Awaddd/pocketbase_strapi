FROM node:18

WORKDIR /strapi

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=1337

EXPOSE 1337

CMD ["yarn", "develop"]
