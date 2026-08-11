// Walks the product as a USER and verifies every nav label lands where it
// says. Phase "anon": signed-out surfaces + the signed-in-no-card front
// door. Phase "carded": the member surfaces with a carded session.
// Usage: node scripts/nav-walk.mjs <anon|carded> <outdir> [cookie] [handle]
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const BASE = "http://127.0.0.1:8240";
const [PHASE, OUT = "/tmp/nav-walk", COOKIE = "", HANDLE = ""] = process.argv.slice(2);

const fs = require("node:fs");
fs.mkdirSync(OUT, { recursive: true });
const checks = [];
const ok = (name, pass, detail = "") => { checks.push([name, pass]); console.log(`${pass ? "PASS" : "FAIL"}  ${name}${pass || !detail ? "" : ` — ${detail}`}`); };

const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1366, height: 900 });
const errs = [];
page.on("pageerror", (e) => errs.push(e.message));
// carded phase signs in up front; anon phase stays clean and applies the
// cookie only for its trailing signed-in-no-card checks.
if (COOKIE && PHASE === "carded") await page.setCookie({ name: "vc_session", value: COOKIE, domain: "127.0.0.1", path: "/" });

// The nav as the user sees it: visible links with their real destinations.
const navMap = () => page.evaluate(() => {
  const out = [];
  for (const a of document.querySelectorAll("nav.nav a, nav.nav form button")) {
    const r = a.getBoundingClientRect();
    if (r.width === 0 && !a.closest(".navdrop-menu")) continue; // hidden at this viewport
    out.push({ t: (a.innerText || "").trim().replace(/\s+/g, " ").slice(0, 32), href: a.getAttribute("href") || a.closest("form")?.getAttribute("action") || "" });
  }
  return out;
});
const goto = async (path) => { await page.goto(BASE + path, { waitUntil: "networkidle2", timeout: 30000 }); };
const shot = async (name) => page.screenshot({ path: `${OUT}/${name}.png` });
const expectLinks = (name, map, expected) => {
  for (const [label, dest] of expected) {
    const hit = map.find((l) => l.t.toLowerCase().includes(label.toLowerCase()));
    ok(`${name}: "${label}" → ${dest}`, !!hit && hit.href === dest, hit ? `got ${hit.href}` : "link missing");
  }
};

if (PHASE === "anon") {
  // ── Front door, signed out ──
  await goto("/");
  const front = await navMap();
  expectLinks("front", front, [["How it works", "/overview#how"], ["Model", "/overview#model"], ["Tiers", "/overview#tiers"], ["Docs", "/docs"], ["Sign in", "/login"]]);
  ok("front: no funnel-bypassing CTA", !front.some((l) => l.href === "/onboard"), JSON.stringify(front));
  await shot("anon-front");

  // The product story is one honest click away now, not a whale pill.
  await page.click('nav.nav a[href="/overview#how"]');
  await page.waitForNavigation({ waitUntil: "networkidle2" }).catch(() => {});
  ok("front: How it works lands on the story", page.url().includes("/overview"), page.url());
  const ovh1 = await page.evaluate(() => document.querySelector("h1")?.innerText || "");
  ok("overview: h1 present", ovh1.length > 0, ovh1);
  const over = await navMap();
  expectLinks("overview", over, [["Docs", "/docs"], ["Sign in", "/login"], ["Get your card", "/onboard"]]);
  await shot("anon-overview");

  // Docs keep their own honest chrome.
  await goto("/docs");
  ok("docs: reachable, titled", (await page.title()).includes("Docs"), await page.title());

  // Gates hold: member pages bounce to login with a next.
  for (const p of ["/onboard", "/account", "/report", "/wallets"]) {
    await goto(p);
    ok(`gate: ${p} → /login`, page.url().includes("/login"), page.url());
  }
  await shot("anon-login");

  // ── Signed in, NO card (needs cookie) ──
  if (COOKIE) {
    await page.setCookie({ name: "vc_session", value: COOKIE, domain: "127.0.0.1", path: "/" });
    await goto("/");
    const nc = await navMap();
    ok("no-card front: Finish signing up absent on /reserve (funnel page)", !nc.some((l) => /finish/i.test(l.t)), JSON.stringify(nc));
    await goto("/onboard");
    const steps = await page.evaluate(() => document.querySelector(".steps")?.innerText.replace(/\s+/g, " ") || "");
    ok("onboard: honest stepper, no 'Step 1 of 2'", /signed in/i.test(steps) && !/step 1 of 2/i.test(await page.evaluate(() => document.body.innerText)), steps);
    ok("onboard: Connect is a live step", /connect/i.test(steps), steps);
    const ob = await navMap();
    ok("onboard: no self-link CTA", !ob.some((l) => l.href === "/onboard"), JSON.stringify(ob));
    await shot("nocard-onboard-stepper");
  }
}

