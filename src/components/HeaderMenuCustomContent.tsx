import React from 'react';

interface HeaderMenuCustomContentProps {
  menuIndex: number;
  renderTitle?: (title: string, hasSubmenu: boolean) => React.ReactNode;
  isTopLevel?: boolean;
  menuTitles?: {
    projects: string;
    blog: string;
    uiFrameworks: string;
  };
}

interface MenuItemProps {
  href?: string;
  title: string;
  description?: string;
  hasSubmenu?: boolean;
  renderTitle?: (title: string, hasSubmenu: boolean) => React.ReactNode;
  children?: React.ReactNode;
  isTopLevel?: boolean;
  isMainTitle?: boolean;
}

interface MenuItemWithSubmenu extends MenuItemProps {
  items: MenuItem[];
  isMainTitle?: boolean;
}

type MenuItem = MenuItemProps | MenuItemWithSubmenu;

interface MenuContent {
  items: MenuItem[];
  mainTitle?: string;
}

const DEFAULT_MENU_TITLES = {
  projects: "Projeler",
  blog: "Blog",
  uiFrameworks: "UI Frameworks"
};

const MENU_CONTENTS: MenuContent[] = [
  {
    mainTitle: DEFAULT_MENU_TITLES.projects,
    items: [
      {
        title: "Projeler",
        description: "Tüm projelerimi keşfedin",
        hasSubmenu: true,
        isMainTitle: true,
        items: [
          {
            href: "/projects/olcanebrem.com",
            title: "olcanebrem.com",
            description: "Kişisel web sitem"
          },
          {
            href: "/projects/portfolio",
            title: "Portfolio",
            description: "Proje portfolyom"
          },
          {
            href: "/projects/blog",
            title: "Blog",
            description: "Teknik blog yazılarım"
          }
        ]
      },
      {
        href: "/about",
        title: "Hakkımda",
        description: "Ben kimim?"
      },
      {
        href: "/contact",
        title: "İletişim",
        description: "Benimle iletişime geçin"
      }
    ]
  },
  {
    mainTitle: DEFAULT_MENU_TITLES.blog,
    items: [
      {
        title: "Blog",
        description: "Teknik blog yazılarım",
        hasSubmenu: true,
        isMainTitle: true,
        items: [
          {
            href: "/blog/web-development",
            title: "Web Geliştirme",
            description: "Web teknolojileri hakkında yazılar"
          },
          {
            href: "/blog/programming",
            title: "Programlama",
            description: "Programlama dilleri ve teknikleri"
          },
          {
            href: "/blog/tools",
            title: "Araçlar",
            description: "Kullandığım araçlar ve öneriler"
          }
        ]
      },
      {
        href: "/blog/archive",
        title: "Arşiv",
        description: "Tüm blog yazılarım"
      }
    ]
  },
  {
    mainTitle: DEFAULT_MENU_TITLES.uiFrameworks,
    items: [
      {
        title: "UI Frameworks",
        description: "Modern UI kütüphaneleri",
        hasSubmenu: true,
        isMainTitle: true,
        items: [
          {
            href: "/ui/material-ui",
            title: "Material UI",
            description: "Material Design tabanlı React komponentleri"
          },
          {
            href: "/ui/material-next",
            title: "Material Design 3",
            description: "Material Design'ın yeni nesil implementasyonu"
          },
          {
            href: "/ui/mwc",
            title: "Material Web",
            description: "Web Components tabanlı Material Design"
          },
          {
            href: "/ui/mui-x",
            title: "MUI-X Data Grid",
            description: "Gelişmiş veri tablosu ve grid bileşenleri"
          },
          {
            href: "/ui/shadcn",
            title: "Shadcn UI",
            description: "Radix UI ve Tailwind CSS ile modern komponentler"
          },
          {
            href: "/ui/mantine",
            title: "Mantine",
            description: "Modern ve özelleştirilebilir React komponentleri"
          },
          {
            href: "/ui/daisy",
            title: "DaisyUI",
            description: "Tailwind CSS tabanlı komponent kütüphanesi"
          },
          {
            href: "/gsap-demo",
            title: "GSAP Animations",
            description: "Gelişmiş animasyon kütüphanesi örnekleri"
          }
        ]
      }
    ]
  }
];

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  title,
  description,
  hasSubmenu = false,
  renderTitle,
  children,
  isTopLevel = false,
  isMainTitle = false
}) => {
  const menuType = isMainTitle ? 'title' : 'prop';
  const content = (
    <>
      <div className="m3-menu-content" data-type={menuType}>
        {renderTitle ? renderTitle(title, hasSubmenu && isTopLevel) : (
          <div className="m3-menu-text" data-type={menuType}>
            {title}
            {hasSubmenu && isTopLevel && (
              <span className="m3-menu-icon" data-type={menuType}>
                expand_more
              </span>
            )}
          </div>
        )}
        {description && (
          <div className="m3-menu-description" data-type={menuType}>
            {description}
          </div>
        )}
      </div>
      {children}
    </>
  );

  return (
    <li className="m3-menu-item" data-type={menuType}>
      {href ? (
        <a href={href} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
};

const HeaderMenuCustomContent: React.FC<HeaderMenuCustomContentProps> = ({
  menuIndex,
  renderTitle,
  isTopLevel = false,
  menuTitles = DEFAULT_MENU_TITLES
}) => {
  const menuContent = MENU_CONTENTS[menuIndex];

  if (!menuContent) {
    return null;
  }

  // Ana başlıkları güncelle
  const updatedMenuContent = {
    ...menuContent,
    mainTitle: menuTitles[Object.keys(menuTitles)[menuIndex] as keyof typeof menuTitles],
    items: menuContent.items.map(item => {
      if ('items' in item && item.isMainTitle) {
        return {
          ...item,
          title: menuTitles[Object.keys(menuTitles)[menuIndex] as keyof typeof menuTitles]
        };
      }
      return item;
    })
  };

  const renderMenuItems = (items: MenuItem[], isTopLevelMenu = false) => {
    if (isTopLevelMenu) {
      return (
        <div className="m3-menu-container" data-type={menuIndex === 2 ? 'list' : 'prop'}>
          {items.map((item, index) => (
            <div key={index} className="w-full">
              <MenuItem
                title={item.title}
                description={item.description}
                hasSubmenu={'items' in item}
                renderTitle={renderTitle}
                isTopLevel={true}
                isMainTitle={item.isMainTitle}
              >
                {'items' in item && (
                  menuIndex === 2 ? (
                    // UI Frameworks için grid yapısı
                    <div className="m3-menu-grid" data-columns="3">
                      {item.items.map((subItem, subIndex) => (
                        <MenuItem
                          key={subIndex}
                          title={subItem.title}
                          description={subItem.description}
                          href={subItem.href}
                          hasSubmenu={false}
                          renderTitle={renderTitle}
                          isTopLevel={false}
                          isMainTitle={subItem.isMainTitle}
                        />
                      ))}
                    </div>
                  ) : (
                    // Diğer menüler için liste yapısı
                    <div className="m3-menu-container" data-type="prop">
                      {item.items.map((subItem, subIndex) => (
                        <MenuItem
                          key={subIndex}
                          title={subItem.title}
                          description={subItem.description}
                          href={subItem.href}
                          hasSubmenu={false}
                          renderTitle={renderTitle}
                          isTopLevel={false}
                          isMainTitle={subItem.isMainTitle}
                        />
                      ))}
                    </div>
                  )
                )}
              </MenuItem>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="m3-menu-container" data-type="prop">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
            hasSubmenu={'items' in item}
            renderTitle={renderTitle}
            isTopLevel={false}
            isMainTitle={item.isMainTitle}
          >
            {'items' in item && renderMenuItems(item.items, false)}
          </MenuItem>
        ))}
      </div>
    );
  };

  return (
    <div className="navbar-sub" data-menu={Object.keys(menuTitles)[menuIndex]}>
      {renderMenuItems(updatedMenuContent.items, isTopLevel)}
    </div>
  );
};

export default HeaderMenuCustomContent;
