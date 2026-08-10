// UI probe for the /wallets API-keys panel: seed a throwaway card-holder,
// drive the armed two-click rotate in a real browser, assert the one-time
// reveal renders, screenshot, tear down. Run with .env sourced.
import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
const puppeteer = require2("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
import { Database } from "bun:sqlite";
import { createHmac, randomUUID } from "crypto";

const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const SHOT = process.env.SHOT || "/tmp/claude-1000/-home-ubuntu/2f95e351-94e1-4908-81a0-fa263d6eeb33/scratchpad/wl-keys.png";
const db = new Database("/home/ubuntu/projects/vantis-card/data/vantis-cards.db");
const SECRET = process.env.VANTIS_CARD_SESSION_SECRET;
if (!SECRET) throw new Error("source .env");

let pass = 0, fail = 0;
const ok = (n, c, d = "") => { if (c) { pass++; console.log(`  PASS ${n}`); } else { fail++; console.log(`  FAIL ${n} ${d}`); } };

const uid = randomUUID();
const tag = `kui_${Date.now().toString(36)}`;
db.run(`INSERT INTO users (id, x_username, x_user_id, x_name, scored_at, score, score_tier, usd_balance, api_key, api_key_created_at)
        VALUES (?, ?, ?, ?, datetime('now'), 50, 'Standard', 0.05, ?, datetime('now'))`,
  [uid, tag, tag, "Keys UI Probe", `vcard_${randomUUID().replace(/-/g, "")}`]);
db.run(`INSERT INTO cards (user_id, handle, tier, grant_usd) VALUES (?, ?, 'Standard', 0.05)`, [uid, tag]);

const body = Buffer.from(JSON.stringify({ d: `did:probe:${tag}`, u: uid, e: Date.now() + 3600_000 }), "utf8").toString("base64url");
const cookieVal = `${body}.${createHmac("sha256", SECRET).update(body).digest("hex")}`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
try {
  await browser.defaultBrowserContext().overridePermissions("https://card.vantis.sh", ["clipboard-read", "clipboard-write", "clipboard-sanitized-write"]).catch(() => {});
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.setCookie({ name: "vc_session", value: cookieVal, domain: "card.vantis.sh", path: "/", httpOnly: true, secure: true });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto("https://card.vantis.sh/wallets", { waitUntil: "networkidle2", timeout: 30000 });
  await page.waitForFunction(() => document.querySelectorAll("#wl-keys-list [data-rotate]").length >= 1, { timeout: 10000 }).catch(() => {});

  const st = await page.evaluate(() => {
    const rows = [...document.querySelectorAll("#wl-keys-list .wl-keyrow")];
    return {
      panel: !!document.getElementById("wl-keys"),
      rows: rows.length,
      labels: rows.map((r) => r.firstElementChild.children[0].textContent),
      prefixes: rows.map((r) => r.firstElementChild.children[1].textContent),
    };
  });
  ok("panel present", st.panel);
  ok("three key rows", st.rows === 3, JSON.stringify(st));
  ok("prefixes rendered", st.prefixes.every((p) => /^vcard_/.test(p)), JSON.stringify(st.prefixes));

  // armed two-click rotate on the main key
  const armed = await page.evaluate(() => {
    const b = document.querySelector('[data-rotate="main"]');
    b.click();
    return b.textContent;
  });
  ok("first click arms", armed.indexOf("Confirm") === 0, armed);

  await page.evaluate(() => document.querySelector('[data-rotate="main"]').click());
  await page.waitForFunction(() => (document.getElementById("wl-keys-reveal").textContent || "").indexOf("vcard_") !== -1, { timeout: 10000 });
  const reveal = await page.evaluate(() => document.getElementById("wl-keys-reveal").textContent);
  ok("reveal rendered once", reveal.includes("shown once") && reveal.includes("vcard_"));
  const dbKey = db.query("SELECT api_key FROM users WHERE id = ?").get(uid).api_key;
  ok("db key matches reveal", reveal.includes(dbKey));

  // fonts resolve from the page's real tokens (no inline-style guesses)
  const fonts = await page.evaluate(() => ({
    prefix: getComputedStyle(document.querySelector(".wl-keyrow .kp")).fontFamily,
    label: getComputedStyle(document.querySelector(".wl-keyrow .kl")).fontFamily,
    code: getComputedStyle(document.querySelector(".wl-reveal code")).fontFamily,
  }));
  ok("prefix uses mono stack", /SF Mono|ui-monospace/.test(fonts.prefix), fonts.prefix);
  ok("label uses display stack", /Space Grotesk/.test(fonts.label), fonts.label);
  ok("reveal code uses mono stack", /SF Mono|ui-monospace/.test(fonts.code), fonts.code);

  // Copy button puts the full key on the clipboard and confirms
  await page.evaluate(() => document.querySelector(".wl-reveal [data-copy]").click());
  await page.waitForFunction(() => document.querySelector(".wl-reveal [data-copy]").textContent === "Copied", { timeout: 5000 });
  const clip = await page.evaluate(() => navigator.clipboard.readText().catch(() => null));
  ok("clipboard holds the key", clip === dbKey, String(clip).slice(0, 16));
  await page.waitForFunction(() => document.querySelector(".wl-reveal [data-copy]").textContent === "Copy", { timeout: 5000 });
  ok("copy label resets", true);
  ok("no page errors", errors.length === 0, errors.join(" | "));

  await page.evaluate(() => document.getElementById("wl-keys").scrollIntoView({ block: "start" }));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: SHOT });
  console.log("shot:", SHOT);
} finally {
  await browser.close();
  db.run("DELETE FROM credit_transactions WHERE user_id = ?", [uid]);
  db.run("DELETE FROM admin_events WHERE target_user_id = ?", [uid]);
  db.run("DELETE FROM agent_wallets WHERE user_id = ?", [uid]);
  db.run("DELETE FROM cards WHERE user_id = ?", [uid]);
  db.run("DELETE FROM users WHERE id = ?", [uid]);
  console.log(`${fail === 0 ? "ALL PASS" : "FAILURES"} — ${pass} passed, ${fail} failed (throwaway removed)`);
  process.exit(fail === 0 ? 0 : 1);
}