if (PHASE === "carded") {
  const h = HANDLE.replace(/^@/, "");
  // Post-onboarding bar = working surfaces only; the card + report live
  // in the account menu (the card as the spinning object itself).
  const expected = [["Wallets", "/wallets"], ["Docs", "/docs"]];

  // The front door no longer strands a card holder.
  await goto("/");
  const cf = await navMap();
  expectLinks("carded front", cf, expected);
  const barTexts = await page.evaluate(() => [...document.querySelectorAll("nav.nav .navlinks a")].map((a) => a.innerText.trim()));
  ok("carded front: bar is Wallets · Docs only", barTexts.join("·") === "Wallets·Docs", barTexts.join("·"));
  await shot("carded-front");

  // Member pages: same nav everywhere, active page underlined.
  for (const [path, active] of [["/account", null], ["/report", null], ["/wallets", "Wallets"]]) {
    await goto(path);
    ok(`member: ${path} loads`, !page.url().includes("/login"), page.url());
    expectLinks(`member ${path}`, await navMap(), expected);
    if (active) {
      const on = await page.evaluate(() => document.querySelector("nav.nav .navlinks a.on")?.innerText.trim() || "");
      ok(`member ${path}: active underline = ${active}`, on === active, on);
    }
  }

  // The account menu: opens, names the member surfaces, can sign out.
  await goto("/account");
  await page.click("nav.nav .navdrop summary");
  await new Promise((r) => setTimeout(r, 250));
  const open = await page.evaluate(() => document.querySelector("nav.nav .navdrop")?.open === true);
  ok("menu: opens on click", open);
  const menu = await navMap();
  ok("menu: Account & connections → /account", menu.some((l) => l.t.includes("Account") && l.href === "/account"), JSON.stringify(menu.filter((m) => m.t)));
  ok("menu: Agent report → /report", menu.some((l) => /agent report/i.test(l.t) && l.href === "/report"));
  ok("menu: Sign out posts /auth/signout", menu.some((l) => /sign out/i.test(l.t) && l.href === "/auth/signout"));
  // The wallet moment: the spinning card object tops the menu, click =
  // the card page. Assert the object really rendered (scene + faces).
  const mcard = await page.evaluate(() => {
    const a = document.querySelector("nav.nav .navdrop-menu .nd-cardlink");
    if (!a) return null;
    const scene = a.querySelector(".scene");
    const r = a.getBoundingClientRect();
    return { href: a.getAttribute("href"), scene: !!scene, w: Math.round(r.width), spinning: scene ? getComputedStyle(scene.querySelector(".flip")).animationName : "" };
  });
  ok(`menu: card object present, links /card/${h}`, !!mcard && mcard.href === `/card/${h}` && mcard.scene, JSON.stringify(mcard));
  ok("menu: card object is the spinning object", !!mcard && /spin/.test(mcard.spinning), mcard?.spinning || "");
  // Desktop must NOT duplicate the top-level links inside the menu — the
  // .nd-dup rows are mobile-only (this is the specificity bug Luca caught).
  const dupVisible = await page.evaluate(() => [...document.querySelectorAll(".navdrop-menu .nd-dup")].filter((el) => el.getBoundingClientRect().width > 0).length);
  ok("menu: no duplicate rows on desktop", dupVisible === 0, `${dupVisible} dup rows visible`);
  await shot("carded-account-menu");
  await page.keyboard.press("Escape");
  ok("menu: Escape closes", await page.evaluate(() => document.querySelector("nav.nav .navdrop")?.open === false));

  // Every destination actually answers — bar links plus the menu's.
  for (const [, dest] of [...expected, ["Agent report", "/report"], ["card", `/card/${h}`]]) {
    const res = await page.goto(BASE + dest, { waitUntil: "domcontentloaded", timeout: 30000 });
    ok(`resolves: ${dest}`, res.status() === 200, String(res.status()));
  }
  await goto(`/card/${h}`); await shot("carded-cardpage");
  await goto("/report"); await shot("carded-report");
  await goto("/wallets"); await shot("carded-wallets");

  // Mobile: the dropdown carries the full member menu once navlinks hide.
  await page.setViewport({ width: 390, height: 844 });
  await goto("/account");
  const mobileLinks = await page.evaluate(() => [...document.querySelectorAll("nav.nav .navlinks a")].filter((a) => a.getBoundingClientRect().width > 0).length);
  ok("mobile: top-level navlinks hidden", mobileLinks === 0, String(mobileLinks));
  await page.click("nav.nav .navdrop summary");
  await new Promise((r) => setTimeout(r, 250));
  const mm = await navMap();
  expectLinks("mobile menu", mm, [...expected, ["Agent report", "/report"]]);
  const mCard = await page.evaluate(() => !!document.querySelector("nav.nav .navdrop-menu .nd-cardlink .scene"));
  ok("mobile menu: card object present", mCard);
  await shot("carded-mobile-menu");

  // Sign out actually signs out and lands on a page, not JSON.
  await page.setViewport({ width: 1366, height: 900 });
  await goto("/account");
  await page.click("nav.nav .navdrop summary");
  await new Promise((r) => setTimeout(r, 200));
  await page.click('nav.nav .navdrop form button');
  await page.waitForNavigation({ waitUntil: "networkidle2" }).catch(() => {});
  const afterOut = await page.evaluate(() => ({ url: location.pathname, isHtml: !!document.querySelector("nav.nav"), body: document.body.innerText.slice(0, 40) }));
  ok("sign out: lands on the front door as HTML", afterOut.url === "/" && afterOut.isHtml, JSON.stringify(afterOut));
  const signedOutNav = await navMap();
  ok("sign out: nav is anonymous again", signedOutNav.some((l) => l.href === "/login"), JSON.stringify(signedOutNav));
  await shot("signed-out-after");
}

ok("zero page errors across the walk", errs.length === 0, errs.join(" | ").slice(0, 200));
await browser.close();
process.exit(checks.some(([, p]) => !p) ? 1 : 0);
