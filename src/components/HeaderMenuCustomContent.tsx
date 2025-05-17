import React from 'react';

interface HeaderMenuCustomContentProps {
  menuIndex: number;
  renderTitle?: (title: string, hasSubmenu: boolean) => React.ReactNode;
  isTopLevel?: boolean;
}

interface MenuItemProps {
  href?: string;
  title: string;
  description?: string;
  hasSubmenu?: boolean;
  renderTitle?: (title: string, hasSubmenu: boolean) => React.ReactNode;
  children?: React.ReactNode;
  isTopLevel?: boolean;
}

interface MenuItemWithSubmenu extends MenuItemProps {
  items: MenuItem[];
}

type MenuItem = MenuItemProps | MenuItemWithSubmenu;

interface MenuContent {
  items: MenuItem[];
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  title,
  description,
  hasSubmenu = false,
  renderTitle,
  children,
  isTopLevel = false
}) => {
  const content = (
    <>
      <div className="m3-menu-item-state-layer" />
      <div className="m3-menu-item-content">
        {renderTitle ? renderTitle(title, hasSubmenu && isTopLevel) : (
          <div className="m3-menu-item-title">
            {title}
            {hasSubmenu && isTopLevel && (
              <span className="menu-icon material-symbols-rounded">
                expand_more
              </span>
            )}
    </div>
        )}
        {description && (
          <div className="m3-menu-item-description">{description}</div>
        )}
    </div>
      {children}
    </>
  );

  return (
    <li className="m3-menu-item">
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

const MENU_CONTENTS: MenuContent[] = [
  {
    items: [
      {
        title: "Projeler",
        description: "Tüm projelerimi keşfedin",
        hasSubmenu: true,
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
    items: [
      {
        title: "Blog",
        description: "Teknik blog yazılarım",
        hasSubmenu: true,
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
    items: [
      {
        title: "UI Frameworks",
        description: "Modern UI kütüphaneleri",
        hasSubmenu: true,
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

const HeaderMenuCustomContent: React.FC<HeaderMenuCustomContentProps> = ({
  menuIndex,
  renderTitle,
  isTopLevel = false
}) => {
  const menuContent = MENU_CONTENTS[menuIndex];

  if (!menuContent) {
    return null;
  }

  const renderMenuItems = (items: MenuItem[], isTopLevelMenu = false) => {
    if (isTopLevelMenu) {
  return (
        <div className="w-full">
          {items.map((item, index) => (
            <div key={index} className="w-full border-b border-gray-200 dark:border-gray-700 mb-4">
              <MenuItem
                title={item.title}
                description={item.description}
                hasSubmenu={'items' in item}
                renderTitle={renderTitle}
                isTopLevel={true}
              >
                {'items' in item && (
                  menuIndex === 2 ? (
                    // UI Frameworks için iki sütunlu yapı
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="space-y-1">
                        {item.items.slice(0, Math.ceil(item.items.length / 2)).map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            title={subItem.title}
                            description={subItem.description}
                            href={subItem.href}
                            hasSubmenu={false}
                            renderTitle={renderTitle}
                            isTopLevel={false}
                          />
                        ))}
                      </div>
                      <div className="space-y-1">
                        {item.items.slice(Math.ceil(item.items.length / 2)).map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            title={subItem.title}
                            description={subItem.description}
                            href={subItem.href}
                            hasSubmenu={false}
                            renderTitle={renderTitle}
                            isTopLevel={false}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Diğer menüler için normal yapı
                    <div className="space-y-1 mt-2">
                      {item.items.map((subItem, subIndex) => (
                        <MenuItem
                          key={subIndex}
                          title={subItem.title}
                          description={subItem.description}
                          href={subItem.href}
                          hasSubmenu={false}
                          renderTitle={renderTitle}
                          isTopLevel={false}
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
      <div className="w-full">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            description={item.description}
            href={item.href}
            hasSubmenu={'items' in item}
            renderTitle={renderTitle}
            isTopLevel={false}
          >
            {'items' in item && renderMenuItems(item.items, false)}
          </MenuItem>
        ))}
      </div>
    );
  };

  return (
    <div className="navbar-sub">
      {renderMenuItems(menuContent.items, isTopLevel)}
    </div>
  );
};

export default HeaderMenuCustomContent;
