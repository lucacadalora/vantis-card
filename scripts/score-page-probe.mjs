// Drives the REAL score page in a browser — the probe the TDZ bug proved we
// need: API-level tests can't see a script that dies before its first fetch.
// Usage: node scripts/score-page-probe.mjs <uid> <cookieValue> <outdir>
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const [uid, cookieValue, OUT = "/tmp/score-page", STEP = "score"] = process.argv.slice(2);

(async () => {
  const fs = require("node:fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 900 });
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  await page.setCookie({ name: "vc_session", value: cookieValue, domain: "127.0.0.1", path: "/" });
  await page.goto(`http://127.0.0.1:8240/onboard/score?uid=${uid}&step=${STEP}`, { waitUntil: "domcontentloaded" });

  await new Promise((r) => setTimeout(r, 2600));
  const midLines = await page.evaluate(() => document.querySelectorAll("#aglog .ln").length);
  const orbThere = await page.evaluate(() => !!document.querySelector("#orb-root canvas"));
  const midScan = await page.evaluate(() => document.querySelectorAll(".ss.scan, .ss.done, .ss.skip").length);
  await page.screenshot({ path: `${OUT}/working.png` });

  // Wait for the real run to finish (result section appears).
  await page.waitForFunction(() => document.getElementById("result")?.style.display === "block", { timeout: 120000 });
  const finalLines = await page.evaluate(() => document.querySelectorAll("#aglog .ln").length);
  const doneStages = await page.evaluate(() => document.querySelectorAll(".brow.done").length);
  const scanSettled = await page.evaluate(() => document.querySelectorAll(".ss.done, .ss.skip").length);
  const score = await page.evaluate(() => document.getElementById("score")?.textContent);
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({ path: `${OUT}/result.png` });

  const keysecShown = await page.evaluate(() => document.getElementById("keysec")?.style.display !== "none");
  const grantText = await page.evaluate(() => document.getElementById("grant")?.textContent || "");
  const revealCard = await page.evaluate(() => {
    const h = document.querySelector("#rv-card .chandle")?.textContent || "";
    return h.startsWith("@") && h.length > 2;
  });
  const revealTitle = await page.evaluate(() => document.getElementById("rv-title")?.textContent || "");

  const checks = [
    ["zero page errors", errs.length === 0],
    ["orb rendered", orbThere],
    ["log spoke early (>=2 lines mid-run)", midLines >= 2],
    ["social scan active mid-run", midScan >= 1],
    ["log carried the full run", finalLines >= 8],
    ["all stages done", doneStages === 4],
    ["all 3 social slots settled", scanSettled === 3],
    ["score rendered", /^\d+$/.test(String(score))],
    ["reveal card filled", revealCard],
    ...(STEP === "rescore"
      ? [
          ["rerun: key never reprinted", !keysecShown],
          ["rerun: grant marked unchanged", /unchanged/.test(grantText)],
          ["rerun: refreshed headline", /agent has spoken/i.test(revealTitle)],
        ]
      : [
          ["fresh: key shown", keysecShown],
          ["fresh: congratulations headline", /congratulations/i.test(revealTitle)],
        ]),
  ];
  for (const [name, ok] of checks) console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (errs.length) console.log("pageerrors:", errs);
  await browser.close();
  process.exit(checks.some(([, ok]) => !ok) ? 1 : 0);
})();
