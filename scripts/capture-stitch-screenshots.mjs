import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const OUT = path.resolve("stitch-screenshots");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const pages = [
  { name: "01-home", path: "/" },
  { name: "02-about", path: "/about" },
  { name: "03-solutions", path: "/solutions" },
  { name: "04-products", path: "/products" },
  { name: "05-product-detail-liver-ok", path: "/products/liver-ok" },
  { name: "06-resources", path: "/resources" },
  { name: "07-contact", path: "/contact" },
];

const viewports = [
  { folder: "desktop", width: 1440, height: 900 },
  { folder: "mobile", width: 390, height: 844 },
];

await mkdir(OUT, { recursive: true });

const chromePath =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--hide-scrollbars"],
});

for (const vp of viewports) {
  const dir = path.join(OUT, vp.folder);
  await mkdir(dir, { recursive: true });
  const page = await browser.newPage();
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
  });

  for (const route of pages) {
    const url = `${BASE}${route.path}`;
    console.log(`Capturing ${vp.folder} ${url}`);
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60_000 });
    await sleep(800);
    await page.evaluate(() => {
      document.querySelectorAll("video").forEach((video) => {
        video.pause();
        video.currentTime = 0.5;
      });
    });
    await page.evaluate(async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      for (let y = 0; y < height; y += 500) {
        window.scrollTo(0, y);
        await delay(180);
      }
      window.scrollTo(0, 0);
      await delay(250);
    });
    await sleep(400);
    const file = path.join(dir, `${route.name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(`Wrote ${file}`);
  }

  await page.close();
}

await browser.close();
console.log("Done");
