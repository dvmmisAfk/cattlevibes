import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("public/images");
const BACKUP_DIR = path.resolve("scratch/image_backup");

// Ensure backup directory exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Classification based on IMAGE_ARCHITECTURE_AND_OPTIMIZATION_AUDIT.md
const HERO_IMAGES = new Set([
  "hero-pasture-sheep.jpg",
  "resources-hero-pasture-livestock-uhd.png",
  "solutions-cta-pasture-livestock-uhd.png",
  "resources-cta-lighthouse-pasture-uhd.jpg",
  "why-cattlevibes-cta-farm-realities.png",
  "solutions-pastoral-cow-hd.jpg",
  "contact-pasture.jpg",
  "ovine-pasture-wide.jpg",
  "cattlevibes-catalogue-cover.jpg",
  "about-hero.jpg",
]);

const LOGO_MARKS = new Set([
  "cattlevibes-mark.png",
  "cattlevibes-mark-white.png",
]);

async function optimizeAll() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return ext === ".png" || ext === ".jpg" || ext === ".jpeg";
  });

  console.log(`Found ${files.length} production images to process in ${IMAGES_DIR}\n`);

  let totalOriginalBytes = 0;
  let totalOptimizedBytes = 0;
  const results = [];

  for (const file of files) {
    const inputPath = path.join(IMAGES_DIR, file);
    const backupPath = path.join(BACKUP_DIR, file);
    const tempPath = path.join(IMAGES_DIR, `${file}.tmp`);

    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;
    totalOriginalBytes += originalSize;

    // 1. Backup if not already backed up
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }

    // 2. Determine profile
    const ext = path.extname(file).toLowerCase();
    const isHero = HERO_IMAGES.has(file);
    const isLogo = LOGO_MARKS.has(file);

    let pipeline = sharp(inputPath);
    const meta = await pipeline.metadata();

    if (isLogo) {
      // Retain dimensions, max compression
      pipeline = pipeline.png({ compressionLevel: 9, effort: 10 });
    } else if (isHero) {
      // 1920px max dimension
      pipeline = pipeline.resize({
        width: 1920,
        height: 1280,
        fit: "inside",
        withoutEnlargement: true,
      });

      if (ext === ".jpg" || ext === ".jpeg") {
        pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true, progressive: true });
      } else if (ext === ".png") {
        pipeline = pipeline.png({ compressionLevel: 9, effort: 8 });
      }
    } else {
      // Check if it is a product packshot or card photo
      const isPngPackshot = ext === ".png";
      if (isPngPackshot) {
        // Product Packshot (max 1000x1200 bounding box, retain 8-bit alpha)
        pipeline = pipeline.resize({
          width: 1000,
          height: 1200,
          fit: "inside",
          withoutEnlargement: true,
        }).png({ compressionLevel: 9, effort: 8 });
      } else {
        // Card photo (max 1200x900, mozjpeg 82%)
        pipeline = pipeline.resize({
          width: 1200,
          height: 900,
          fit: "inside",
          withoutEnlargement: true,
        }).jpeg({ quality: 82, mozjpeg: true, progressive: true });
      }
    }

    // Execute to temp
    await pipeline.toFile(tempPath);

    const newStats = fs.statSync(tempPath);
    const newSize = newStats.size;

    // Safety check: ensure file is not empty
    if (newSize > 0) {
      fs.renameSync(tempPath, inputPath);
      totalOptimizedBytes += newSize;
    } else {
      fs.unlinkSync(tempPath);
      totalOptimizedBytes += originalSize;
    }

    const reductionPercent = ((1 - newSize / originalSize) * 100).toFixed(1);
    const origMb = (originalSize / (1024 * 1024)).toFixed(2);
    const newKb = (newSize / 1024).toFixed(1);

    results.push({
      file,
      meta: `${meta.width}x${meta.height}`,
      originalSize,
      newSize,
      origMb,
      newKb,
      reductionPercent,
    });

    console.log(
      `✓ ${file.padEnd(42)} [${meta.width}x${meta.height}] ${origMb.padStart(5)} MB -> ${newKb.padStart(7)} KB (-${reductionPercent}%)`
    );
  }

  const origTotalMb = (totalOriginalBytes / (1024 * 1024)).toFixed(2);
  const newTotalMb = (totalOptimizedBytes / (1024 * 1024)).toFixed(2);
  const savedMb = ((totalOriginalBytes - totalOptimizedBytes) / (1024 * 1024)).toFixed(2);
  const totalReduction = ((1 - totalOptimizedBytes / totalOriginalBytes) * 100).toFixed(1);

  console.log("\n" + "=".repeat(78));
  console.log(`TOTAL BATCH OPTIMIZATION COMPLETE:`);
  console.log(`Original Weight:  ${origTotalMb} MB (${totalOriginalBytes.toLocaleString()} bytes)`);
  console.log(`Optimized Weight: ${newTotalMb} MB (${totalOptimizedBytes.toLocaleString()} bytes)`);
  console.log(`Bandwidth Saved:  ${savedMb} MB (-${totalReduction}%)`);
  console.log("=".repeat(78));

  // Save report JSON
  fs.writeFileSync(
    "scratch/optimization-results.json",
    JSON.stringify(
      {
        totalOriginalBytes,
        totalOptimizedBytes,
        origTotalMb,
        newTotalMb,
        savedMb,
        totalReduction,
        results,
      },
      null,
      2
    )
  );
}

optimizeAll().catch((err) => {
  console.error("Batch optimization failed:", err);
  process.exit(1);
});
