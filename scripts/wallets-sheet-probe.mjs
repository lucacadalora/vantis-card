// Browser probe for the /wallets move-funds sheet: opens the Fund dialog,
// exercises chips + validation + a real fund/sweep round-trip, and screenshots
// each state. Usage: node scripts/wallets-sheet-probe.mjs <cookieValue> <outdir>
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const [cookieValue, OUT = "/tmp/wallets-sheet"] = process.argv.slice(2);

const results = [];
const t = (name, ok) => { results.push([name, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${name}`); };

(async () => {
  const fs = require("node:fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1000 });
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  page.on("dialog", async (d) => { errs.push(`NATIVE DIALOG APPEARED: ${d.message()}`); await d.dismiss(); });
  await page.setCookie({ name: "vc_session", value: cookieValue, domain: "127.0.0.1", path: "/" });
  await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "networkidle0" });

  await page.waitForSelector(".wl-row", { timeout: 10000 });
  const rows = await page.$$(".wl-row");
  t("two lane rows render", rows.length === 2);

  // Open the Fund sheet on the first lane.
  await page.click('.wl-row [data-a="fund"]');
  await page.waitForFunction(() => document.getElementById("msheet")?.classList.contains("on"), { timeout: 3000 });
  await new Promise((r) => setTimeout(r, 450));
  const title = await page.evaluate(() => document.getElementById("m-title").textContent);
  const avail = await page.evaluate(() => document.getElementById("m-avail").textContent);
  const chips = await page.evaluate(() => [...document.querySelectorAll(".mchip")].map((c) => c.textContent));
  t("sheet opens with lane name", /^Fund /.test(title));
  t("available line shows main balance", /From Main · \$\d+\.\d{2} available/.test(avail));
  console.log(`  title="${title}" avail="${avail}" chips=[${chips.join(", ")}]`);
  const goDisabledEmpty = await page.evaluate(() => document.getElementById("m-go").disabled);
  t("submit disabled while empty", goDisabledEmpty === true);
  await page.screenshot({ path: `${OUT}/sheet-open.png` });

  // Overdraw is refused client-side.
  await page.type("#m-amt", "99999");
  const goDisabledOver = await page.evaluate(() => document.getElementById("m-go").disabled);
  t("submit disabled on overdraw", goDisabledOver === true);

  // Chip fills the field and arms the button with the live amount.
  await page.evaluate(() => { document.getElementById("m-amt").value = ""; });
  const hasChip = chips.length > 0 && chips[0].startsWith("$");
  if (hasChip) {
    await page.click(".mchip");
    const goLabel = await page.evaluate(() => document.getElementById("m-go").textContent);
    const goArmed = await page.evaluate(() => !document.getElementById("m-go").disabled);
    t("chip arms Move $X button", goArmed && /^Move \$\d/.test(goLabel));
    await page.screenshot({ path: `${OUT}/sheet-armed.png` });

    // Real fund round-trip → toast, sheet closed, balances moved.
    const before = await page.evaluate(() => document.getElementById("wl-main").textContent);
    await page.click("#m-go");
    await page.waitForFunction(() => document.getElementById("toast")?.classList.contains("on"), { timeout: 8000 });
    const toastTxt = await page.evaluate(() => document.getElementById("toast").textContent);
    t("fund lands with toast", /^Moved \$\d+\.\d{2} to /.test(toastTxt));
    await new Promise((r) => setTimeout(r, 700));
    const after = await page.evaluate(() => document.getElementById("wl-main").textContent);
    t("main balance moved", before !== after);
    const sheetGone = await page.evaluate(() => !document.getElementById("msheet").classList.contains("on"));
    t("sheet closed after fund", sheetGone);
    await page.screenshot({ path: `${OUT}/after-fund.png` });

    // Sweep it straight back → sweep toast, balance restored.
    await page.click('.wl-row [data-a="sweep"]');
    await page.waitForFunction(() => /Swept/.test(document.getElementById("toast").textContent), { timeout: 8000 });
    await new Promise((r) => setTimeout(r, 700));
    const restored = await page.evaluate(() => document.getElementById("wl-main").textContent);
    t("sweep restores main balance", restored === before);
  } else {
    console.log("  (main empty — skipping fund round-trip, checking empty-state hint)");
    const hint = await page.evaluate(() => document.querySelector("#m-chips .mhint")?.textContent || "");
    t("empty-main hint shown", /Main is empty/.test(hint));
  }

  // Esc closes the sheet.
  await page.click('.wl-row [data-a="fund"]');
  await page.waitForFunction(() => document.getElementById("msheet")?.classList.contains("on"), { timeout: 3000 });
  await page.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 400));
  const escClosed = await page.evaluate(() => !document.getElementById("msheet").classList.contains("on"));
  t("Escape closes the sheet", escClosed);

  // Mobile: sheet becomes a bottom sheet.
  await page.setViewport({ width: 390, height: 780 });
  await page.click('.wl-row [data-a="fund"]');
  await page.waitForFunction(() => document.getElementById("msheet")?.classList.contains("on"), { timeout: 3000 });
  await new Promise((r) => setTimeout(r, 450));
  const rect = await page.evaluate(() => {
    const r = document.getElementById("msheet").getBoundingClientRect();
    return { bottom: r.bottom, width: r.width, vw: innerWidth, vh: innerHeight };
  });
  t("mobile bottom-sheet spans full width", Math.abs(rect.width - rect.vw) < 2 && Math.abs(rect.bottom - rect.vh) < 2);
  await page.screenshot({ path: `${OUT}/sheet-mobile.png` });

  t("no page errors, no native dialogs", errs.length === 0);
  if (errs.length) console.log("errors:", errs);
  await browser.close();
  if (results.some(([, ok]) => !ok)) process.exit(1);
})();
