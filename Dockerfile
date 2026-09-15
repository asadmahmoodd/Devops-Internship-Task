FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3108

CMD ["node","TodoAPI.js"]
