// X public metrics via the paid v2 API — the one signal Privy cannot give.
// Dark until X_BEARER_TOKEN lands in .env (developer.x.com, pay-per-use,
// ~1 cent per user read). Refreshes on scoring runs so re-runs see growth.

import { updateUser, traceVendor } from "./db";

export const xApiEnabled = () => !!process.env.X_BEARER_TOKEN;

export async function refreshXMetrics(user: any): Promise<any | null> {
  const token = process.env.X_BEARER_TOKEN;
  if (!token || !user?.x_username) return null;
  const t0 = performance.now();
  try {
    const res = await fetch(
      `https://api.twitter.com/2/users/by/username/${encodeURIComponent(user.x_username)}?user.fields=public_metrics,description,created_at,verified_type,location`,
      { headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(10000) }
    );
    traceVendor({
      vendor: "xapi", endpoint: "users/by/username", status: res.status,
      latency_ms: Math.round(performance.now() - t0), user_id: user.id,
      cost_est_usd: 0.01, // X pay-per-use list price per user read
      error: res.ok ? null : `http_${res.status}`,
    });
    if (!res.ok) { console.error("X API:", res.status, await res.text()); return null; }
    const d: any = (await res.json())?.data;
    if (!d) return null;
    const fields = {
      x_followers: d.public_metrics?.followers_count ?? 0,
      x_following: d.public_metrics?.following_count ?? 0,
      x_tweet_count: d.public_metrics?.tweet_count ?? 0,
      x_bio: d.description || null,
      x_verified: d.verified_type || null,
      x_location: d.location || null,
      x_created_at: d.created_at || null,
    };
    updateUser(user.id, fields);
    return fields;
  } catch (err: any) {
    traceVendor({ vendor: "xapi", endpoint: "users/by/username", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: err?.message || "network" });
    console.error("X API error:", err);
    return null;
  }
}
