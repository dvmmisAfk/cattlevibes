import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("public/images");
const DERIVATIVES_DIR = path.resolve("public/images/derivatives");

// Ensure derivatives output directory exists without modifying IMAGES_DIR
if (!fs.existsSync(DERIVATIVES_DIR)) {
  fs.mkdirSync(DERIVATIVES_DIR, { recursive: true });
}

// Key master photographic assets as specified in Section 19
const MASTER_ASSETS = [
  "hero-pasture-sheep.jpg",
  "about-hero.jpg",
  "solutions-pastoral-cow-hd.jpg",
  "resources-hero-pasture-livestock-uhd.png",
  "indian-cow-shelter-ground.jpg",
  "why-cattlevibes-cta-farm-realities.png",
  "solutions-cta-pasture-livestock-uhd.png",
  "resources-cta-lighthouse-pasture-uhd.jpg",
  "contact-pasture.jpg",
];

// Target responsive widths as specified in Section 3
const RESPONSIVE_WIDTHS = [768, 1280, 1920];

async function generateDerivatives() {
  console.log("=== CattleVibes Additive Delivery Derivative Generation ===");
  console.log("Master files remain 100% untouched in public/images/\n");

  const report = [];

  for (const filename of MASTER_ASSETS) {
    const inputPath = path.join(IMAGES_DIR, filename);
    if (!fs.existsSync(inputPath)) {
      console.warn(`Master asset not found: ${filename}`);
      continue;
    }

    const masterStats = fs.statSync(inputPath);
    const baseName = path.parse(filename).name;
    const metadata = await sharp(inputPath).metadata();

    console.log(`Processing Master: ${filename} (${(masterStats.size / (1024 * 1024)).toFixed(2)} MB, ${metadata.width}x${metadata.height})`);

    for (const width of RESPONSIVE_WIDTHS) {
      if (metadata.width && width > metadata.width) {
        continue; // Don't upscale
      }

      // 1. Generate AVIF derivative at pristine quality 90
      const avifName = `${baseName}-${width}.avif`;
      const avifPath = path.join(DERIVATIVES_DIR, avifName);
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 90, effort: 6 })
        .toFile(avifPath);

      const avifStats = fs.statSync(avifPath);

      // 2. Generate WebP derivative at pristine quality 90
      const webpName = `${baseName}-${width}.webp`;
      const webpPath = path.join(DERIVATIVES_DIR, webpName);
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 90, effort: 6 })
        .toFile(webpPath);

      const webpStats = fs.statSync(webpPath);

      report.push({
        master: filename,
        width,
        avifName,
        avifSize: avifStats.size,
        webpName,
        webpSize: webpStats.size,
      });

      console.log(`  -> ${width}w: AVIF ${(avifStats.size / 1024).toFixed(1)} KB | WebP ${(webpStats.size / 1024).toFixed(1)} KB`);
    }
  }

  console.log("\nDerivative generation completed. Master assets are untouched.");
}

generateDerivatives().catch((err) => {
  console.error("Error generating derivatives:", err);
  process.exit(1);
});
