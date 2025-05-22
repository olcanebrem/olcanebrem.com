import fs from 'fs-extra';
import path from 'path';

const sourceDir = path.join(process.cwd(), 'node_modules', '@material', 'web');
const targetDir = path.join(process.cwd(), 'public', 'mwc');

async function copyMWC() {
  try {
    // Hedef dizini temizle
    await fs.remove(targetDir);
    
    // Dizini kopyala (sembolik bağlantı yerine gerçek kopya)
    await fs.copy(sourceDir, targetDir, {
      dereference: true, // Sembolik bağlantıları takip et
      overwrite: true,
      errorOnExist: false
    });
    
    console.log('Material Web Components başarıyla kopyalandı!');
  } catch (err) {
    console.error('Kopyalama sırasında hata:', err);
  }
}

copyMWC(); 