// Records the /wallets fund-flow feel as frames: open sheet → chip → Move →
// numbers roll + bar glides + toast. Usage: node scripts/wallets-feel-gif.mjs <cookieValue> <outdir>
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const [cookieValue, OUT = "/tmp/wallets-gif"] = process.argv.slice(2);

(async () => {
  const fs = require("node:fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 980, height: 760, deviceScaleFactor: 1.4 });
  await page.setCookie({ name: "vc_session", value: cookieValue, domain: "127.0.0.1", path: "/" });
  await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "networkidle0" });
  await page.waitForSelector(".wl-row");
  await page.evaluate(() => window.scrollTo(0, 120));

  let n = 0;
  const shot = async () => page.screenshot({ path: `${OUT}/f${String(n++).padStart(3, "0")}.png` });
  const burst = async (count, gapMs) => { for (let i = 0; i < count; i++) { await shot(); await new Promise((r) => setTimeout(r, gapMs)); } };

  const domClick = (sel) => page.evaluate((s) => document.querySelector(s)?.click(), sel);

  await burst(3, 120); // resting state
  await domClick('.wl-row [data-a="fund"]');
  await burst(8, 90); // sheet springs in
  await page.waitForSelector("#m-chips .mchip");
  await page.evaluate(() => {
    const chips = [...document.querySelectorAll("#m-chips .mchip")];
    (chips.find((c) => c.textContent === "$10") || chips[0]).click();
  });
  await burst(4, 100);
  await domClick("#m-go");
  await burst(22, 70); // roll + bar + toast
  await burst(6, 160); // settle
  // sweep it back for the falling beat
  await domClick('.wl-row [data-a="sweep"]');
  await burst(22, 70);
  await burst(4, 160);

  await browser.close();
  console.log(`${n} frames -> ${OUT}`);
})();
