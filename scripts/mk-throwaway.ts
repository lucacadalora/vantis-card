// Prints {uid, cookie} for a throwaway user — browser-level probes only.
// Pass "carded" to also mint a card + grant + funded lanes (device probes).
import { createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet, updateUser } from "../server/db";
import { sessionSetCookie } from "../server/session";
const u = createUser({ username: `vcpage${Date.now().toString(36)}`, name: "Page Probe" });
if (process.argv.includes("carded")) {
  // Mirror the real mint shape: handles carry "@", and a carded user is a
  // scored user (else /report bounces and /card/:handle 404s mid-probe).
  createCard(u.id, `@${u.x_username}`, "explorer", 0, 0, 0.00185);
  updateUser(u.id, { scored_at: new Date().toISOString().replace("T", " ").slice(0, 19), score: 40, score_tier: "explorer" } as any);
  grantCredits(u.id, 5, "Probe seed (purged by probe cleanup)");
  const lanes = ensurePurposeWallets(u.id, false);
  const inf = lanes.find((w: any) => w.purpose === "inference")!;
  fundAgentWallet(u.id, inf.id, 1.5);
}
console.log(JSON.stringify({ uid: u.id, cookie: sessionSetCookie("did:privy:pageprobe", u.id).split(";")[0].split("=").slice(1).join("=") }));
