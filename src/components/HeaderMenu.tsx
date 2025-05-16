

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport
} from "@/components/ui/shadcn/navigation-menu";

// Yardımcı ListItem bileşeni (Shadcn örneğine tam uyumlu)
type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  description?: string;
};
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  ListItemProps
>(({ className, title, children, description, ...props }, ref) => {
  // M3 hover/focus için li'da grup ve efekt
  return (
    <li className="group rounded-xl px-1 py-0.5 transition-all duration-320">
      <div
        className="block w-full select-none space-y-1 rounded-lg px-3 py-2 transition-all duration-320 bg-neutral-900 text-white hover:bg-white hover:text-neutral-900 focus:bg-white focus:text-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-white dark:focus:bg-neutral-900 dark:focus:text-white font-normal hover:font-bold focus:font-bold dark:hover:font-bold dark:focus:font-bold text-base hover:text-lg focus:text-lg dark:hover:text-lg dark:focus:text-lg cursor-pointer"
        tabIndex={0}
      >
        <NavigationMenuLink asChild>
          <a ref={ref} className={className} {...props}>
            <div className="text-sm font-medium leading-none transition-all duration-320">
              {title}
            </div>
            {description && (
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground transition-all duration-320">
                {description}
              </p>
            )}
            {children}
          </a>
        </NavigationMenuLink>
      </div>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function HeaderMenu() {
  // Refs for each trigger
  const triggerRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const navBarRef = React.useRef<HTMLDivElement | null>(null);
  const [originX, setOriginX] = React.useState<string>("50%")
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [contentLeft, setContentLeft] = React.useState<number | null>(null);

  // Helper to update transform-origin and popover position based on active trigger
  const updatePopoverPosition = (idx: number) => {
    const btn = triggerRefs.current[idx];
    const navBar = navBarRef.current;
    if (btn && navBar) {
      const btnRect = btn.getBoundingClientRect();
      const navRect = navBar.getBoundingClientRect();
      const left = btnRect.left - navRect.left + btnRect.width / 2;
      setOriginX(`${left}px`);
      setContentLeft(left);
    }
  };

  React.useEffect(() => {
    updatePopoverPosition(activeIndex);
  }, [activeIndex]);

  React.useEffect(() => {
    const handleResize = () => updatePopoverPosition(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  React.useEffect(() => {
    console.log("Radix NavigationMenu rendered");
  }, []);

  return (
    <div ref={navBarRef} className="relative w-full flex justify-center">
      <NavigationMenu>
      <NavigationMenuList>
        {/* Blog */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            ref={el => { triggerRefs.current[0] = el; }}
            onMouseEnter={() => setActiveIndex(0)}
            onFocus={() => setActiveIndex(0)}
          >
            Blog
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="motion-safe:animate-enter-from-right data-[motion=from-start]:motion-safe:animate-enter-from-left data-[motion=from-end]:motion-safe:animate-enter-from-right data-[motion=to-start]:motion-safe:animate-exit-to-left data-[motion=to-end]:motion-safe:animate-exit-to-right grid gap-2 p-4 w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 md:grid-cols-2"
            style={contentLeft !== null ? { left: `${contentLeft}px`, position: "absolute", transform: "translateX(-50%)" } : {}}
          >
            <ul>
              <ListItem title="Tümü" href="/blog">
                Tüm blog yazılarını görüntüle
              </ListItem>
              <ListItem title="Frontend" href="/blog/category/frontend">
                Frontend kategorisindeki içerikler
              </ListItem>
              <ListItem title="Backend" href="/blog/category/backend">
                Backend kategorisindeki içerikler
              </ListItem>
            </ul>
            <ul>
              <ListItem title="Tasarım" href="/blog/category/design">
                Tasarım ile ilgili yazılar
              </ListItem>
              <ListItem title="React ile Blog Yapımı" href="/blog/slug/ornek-yazi-1">
                Popüler: React ile Blog Yapımı
              </ListItem>
              <ListItem title="Astro ile Hızlı Web" href="/blog/slug/ornek-yazi-2">
                Popüler: Astro ile Hızlı Web
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            ref={el => { triggerRefs.current[1] = el; }}
            onMouseEnter={() => setActiveIndex(1)}
            onFocus={() => setActiveIndex(1)}
          >
            Projeler
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="motion-safe:animate-enter-from-right data-[motion=from-start]:motion-safe:animate-enter-from-left data-[motion=from-end]:motion-safe:animate-enter-from-right data-[motion=to-start]:motion-safe:animate-exit-to-left data-[motion=to-end]:motion-safe:animate-exit-to-right"
            style={contentLeft !== null ? { left: `${contentLeft}px`, position: "absolute", transform: "translateX(-50%)" } : {}}
          >
            <ul className="grid gap-2 p-4 w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 md:grid-cols-2">
              <ListItem title="Web Projeleri" href="/portfolio/web">
                Tüm web tabanlı projeler
              </ListItem>
              <ListItem title="Mobil Projeler" href="/portfolio/mobile">
                Mobil uygulama projeleri
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            ref={el => { triggerRefs.current[2] = el; }}
            onMouseEnter={() => setActiveIndex(2)}
            onFocus={() => setActiveIndex(2)}
          >
            UI Frameworks
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="motion-safe:animate-enter-from-right data-[motion=from-start]:motion-safe:animate-enter-from-left data-[motion=from-end]:motion-safe:animate-enter-from-right data-[motion=to-start]:motion-safe:animate-exit-to-left data-[motion=to-end]:motion-safe:animate-exit-to-right grid gap-2 p-4 w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 md:grid-cols-2"
            style={contentLeft !== null ? { left: `${contentLeft}px`, position: "absolute", transform: "translateX(-50%)" } : {}}
          >
            <ul className="space-y-2">
              <ListItem 
                title="Shadcn UI" 
                href="/ui/shadcn"
                description="Radix UI ve Tailwind CSS ile modern komponentler"
              />
              <ListItem 
                title="Material UI" 
                href="/ui/material-ui"
                description="Material Design tabanlı React komponentleri"
              />
              <ListItem 
                title="Material Design 3" 
                href="/ui/material-next"
                description="Material Design'ın yeni nesil implementasyonu"
              />
              <ListItem 
                title="Material Web" 
                href="/ui/mwc"
                description="Web Components tabanlı Material Design"
              />
            </ul>
            <ul className="space-y-2">
              <ListItem 
                title="Mantine" 
                href="/ui/mantine"
                description="Modern ve özelleştirilebilir React komponentleri"
              />
              <ListItem 
                title="DaisyUI" 
                href="/ui/daisy"
                description="Tailwind CSS tabanlı komponent kütüphanesi"
              />
              <ListItem 
                title="MUI-X Data Grid" 
                href="/ui/mui-x"
                description="Gelişmiş veri tablosu ve grid bileşenleri"
              />
              <ListItem 
                title="GSAP Animations" 
                href="/gsap-demo"
                description="Gelişmiş animasyon kütüphanesi örnekleri"
              />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className="px-4 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            İletişim
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
      <NavigationMenuViewport
        className="bg-white dark:bg-black w-32 md:w-48 max-w-[220px] animate-drastic-menu-in transition-all shadow-lg rounded-2xl"
        style={{ transformOrigin: `top ${originX}` }}
      />
    </NavigationMenu>
    </div>
  );
}




