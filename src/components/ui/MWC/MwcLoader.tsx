import { useEffect } from "react";

/**
 * Loads all Material Web Components (MWC) JS modules on the client side using hydrated React effect.
 * This component does not render any UI.
 */
export default function MwcLoader() {
  useEffect(() => {
    // Dynamically import all MWC modules when component mounts
    Promise.all([
      import('@material/web/button/filled-button.js'),
      import('@material/web/button/outlined-button.js'),
      import('@material/web/checkbox/checkbox.js'),
      import('@material/web/chips/chip-set.js'),
      import('@material/web/chips/assist-chip.js'),
      import('@material/web/chips/filter-chip.js'),
      import('@material/web/chips/input-chip.js'),
      import('@material/web/chips/suggestion-chip.js'),
      import('@material/web/dialog/dialog.js'),
      import('@material/web/icon/icon.js'),
      import('@material/web/iconbutton/icon-button.js'),
      import('@material/web/progress/circular-progress.js'),
      import('@material/web/progress/linear-progress.js'),
      import('@material/web/switch/switch.js'),
      import('@material/web/tabs/tabs.js'),
      import('@material/web/tabs/primary-tab.js'),
      import('@material/web/textfield/outlined-text-field.js'),
      import('@material/web/slider/slider.js'),
    ]).then(() => {
      console.log('MWC (React Loader) başarıyla yüklendi.');
    }).catch((e) => {
      console.error('MWC (React Loader) yüklenirken hata:', e);
    });
  }, []);
  return null;
}
