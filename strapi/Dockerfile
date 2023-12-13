FROM --platform=linux/arm64/v8 node:20.9.0

WORKDIR /strapi

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=1337

EXPOSE 1337

CMD ["/bin/bash", "-c", "echo npm run build;echo npm run start"]
