import type { MenuSection } from '../types/menu';

export const NAVBAR_DATA: MenuSection[] = [
  {
    id: 'nav-projects',
    label: 'Projeler',
    items: [
      {
        id: 'proj-olcanebrem',
        href: '/projects/olcanebrem.com',
        title: 'olcanebrem.com',
        description: 'Kişisel web sitem',
      },
      {
        id: 'proj-portfolio',
        href: '/projects/portfolio',
        title: 'Portfolio',
        description: 'Proje portfolyom',
      },
      // ... diğer proje linkleri ...
      // Eğer "Projeler" başlığının altında bir de genel bir "Tüm Projeler" sayfası varsa:
      // { id: 'proj-all', href: '/projects', title: 'Tüm Projeler', description: '...' }
    ],
  },
  {
    id: 'nav-blog',
    label: 'Blog',
    items: [
      {
        id: 'blog-webdev',
        title: 'Web Geliştirme', // Bu bir başlık, altında linkler var
        submenuTitle: 'Web Geliştirme Kategorisi', // Popup içinde görünecek başlık
        items: [
          { id: 'blog-webdev-article1', href: '/blog/web-development/article1', title: '...' },
          // ...
        ],
      },
      { id: 'blog-archive', href: '/blog/archive', title: 'Arşiv', description: 'Tüm blog yazılarım' },
    ],
  },
  {
    id: 'nav-ui-frameworks',
    label: 'UI Frameworks',
    // sectionVariant: 'uiframeworks', // Özel stil için işaretleyici
    items: [
      {
        id: 'ui-material-ui',
        href: '/ui/material-ui',
        title: 'Material UI',
        description: 'Material Design tabanlı React komponentleri',
      },
      {
        id: 'ui-m3',
        href: '/ui/material-next',
        title: 'Material Design 3',
        description: "Material Design'ın yeni nesil implementasyonu",
      },
      // ... diğer UI framework linkleri ...
      // UI Frameworks menüsünün submenu'sü grid olacaksa, bu submenu'nün kendisine layout bilgisi eklenebilir
      // Veya ana `MenuSection`'a `defaultSubmenuLayout: 'grid'` gibi bir prop eklenebilir.
      // Şimdilik `parentMenuIndex` ile koşullu yapacağız.
    ],
  },
  // Diğer ana menü sekmeleri (Hakkımda, İletişim) direkt link ise:
  {
    id: 'nav-about',
    label: 'Hakkımda',
    items: [{ id: 'link-about', href: '/about', title: 'Hakkımda' }], // Tekil item
  },
];