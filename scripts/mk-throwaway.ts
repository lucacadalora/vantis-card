// Prints {uid, cookie} for a throwaway user — browser-level probes only.
import { createUser } from "../server/db";
import { sessionSetCookie } from "../server/session";
const u = createUser({ username: `vcpage${Date.now().toString(36)}`, name: "Page Probe" });
console.log(JSON.stringify({ uid: u.id, cookie: sessionSetCookie("did:privy:pageprobe", u.id).split(";")[0].split("=").slice(1).join("=") }));
