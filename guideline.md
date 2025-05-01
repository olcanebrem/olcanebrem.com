# 🚀 Proje Rehberi – Astro + ShadCN + Tailwind + Supabase (SSG Odaklı)

Bu proje, yüksek performanslı statik site üretimi (SSG) odaklıdır. Astro temel alınır, dinamik yapılar için React bileşenleri ShadCN ile hydrate edilir. SSR/CSR kullanılmaz; sadece belirli durumlarda ISR veya on-demand revalidate yapılır. CMS ve auth işlemleri serverless mimaride çalışır.

## 🧱 Stack Özeti

- **Frontend:** Astro (SSG)
- **UI:** Tailwind CSS + ShadCN UI (Radix tabanlı React bileşenleri)
- **Auth:** Supabase Auth
- **CMS:** Payload CMS (Webhook ile geçici çalışır)
- **DB:** Supabase (PostgreSQL)
- **Functions:** Supabase Edge Functions
- **Hosting:** Netlify (ISR / On-Demand destekli)

## 📁 Dosya Yapısı

```
src/
├── components/
│   └── ui/ (ShadCN)
│   └── layout/ (Header, Footer)
├── lib/ (supabase.ts, utils)
├── pages/
│   └── index.astro
│   └── blog/[slug].astro
├── styles/
│   └── global.css
```

## ⚙️ Kurulum

```
npm create astro@latest
npx astro add react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn-ui@latest init
```

### `tailwind.config.cjs`

```
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

### `global.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## ⚛️ React Bileşen Kullanımı (Hydrate Edilmiş)

```
<Button client:load>Click me</Button>
```

**Hydration Modları:**

- `client:load`: Sayfa yüklenince
- `client:idle`: Tarayıcı boşta
- `client:visible`: Görünür olunca
- `client:only`: Sadece client (no SSR)

## 🔐 Auth / CMS / ISR Mantığı

- Supabase ile kullanıcı işlemleri yapılır
- Payload CMS sadece admin erişimi olduğunda çalışır
- ISR / On-Demand cache güncellemeleriyle SSG veriler güncellenir
- Build almadan CMS’den güncel veri sunulur

## 📦 SSG + Dinamik Bileşen Önerisi

- **Blog yazıları:** SSG + ISR (On-demand revalidate ile)
- **Yorum sistemi:** Supabase ile realtime veya Edge Function
- **Bildirimler:** ShadCN + client:only React bileşenleri

## 💡 Notlar

- Astro’da tam CSR yapılmaz; yalnızca bileşen bazında hydration yapılır
- SSR istenirse serverless olarak eklenebilir ama önerilmez
- Sunucu sürekli açık kalmamalı, sadece gerektiğinde çalışmalı
- ShadCN bileşenleri minimum hydrate edilmeli, sadece ihtiyaç anında

## ✅ Önerilen Paketler

```
npm install @supabase/supabase-js
npm install lucide-react
npm install class-variance-authority clsx tailwind-variants
```

## 📌 Özet

- Performans öncelikli, SSG tabanlı site
- Dinamiklik: Edge Functions + React hydration ile
- SSR/CSR yok, build-free güncelleme mümkün
- Tasarım: Tailwind + ShadCN (minimal, ölçeklenebilir)

## 📦 Radix UI Bileşenleri ve Gerekli NPM Paketleri

| Bileşen       | Gerekli Paket                     |
|---------------|----------------------------------|
| Dialog        | `@radix-ui/react-dialog`         |
| DropdownMenu  | `@radix-ui/react-dropdown-menu`  |
| Toast         | `@radix-ui/react-toast`          |
| Switch        | `@radix-ui/react-switch`         |
| Tabs          | `@radix-ui/react-tabs`           |
| Tooltip       | `@radix-ui/react-tooltip`        |
| Select        | `@radix-ui/react-select`         |
| Popover       | `@radix-ui/react-popover`        |
| Checkbox      | `@radix-ui/react-checkbox`       |
| HoverCard     | `@radix-ui/react-hover-card`     |
