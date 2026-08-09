// Browser probe for the /wallets 3D device. Headless WebGL via SwiftShader.
// Usage: node scripts/device-probe.mjs <cookieValue> <outdir>
// Asserts: zero page errors, island mounts, the canvas actually draws
// (sampled pixels are not uniformly black), all six modes render, the DOM
// bar follows the mode, and the console view folded away.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const [cookieValue, OUT = "/tmp/device-probe"] = process.argv.slice(2);

const results = [];
const t = (name, ok, extra = "") => { results.push([name, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${name}${extra ? ` — ${extra}` : ""}`); };

(async () => {
  const fs = require("node:fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1100, height: 1100, deviceScaleFactor: 1 });
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  page.on("console", (m) => { if (m.type() === "error") errs.push("console: " + m.text()); });
  await page.setCookie({ name: "vc_session", value: cookieValue, domain: "127.0.0.1", path: "/" });
  // pre-answer the consent banner so it never covers a shot
  await page.evaluateOnNewDocument(() => {
    try { localStorage.setItem("vantis-consent", JSON.stringify({ v: 1, analytics: false, at: new Date().toISOString() })); } catch {}
  });
  await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "networkidle0", timeout: 30000 });

  await page.waitForFunction(() => window.__device?.ready, { timeout: 15000 }).catch(() => {});
  const ready = await page.evaluate(() => !!window.__device?.ready);
  t("island mounts (__device.ready)", ready);
  t("dv-on class set", await page.evaluate(() => document.body.classList.contains("dv-on")));
  t("console view folded", await page.evaluate(() => !document.getElementById("dv-console").open));

  // let the boot sequence finish and the meta load
  await new Promise((r) => setTimeout(r, 2600));

  // the canvas must actually contain a rendered image
  const sample = await page.evaluate(() => {
    const url = window.__device.snapshot();
    return new Promise((res) => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = 128; c.height = 128;
        const x = c.getContext("2d");
        x.drawImage(img, 0, 0, 128, 128);
        const d = x.getImageData(0, 0, 128, 128).data;
        let lit = 0, green = 0;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i] + d[i + 1] + d[i + 2] > 40) lit++;
          if (d[i + 1] > 120 && d[i + 1] > d[i] * 1.6) green++;
        }
        res({ lit, green, total: d.length / 4 });
      };
      img.src = url;
    });
  });
  t("canvas renders (pixels lit)", sample.lit > sample.total * 0.1, `${Math.round((sample.lit / sample.total) * 100)}% lit`);
  t("brand green present", sample.green > 20, `${sample.green} green px`);

  // walk all six modes; screenshot each; DOM bar must follow
  const MODES = ["HOME", "CHAT", "SEARCH", "X", "LEDGER", "LANES"];
  for (let m = 0; m < 6; m++) {
    await page.evaluate((mm) => window.__device.setMode(mm), m);
    await new Promise((r) => setTimeout(r, 500));
    const mode = await page.evaluate(() => window.__device.os.mode);
    t(`mode ${MODES[m]} selected`, mode === m);
    await page.screenshot({ path: `${OUT}/mode-${m}-${MODES[m].toLowerCase()}.png` });
  }
  const inputVisible = await page.evaluate(() => {
    window.__device.setMode(1); // CHAT
    return new Promise((res) => setTimeout(() => res(document.getElementById("dv-input-row").style.display !== "none"), 200));
  });
  t("input row appears on CHAT", inputVisible);
  const inputHidden = await page.evaluate(() => {
    window.__device.setMode(0); // HOME
    return new Promise((res) => setTimeout(() => res(document.getElementById("dv-input-row").style.display === "none"), 200));
  });
  t("input row hides on HOME", inputHidden);

  // classic console still intact underneath (fallback contract)
  await page.evaluate(() => { document.getElementById("dv-console").open = true; });
  await page.waitForSelector(".wl-row", { timeout: 8000 }).then(() => t("console rows still render", true)).catch(() => t("console rows still render", false));

  t("zero page errors", errs.length === 0, errs.slice(0, 3).join(" | "));
  await page.screenshot({ path: `${OUT}/full-page.png`, fullPage: true });
  await browser.close();
  const failed = results.filter(([, ok]) => !ok).length;
  console.log(`\n${results.length - failed} passed, ${failed} failed → shots in ${OUT}`);
  process.exit(failed ? 1 : 0);
})();
