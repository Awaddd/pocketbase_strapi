FROM --platform=linux/arm64/v8 node:20.9.0

WORKDIR /strapi

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=1337

EXPOSE 1337

CMD ["/bin/bash", "-c", "echo NODE_ENV=production npm run build;echo NODE_ENV=production npm run start"]
