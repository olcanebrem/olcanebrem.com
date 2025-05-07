FROM node:18-alpine

WORKDIR /app

COPY . .

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install

ENV NODE_ENV=production
ENV NODE_OPTIONS=--no-deprecation

EXPOSE 3000

CMD ["pnpm", "dev"]
