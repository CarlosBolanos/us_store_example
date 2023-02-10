FROM node:alpine
WORKDIR '/app'

RUN npm i -g pnpm
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
RUN pnpm i

COPY . .
# RUN npm run build

CMD ["npm", "run", "dev"]