import React, { useRef, useState, useEffect } from "react";
import HeaderMenuCustomContent from "./HeaderMenuCustomContent";
import HeaderMenuPopover from "./HeaderMenuPopover";

// Menü verisi (HeaderMenu.tsx ile aynı)
const MENU = [
  {
    label: "Blog",
    description: "Yazılar, makaleler ve güncellemeler",
  },
  {
    label: "Projeler",
    description: "Web ve mobil projeler",
  },
  {
    label: "UI Frameworks",
    description: "Modern UI kütüphaneleri ve araçları",
  },
];

// Menü geçişlerinde popover'ın kapanmasını engelleyen offset süresi (ms)
const HOVER_OFFSET_MS = 420;

export default function HeaderMenuCustom() {
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const [hasOpened, setHasOpened] = useState(false);

  // Aktif menü tuşunun ortasını hesapla
  const updatePopoverPosition = (idx: number | null) => {
    if (idx === null) {
      setPopoverLeft(null);
      return;
    }
    const btn = triggerRefs.current[idx];
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const parentRect = btn.parentElement?.parentElement?.getBoundingClientRect();
      if (parentRect) {
        const left = rect.left - parentRect.left + rect.width / 2;
        setPopoverLeft(left);
      }
    }
  };

  useEffect(() => {
    updatePopoverPosition(activeIndex);
    // Kapatınca pozisyonu sıfırla
    if (activeIndex === null) setPopoverLeft(null);
  }, [activeIndex]);

  // Ekran boyutu değişirse popover pozisyonunu güncelle
  useEffect(() => {
    const handleResize = () => updatePopoverPosition(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <nav className="relative w-full flex justify-center">
      <ul className="flex space-x-2 md:space-x-4 relative z-10">
        {MENU.map((menu, idx) => (
          <li key={menu.label} className="relative">
            <button
              ref={el => (triggerRefs.current[idx] = el)}
              className={`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 ${activeIndex === idx ? "bg-accent text-accent-foreground" : "hover:bg-accent/60"}`}
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                setActiveIndex(idx);
                setPopoverVisible(true);
                setHasOpened(true);
              }}
              onFocus={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                setActiveIndex(idx);
                setPopoverVisible(true);
                setHasOpened(true);
              }}
              aria-haspopup="true"
              aria-expanded={activeIndex === idx}
              tabIndex={0}
            >
              {menu.label}
            </button>
          </li>
        ))}
      </ul>
      {/* Popover her zaman açık, içerik ve pozisyonu animasyonla güncelleniyor */}
      <div
        className="absolute top-full left-0 flex justify-center w-full pointer-events-none"
        style={{ height: 10 }}
        onMouseEnter={() => {
          if (closeTimeout.current) clearTimeout(closeTimeout.current);
          setPopoverVisible(true);
          setHasOpened(true);
        }}
      >
        <HeaderMenuPopover
          show={hasOpened}
          left={popoverLeft}
          menuIndex={activeIndex}
        />
      </div>
    </nav>
  );
}
