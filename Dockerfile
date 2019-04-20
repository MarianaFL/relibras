FROM node:lts-alpine as builder

WORKDIR /build
COPY server/package*.json ./server/
COPY client/package*.json ./client/

RUN npm --prefix ./server install ./server
RUN npm --prefix ./client install ./client

COPY . .

RUN npm run --prefix ./server build
RUN npm run --prefix ./client build

RUN cd ./server && npm prune --production

FROM node:lts-alpine

COPY --from=builder /build/server/dist/ /dist
COPY --from=builder /build/client/dist/ /public
COPY --from=builder /build/server/node_modules /node_modules

EXPOSE 9000

ENTRYPOINT [ "node" , "/dist/main.js"]