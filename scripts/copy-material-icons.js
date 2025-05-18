import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Kaynak ve hedef dizinleri
const sourceDir = path.join(__dirname, '../node_modules/@material-design-icons/font');
const targetDir = path.join(__dirname, '../public/fonts');

// Font dosyasını kopyala
fs.copyFileSync(
  path.join(sourceDir, 'material-icons-round.woff2'),
  path.join(targetDir, 'material-icons.woff2')
);

// CSS dosyasını kopyala ve font yolunu düzelt
let cssContent = fs.readFileSync(path.join(sourceDir, 'round.css'), 'utf8');
cssContent = cssContent.replace('material-icons-round.woff2', 'material-icons.woff2');
fs.writeFileSync(path.join(targetDir, 'material-icons.css'), cssContent);

console.log('Material Icons font files copied successfully!'); 