# Node.js tabanlı bir Alpine imajı kullanıyoruz
FROM node:18-alpine

# Çalışma dizinini belirle
WORKDIR /home/node/app

# Proje dosyalarını container'a kopyala
COPY . .

# Bağımlılıkları yüklemek için pnpm'yi etkinleştir ve yükle
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install

# Uygulamayı başlatmak için gerekli komut
CMD ["pnpm", "dev"]

# Dışarıya 3000 portunu açıyoruz
EXPOSE 3000
