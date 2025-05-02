// Dummy implementation for getRecentPosts
export async function getRecentPosts(count: number) {
  // Burada gerçek bir API veya dosya okuma işlemi yapılabilir
  const posts = [
    {
      title: "Astro ile Başlangıç",
      summary: "Astro framework ile modern web geliştirme rehberi.",
      content: "Astro ile modern web geliştirme hakkında detaylı rehber...",
      date: "2025-05-01",
      slug: "astro-ile-baslangic"
    },
    {
      title: "React ve Astro Entegrasyonu",
      summary: "React bileşenlerini Astro projelerinde nasıl kullanırsınız?",
      content: "React bileşenlerini Astro'da kullanmak için bilmeniz gerekenler...",
      date: "2025-04-25",
      slug: "react-astro-entegrasyonu"
    },
    {
      title: "Statik Site Jeneratörleri Karşılaştırması",
      summary: "Popüler statik site jeneratörlerinin artıları ve eksileri.",
      content: "Statik site jeneratörlerinin karşılaştırıldığı makale...",
      date: "2025-04-10",
      slug: "ssg-karsilastirma"
    }
  ];
  return posts.slice(0, count);
}

// Tüm post sluglarını döndürür
export async function getAllPostSlugs() {
  return [
    "astro-ile-baslangic",
    "react-astro-entegrasyonu",
    "ssg-karsilastirma"
  ];
}

// Slug'a göre post döndürür
export async function getPostBySlug(slug: string) {
  const posts = [
    {
      title: "Astro ile Başlangıç",
      summary: "Astro framework ile modern web geliştirme rehberi.",
      content: "Astro ile modern web geliştirme hakkında detaylı rehber...",
      date: "2025-05-01",
      slug: "astro-ile-baslangic"
    },
    {
      title: "React ve Astro Entegrasyonu",
      summary: "React bileşenlerini Astro projelerinde nasıl kullanırsınız?",
      content: "React bileşenlerini Astro'da kullanmak için bilmeniz gerekenler...",
      date: "2025-04-25",
      slug: "react-astro-entegrasyonu"
    },
    {
      title: "Statik Site Jeneratörleri Karşılaştırması",
      summary: "Popüler statik site jeneratörlerinin artıları ve eksileri.",
      content: "Statik site jeneratörlerinin karşılaştırıldığı makale...",
      date: "2025-04-10",
      slug: "ssg-karsilastirma"
    }
  ];
  return posts.find(post => post.slug === slug) || null;
}

