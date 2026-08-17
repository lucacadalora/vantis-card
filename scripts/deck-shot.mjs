// Visual probe for the /wallets deck: seeds a throwaway staging card-holder in
// the live DB, drives the real page in a real browser at three widths, plugs a
// cartridge through the UI, shoots each state, then tears the throwaway down.
// Run with .env sourced (needs VANTIS_CARD_SESSION_SECRET).
import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
const puppeteer = require2("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
import { Database } from "bun:sqlite";
import { randomUUID } from "crypto";
import { sessionSetCookie } from "../server/session.ts";
import { ensureDeckTables, grantPreviewHolding } from "../server/deck.ts";
import { GENESIS } from "../server/genesis.ts";

const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const OUT = process.env.OUT || "/home/ubuntu/projects/vantis-card";
const db = new Database("/home/ubuntu/projects/vantis-card/data/vantis-cards.db");
const SECRET = process.env.VANTIS_CARD_SESSION_SECRET;
if (!SECRET) throw new Error("source .env first");

let pass = 0, fail = 0;
const ok = (n, c, d = "") => { if (c) { pass++; console.log(`  PASS ${n}`); } else { fail++; console.log(`  FAIL ${n} ${d}`); } };

const uid = randomUUID();
const tag = `dkshot_${Date.now().toString(36)}`;
db.run(`INSERT INTO users (id, x_username, x_user_id, x_name, scored_at, score, score_tier, usd_balance, usd_granted, staging)
        VALUES (?, ?, ?, ?, datetime('now'), 66, 'builder', 12.5, 15, 1)`,
  [uid, tag, tag, "Deck Shot"]);
db.run(`INSERT INTO cards (user_id, handle, tier, grant_usd, design_variant) VALUES (?, ?, 'builder', 15, 'signal')`, [uid, tag]);
// Seed the holdings directly: the server's auto-grant is gated to an operator
// allowlist (a preview cartridge is real upstream spend), and this probe is
// testing the deck UI, not that policy.
ensureDeckTables();
grantPreviewHolding(uid, "first-burn");

// Mint through the server's own signer — the payload shape ({d,u,e}) and the
// hex MAC are its business, not this probe's. Hand-rolling it produced a
// cookie that silently failed verification and bounced every page to /login.
const cookie = sessionSetCookie("did:privy:deckshot", uid).split(";")[0].slice("vc_session=".length);

function teardown() {
  for (const t of ["lane_cartridges", "genesis_holdings", "cartridge_usage", "credit_transactions", "api_requests", "api_keys", "agent_wallets", "cards"]) {
    try { db.run(`DELETE FROM ${t} WHERE user_id = ?`, [uid]); } catch {}
  }
  db.run("DELETE FROM users WHERE id = ?", [uid]);
}

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: "new",
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});

try {
  const page = await browser.newPage();
  const errors = [];
  page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.setCookie({ name: "vc_session", value: cookie, domain: "127.0.0.1", path: "/" });

  for (const [label, w, h] of [["mobile", 390, 900], ["tablet", 820, 1000], ["desktop", 1440, 1100]]) {
    await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
    // The landing SSE stream means networkidle never fires on this app.
    await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "domcontentloaded", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 2500));

    const deck = await page.evaluate(() => {
      const el = document.getElementById("wl-deck");
      if (!el) return null;
      const slots = [...document.querySelectorAll(".dk-slot")];
      const cards = [...document.querySelectorAll("#wl-deck .tc-card")];
      return {
        slots: slots.length,
        cards: cards.length,
        renderedCard: cards[0] ? cards[0].getBoundingClientRect().height : 0,
        topup: !!document.getElementById("wl-topup"),
        railDeck: !!document.querySelector('.wl-rail a[href="#wl-deck"]'),
        railMarket: !!document.querySelector('.wl-rail a[href="/marketplace"]'),
        railTopup: !!document.querySelector('.wl-rail a[href="#wl-topup"]'),
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        held: document.querySelectorAll("#wl-deck [data-plug], #wl-deck [data-eject]").length,
        unheld: document.querySelectorAll("#wl-deck .dk-unheld").length,
        heading: document.querySelector("#wl-deck .dk-acct-body h3")?.textContent || "",
        doubleAt: /@@/.test(document.getElementById("wl-deck")?.textContent || ""),
        marketLink: !!document.querySelector('#wl-deck a[href="/marketplace"], #wl-deck a[href^="/marketplace"]'),
      };
    });

    ok(`${label}: deck section present`, !!deck);
    if (!deck) continue;
    ok(`${label}: deck shows only what is held`, deck.slots === 1, `got ${deck.slots} slots`);
    ok(`${label}: card objects actually render`, deck.renderedCard > 100, `first card ${Math.round(deck.renderedCard)}px tall`);
    ok(`${label}: no horizontal overflow`, !deck.overflow);
    if (label === "desktop") {
      ok("only one cartridge is held", deck.held === 1, `held ${deck.held}`);
      ok("unheld cards are absent, not dimmed", deck.unheld === 0, `unheld shown: ${deck.unheld}`);
      ok("the set is still reachable", deck.marketLink, "no marketplace link in the deck copy");
      ok("no double-@ on the account card", !deck.doubleAt, deck.heading || "");
      ok("rail has Deck", deck.railDeck);
      ok("rail has Marketplace", deck.railMarket);
      ok("rail has Top up", deck.railTopup);
      ok("top-up section present", deck.topup);
    }

    await page.evaluate(() => document.getElementById("wl-deck")?.scrollIntoView());
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({ path: `${OUT}/deck-${label}.png`, fullPage: false });
  }

  // Plug the apex card through the real UI and confirm the slot flips state.
  await page.setViewport({ width: 1440, height: 1100 });
  await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "domcontentloaded", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2000));
  const clicked = await page.evaluate(() => {
    const btn = document.querySelector('[data-plug="first-burn"]');
    if (!btn) return false;
    btn.scrollIntoView({ block: "center" });
    btn.click();
    return true;
  });
  ok("plug button exists and was clicked", clicked);
  await new Promise((r) => setTimeout(r, 3500));
  const after = await page.evaluate(() => {
    const slot = document.querySelector('.dk-slot[data-slug="first-burn"]');
    return {
      inLane: !!slot?.classList.contains("dk-slot--in"),
      badge: slot?.querySelector(".dk-in")?.textContent?.trim() || null,
      hasEject: !!slot?.querySelector("[data-eject]"),
    };
  });
  ok("slot shows as plugged after the click", after.inLane, JSON.stringify(after));
  ok("plugged slot names the lane", !!after.badge && after.badge.startsWith("IN"), after.badge || "none");
  ok("plugged slot offers eject", after.hasEject);
  await page.evaluate(() => document.querySelector('.dk-slot[data-slug="first-burn"]')?.scrollIntoView({ block: "center" }));
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${OUT}/deck-plugged.png`, fullPage: false });

  // The 3D terminal needs a GPU; headless here has none, so its WebGL refusal
  // is this probe's environment, not the page. Everything else must be clean.
  const real = errors.filter((e) => !/WebGLRenderer|WebGL context/i.test(e));
  ok("no console errors on the page (WebGL excluded — headless has no GPU)", real.length === 0, real.slice(0, 3).join(" | "));
} finally {
  await browser.close();
  teardown();
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
