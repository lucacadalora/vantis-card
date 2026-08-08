// Headless probe of /login: captures console + page errors and reports what
// the Privy island actually did. Run against the local port, not through CF.
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  const logs = [];
  page.on("console", (m) => logs.push(`[console.${m.type()}] ${m.text()}`));
  page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`));
  page.on("requestfailed", (r) => logs.push(`[reqfail] ${r.url().slice(0, 120)} ${r.failure()?.errorText}`));
  await page.goto("http://127.0.0.1:8240/login", { waitUntil: "networkidle2", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 6000));
  const root = await page.evaluate(() => document.getElementById("privy-root")?.innerHTML?.slice(0, 300));
  console.log("privy-root:", root);
  console.log("--- events ---");
  for (const l of logs.slice(0, 30)) console.log(l);
  await browser.close();
})();
