import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Theme = 'theme-light' | 'theme-dark' | 'theme-light-mc' | 'theme-dark-mc' | 'theme-light-hc' | 'theme-dark-hc';

const themes: { id: Theme; label: string; icon: string }[] = [
  { id: 'theme-light', label: 'Light', icon: 'light_mode' },
  { id: 'theme-dark', label: 'Dark', icon: 'dark_mode' },
  { id: 'theme-light-mc', label: 'Light Monochrome', icon: 'contrast' },
  { id: 'theme-dark-mc', label: 'Dark Monochrome', icon: 'contrast' },
  { id: 'theme-light-hc', label: 'Light High Contrast', icon: 'visibility' },
  { id: 'theme-dark-hc', label: 'Dark High Contrast', icon: 'visibility' },
];


const ThemeToggler: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('theme-light');
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme || 'theme-light';
    setCurrentTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, []);

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
    setIsOpen(false);
  };

  const updatePosition = () => {
    if (buttonRef.current && navRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      
      // Butonun nav içindeki göreceli konumunu hesapla
      const left = buttonRect.left + buttonRect.width / 2 - navRect.left;
      const top = buttonRect.bottom - navRect.top;
      
      setPosition({ left, top });
    }
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    updatePosition();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    requestAnimationFrame(() => {
      setIsOpen(false);
    });
  };

  const handlePopoverMouseEnter = () => {
    isHoveringRef.current = true;
  };

  const handlePopoverMouseLeave = () => {
    isHoveringRef.current = false;
    requestAnimationFrame(() => {
      setIsOpen(false);
    });
  };

  // Update position on scroll and resize
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && isHoveringRef.current) {
        updatePosition();
      }
    };

    const handleResize = () => {
      if (isOpen && isHoveringRef.current) {
        updatePosition();
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isHoveringRef.current = false;
    };
  }, []);

  const popupVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1.2,
      }
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      filter: "blur(0px)",
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <div 
      ref={navRef}
      className="relative"
    >
      <div 
        ref={buttonRef}
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="m3-icon-button relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-variant transition-colors"
          aria-label="Toggle theme"
        >
          <span className="material-icons text-on-surface-variant">
            {themes.find(t => t.id === currentTheme)?.icon || 'palette'}
          </span>
          <div className="m3-state-layer" />
        </button>

        <AnimatePresence mode="sync">
          {isOpen && (
            <div
              onMouseEnter={handlePopoverMouseEnter}
              onMouseLeave={handlePopoverMouseLeave}
              style={{
                position: 'absolute',
                left: position.left,
                top: position.top,
                transform: 'translateX(-50%)',
                zIndex: 50,
                perspective: '1000px'
              }}
            >
              <motion.div
                key="theme-popover"
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  marginTop: '0.5rem',
                  minWidth: '220px',
                  maxWidth: '500px',
                  width: 'fit-content',
                  boxShadow: 'var(--shadow-lg)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid rgba(var(--outline-rgb), 0.1)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--md-sys-color-surface-container-lowest)',
                  transformOrigin: 'center top',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  pointerEvents: 'auto'
                }}
              >
                <div className="p-2 space-y-1">
                  {themes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => handleThemeChange(theme.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        currentTheme === theme.id
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'hover:bg-surface-variant text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      <span className="material-icons text-lg">
                        {theme.icon}
                      </span>
                      <span>{theme.label}</span>
                      {currentTheme === theme.id && (
                        <span className="material-icons ml-auto text-lg">
                          check
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ThemeToggler; 