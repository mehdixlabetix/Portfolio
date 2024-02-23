FROM node:18-alpine
LABEL authors="mehdi"

WORKDIR /

COPY package.json ./
COPY public ./public
COPY src ./src

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
