import React, { useRef, useEffect } from "react";
import HeaderMenuCustomContent from "./HeaderMenuCustomContent";
import { AnimatePresence, motion } from "framer-motion";

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
      filter: "blur(8px)",
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
      filter: "blur(8px)",
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
      filter: "blur(4px)",
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
      filter: "blur(4px)",
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
            perspective: '1000px'
          }}
        >
          <motion.div
            key={menuIndex}
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
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
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
              .navbar-sub {
                display: grid;
                width: 320px;
                background-color: transparent;
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                will-change: transform, opacity, filter;
              }

              @media (min-width: 768px) {
                .navbar-sub {
                  width: 400px;
                }

                /* İki sütunlu olmayan menüler için yarım genişlik */
                .navbar-sub:not(:has(.grid)) {
                  width: 200px;
                }
              }

              @media (min-width: 1024px) {
                .navbar-sub {
                  width: 500px;
                }

                /* İki sütunlu olmayan menüler için yarım genişlik */
                .navbar-sub:not(:has(.grid)) {
                  width: 250px;
                }
              }

              /* Ana başlık kapsayıcısı */
              .navbar-sub > div {
                width: 100%;
                
              }

              /* Ana başlık bölümü */
              .navbar-sub > div > div {
                width: 100%;
                border-bottom: 1px solid var(--md-sys-color-outline-variant);
                margin-bottom: 1rem;
              }

              /* Alt menü öğeleri */
              .navbar-sub .space-y-1,
              .navbar-sub .grid {
              }
              

              .navbar-sub > div > div > div {
                width: 100%;
              }

              .navbar-sub > div > div > div > div {
                width: 100%;
              }

              .navbar-sub > div > div > div > div > div {
                width: 100%;
              }

              .navbar-sub > div > div > div > div > div > div {
                width: 100%;
              }

              /* Grid yapısı için tam genişlik */
              .grid {
              
              width: 100%;
              }

              .grid > div {
                width: 100%;
              }

              .m3-menu-list {
                background-color: var(--md-sys-color-surface-container);
                color: var(--md-sys-color-on-surface);
                border-radius: var(--radius);
                padding: 0.5rem;
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                will-change: transform, opacity;
              }

              .m3-menu-item {
                position: relative;
                display: block;
                border-radius: var(--radius);
                overflow: hidden;
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                background-color: transparent;
                transform-origin: center;
                will-change: transform, opacity, box-shadow;
              }

              .m3-menu-item:hover {
                transform: translate(4px, -2px) scale(1.01);
                box-shadow: var(--shadow-sm);
                transition-duration: 0.15s;
              }

              .m3-menu-item:active {
                box-shadow: none;
                transition-duration: 0.1s;
              }

              .m3-menu-item-state-layer {
                position: absolute;
                inset: 0;
                opacity: 0;
                background-color: var(--md-sys-color-surface);
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                transform-origin: center;
                will-change: transform, opacity;
              }

              .m3-menu-item:hover .m3-menu-item-state-layer {
                opacity: 0.08;
                background-color: var(--md-sys-color-primary);
                transform: scale(1.05);
                transition-duration: 0.15s;
              }

              .m3-menu-item:active .m3-menu-item-state-layer {
                opacity: 0.12;
                background-color: var(--md-sys-color-primary);
                transform: scale(0.95);
                transition-duration: 0.1s;
                
              }

              .m3-menu-item-content {
                position: relative;
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                padding: .75rem;
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                transform-origin: left center;
                will-change: transform;
                
              }

              .m3-menu-item:hover .m3-menu-item-content {
                transition-duration: 0.15s;
              }

              .m3-menu-item:active .m3-menu-item-content {
                transform: translate(2px, -1px);
                transition-duration: 0.1s;
              }

              .m3-menu-item:focus-visible {
                outline: 2px solid var(--outline);
                outline-offset: 2px;
                box-shadow: var(--shadow-md);
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
              }

              .m3-menu-item:focus-visible .m3-menu-item-state-layer {
                opacity: 0.12;
                background-color: var(--md-sys-color-primary);
                transform: scale(1.02);
                transition-duration: 0.15s;
              }

              .m3-menu-item-title {
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.25;
                color: var(--md-sys-color-on-surface);
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                transform-origin: left center;
                will-change: transform, color;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
              }

              .m3-menu-item-title .menu-icon {
                font-size: 1.25rem;
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                opacity: 0.6;
                transform-origin: center;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                margin-left: 1.5rem;
              }

              .m3-menu-item:hover .m3-menu-item-title .menu-icon {
                transform: rotate(180deg);
                opacity: 1;
                transition-duration: 0.15s;
                color: var(--md-sys-color-primary);
              }

              .m3-menu-item:active .m3-menu-item-title .menu-icon {
                transform: rotate(180deg) scale(0.9);
                transition-duration: 0.1s;
              }

              .m3-menu-item:focus-visible .m3-menu-item-title .menu-icon {
                opacity: 1;
                transform: rotate(180deg);
                color: var(--md-sys-color-primary);
              }

              .m3-menu-item-description {
                font-size: 0.75rem;
                color: var(--md-sys-color-on-surface-variant);
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                transform-origin: left center;
                will-change: transform, color, opacity;
              }

              .m3-menu-item:hover .m3-menu-item-description {
                color: var(--md-sys-color-primary);
                opacity: 0.8;
                transform: translate(2px, -1px);
                transition-duration: 0.15s;
              }

              /* Ana başlıklar için hover efektlerini kaldır */
              .navbar-sub > div > div > div > div {
                pointer-events: none;
              }

              .navbar-sub > div > div > div > div .m3-menu-item-state-layer {
                display: none;
              }

              .navbar-sub > div > div > div > div .m3-menu-item:hover {
                transform: none;
                box-shadow: none;
              }

              .navbar-sub > div > div > div > div .m3-menu-item:hover .m3-menu-item-title,
              .navbar-sub > div > div > div > div .m3-menu-item:hover .m3-menu-item-description {
                color: var(--md-sys-color-on-surface);
              }

              .navbar-sub > div > div > div > div .m3-menu-item:hover .menu-icon {
                transform: none;
                opacity: 0.6;
                color: var(--md-sys-color-on-surface);
              }

              /* Alt menü öğeleri için hover efektlerini koru */
              .navbar-sub > div > div > div > div > div > div {
                margin: 1.25rem;
                width: 100%;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item {
                position: relative;
                display: block;
                border-radius: var(--radius);
                overflow: hidden;
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                background-color: transparent;
                transform-origin: center;
                will-change: transform, opacity, box-shadow;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item-state-layer {
                display: block;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover {
                transform: translate(4px, -2px) scale(1.01);
                box-shadow: var(--shadow-sm);
                transition-duration: 0.15s;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:active {
                transform: translate(2px, -1px) scale(0.98);
                box-shadow: none;
                transition-duration: 0.1s;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-state-layer {
                opacity: 0.08;
                background-color: var(--md-sys-color-primary);
                transform: scale(1.05);
                transition-duration: 0.15s;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-title,
              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-description {
                color: var(--md-sys-color-primary);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-description {
                opacity: 0.8;
                transform: translate(2px, -1px);
                transition-duration: 0.15s;
              }

              /* Ana kapsayıcılar için hover efekti */
              .navbar-sub > div > div > div > div {
                transition: transform 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                transform-origin: center;
              }

              .navbar-sub > div > div > div > div:hover {
                transform: scale(1.02);
              }

              /* Menü öğeleri için hover efekti */
              .navbar-sub > div > div > div > div > div .m3-menu-item {
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                transform-origin: left center;
                filter: blur(0);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover {
                transform: translate(4px, -2px);
                filter: blur(0);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:not(:hover) {
                filter: blur(0.5px);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:active {
                transform: translate(2px, -1px);
                filter: blur(0);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item-state-layer {
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                opacity: 0;
                background-color: var(--md-sys-color-primary);
                transform-origin: center;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-state-layer {
                opacity: 0.08;
                transform: scale(1.05);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:active .m3-menu-item-state-layer {
                opacity: 0.12;
                transform: scale(0.95);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item-content {
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                transform-origin: left center;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-content {
                transform: translate(2px, -1px);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-title,
              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-description {
                color: var(--md-sys-color-primary);
                transition: color 0.2s cubic-bezier(0.2, 0, 0.1, 1);
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-description {
                opacity: 0.8;
              }

              .navbar-sub > div > div > div > div > div .menu-icon {
                transition: all 0.2s cubic-bezier(0.2, 0, 0.1, 1);
                opacity: 0.6;
              }

              .navbar-sub > div > div > div > div > div .m3-menu-item:hover .menu-icon {
                transform: rotate(180deg);
                opacity: 1;
                color: var(--md-sys-color-primary);
              }

              /* Dark mode desteği */
              @media (prefers-color-scheme: dark) {
                .navbar-sub {
                  background-color: rgba(var(--md-sys-color-surface-rgb), 0.8);
                }

                .navbar-sub > div > div > div > div:hover {
                  box-shadow: var(--shadow-md);
                }

                .navbar-sub > div > div > div > div > div .m3-menu-item:hover .m3-menu-item-state-layer {
                  background-color: var(--md-sys-color-primary);
                  opacity: 0.12;
                }
              }

              /* Tüm menü öğeleri için margin */
              .navbar-sub .m3-menu-item {
                position: relative;
                display: block;
                border-radius: var(--radius);
                overflow: hidden;
                background-color: transparent;
                transform-origin: center;
                will-change: transform, opacity, box-shadow;
                margin: 1rem;
              }

              /* Grid içindeki menü öğeleri için margin'i ayarla */

              /* Projeler menüsü içindeki menü öğeleri için margin'i ayarla */
              .navbar-sub .space-y-1[data-menu="projeler"] .m3-menu-item {
                margin: 0.75rem;
                border-radius: calc(var(--radius) * 0.875);
              }

              /* Ana başlık container'ı için margin'i sıfırla */
              .navbar-sub > div > div {
              
              }
            `}
          </style>
          </div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMenuPopover;