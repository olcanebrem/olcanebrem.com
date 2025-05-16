import React from "react";
import HeaderMenuCustomContent from "./HeaderMenuCustomContent";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderMenuPopoverProps {
  show: boolean; // Hələ də nav-dan çıxanda gizlətmək üçün istifadə ediləcək
  left: number | null;
  menuIndex: number | null;
  opacity?: number;
}

const HeaderMenuPopover: React.FC<HeaderMenuPopoverProps> = ({
  show,
  left,
  menuIndex,
  opacity = 1,
}) => {
  // `show` false olarsa, heç nə render etməyəcəyik (əvvəlki kimi AnimatePresence yoxdur)
  if (!show) {
    return null;
  }

  return (
    // Artıq motion.div-i AnimatePresence ilə əhatə etmirik,
    // çünki popover özü heç vaxt "çıxmır" (yalnız gizlənir)
    // Menyular arası keçiddə mövqe və opacity animasiya ilə dəyişəcək
    <motion.div
      // `initial` yalnız ilk dəfə `show` true olduqda tətbiq olunur
      // Ancaq `show` dəyişmədikcə bu komponent yenidən mount olmur
      // Ona görə də `initial` yerinə birbaşa `animate`-dəki dəyərlər əsas götürüləcək
      // Əgər ilk açılışda xüsusi animasiya istəyirsinizsə,
      // `HeaderMenuCustom`-da `hasOpenedInitially` kimi bir state saxlaya bilərsiniz.
      // Bu sadə ssenaridə, birbaşa animate-ə fokuslanaq.
      initial={false} // İlkin animasiyanı deaktiv edirik, çünki həmişə görünür olacaq (show true olduqda)
      animate={{
        opacity: opacity,
        y: 0, // y animasiyasını qaldıra bilərik və ya saxlayıb 0-da sabit saxlaya bilərik
        left: left ?? 0,
        // transition: { duration: 0.22, ease: "easeInOut" }, // Bu transition hər dəfə işləyəcək
      }}
      // `exit` animasiyası artıq yoxdur
      transition={{ duration: 0.42, ease: "easeInOut" }} // Mövqe və opacity dəyişiklikləri üçün ümumi transition
      className="absolute mt-2 min-w-[220px] max-w-[500px] w-fit pointer-events-auto shadow-lg rounded-2xl bg-popover text-popover-foreground"
      style={{
        transform: "translateX(-50%)",
        // `opacity` və `y` artıq animate-dən gəlir
        // `visibility` gizlətmək üçün istifadə edilə bilər, amma Framer Motion `opacity: 0` ilə bunu edir
      }}
    >
      {/* Məzmunun animasiyası üçün AnimatePresence */}
      <AnimatePresence mode="wait">
        {menuIndex !== null && (
          <HeaderMenuCustomContent
            key={menuIndex} // Məzmun dəyişdikdə animasiya üçün açar
            menuIndex={menuIndex}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderMenuPopover;