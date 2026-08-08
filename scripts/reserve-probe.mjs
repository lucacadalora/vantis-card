// Browser probe of /reserve: type a handle key-by-key, availability appears,
// card fills live, Reserve click lands on /login. Zero page errors required.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const OUT = process.argv[2] || "/tmp/reserve-probe";

(async () => {
  const fs = require("node:fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox", "--autoplay-policy=no-user-gesture-required"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 1100 });
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  await page.goto("http://127.0.0.1:8240/reserve", { waitUntil: "networkidle2" });

  await page.click("#handle");
  await page.type("#handle", "freshbuilder42", { delay: 55 });
  await new Promise((r) => setTimeout(r, 700));

  const stateText = await page.evaluate(() => document.getElementById("state")?.textContent || "");
  const cardHandle = await page.evaluate(() => document.querySelector("#rsv-card .chandle")?.textContent || "");
  const btnText = await page.evaluate(() => document.getElementById("reserve")?.textContent || "");
  const btnEnabled = await page.evaluate(() => !document.getElementById("reserve")?.disabled);
  await page.screenshot({ path: `${OUT}/reserve.png` });

  const pageHtml = await page.content();
  await page.click("#reserve");
  await new Promise((r) => setTimeout(r, 1400));
  const landed = page.url();

  const checks = [
    ["zero page errors", errs.length === 0],
    ["availability shown", /unclaimed|reserved/.test(stateText)],
    ["card fills live", cardHandle === "@freshbuilder42"],
    ["button names the handle", /freshbuilder42/.test(btnText)],
    ["button enabled", btnEnabled],
    ["reserve opens the Privy gate", /\/login/.test(landed)],
    ["never-converts pledge on page", /never convert to \$VANTIS/.test(pageHtml)],
  ];
  for (const [name, ok] of checks) console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (errs.length) console.log("pageerrors:", errs);
  await browser.close();
  process.exit(checks.some(([, ok]) => !ok) ? 1 : 0);
})();
