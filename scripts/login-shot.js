// Screenshots /login at desktop + mobile widths against the local port.
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const OUT = process.argv[2] || "/tmp/login-shots";

(async () => {
  const fs = require("node:fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();
  const errs = [];
  page.on("pageerror", (e) => errs.push(e.message));
  for (const [w, h, name] of [[1440, 900, "desktop"], [390, 844, "mobile"]]) {
    await page.setViewport({ width: w, height: h });
    await page.goto("http://127.0.0.1:8240/login", { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 3500));
    // Freeze animations mid-pose for a stable, representative frame.
    await page.evaluate(() => {
      document.getAnimations().forEach((a) => { a.pause(); a.currentTime = 1200; });
    });
    const ovf = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    await page.screenshot({ path: `${OUT}/login-${name}.png`, fullPage: name === "mobile" });
    console.log(`${name}: horizontal overflow ${ovf}px`);
  }
  console.log("pageerrors:", errs.length ? errs : "none");
  await browser.close();
})();
