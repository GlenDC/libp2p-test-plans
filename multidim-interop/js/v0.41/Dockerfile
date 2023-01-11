# syntax=docker/dockerfile:1

FROM node:17

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.29.0-focal

RUN apt-get update && \
    apt-get -y install \
    libnss3 libatk-bridge2.0-0 libdrm-dev \
    libxkbcommon-dev libgbm-dev libasound-dev \
    libatspi2.0-0 libxshmfence-dev \
    libevent-2.1-7 libenchant-2-2 \
    socat && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY *.js /app/
COPY src /app/src
COPY runtime /app/runtime

RUN npm run webpack
RUN npm cache clean --force

ENTRYPOINT [ "npm", "run", "start" ]