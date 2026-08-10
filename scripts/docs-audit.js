// Documentation portal audit: route coverage, responsive layout, navigation,
// search, code-copy affordances and machine-readable discovery endpoints.
//
//   node scripts/docs-audit.js [baseUrl]

const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const BASE = process.argv[2] || "http://127.0.0.1:8240";

const ROUTES = [
  "overview", "quickstart", "authentication", "models", "chat-completions",
  "streaming-tools", "openclaw", "other-runners", "keys-wallets",
  "credits-billing", "limits", "errors", "security",
];

let failures = 0;
const check = (name, ok, detail) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail === undefined ? "" : ` — ${JSON.stringify(detail)}`}`);
  if (!ok) failures++;
};

(async () => {
  for (const slug of ROUTES) {
    const res = await fetch(`${BASE}/docs/${slug}`);
    const body = await res.text();
    check(`/${slug} returns HTML`, res.status === 200 && /Vantis Cards Docs/.test(body), res.status);
  }

  const openapi = await fetch(`${BASE}/docs/openapi.json`);
  const spec = await openapi.json();
  check("OpenAPI document", openapi.status === 200 && spec.openapi === "3.1.0" && spec.paths?.["/chat/completions"]);

  const llms = await fetch(`${BASE}/docs/llms.txt`);
  const llmsBody = await llms.text();
  check("llms.txt discovery", llms.status === 200 && llmsBody.includes("OpenClaw") && llmsBody.includes("openapi.json"));

  const missing = await fetch(`${BASE}/docs/not-a-page`);
  check("unknown docs route is a designed 404", missing.status === 404 && (await missing.text()).includes("Documentation page not found"));

  const browser = await puppeteer.launch({ executablePath: CHROME, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
  for (const vp of [{ name: "mobile", width: 390, height: 844 }, { name: "desktop", width: 1440, height: 900 }]) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.name === "mobile" ? 2 : 1, isMobile: vp.name === "mobile", hasTouch: vp.name === "mobile" });
    const errors = [];
    page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`${BASE}/docs/openclaw`, { waitUntil: "networkidle0", timeout: 40000 });
    const state = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelector("h1")?.textContent,
      sideVisible: getComputedStyle(document.querySelector(".side")).display !== "none",
      mobileVisible: getComputedStyle(document.querySelector(".mobile-menu")).display !== "none",
      copyButtons: document.querySelectorAll("[data-copy]").length,
      navLinks: document.querySelectorAll(".navgroup a").length,
    }));
    check(`${vp.name}: no console errors`, errors.length === 0, errors);
    check(`${vp.name}: no horizontal overflow`, state.scrollWidth <= state.clientWidth + 1, state);
    check(`${vp.name}: page content`, state.h1 === "OpenClaw" && state.copyButtons >= 3, state);
    check(`${vp.name}: navigation adapts`, vp.name === "mobile" ? state.mobileVisible && !state.sideVisible : state.sideVisible && !state.mobileVisible, state);
    check(`${vp.name}: complete navigation`, state.navLinks >= ROUTES.length, state.navLinks);

    if (vp.name === "desktop") {
      await page.evaluate(() => { window.__docsShellProbe = "mounted"; });
      await page.click('.side a[href="/docs/models"]');
      await page.waitForFunction(() => document.querySelector("h1")?.textContent === "Models");
      const route = await page.evaluate(() => ({ path: location.pathname, shell: window.__docsShellProbe, active: document.querySelector('.side a[aria-current="page"]')?.getAttribute("href") }));
      check("desktop: route changes without a document reload", route.path === "/docs/models" && route.shell === "mounted" && route.active === "/docs/models", route);

      await page.focus("#doc-search");
      await page.type("#doc-search", "tool loop");
      await page.waitForSelector("#search-results.on .result");
      const result = await page.$eval("#search-results .result", (el) => ({ text: el.textContent, href: el.getAttribute("href") }));
      check("desktop: search finds tool documentation", /tool|stream/i.test(result.text), result);
    } else {
      await page.click(".mobile-menu summary");
      const opened = await page.$eval(".mobile-menu", (el) => el.hasAttribute("open"));
      check("mobile: menu opens", opened);
      await page.evaluate(() => { window.__docsShellProbe = "mounted"; });
      await page.click('.mobile-panel a[href="/docs/models"]');
      await page.waitForFunction(() => document.querySelector("h1")?.textContent === "Models");
      const route = await page.evaluate(() => ({ path: location.pathname, shell: window.__docsShellProbe, menuOpen: document.querySelector(".mobile-menu")?.hasAttribute("open"), active: document.querySelector('.mobile-panel a[aria-current="page"]')?.getAttribute("href") }));
      check("mobile: route changes without a document reload", route.path === "/docs/models" && route.shell === "mounted" && !route.menuOpen && route.active === "/docs/models", route);
    }
    await page.close();
  }
  await browser.close();

  console.log(failures ? `\n${failures} FAILURES` : "\nALL PASS");
  process.exit(failures ? 1 : 0);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
