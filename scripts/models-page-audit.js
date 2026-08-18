// Audit /models in a real browser: no horizontal overflow at any width, no
// console errors, and — the point of the page — every price on screen matches
// what /v1/models says the gateway will bill.
//
//   node scripts/models-page-audit.js [baseUrl]

const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const BASE = process.argv[2] || "http://127.0.0.1:8240";

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844, dsf: 2, mobile: true },
  { name: "tablet", width: 820, height: 1180, dsf: 2, mobile: false },
  { name: "desktop", width: 1440, height: 900, dsf: 1, mobile: false },
];

let failures = 0;
const check = (name, ok, detail) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail !== undefined ? ` — ${JSON.stringify(detail)}` : ""}`);
  if (!ok) failures++;
};

(async () => {
  const api = await (await fetch(`${BASE}/v1/models`)).json();
  const priced = api.pricing;

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.dsf, isMobile: vp.mobile });
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(String(e)));

    await page.goto(BASE + "/models", { waitUntil: "networkidle2", timeout: 40000 });

    const res = await page.evaluate(() => {
      const de = document.documentElement;
      // The table is allowed to scroll inside its own wrapper; the PAGE is not.
      const wrapOverflow = [...document.querySelectorAll(".mtable-wrap")]
        .every((w) => getComputedStyle(w).overflowX === "auto");
      return {
        pageOverflow: de.scrollWidth - de.clientWidth,
        wrapScrolls: wrapOverflow,
        rows: document.querySelectorAll(".mtable tbody tr").length,
        ids: [...document.querySelectorAll(".mid")].map((e) => e.textContent.trim()),
        prices: [...document.querySelectorAll(".mtable tbody tr")].map((tr) => {
          const c = tr.querySelectorAll("td");
          return {
            id: tr.querySelector(".mid").textContent.trim(),
            // allowlist rows print "Allowlist" (.mallow) instead of a price
            input: (c[4].querySelector(".mprice") || c[4].querySelector(".mallow")).textContent.trim(),
            output: (c[5].querySelector(".mprice") || c[5].querySelector(".mallow")).textContent.trim(),
          };
        }),
        emoji: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(document.body.innerText),
        // Same rule as scripts/page-audit.js: WCAG 2.5.5 exempts a link that
        // sits inline inside a much longer sentence — enlarging those would
        // break the prose around them.
        tapTargets: [...document.querySelectorAll("a,button")].filter((b) => {
          const r = b.getBoundingClientRect();
          const own = (b.innerText || "").trim().length;
          const parentText = ((b.parentElement && b.parentElement.innerText) || "").trim().length;
          if (parentText > own * 3 && getComputedStyle(b).display.startsWith("inline")) return false;
          return r.width > 0 && r.height > 0 && r.height < 32 && own > 2;
        }).map((b) => ({ t: b.innerText.trim().slice(0, 24), h: Math.round(b.getBoundingClientRect().height) })),
      };
    });

    check(`${vp.name}: no page-level horizontal overflow`, res.pageOverflow <= 0, res.pageOverflow);
    check(`${vp.name}: wide table scrolls inside its own container`, res.wrapScrolls);
    check(`${vp.name}: no console errors`, errors.length === 0, errors.slice(0, 3));
    check(`${vp.name}: every catalog model has a row`, res.rows === priced.length, { rows: res.rows, api: priced.length });
    check(`${vp.name}: no emoji in UI`, !res.emoji);
    if (vp.mobile) check(`${vp.name}: tap targets >= 32px`, res.tapTargets.length === 0, res.tapTargets);

    // The whole point: what the page says is what the gateway bills.
    const mismatched = res.prices.filter((row) => {
      const m = priced.find((p) => p.model === row.id);
      if (!m) return true;
      // The allow-listed pool lane is unmetered (rate 0/0 by construction) and
      // the page prints "Allowlist" there instead of a price — that IS the match.
      if (m.usd_per_1m_input === 0 && m.usd_per_1m_output === 0) return !(row.input === "Allowlist" && row.output === "Allowlist");
      return row.input !== `$${m.usd_per_1m_input.toFixed(2)}` || row.output !== `$${m.usd_per_1m_output.toFixed(2)}`;
    });
    check(`${vp.name}: page prices match /v1/models exactly`, mismatched.length === 0, mismatched);

    await page.screenshot({ path: `models-${vp.name}.png`, fullPage: vp.name === "desktop" });
    await page.close();
  }

  await browser.close();
  console.log(failures ? `\n${failures} check(s) failed` : "\nAll checks passed");
  process.exit(failures ? 1 : 0);
})();
