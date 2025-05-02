

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
} from "@/components/ui/navigation-menu";

// Yardımcı ListItem bileşeni (Shadcn örneğine tam uyumlu)
type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  description?: string;
};
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  ListItemProps
>(({ className, title, children, description, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        asChild
        className="block select-none space-y-1 rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <a ref={ref} className={className} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          {description && (
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {description}
            </p>
          )}
          {children}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function HeaderMenu() {
  React.useEffect(() => {
    console.log("Radix NavigationMenu rendered");
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
          <NavigationMenuContent
            className="motion-safe:animate-enter-right data-[motion=from-start]:motion-safe:animate-enter-left data-[motion=from-end]:motion-safe:animate-enter-right data-[motion=to-start]:motion-safe:animate-exit-left data-[motion=to-end]:motion-safe:animate-exit-right grid gap-2 p-4 w-[320px] md:w-[400px] lg:w-[500px] grid-cols-1 md:grid-cols-2"
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
          <NavigationMenuTrigger>Projeler</NavigationMenuTrigger>
          <NavigationMenuContent
            className="motion-safe:animate-enter-right data-[motion=from-start]:motion-safe:animate-enter-left data-[motion=from-end]:motion-safe:animate-enter-right data-[motion=to-start]:motion-safe:animate-exit-left data-[motion=to-end]:motion-safe:animate-exit-right"
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
        className="bg-white dark:bg-black data-[state=open]:animate-zoom-in-90 data-[state=closed]:animate-zoom-out-95 transition-all origin-top"
      />
    </NavigationMenu>
  );
}




