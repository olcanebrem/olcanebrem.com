// Dummy implementation for getFeaturedProjects
export async function getFeaturedProjects(count: number) {
  // Burada gerçek bir API veya dosya okuma işlemi yapılabilir
  const projects = [
    {
      title: "Kişisel Portfolyo Sitesi",
      description: "Astro ve Tailwind ile yapılmış modern portfolyo sitesi.",
      url: "https://olcanebrem.com",
      tags: ["Astro", "Tailwind", "TypeScript"],
      slug: "kisisel-portfolyo"
    },
    {
      title: "Blog Platformu",
      description: "Markdown tabanlı hızlı ve SEO uyumlu blog platformu.",
      url: "https://blog.olcanebrem.com",
      tags: ["Astro", "Markdown"],
      slug: "blog-platformu"
    },
    {
      title: "Proje Galerisi",
      description: "Öne çıkan projelerin listelendiği galeri uygulaması.",
      url: "https://projects.olcanebrem.com",
      tags: ["Gallery", "Astro"],
      slug: "proje-galerisi"
    }
  ];
  return projects.slice(0, count);
}

// Tüm proje sluglarını döndürür
export async function getAllProjectSlugs() {
  return [
    "kisisel-portfolyo",
    "blog-platformu",
    "proje-galerisi"
  ];
}

// Slug'a göre proje döndürür
export async function getProjectBySlug(slug: string) {
  const projects = [
    {
      title: "Kişisel Portfolyo Sitesi",
      description: "Astro ve Tailwind ile yapılmış modern portfolyo sitesi.",
      url: "https://olcanebrem.com",
      tags: ["Astro", "Tailwind", "TypeScript"],
      slug: "kisisel-portfolyo"
    },
    {
      title: "Blog Platformu",
      description: "Markdown tabanlı hızlı ve SEO uyumlu blog platformu.",
      url: "https://blog.olcanebrem.com",
      tags: ["Astro", "Markdown"],
      slug: "blog-platformu"
    },
    {
      title: "Proje Galerisi",
      description: "Öne çıkan projelerin listelendiği galeri uygulaması.",
      url: "https://projects.olcanebrem.com",
      tags: ["Gallery", "Astro"],
      slug: "proje-galerisi"
    }
  ];
  return projects.find(project => project.slug === slug) || null;
}

