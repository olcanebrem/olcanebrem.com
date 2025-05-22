import React, { useRef, useEffect } from "react";
import HeaderMenuCustomContent from "./HeaderMenuCustomContent";
import { AnimatePresence, motion } from "framer-motion";
import { MENU } from "./HeaderMenuCustom";

interface HeaderMenuPopoverProps {
  show: boolean;
  left: number | null;
  top: number | null;
  menuIndex: number | null;
  onMouseEnterPopover: () => void;
  onMouseLeavePopover: () => void;
}

const HeaderMenuPopover: React.FC<HeaderMenuPopoverProps> = ({
  show,
  left,
  top,
  menuIndex,
  onMouseEnterPopover,
  onMouseLeavePopover,
}) => {
  const prevMenuIndexRef = useRef<number | null>(null);

  useEffect(() => {
    if (menuIndex !== null) {
      prevMenuIndexRef.current = menuIndex;
    }
  }, [menuIndex]);

  const getSlideDirection = () => {
    if (prevMenuIndexRef.current === null || menuIndex === null) return -100;
    return menuIndex > prevMenuIndexRef.current ? -100 : 100;
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      x: getSlideDirection(),
      scale: 0.95,
      filter: "blur(0px)",
      rotateY: getSlideDirection() > 0 ? 10 : -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8,
        duration: 0.15
      }
    },
    exit: {
      opacity: 0,
      x: -getSlideDirection(),
      scale: 0.95,
      filter: "blur(0px)",
      rotateY: getSlideDirection() > 0 ? -10 : 10,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      x: getSlideDirection() / 2,
      scale: 0.95,
      filter: "blur(0px)",
      rotateY: getSlideDirection() > 0 ? 8 : -8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8,
        duration: 0.15
      }
    },
    exit: { 
      opacity: 0, 
      x: -getSlideDirection() / 2,
      scale: 0.95,
      filter: "blur(0px)",
      rotateY: getSlideDirection() > 0 ? -8 : 8,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {show && left !== null && top !== null && (
        <div
          onMouseEnter={onMouseEnterPopover}
          onMouseLeave={onMouseLeavePopover}
          style={{
            position: 'absolute',
            left: left,
            top: top,
            transform: 'translateX(-50%)',
            zIndex: 50,
            perspective: '1000px',
            overflow: 'visible',
            pointerEvents: 'auto'
          }}
        >
          <motion.div
            key={menuIndex}
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            data-menu={menuIndex !== null ? MENU[menuIndex].label.toLowerCase().replace(/\s+/g, '-') : undefined}
            style={{
              marginTop: '0.25rem',
              width: menuIndex !== null ? (
                MENU[menuIndex].label === 'UI Frameworks' 
                  ? 'calc(var(--submenu-item-width) * 4 + var(--menu-column-gap) * 3 + var(--menu-padding) * 2)'
                  : MENU[menuIndex].label === 'Projeler'
                  ? 'calc(var(--submenu-item-width) * 2 + var(--menu-column-gap) + var(--menu-padding) * 2)'
                  : 'calc(var(--submenu-item-width) + var(--menu-padding) * 2)'
              ) : 'calc(var(--submenu-item-width) + var(--menu-padding) * 2)',
              height: 'fit-content',  /* Yükseklik içeriğe göre */
              minHeight: 'var(--menu-min-height)',  /* Minimum yükseklik */
              boxShadow: 'var(--shadow-lg)',
              borderRadius: 'var(--radius)',
              border: '1px solid color-mix(in srgb, var(--md-sys-color-outline) 8%, transparent)',
              overflow: 'visible',
              backgroundColor: 'var(--md-sys-color-surface-container-lowest)',
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              padding: 'var(--menu-padding)',
              transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              isolation: 'isolate'
            }}
          >
            {menuIndex !== null && (
              <motion.div
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
              <HeaderMenuCustomContent
                key={menuIndex}
                menuIndex={menuIndex}
                  isTopLevel={true}
                  renderTitle={(title, hasSubmenu) => (
                    <div className="m3-menu-item-title">
                      {title}
                      {hasSubmenu && (
                        <span className="menu-icon material-icons">
                          expand_more
                        </span>
                      )}
                    </div>
                  )}
                />
              </motion.div>
            )}
          </motion.div>
          <style>
            {`
              /* M3 Menu System - Core Variables */
              :root {
                /* Dimensions */
                --menu-item-height: 40px;
                --menu-title-height: 44px;
                --menu-base-width: 280px;
                --menu-item-width: 260px;
                
                /* Spacing */
                --menu-padding: 1rem;
                --menu-item-padding: 0.5rem 1rem;
                --menu-item-gap: 8px;
                --menu-list-gap: 4px;
                --menu-column-gap: 1rem;
                
                /* Visual */
                --menu-radius-sm: 0.8rem;    /* Küçük radius */
                --menu-radius: 1rem;      /* Normal radius */
                --menu-radius-lg: 1.3rem;      /* Büyük radius */
                --menu-transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                --menu-hover-transition: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                --menu-min-height: 200px;

                /* Title Background Pattern */
                --title-bg-size: 200% 200%;
                --title-bg-color-1: color-mix(in srgb, var(--md-sys-color-primary) 4%, transparent);
                --title-bg-color-2: color-mix(in srgb, var(--md-sys-color-primary) 8%, transparent);
                --title-bg-color-3: color-mix(in srgb, var(--md-sys-color-primary) 12%, transparent);
              }

              @keyframes titleBgAnimation {
                0% {
                  background-position: 0% 0%;
                }
                25% {
                  background-position: 100% 0%;
                }
                50% {
                  background-position: 100% 100%;
                }
                75% {
                  background-position: 0% 100%;
                }
                100% {
                  background-position: 0% 0%;
                }
              }

              @keyframes titleBgPulse {
                0% {
                  opacity: 0.4;
                }
                50% {
                  opacity: 0.7;
                }
                100% {
                  opacity: 0.4;
                }
              }

              /* Base Menu Structure */
              .m3-menu-item {
                position: relative;
                display: flex;
                align-items: center;
                min-height: var(--menu-item-height);
                padding: var(--menu-item-padding);
                width: 100%;
                gap: var(--menu-item-gap);
                font-size: 0.875rem;
                transition: var(--menu-transition);
                background: transparent;
                border-radius: var(--menu-radius-sm);
                overflow: visible;
                transform-origin: left center;
              }

              /* Menu Types */
              .m3-menu-item[data-type="title"] {
                min-height: var(--menu-title-height);
                font: 600 1rem/1.4 system-ui;
                color: var(--md-sys-color-primary);
                padding: 0.75rem 1rem;
                margin: 0 0 1rem 0;
                justify-content: space-between;
                border-radius: var(--menu-radius);
                min-width: var(--menu-item-width);
                position: relative;
                overflow: hidden;
                isolation: isolate;
              }

              .m3-menu-item[data-type="title"]::before {
                content: '';
                position: absolute;
                inset: 0;
                z-index: -1;
                background: 
                  linear-gradient(
                    45deg,
                    var(--title-bg-color-1) 0%,
                    var(--title-bg-color-2) 25%,
                    var(--title-bg-color-3) 50%,
                    var(--title-bg-color-2) 75%,
                    var(--title-bg-color-1) 100%
                  );
                background-size: var(--title-bg-size);
                animation: 
                  titleBgAnimation 15s ease infinite,
                  titleBgPulse 4s ease-in-out infinite;
                opacity: 0.4;
                transition: opacity 0.3s ease;
              }

              .m3-menu-item[data-type="title"]:hover::before {
                opacity: 0.7;
                animation: 
                  titleBgAnimation 8s ease infinite,
                  titleBgPulse 3s ease-in-out infinite;
              }

              .m3-menu-item[data-type="list"],
              .m3-menu-item[data-type="prop"] {
                background: transparent;
                position: relative;
                z-index: 1;
                border-radius: var(--menu-radius-sm);
              }

              /* Menu States */
              .m3-menu-item[data-type="list"]:hover,
              .m3-menu-item[data-type="prop"]:hover {
                background: color-mix(in srgb, var(--md-sys-color-primary-container) 15%, transparent);
                transform: translateX(6px) scale(1.03) rotate(0.5deg);
                z-index: 2;
                box-shadow: 0 4px 12px color-mix(in srgb, var(--md-sys-color-shadow) 12%, transparent);
                transition: var(--menu-hover-transition);
                border-radius: var(--menu-radius);
              }

              /* Menu Content */
              .m3-menu-content {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: var(--menu-item-gap);
              }

              /* Menu Text */
              .m3-menu-text {
                font: inherit;
                color: inherit;
                display: flex;
                align-items: center;
                gap: var(--menu-item-gap);
                width: 100%;
                transition: var(--menu-transition);
              }

              .m3-menu-text[data-type="title"] {
                color: var(--md-sys-color-primary);
                font-weight: 600;
                letter-spacing: -0.01em;
                justify-content: flex-start;
              }

              /* Menu Description */
              .m3-menu-description {
                font: 0.75rem/1.4 system-ui;
                color: var(--md-sys-color-on-surface-variant);
                opacity: 0.8;
                transition: var(--menu-transition);
                margin-top: 0.125rem;
              }

              /* Menu Icon */
              .m3-menu-icon {
                font-size: 1.125rem;
                color: var(--md-sys-color-on-surface-variant);
                opacity: 0.7;
                transition: var(--menu-hover-transition);
                transform-origin: center;
              }

              .m3-menu-icon[data-type="title"] {
                color: var(--md-sys-color-primary);
                opacity: 0.8;
                margin-left: 0.375rem;
              }

              .m3-menu-item:hover .m3-menu-icon {
                transform: rotate(180deg) scale(1.1);
                opacity: 1;
              }

              /* Menu Container */
              .m3-menu-container {
                display: flex;
                flex-direction: column;
                gap: var(--menu-list-gap);
                width: 100%;
                min-width: var(--menu-item-width);
                height: fit-content;
                padding: var(--menu-padding);
                background: color-mix(in srgb, var(--md-sys-color-surface-container) 4%, transparent);
                border-radius: var(--menu-radius-lg);
                position: relative;
                z-index: 1;
                overflow: visible;
              }

              /* Menu Grid */
              .m3-menu-grid {
                display: grid;
                gap: var(--menu-column-gap);
                width: 100%;
                min-width: calc(var(--menu-item-width) * 2 + var(--menu-column-gap));
                height: fit-content;
                padding: var(--menu-padding);
                background: color-mix(in srgb, var(--md-sys-color-surface-container) 4%, transparent);
                border-radius: var(--menu-radius-lg);
                position: relative;
                z-index: 1;
                overflow: visible;
              }

              /* Grid Layouts */
              .m3-menu-grid[data-columns="1"] { 
                grid-template-columns: 1fr;
                grid-auto-rows: min-content;
              }

              .m3-menu-grid[data-columns="2"] { 
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: min-content;
              }

              .m3-menu-grid[data-columns="3"] { 
                grid-template-columns: repeat(3, 1fr);
                grid-auto-rows: min-content;
              }

              .m3-menu-grid[data-columns="4"] { 
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: min-content;
              }

              /* Grid Item */
              .m3-menu-grid-item {
                display: flex;
                flex-direction: column;
                gap: var(--menu-list-gap);
                padding: var(--menu-padding);
                background: color-mix(in srgb, var(--md-sys-color-surface-container) 3%, transparent);
                border-radius: var(--menu-radius);
                transition: var(--menu-transition);
                width: 100%;
                min-width: var(--menu-item-width);
                height: fit-content;
                box-sizing: border-box;
                transform-origin: center center;
              }

              .m3-menu-grid-item:hover {
                background: color-mix(in srgb, var(--md-sys-color-surface-container) 5%, transparent);
                transform: translateY(-3px) scale(1.02) rotate(-0.5deg);
                box-shadow: 0 6px 16px color-mix(in srgb, var(--md-sys-color-shadow) 15%, transparent);
                z-index: 2;
                transition: var(--menu-hover-transition);
                border-radius: var(--menu-radius-lg);
              }

              /* Navbar Sub */
              .navbar-sub {
                background: color-mix(in srgb, var(--md-sys-color-surface-container) 4%, transparent);
                border-radius: var(--menu-radius-lg);
                width: 100%;
                min-width: var(--menu-item-width);
                height: fit-content;
                position: relative;
                z-index: 1;
                overflow: visible;
                transition: var(--menu-transition);
              }

              /* Responsive */
              @media (max-width: 1279px) {
                .m3-menu-grid[data-columns="4"] {
                  grid-template-columns: repeat(3, 1fr);
                }
                :root {
                  --menu-item-width: 240px;
                }
              }

              @media (max-width: 1023px) {
                :root {
                  --menu-item-width: 220px;
                }
                .m3-menu-grid[data-columns="3"],
                .m3-menu-grid[data-columns="4"] {
                  grid-template-columns: repeat(2, 1fr);
                }
              }

              @media (max-width: 767px) {
                :root {
                  --menu-item-width: 200px;
                }
                .m3-menu-grid[data-columns="2"],
                .m3-menu-grid[data-columns="3"],
                .m3-menu-grid[data-columns="4"] {
                  grid-template-columns: 1fr;
                }
              }

              @media (max-width: 479px) {
                :root {
                  --menu-item-width: 100%;
                  --menu-padding: 0.75rem;
                  --menu-item-padding: 0.375rem 0.75rem;
                }
              }

              /* Dark Mode */
              @media (prefers-color-scheme: dark) {
                .m3-menu-item[data-type="list"]:hover,
                .m3-menu-item[data-type="prop"]:hover {
                  background: color-mix(in srgb, var(--md-sys-color-primary-container) 25%, transparent);
                  box-shadow: 0 4px 16px color-mix(in srgb, var(--md-sys-color-shadow) 25%, transparent);
                  transform: translateX(8px) scale(1.04) rotate(0.7deg);
                  border-radius: var(--menu-radius);
                }

                .m3-menu-grid-item:hover {
                  background: color-mix(in srgb, var(--md-sys-color-surface-container) 8%, transparent);
                  box-shadow: 0 8px 24px color-mix(in srgb, var(--md-sys-color-shadow) 30%, transparent);
                  transform: translateY(-4px) scale(1.03) rotate(-0.7deg);
                  border-radius: var(--menu-radius-lg);
                }

                :root {
                  --title-bg-color-1: color-mix(in srgb, var(--md-sys-color-primary) 8%, transparent);
                  --title-bg-color-2: color-mix(in srgb, var(--md-sys-color-primary) 12%, transparent);
                  --title-bg-color-3: color-mix(in srgb, var(--md-sys-color-primary) 16%, transparent);
                }

                .m3-menu-item[data-type="title"]::before {
                  opacity: 0.5;
                }

                .m3-menu-item[data-type="title"]:hover::before {
                  opacity: 0.8;
                }
              }
            `}
          </style>
          </div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMenuPopover;