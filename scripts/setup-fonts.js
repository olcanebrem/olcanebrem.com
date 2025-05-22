import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, '../public/fonts');

// Ensure fonts directory exists
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Download Inter font
const interUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
const interCssPath = path.join(fontsDir, 'inter.css');

https.get(interUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Extract all font URLs from the CSS
    const fontUrls = data.match(/src: url\((.*?)\)/g).map(url => url.match(/url\((.*?)\)/)[1]);
    
    // Download each font file
    fontUrls.forEach((fontUrl, index) => {
      const fontFileName = `inter-${index}.woff2`;
      const fontPath = path.join(fontsDir, fontFileName);

      https.get(fontUrl, (fontRes) => {
        const fontFile = fs.createWriteStream(fontPath);
        fontRes.pipe(fontFile);
        fontFile.on('finish', () => {
          fontFile.close();
          console.log(`Inter font file ${index + 1} downloaded successfully!`);

          // Create local CSS file after all fonts are downloaded
          if (index === fontUrls.length - 1) {
            const localCss = `@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/inter-0.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/inter-1.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/inter-2.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/inter-3.woff2') format('woff2');
}`;

            fs.writeFileSync(interCssPath, localCss);
            console.log('Inter CSS file created successfully!');
          }
        });
      }).on('error', (err) => {
        console.error('Error downloading Inter font:', err);
      });
    });
  });
}).on('error', (err) => {
  console.error('Error downloading Inter CSS:', err);
});

// Download Material Symbols Rounded font
const materialSymbolsUrl = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
const materialSymbolsCssPath = path.join(fontsDir, 'material-symbols.css');

https.get(materialSymbolsUrl, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Extract the font URL from the CSS
    const fontUrlMatch = data.match(/src: url\((.*?)\)/);
    if (fontUrlMatch && fontUrlMatch[1]) {
      const fontUrl = fontUrlMatch[1];
      const fontFileName = 'material-symbols-rounded.woff2';
      const fontPath = path.join(fontsDir, fontFileName);

      // Download the font file
      https.get(fontUrl, (fontRes) => {
        const fontFile = fs.createWriteStream(fontPath);
        fontRes.pipe(fontFile);
        fontFile.on('finish', () => {
          fontFile.close();
          console.log('Material Symbols Rounded font downloaded successfully!');

          // Create local CSS file
          const localCss = `@font-face {
  font-family: 'Material Symbols Rounded';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('/fonts/${fontFileName}') format('woff2');
}

.material-symbols-rounded {
  font-family: 'Material Symbols Rounded';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}`;

          fs.writeFileSync(materialSymbolsCssPath, localCss);
          console.log('Material Symbols CSS file created successfully!');
        });
      }).on('error', (err) => {
        console.error('Error downloading font:', err);
      });
    }
  });
}).on('error', (err) => {
  console.error('Error downloading CSS:', err);
}); 