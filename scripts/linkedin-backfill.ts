// One-pass backfill of LinkedIn name + /in/ slug for everyone who linked
// LinkedIn before we started capturing them. The identity token never carried
// these fields (measured Aug 9: it holds only type/subject/email/lv), so they
// can only come from the REST user object, which needs PRIVY_APP_SECRET.
//
//   bun scripts/linkedin-backfill.ts          # dry run, prints what it would write
//   bun scripts/linkedin-backfill.ts --write  # actually writes
import { getDb, updateUser } from "../server/db";
import { linkedinDetailsFromRest } from "../server/privy";

const WRITE = process.argv.includes("--write");
const db = getDb();

const rows = db.query(`
  SELECT id, x_username, privy_user_id, linkedin_name, linkedin_vanity
  FROM users
  WHERE linkedin_connected_at IS NOT NULL
    AND privy_user_id IS NOT NULL
    AND (linkedin_name IS NULL OR linkedin_name = '')
  ORDER BY created_at DESC
`).all() as any[];

console.log(`${rows.length} linked users missing a name${WRITE ? "" : "  (DRY RUN — pass --write to apply)"}\n`);

let filled = 0, missing = 0, failed = 0;
for (const u of rows) {
  const li = await linkedinDetailsFromRest(u.privy_user_id);
  if (!li) { failed++; console.log(`  @${u.x_username}: REST lookup failed`); continue; }
  if (!li.name && !li.vanity) { missing++; console.log(`  @${u.x_username}: LinkedIn linked but no name on record`); continue; }
  const fields: Record<string, any> = {};
  if (li.name) fields.linkedin_name = li.name;
  if (li.vanity) fields.linkedin_vanity = li.vanity;
  if (WRITE) updateUser(u.id, fields);
  filled++;
  console.log(`  @${(u.x_username || "").padEnd(18)} -> ${li.name || "(no name)"}${li.vanity ? `  /in/${li.vanity}` : ""}`);
  await new Promise((r) => setTimeout(r, 120)); // gentle on the API
}

console.log(`\n${filled} filled, ${missing} had nothing on record, ${failed} lookup failures`);
if (!WRITE) console.log("nothing was written — re-run with --write");
