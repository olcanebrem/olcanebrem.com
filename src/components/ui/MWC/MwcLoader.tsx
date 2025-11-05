import { useEffect } from "react";

/**
 * Loads all Material Web Components (MWC) JS modules on the client side using hydrated React effect.
 * This component does not render any UI.
 */
export default function MwcLoader() {
  useEffect(() => {
    // Dynamically import all MWC modules when component mounts
    Promise.all([
      // Core Components
      import('@material/web/all.js'),
      
      // Buttons
      import('@material/web/button/filled-button.js'),
      import('@material/web/button/outlined-button.js'),
      
      // Chips
      import('@material/web/chips/chip-set.js'),
      import('@material/web/chips/assist-chip.js'),
      import('@material/web/chips/filter-chip.js'),
      import('@material/web/chips/input-chip.js'),
      import('@material/web/chips/suggestion-chip.js'),
      
      // Dialog
      import('@material/web/dialog/dialog.js'),
      
      // Icons
      import('@material/web/icon/icon.js'),
      import('@material/web/iconbutton/icon-button.js'),
      import('@material/web/iconbutton/filled-icon-button.js'),
      import('@material/web/iconbutton/filled-tonal-icon-button.js'),
      import('@material/web/iconbutton/outlined-icon-button.js'),
      
      // Progress
      import('@material/web/progress/circular-progress.js'),
      import('@material/web/progress/linear-progress.js'),
      
      // Tabs
      import('@material/web/tabs/tabs.js'),
      import('@material/web/tabs/primary-tab.js'),
      import('@material/web/tabs/secondary-tab.js'),
      
      // Text Fields
      import('@material/web/textfield/outlined-text-field.js'),
      import('@material/web/textfield/filled-text-field.js'),
      
      // Other Components
      import('@material/web/switch/switch.js'),
      import('@material/web/slider/slider.js'),
      import('@material/web/checkbox/checkbox.js'),
      import('@material/web/fab/fab.js'),
      import('@material/web/list/list.js'),
      import('@material/web/list/list-item.js'),
    ]).then(() => {
      console.log('MWC (React Loader) başarıyla yüklendi.');
    }).catch((e) => {
      console.error('MWC (React Loader) yüklenirken hata:', e);
    });
  }, []);
  return null;
}
