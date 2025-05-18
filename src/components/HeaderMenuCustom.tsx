import React, { useRef, useState, useEffect } from "react";
import HeaderMenuPopover from "./HeaderMenuPopover";
import { AnimatePresence, motion } from 'framer-motion';

const MENU = [
  { 
    label: "Blog", 
    description: "Yazılar, makaleler ve güncellemeler", 
    hasSubmenu: true,
    icon: "article"
  },
  { 
    label: "Projeler", 
    description: "Web ve mobil projeler", 
    hasSubmenu: true,
    icon: "code"
  },
  { 
    label: "UI Frameworks", 
    description: "Modern UI kütüphaneleri ve araçları", 
    hasSubmenu: true,
    icon: "widgets"
  },
];

// Menü geçişlerinde popover'ın kapanmasını engelleyen offset süresi (ms)
const POPOVER_LEAVE_DELAY_MS = 100;

const HeaderMenuCustom: React.FC = () => {
  const [menuPopoverVisible, setMenuPopoverVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverTop, setPopoverTop] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  let closeTimeout: NodeJS.Timeout;

  const clearCloseTimeout = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
  };

  const handleMouseEnterNavArea = () => {
    clearCloseTimeout();
  };

  const handleMouseLeaveNavArea = () => {
    closeTimeout = setTimeout(() => {
      setMenuPopoverVisible(false);
      setActiveMenu(null);
    });
  };

  const updatePopoverPosition = (rect: DOMRect) => {
    if (!navRef.current) return;
    
    const navRect = navRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const popoverWidth = 500; // max-width of popover
    
    // Calculate the center position of the menu item
    let left = rect.left + rect.width / 2;
    
    // Adjust position if popover would go off screen
    const minLeft = popoverWidth / 2;
    const maxLeft = windowWidth - popoverWidth / 2;
    
    if (left < minLeft) {
      left = minLeft;
    } else if (left > maxLeft) {
      left = maxLeft;
    }
    
    // Convert to position relative to nav element
    left = left - navRect.left;
    
    setPopoverLeft(left);
    setPopoverTop(rect.bottom - navRect.top);
  };

  const handleMouseEnterMenuItem = (label: string, e: React.MouseEvent) => {
    clearCloseTimeout();
    const rect = e.currentTarget.getBoundingClientRect();
    updatePopoverPosition(rect);
    setActiveMenu(label);
    setMenuPopoverVisible(true);
  };

  const handleMouseEnterPopover = () => {
    clearCloseTimeout();
  };

  const handleMouseLeavePopover = () => {
    closeTimeout = setTimeout(() => {
      setMenuPopoverVisible(false);
      setActiveMenu(null);
    }, POPOVER_LEAVE_DELAY_MS);
  };

  // Update popover position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (activeMenu && navRef.current) {
        const activeButton = navRef.current.querySelector(`button[data-menu="${activeMenu}"]`);
        if (activeButton) {
          const rect = activeButton.getBoundingClientRect();
          updatePopoverPosition(rect);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearCloseTimeout();
    };
  }, [activeMenu]);

  return (
    <nav
      ref={navRef}
      className="relative flex items-center justify-between px-4 py-2"
      onMouseEnter={handleMouseEnterNavArea}
      onMouseLeave={handleMouseLeaveNavArea}
    >
      <div className="flex items-center space-x-6">
        {MENU.map((item, index) => (
          <div key={index} className="relative">
            <button
              data-menu={item.label}
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 group"
              onMouseEnter={(e) => handleMouseEnterMenuItem(item.label, e)}
            >
              <span className="material-icons text-base opacity-60 group-hover:opacity-100">
                {item.icon}
              </span>
              {item.label}
              {item.hasSubmenu && (
                <span className="material-icons text-base transition-transform duration-200 group-hover:rotate-180 opacity-60 group-hover:opacity-100">
                  expand_more
                </span>
              )}
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {menuPopoverVisible && activeMenu !== null && (
          <HeaderMenuPopover
            show={true}
            left={popoverLeft}
            top={popoverTop}
            menuIndex={MENU.findIndex(item => item.label === activeMenu)}
            onMouseEnterPopover={handleMouseEnterPopover}
            onMouseLeavePopover={handleMouseLeavePopover}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default HeaderMenuCustom;
