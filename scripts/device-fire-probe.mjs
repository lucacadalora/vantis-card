// Interaction probe: the full CHAT arm→fire loop on the 3D device with a
// REAL billed inference call, plus the fund-sheet bridge. Needs a carded
// throwaway cookie (mk-throwaway.ts carded) with a funded Inference lane.
// Usage: node scripts/device-fire-probe.mjs <cookieValue> <outdir>
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const [cookieValue, OUT = "/tmp/device-fire"] = process.argv.slice(2);

const results = [];
const t = (name, ok, extra = "") => { results.push([name, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${name}${extra ? ` — ${extra}` : ""}`); };

(async () => {
  const fs = require("node:fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1100, height: 1000 });
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  page.on("dialog", async (d) => { errs.push("NATIVE DIALOG: " + d.message()); await d.dismiss(); });
  await page.setCookie({ name: "vc_session", value: cookieValue, domain: "127.0.0.1", path: "/" });
  await page.evaluateOnNewDocument(() => {
    try { localStorage.setItem("vantis-consent", JSON.stringify({ v: 1, analytics: false, at: new Date().toISOString() })); } catch {}
  });
  await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "networkidle0", timeout: 30000 });
  await page.waitForFunction(() => window.__device?.ready && window.__device.os.booted, { timeout: 20000 });
  await page.waitForFunction(() => !!window.__device.os.meta, { timeout: 10000 });

  const laneBefore = await page.evaluate(() => window.__device.os.meta.lanes.inference.balance_usd);
  t("lane funded before fire", laneBefore > 0.1, `$${laneBefore}`);

  // CHAT: type → first press arms with a quote → second press fires
  await page.evaluate(() => window.__device.setMode(1));
  await new Promise((r) => setTimeout(r, 400));
  await page.type("#dv-input", "In one short sentence: what is a prediction market?");
  await page.click("#dv-go");
  await new Promise((r) => setTimeout(r, 500));
  const armed = await page.evaluate(() => window.__device.os.armed);
  t("first press arms with a quote", !!armed && /UP TO \$/.test(armed.quote), armed?.quote);
  await page.screenshot({ path: `${OUT}/1-armed.png` });

  await page.click("#dv-go");
  await page.waitForFunction(() => { const c = window.__device.os.chat; return c && c.text.length > 0; }, { timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200)); // typewriter mid-flight
  await page.screenshot({ path: `${OUT}/2-typewriter.png` });
  await page.waitForFunction(() => { const c = window.__device.os.chat; return c && c.shown >= c.text.length && c.line; }, { timeout: 30000 });
  const chat = await page.evaluate(() => window.__device.os.chat);
  t("real answer streamed", chat.text.length > 10, chat.text.slice(0, 60));
  t("settle line printed", /VANTIS BURNED/.test(chat.line), chat.line);
  const laneAfter = await page.evaluate(() => window.__device.os.meta.lanes.inference.balance_usd);
  t("lane debited on screen", laneAfter < laneBefore, `$${laneBefore} → $${laneAfter}`);
  await page.screenshot({ path: `${OUT}/3-settled.png` });

  // vireo reacted and returned to idle (not stuck in work)
  const vireo = await page.evaluate(() => window.__device.os.vireo.state);
  t("mascot back from work state", vireo === "idle" || vireo === "happy", vireo);

  // HOME: the alt soft-key opens the real move-funds sheet via the bridge
  await page.evaluate(() => window.__device.setMode(0));
  await new Promise((r) => setTimeout(r, 300));
  await page.click("#dv-alt");
  await page.waitForFunction(() => document.getElementById("msheet")?.classList.contains("on"), { timeout: 4000 })
    .then(() => t("device opens the move-funds sheet", true))
    .catch(() => t("device opens the move-funds sheet", false));
  const sheetTitle = await page.evaluate(() => document.getElementById("m-title")?.textContent);
  t("sheet targets the Inference lane", /Inference/.test(sheetTitle || ""), sheetTitle);
  await page.screenshot({ path: `${OUT}/4-fund-sheet.png` });

  t("zero page errors, zero native dialogs", errs.length === 0, errs.slice(0, 2).join(" | "));
  await browser.close();
  const failed = results.filter(([, ok]) => !ok).length;
  console.log(`\n${results.length - failed} passed, ${failed} failed → shots in ${OUT}`);
  process.exit(failed ? 1 : 0);
})();
