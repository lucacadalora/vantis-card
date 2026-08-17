// Pool-lane console regression: the GPT frontier pool card renders ONLY for
// allow-listed accounts (users.pool_access=1), and a plain account's console
// is unchanged. READ-ONLY against the live DB; no writes, no HTTP.
//
//   bun run scripts/pool-console-check.ts
import { getUserByX } from "../server/db";
import { walletsConsoleSection } from "../server/console";

const luca = getUserByX("lucaxyzz");
if (!luca) { console.log("FAIL lucaxyzz row missing"); process.exit(1); }
const html = walletsConsoleSection(luca);
const has = (s: string) => html.includes(s);
let failed = false;
const check = (n: string, ok: boolean) => { console.log(`${ok ? "PASS" : "FAIL"}  ${n}`); if (!ok) failed = true; };
check("pool card renders for @lucaxyzz", has("GPT frontier pool"));
check("ALLOWLIST tag present", has("ALLOWLIST"));
check("model picker lists the family", has("gpt-5.6-sol") && has("gpt-5.6-terra") && has("gpt-5.6-luna") && has("gpt-5.5") && has("gpt-5.4") && has("gpt-5.4-mini") && has("gpt-image-2"));
check("unmetered copy present", has("calls bill $0.00 and retire no $VANTIS"));
check("DeepSeek production card still first", html.indexOf("PRODUCTION") < html.indexOf("ALLOWLIST"));

// A non-pool account's console must be byte-free of the pool feature — card,
// picker AND script. (The founder row is reused with the flag flipped in
// memory only; nothing is written.)
const plain = { ...luca, pool_access: 0 };
const html2 = walletsConsoleSection(plain);
check("plain accounts see NO pool card", !html2.includes("GPT frontier pool") && !html2.includes("wlc-pool-model"));
check("plain console unchanged (DeepSeek card intact)", html2.includes("PRODUCTION") && html2.includes("deepseek"));
process.exit(failed ? 1 : 0);
