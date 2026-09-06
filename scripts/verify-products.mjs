import puppeteer from "puppeteer-core";
import { mkdir } from "node:fs/promises";

await mkdir("stitch-screenshots/verify", { recursive: true });
const browser = await puppeteer.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
  args: ["--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/products", {
  waitUntil: "networkidle2",
  timeout: 60_000,
});
await new Promise((r) => setTimeout(r, 2000));
await page.screenshot({
  path: "stitch-screenshots/verify/catalogue-images.png",
  fullPage: true,
});
await page.evaluate(() => {
  const button = [...document.querySelectorAll("button")].find((el) =>
    el.textContent?.trim().toUpperCase().includes("VIEW PRODUCT"),
  );
  button?.click();
});
await new Promise((r) => setTimeout(r, 900));
await page.screenshot({ path: "stitch-screenshots/verify/catalogue-popup.png" });
await browser.close();
console.log("ok");
