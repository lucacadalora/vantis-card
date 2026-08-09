// CSP violation sweep. Loads every public page through the real edge, opens
// the Privy sign-in modal, and records every securitypolicyviolation the
// browser reports. Run this BEFORE flipping CSP_REPORT_ONLY to 0 — and again
// after, to prove nothing broke.
//   node scripts/csp-probe.mjs [base]
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const BASE = process.argv[2] || "https://card.vantis.sh";

const PAGES = ["/", "/login", "/overview", "/reserve", "/card/lucaxyzz", "/burns"];
const violations = [];
const pageErrors = [];

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });

  for (const path of PAGES) {
    const p = await browser.newPage();
    await p.setViewport({ width: 1200, height: 900 });
    p.on("pageerror", (e) => pageErrors.push(`${path}: ${e.message}`));
    // The browser fires this for every blocked (or would-be-blocked) resource.
    await p.evaluateOnNewDocument(() => {
      window.__csp = [];
      document.addEventListener("securitypolicyviolation", (e) => {
        window.__csp.push({ directive: e.effectiveDirective, blocked: e.blockedURI, sample: (e.sample || "").slice(0, 60) });
      });
    });
    const res = await p.goto(BASE + path, { waitUntil: "networkidle2", timeout: 45000 }).catch(() => null);
    await new Promise((r) => setTimeout(r, 2500));

    // On the login page, open the real Privy modal — the iframe is the whole
    // reason this policy exists, so it must be exercised, not assumed.
    if (path === "/login") {
      await p.waitForSelector("#privy-root .pv-cta", { timeout: 20000 }).catch(() => {});
      await p.evaluate(() => document.querySelector("#privy-root .pv-cta")?.click());
      await new Promise((r) => setTimeout(r, 6000));
      const frames = p.frames().filter((f) => /privy\.io/.test(f.url()));
      console.log(`  privy iframes present: ${frames.length}`);
    }

    const v = await p.evaluate(() => window.__csp || []);
    v.forEach((x) => violations.push({ path, ...x }));
    console.log(`${path.padEnd(18)} ${res ? res.status() : "ERR"}  violations: ${v.length}`);
    await p.close();
  }

  await browser.close();

  console.log("\n── CSP violations ──");
  if (!violations.length) console.log("none");
  const seen = new Set();
  for (const v of violations) {
    const key = `${v.directive}|${v.blocked}|${v.sample}`;
    if (seen.has(key)) continue;
    seen.add(key);
    console.log(`  [${v.directive}] ${v.blocked || "(inline)"} ${v.sample ? "— " + v.sample : ""}  (${v.path})`);
  }
  console.log("\n── page errors ──");
  console.log(pageErrors.length ? pageErrors.join("\n") : "none");
  if (violations.length || pageErrors.length) process.exit(1);
})();
