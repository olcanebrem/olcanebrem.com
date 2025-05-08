# 1. Base image
FROM node:18-alpine

# 2. Working directory
WORKDIR /app

# 3. Copy only package.json to install deps (cache için önemli)
COPY package.json pnpm-lock.yaml ./

# 4. Install dependencies
RUN npm install -g pnpm && pnpm install

# 5. Copy the rest of the files
COPY . .

# 6. Build (Next + Payload için)
RUN pnpm build

# 7. Expose ve start
EXPOSE 3000
CMD ["pnpm", "start"]
