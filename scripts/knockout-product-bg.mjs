import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve("public/images/products");
const files = (await readdir(dir)).filter((name) => name.endsWith(".png"));

function luminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function knockOutBlack(file) {
  const input = path.join(dir, file);
  const { data, info } = await sharp(input)
    .rotate()
    .resize(1800, 1800, { fit: "inside", withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];
  let head = 0;

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const i = y * width + x;
    if (visited[i]) return;
    const o = i * 4;
    if (luminance(data[o], data[o + 1], data[o + 2]) > 30) return;
    visited[i] = 1;
    queue.push(i);
  };

  for (let x = 0; x < width; x++) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    push(0, y);
    push(width - 1, y);
  }

  while (head < queue.length) {
    const i = queue[head++];
    const x = i % width;
    const y = (i / width) | 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  for (let i = 0; i < width * height; i++) {
    if (!visited[i]) continue;
    const o = i * 4;
    const L = luminance(data[o], data[o + 1], data[o + 2]);
    const alpha = L < 10 ? 0 : Math.min(255, Math.round(((L - 10) / 20) * 255));
    data[o + 3] = Math.min(data[o + 3], alpha);
  }

  await sharp(data, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9, palette: false })
    .toFile(input);

  console.log("processed", file);
}

for (const file of files) {
  await knockOutBlack(file);
}

console.log("done");
