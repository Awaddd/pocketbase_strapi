FROM --platform=linux/amd64 node:14.21.3

WORKDIR /strapi

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=1337

EXPOSE 1337

CMD ["npm", "run", "dev"]
