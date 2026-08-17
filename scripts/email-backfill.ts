// One-pass backfill of the contact email for everyone who signed in before we
// started writing it down. Privy has held these addresses all along — the
// email-OTP address people typed, and the verified address LinkedIn/GitHub
// returned — but upsertFromPrivy only ever kept the DOMAIN, and only when it
// was corporate. So 400-odd verified addresses existed and none were ours.
//
// Reads the paginated REST user list (7 calls for the whole app, versus one
// call per DID) and parses each account with the SAME extractAccounts the live
// sign-in path uses, so a backfilled row is identical to a fresh one.
//
//   bun scripts/email-backfill.ts          # dry run, prints what it would write
//   bun scripts/email-backfill.ts --write  # actually writes
import { getDb, getUserByPrivyId, recordContact, updateUser } from "../server/db";
import { contactEmail, extractAccounts } from "../server/privy";

const WRITE = process.argv.includes("--write");
const APP_ID = process.env.PRIVY_APP_ID || "";
const SECRET = process.env.PRIVY_APP_SECRET || "";
if (!APP_ID || !SECRET) { console.error("PRIVY_APP_ID + PRIVY_APP_SECRET required"); process.exit(1); }
const auth = "Basic " + Buffer.from(`${APP_ID}:${SECRET}`).toString("base64");

getDb(); // run migrations before anything writes

let cursor: string | undefined;
const seen: any[] = [];
for (let page = 0; page < 100; page++) {
  const url = new URL("https://auth.privy.io/api/v1/users");
  url.searchParams.set("limit", "100");
  if (cursor) url.searchParams.set("cursor", cursor);
  const res = await fetch(url, { headers: { Authorization: auth, "privy-app-id": APP_ID } });
  if (!res.ok) { console.error(`privy list failed: ${res.status} ${(await res.text()).slice(0, 200)}`); process.exit(1); }
  const j: any = await res.json();
  const batch = j.data || [];
  seen.push(...batch);
  cursor = j.next_cursor || j.nextCursor;
  if (!cursor || !batch.length) break;
  await new Promise((r) => setTimeout(r, 120)); // gentle on the API
}

console.log(`${seen.length} Privy accounts${WRITE ? "" : "  (DRY RUN — pass --write to apply)"}\n`);

let filledUser = 0, filledContact = 0, noEmail = 0, alreadyHad = 0, orphan = 0;
const bySource: Record<string, number> = {};

for (const p of seen) {
  const did = String(p.id || "");
  if (!did) continue;
  const acc = extractAccounts(did, p.linked_accounts || []);
  const contact = contactEmail(acc);
  const user = getUserByPrivyId(did);

  if (!contact) {
    noEmail++;
    if (WRITE) recordContact(did, null, null, user?.id || null);
    continue;
  }
  bySource[contact.source] = (bySource[contact.source] || 0) + 1;

  if (WRITE) recordContact(did, contact.email, contact.source, user?.id || null);
  filledContact++;

  if (!user) { orphan++; continue; }            // signed in, never linked X
  if (user.email === contact.email) { alreadyHad++; continue; }
  if (user.email) { alreadyHad++; continue; }   // never overwrite a live value from a backfill
  if (WRITE) {
    updateUser(user.id, {
      email: contact.email,
      email_source: contact.source,
      email_captured_at: new Date().toISOString(),
    });
  }
  filledUser++;
  const masked = contact.email.replace(/^(.).*(@.*)$/, "$1***$2");
  console.log(`  @${String(user.x_username || "").padEnd(18)} ${masked}  (${contact.source})`);
}

console.log(`\ncontacts written: ${filledContact}   users filled: ${filledUser}`);
console.log(`already had one: ${alreadyHad}   no email at Privy: ${noEmail}   no card account yet: ${orphan}`);
console.log(`sources: ${JSON.stringify(bySource)}`);
if (!WRITE) console.log("\nnothing was written — re-run with --write");
