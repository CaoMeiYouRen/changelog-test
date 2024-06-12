# 构建阶段
FROM caomeiyouren/alpine-nodejs:1.1.0 as builder

WORKDIR /app

COPY package.json .npmrc pnpm-lock.yaml /app/

RUN npm config set registry https://registry.npmjs.org/ && \
    pnpm config set registry https://registry.npmjs.org/ && \
    npm i -g pnpm@8.11 && pnpm i --frozen-lockfile

COPY . /app

RUN pnpm run build

# 生产阶段
FROM caomeiyouren/alpine-nodejs-minimize:1.0.0

ENV NODE_ENV production

WORKDIR /app
# 后端部分
COPY --from=docker-minifier /app /app

CMD ["node", "dist/index.js"]
