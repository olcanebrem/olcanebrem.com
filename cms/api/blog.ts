// Dummy implementation for getRecentPosts
export async function getRecentPosts(count: number) {
  // Burada gerçek bir API veya dosya okuma işlemi yapılabilir
  return [
    {
      title: "Astro ile Başlangıç",
      summary: "Astro framework ile modern web geliştirme rehberi.",
      date: "2025-05-01",
      slug: "astro-ile-baslangic"
    },
    {
      title: "React ve Astro Entegrasyonu",
      summary: "React bileşenlerini Astro projelerinde nasıl kullanırsınız?",
      date: "2025-04-25",
      slug: "react-astro-entegrasyonu"
    },
    {
      title: "Statik Site Jeneratörleri Karşılaştırması",
      summary: "Popüler statik site jeneratörlerinin artıları ve eksileri.",
      date: "2025-04-10",
      slug: "ssg-karsilastirma"
    }
  ].slice(0, count);
}
