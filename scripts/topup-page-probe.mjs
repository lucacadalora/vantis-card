// Headless probe of the top-up UI on an isolated instance: /wallets live
// section (staging viewer), placeholder (non-staging), sandbox checkout page,
// return page. Asserts no page errors, no native dialogs, no horizontal
// overflow at 390/1200, no emoji, and screenshots each state.
//
//   node scripts/topup-page-probe.mjs <base> <cookieA> <cookieB> <outdir>
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const [BASE = "http://127.0.0.1:8299", ckA, ckB, OUT = "/tmp/topup-probe"] = process.argv.slice(2);
const fs = require("node:fs");
fs.mkdirSync(OUT, { recursive: true });
const results = [];
const t = (name, ok, note) => { results.push([name, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${name}${note ? "  — " + note : ""}`); };
const host = new URL(BASE).hostname;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"] });
async function newPage(cookie, w, h) {
  const page = await browser.newPage();
  await page.setViewport({ width: w, height: h });
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  page.on("dialog", async (d) => { errs.push(`NATIVE DIALOG: ${d.message()}`); await d.dismiss(); });
  page.on("console", (m) => { if (m.type() === "error") errs.push("console: " + m.text()); });
  if (cookie) await page.setCookie({ name: "vc_session", value: cookie, domain: host, path: "/" });
  return { page, errs };
}
const overflow = (page) => page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
const emoji = (page) => page.evaluate(() => /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(document.body.innerText));

try {
  // A: live section, desktop
  {
    const { page, errs } = await newPage(ckA, 1200, 1400);
    await page.goto(`${BASE}/wallets#wl-topup`, { waitUntil: "load", timeout: 30000 });
    await page.waitForSelector("#wl-topup[data-topup-live]", { timeout: 10000 });
    await page.evaluate(() => document.getElementById("wl-topup").scrollIntoView({ block: "start" }));
    await new Promise((r) => setTimeout(r, 1200));
    const sec = await page.$("#wl-topup");
    await sec.screenshot({ path: `${OUT}/wallets-topup-desktop.png` });
    t("A desktop: live section renders", true);
    const payHidden = await page.$eval("#wl-topup [data-tu-pay]", (el) => getComputedStyle(el).display === "none");
    t("A desktop: USDC panel hidden until used", payHidden);
    t("A desktop: no overflow", !(await overflow(page)));
    t("A desktop: no emoji", !(await emoji(page)));
    // presets → amount input
    await page.click('#wl-topup [data-amt="25"]');
    const v = await page.$eval("#wl-topup [data-tu-amount]", (el) => el.value);
    t("A: preset click sets amount", v === "25", v);
    const dest = await page.$eval("#wl-topup [data-tu-dest]", (el) => el.options[el.selectedIndex].textContent);
    t("A: default destination is the Inference lane", /Inference/.test(dest), dest);
    // Phantom button → USDC panel (no wallet in headless → message + QR)
    await page.click("#wl-topup [data-tu-sol]");
    await page.waitForFunction(() => { const p = document.querySelector("#wl-topup [data-tu-pay]"); return p && !p.hidden; }, { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 1500));
    const payErr = await page.$eval("#wl-topup [data-tu-pay-err]", (el) => el.textContent);
    t("A: no Phantom → helpful message + QR path", /Phantom was not detected/.test(payErr), payErr);
    const qr = await page.$eval("#wl-topup [data-tu-qr]", (el) => el.querySelector("svg") !== null);
    t("A: QR rendered", qr);
    const link = await page.$eval("#wl-topup [data-tu-paylink]", (el) => el.getAttribute("href"));
    t("A: solana: pay link", /^solana:/.test(link || ""), (link || "").slice(0, 60));
    await page.evaluate(() => { const d = document.querySelector("#wl-topup .tu-qr"); if (d) d.open = true; });
    await new Promise((r) => setTimeout(r, 400));
    await sec.screenshot({ path: `${OUT}/wallets-topup-usdc-panel.png` });
    // Card (sandbox) → navigates to the sandbox page
    await page.click("#wl-topup [data-tu-cancel]");
    await page.click("#wl-topup [data-tu-card]");
    await page.waitForFunction(() => location.pathname.startsWith("/topup/sandbox/"), { timeout: 15000 });
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: `${OUT}/sandbox-checkout.png`, fullPage: true });
    t("A: card button → sandbox checkout page", true);
    const band = await page.evaluate(() => /sandbox/i.test(document.body.innerText));
    t("sandbox: labelled", band);
    // pay → return page
    await Promise.all([page.waitForNavigation({ waitUntil: "load", timeout: 15000 }), page.click("form[action$='/pay'] button")]);
    await new Promise((r) => setTimeout(r, 600));
    const ret = await page.evaluate(() => document.body.innerText);
    t("return page: credited", /Credits are on your card/.test(ret) && /credited/.test(ret));
    await page.screenshot({ path: `${OUT}/return-credited.png`, fullPage: true });
    // back to wallets: history shows the row
    await page.goto(`${BASE}/wallets#wl-topup`, { waitUntil: "load", timeout: 30000 });
    await page.waitForSelector("#wl-topup [data-tu-hist] .tu-hrow", { timeout: 10000 });
    const hist = await page.$eval("#wl-topup [data-tu-hist]", (el) => el.textContent);
    t("history: shows the credited sandbox row", /sandbox/i.test(hist) && /credited/.test(hist));
    t("A: no page errors / dialogs", errs.length === 0, errs.join(" | ").slice(0, 300));
    await page.close();
  }
  // A: mobile
  {
    const { page, errs } = await newPage(ckA, 390, 900);
    await page.goto(`${BASE}/wallets#wl-topup`, { waitUntil: "load", timeout: 30000 });
    await page.waitForSelector("#wl-topup[data-topup-live]", { timeout: 10000 });
    await page.evaluate(() => document.getElementById("wl-topup").scrollIntoView({ block: "start" }));
    await new Promise((r) => setTimeout(r, 1200));
    const sec = await page.$("#wl-topup");
    await sec.screenshot({ path: `${OUT}/wallets-topup-mobile.png` });
    t("A mobile: no overflow", !(await overflow(page)));
    const tap = await page.$$eval("#wl-topup button", (bs) => bs.filter((b) => b.offsetParent !== null).map((b) => b.getBoundingClientRect().height));
    t("A mobile: buttons ≥ 32px tall", tap.every((h) => h >= 32), tap.map((h) => Math.round(h)).join(","));
    t("A mobile: no page errors", errs.length === 0, errs.join(" | ").slice(0, 200));
    await page.close();
  }
  // B: placeholder
  {
    const { page, errs } = await newPage(ckB, 1200, 1200);
    await page.goto(`${BASE}/wallets#wl-topup`, { waitUntil: "load", timeout: 30000 });
    await page.waitForSelector("#wl-topup", { timeout: 10000 });
    const live = await page.$("#wl-topup[data-topup-live]");
    t("B: placeholder (no live section)", live === null);
    const txt = await page.$eval("#wl-topup", (el) => el.textContent);
    t("B: placeholder copy intact", /x402/.test(txt) && /Not built yet/.test(txt));
    t("B: no page errors", errs.length === 0, errs.join(" | ").slice(0, 200));
    await page.close();
  }
} finally {
  await browser.close();
}
const fails = results.filter((r) => !r[1]);
console.log(`\n${results.length - fails.length}/${results.length} passed${fails.length ? " — FAILURES: " + fails.map((f) => f[0]).join(" | ") : ""}`);
process.exit(fails.length ? 1 : 0);
