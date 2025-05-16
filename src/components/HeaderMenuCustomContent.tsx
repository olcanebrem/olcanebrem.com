import React from "react";

export interface HeaderMenuCustomContentProps {
  menuIndex: number;
}

// Menü içerikleri HeaderMenu.tsx ile aynı
const MENU_CONTENTS = [
  // Blog
  (
    <div className="grid gap-2 p-4 w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 md:grid-cols-2">
      <ul className="bg-surface rounded-lg p-2">
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/blog" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Tümü</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Tüm blog yazılarını görüntüle</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/blog/category/frontend" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Frontend</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Frontend kategorisindeki içerikler</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/blog/category/backend" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Backend</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Backend kategorisindeki içerikler</div>  </div>
</li>
      </ul>
      <ul className="bg-surface rounded-lg p-2">
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/blog/category/design" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Tasarım</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Tasarım ile ilgili yazılar</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/blog/slug/ornek-yazi-1" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">React ile Blog Yapımı</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Popüler: React ile Blog Yapımı</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/blog/slug/ornek-yazi-2" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Astro ile Hızlı Web</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Popüler: Astro ile Hızlı Web</div>  </div>
</li>
      </ul>
    </div>
  ),
  // Projeler
  (
    <div className="grid gap-2 p-4 w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 md:grid-cols-2">
      <ul className="bg-surface rounded-lg p-2">
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/portfolio/web" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Web Projeleri</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Tüm web tabanlı projeler</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/portfolio/mobile" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Mobil Projeler</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Mobil uygulama projeleri</div>  </div>
</li>
      </ul>
    </div>
  ),
  // UI Frameworks
  (
    <div className="grid gap-2 p-4 w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 md:grid-cols-2">
      <ul className="space-y-2 bg-surface rounded-lg p-2">
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/ui/shadcn" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Shadcn UI</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Radix UI ve Tailwind CSS ile modern komponentler</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/ui/material-ui" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Material UI</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Material Design tabanlı React komponentleri</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/ui/material-next" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Material Design 3</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Material Design'ın yeni nesil implementasyonu</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/ui/mwc" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Material Web</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Web Components tabanlı Material Design</div>  </div>
</li>
      </ul>
      <ul className="space-y-2 bg-surface rounded-lg p-2">
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/ui/mantine" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">Mantine</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Modern ve özelleştirilebilir React komponentleri</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/ui/daisy" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">DaisyUI</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Tailwind CSS tabanlı komponent kütüphanesi</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/ui/mui-x" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">MUI-X Data Grid</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Gelişmiş veri tablosu ve grid bileşenleri</div>  </div>
</li>
        <li>
  <div className="flex flex-col gap-1 px-3 py-2 rounded-md transition-all duration-300 hover:bg-secondary-container elevation-1 focus:bg-secondary-container elevation-1 cursor-pointer group">
<a href="/gsap-demo" className="font-bold text-base md:text-lg leading-tight transition-all duration-300 group-hover:text-on-secondary-container group-hover:font-bold group-focus:text-on-secondary-container group-focus:font-bold">GSAP Animations</a><div className="text-xs text-on-surface-variant mt-0.5 transition-all duration-300 group-hover:text-on-secondary-container/80 group-hover:font-medium group-focus:text-on-secondary-container/80 group-focus:font-medium">Gelişmiş animasyon kütüphanesi örnekleri</div>  </div>
</li>
      </ul>
    </div>
  ),
];

import { AnimatePresence, motion } from "framer-motion";

const HeaderMenuCustomContent: React.FC<HeaderMenuCustomContentProps> = ({ menuIndex }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={menuIndex}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.38, ease: "easeInOut" }}
        className="custom-menu-content bg-background border shadow-lg rounded-2xl px-0 py-0"
      >
        <div className="w-full">
          {React.cloneElement(MENU_CONTENTS[menuIndex], {},
            // Her ul içindeki a etiketlerine özel class ekle
            React.Children.map(MENU_CONTENTS[menuIndex].props.children, (ul, idx) =>
              React.isValidElement(ul) ? React.cloneElement(ul, {},
                React.Children.map(ul.props.children, (li) =>
                  React.isValidElement(li) ? React.cloneElement(li, {},
                    React.Children.map(li.props.children, (child) =>
                      React.isValidElement(child) && child.type === 'a' ? React.cloneElement(child, {
                        className: `${child.props.className ?? ''} transition-all duration-320 ease-out font-medium text-on-surface-variant hover:text-on-secondary-container hover:bg-primary/8 hover:font-bold hover:text-lg focus-visible:text-on-secondary-container focus-visible:bg-primary/12 rounded-md px-1 py-0.5` // M3 uyumlu
                      }) : child
                    )
                  ) : li
                )
              ) : ul
            )
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeaderMenuCustomContent;
