FROM node:18-alpine
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN pnpm i --frozen-lockfile

COPY . .

EXPOSE 5173