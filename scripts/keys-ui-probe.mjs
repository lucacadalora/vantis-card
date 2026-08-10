// UI probe for the named-keys panel on /wallets: real browser drives the
// full flow — create (form → reveal → copy), rotate (armed), revoke (armed) —
// on a seeded throwaway card-holder, then tears down. Run with .env sourced.
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
db.run(`INSERT INTO users (id, x_username, x_user_id, x_name, scored_at, score, score_tier, usd_balance)
        VALUES (?, ?, ?, ?, datetime('now'), 50, 'Standard', 0.05)`,
  [uid, tag, tag, "Keys UI Probe"]);
db.run(`INSERT INTO cards (user_id, handle, tier, grant_usd) VALUES (?, ?, 'Standard', 0.05)`, [uid, tag]);

const body = Buffer.from(JSON.stringify({ d: `did:probe:${tag}`, u: uid, e: Date.now() + 3600_000 }), "utf8").toString("base64url");
const cookieVal = `${body}.${createHmac("sha256", SECRET).update(body).digest("hex")}`;

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
try {
  await browser.defaultBrowserContext().overridePermissions("https://card.vantis.sh", ["clipboard-read", "clipboard-write", "clipboard-sanitized-write"]).catch(() => {});
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.setCookie({ name: "vc_session", value: cookieVal, domain: "card.vantis.sh", path: "/", httpOnly: true, secure: true });
  await page.evaluateOnNewDocument(() => { localStorage.setItem("vc-device-coach", "1"); });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto("https://card.vantis.sh/wallets", { waitUntil: "load", timeout: 30000 });
  await page.waitForFunction(() => (document.getElementById("wl-keys-list") || {}).textContent !== "", { timeout: 10000 });

  const empty = await page.evaluate(() => ({
    text: document.getElementById("wl-keys-list").textContent,
    newBtn: !document.getElementById("wlk-bar").hidden,
  }));
  ok("empty state + New key button", /Create your first key/.test(empty.text) && empty.newBtn, JSON.stringify(empty));

  // create via the form
  await page.evaluate(() => document.getElementById("wlk-new").click());
  await page.waitForFunction(() => !document.getElementById("wlk-form").hidden, { timeout: 5000 });
  await page.type("#wlk-name", "my-agent");
  await page.select("#wlk-scope", "main");
  await page.evaluate(() => document.querySelector("#wlk-form [type=submit]").click());
  await page.waitForFunction(() => document.querySelector(".wl-reveal code"), { timeout: 10000 });
  const created = await page.evaluate(() => ({
    reveal: document.getElementById("wl-keys-reveal").textContent,
    key: document.querySelector(".wl-reveal code").textContent,
  }));
  ok("create renders reveal once", created.reveal.includes("my-agent") && created.reveal.includes("shown once"));
  const dbKey = db.query("SELECT key FROM api_keys WHERE user_id = ? AND revoked_at IS NULL").get(uid)?.key;
  ok("reveal matches db", created.key === dbKey, String(created.key).slice(0, 14));

  await page.waitForFunction(() => document.querySelectorAll("#wl-keys-list [data-krot]").length === 1, { timeout: 8000 });
  const row = await page.evaluate(() => document.getElementById("wl-keys-list").textContent);
  ok("row shows name + scope + prefix", /my-agent/.test(row) && /MAIN/.test(row) && /vcard_/.test(row), row.slice(0, 120));

  // fonts come from page tokens
  const fonts = await page.evaluate(() => ({
    prefix: getComputedStyle(document.querySelector(".wl-keyrow .kp")).fontFamily,
    label: getComputedStyle(document.querySelector(".wl-keyrow .kl")).fontFamily,
  }));
  ok("prefix mono / label display", /SF Mono|ui-monospace/.test(fonts.prefix) && /Space Grotesk/.test(fonts.label), JSON.stringify(fonts));

  // copy
  await page.evaluate(() => document.querySelector(".wl-reveal [data-copy]").click());
  await page.waitForFunction(() => document.querySelector(".wl-reveal [data-copy]").textContent === "Copied", { timeout: 5000 });
  const clip = await page.evaluate(() => navigator.clipboard.readText().catch(() => null));
  ok("clipboard holds the key", clip === dbKey, String(clip).slice(0, 14));

  // armed rotate
  const armed = await page.evaluate(() => { const b = document.querySelector("[data-krot]"); b.click(); return b.textContent; });
  ok("rotate arms first", armed.indexOf("Confirm") === 0, armed);
  await page.evaluate(() => document.querySelector("[data-krot]").click());
  await page.waitForFunction((old) => {
    const c = document.querySelector(".wl-reveal code");
    return c && c.textContent !== old;
  }, { timeout: 10000 }, dbKey);
  const rotatedKey = db.query("SELECT key FROM api_keys WHERE user_id = ? AND revoked_at IS NULL").get(uid)?.key;
  ok("rotate minted a new key", rotatedKey && rotatedKey !== dbKey);

  // armed revoke empties the list
  await page.evaluate(() => document.querySelector("[data-krev]").click());
  await page.evaluate(() => document.querySelector("[data-krev]").click());
  await page.waitForFunction(() => /Create your first key/.test(document.getElementById("wl-keys-list").textContent), { timeout: 10000 });
  const left = db.query("SELECT COUNT(*) n FROM api_keys WHERE user_id = ? AND revoked_at IS NULL").get(uid).n;
  ok("revoke returns to empty state", left === 0, String(left));
  ok("no page errors", errors.length === 0, errors.join(" | "));

  await page.evaluate(() => document.getElementById("wl-keys").scrollIntoView({ block: "start" }));
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: SHOT });
  console.log("shot:", SHOT);
} finally {
  await browser.close();
  db.run("DELETE FROM api_keys WHERE user_id = ?", [uid]);
  db.run("DELETE FROM credit_transactions WHERE user_id = ?", [uid]);
  db.run("DELETE FROM admin_events WHERE target_user_id = ?", [uid]);
  db.run("DELETE FROM agent_wallets WHERE user_id = ?", [uid]);
  db.run("DELETE FROM cards WHERE user_id = ?", [uid]);
  db.run("DELETE FROM users WHERE id = ?", [uid]);
  console.log(`${fail === 0 ? "ALL PASS" : "FAILURES"} — ${pass} passed, ${fail} failed (throwaway removed)`);
  process.exit(fail === 0 ? 0 : 1);
}
