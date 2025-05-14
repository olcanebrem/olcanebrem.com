import React from 'react';

// Extend JSX intrinsic elements to support Material Web Components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-chip-set': any;
      'md-assist-chip': any;
      'md-filter-chip': any;
      'md-input-chip': any;
      'md-suggestion-chip': any;
      'md-filled-button': any;
      'md-outlined-button': any;
      'md-icon-button': any;
      'md-icon': any;
      'md-switch': any;
      'md-outlined-text-field': any;
    }
  }
}

// Import Material Web Components
import '@material/web/chips/chip-set.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/chips/input-chip.js';
import '@material/web/chips/suggestion-chip.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/switch/switch.js';
import '@material/web/textfield/outlined-text-field.js';

// Declare custom elements to avoid TypeScript errors
// Type declarations are now in material-web.d.ts

export function MwcDemo() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1.5rem', 
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '1rem'
    }}>
      <h2>Material Web Components Demo</h2>
      
      <div>
        <h3>Chips</h3>
        <md-chip-set>
          <md-assist-chip label='Assist Chip'></md-assist-chip>
          <md-filter-chip label='Filter Chip'></md-filter-chip>
          <md-input-chip label='Input Chip'></md-input-chip>
          <md-suggestion-chip label='Suggestion Chip'></md-suggestion-chip>
        </md-chip-set>
      </div>

      <div>
        <h3>Buttons</h3>
        <md-filled-button>Filled Button</md-filled-button>
        <md-outlined-button style={{ marginLeft: '0.5rem' }}>Outlined Button</md-outlined-button>
      </div>

      <div>
        <h3>Other Components</h3>
        <md-icon-button>
          <md-icon>favorite</md-icon>
        </md-icon-button>
        
        <md-switch style={{ marginLeft: '0.5rem' }}></md-switch>
        
        <md-outlined-text-field 
          label='Enter text'
          style={{ display: 'block', marginTop: '1rem' }}
        ></md-outlined-text-field>
      </div>
    </div>
  );
}
