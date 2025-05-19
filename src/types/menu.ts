export interface MenuItemCore {
    id: string; // Benzersiz ID, key olarak kullanmak için önemli
    title: string;
    description?: string;
    href?: string;
    icon?: string; // Opsiyonel ikon adı
  }
  
  export interface MenuItemWithSubmenu extends MenuItemCore {
    items: MenuItem[]; // Recursive tip
    submenuTitle?: string; // Submenu'nun kendi içinde bir başlığı varsa
    submenuLayout?: 'list' | 'grid'; // Submenu'nün iç düzeni
  }
  
  export type MenuItem = MenuItemCore | MenuItemWithSubmenu;
  
  export interface MenuSection {
    id: string; // Ana menü bölümü için ID
    label: string; // Navbar'da görünecek ana başlık (örn: "Projeler")
    items: MenuItem[]; // Bu bölümün altındaki menü öğeleri
    // sectionVariant?: 'default' | 'uiframeworks'; // Özel stil varyantları için
  }