// Dummy implementation for getFeaturedProjects
export async function getFeaturedProjects(count: number) {
  // Burada gerçek bir API veya dosya okuma işlemi yapılabilir
  return [
    {
      title: "Kişisel Portfolyo Sitesi",
      description: "Astro ve Tailwind ile yapılmış modern portfolyo sitesi.",
      url: "https://olcanebrem.com",
      tags: ["Astro", "Tailwind", "TypeScript"]
    },
    {
      title: "Blog Platformu",
      description: "Markdown tabanlı hızlı ve SEO uyumlu blog platformu.",
      url: "https://blog.olcanebrem.com",
      tags: ["Astro", "Markdown"]
    },
    {
      title: "Proje Galerisi",
      description: "Öne çıkan projelerin listelendiği galeri uygulaması.",
      url: "https://projects.olcanebrem.com",
      tags: ["Gallery", "Astro"]
    }
  ].slice(0, count);
}
