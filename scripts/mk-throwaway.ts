// Prints {uid, cookie} for a throwaway user — browser-level probes only.
// Pass "carded" to also mint a card + grant + funded lanes (device probes).
import { createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet } from "../server/db";
import { sessionSetCookie } from "../server/session";
const u = createUser({ username: `vcpage${Date.now().toString(36)}`, name: "Page Probe" });
if (process.argv.includes("carded")) {
  createCard(u.id, u.x_username, "explorer", 0, 0, 0.00185);
  grantCredits(u.id, 5, "Probe seed (purged by probe cleanup)");
  const lanes = ensurePurposeWallets(u.id, false);
  const inf = lanes.find((w: any) => w.purpose === "inference")!;
  fundAgentWallet(u.id, inf.id, 1.5);
}
console.log(JSON.stringify({ uid: u.id, cookie: sessionSetCookie("did:privy:pageprobe", u.id).split(";")[0].split("=").slice(1).join("=") }));
