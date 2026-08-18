// Stripe hosted Checkout for card top-ups.
//
// Shape: server creates a Checkout Session (mode=payment, USD, inline
// price_data) → the customer pays on Stripe's page → Stripe calls
// /webhooks/stripe (checkout.session.completed) → we verify the signature
// against the RAW body, dedupe on event.id, check the amount, and settle
// through settleTopup(). The return page also RECONCILES by retrieving the
// session server-side (never trusting the query string) so a late webhook
// does not leave a paid customer staring at "pending".
//
// Keys live in the project .env (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET);
// test keys (sk_test_) make the whole flow real in Stripe test mode with the
// documented 4242 test card. Without a secret key the card rail is either
// the sandbox (staging accounts) or "opening soon".

import Stripe from "stripe";
import { getTopup, markTopup, settleTopup, recordProviderEvent, publicOrigin, type TopupRow } from "./index";

export const STRIPE_API_VERSION = "2026-07-29.dahlia" as const; // pinned to the installed stripe-node (22.x)

let client: Stripe | null = null;
let clientKey = "";

export function stripeConfigured(): boolean {
  return /^sk_(test|live)_/.test(String(process.env.STRIPE_SECRET_KEY || ""));
}

export function stripeLivemode(): boolean {
  return /^sk_live_/.test(String(process.env.STRIPE_SECRET_KEY || ""));
}

export function stripe(): Stripe {
  const key = String(process.env.STRIPE_SECRET_KEY || "");
  if (!key) throw new Error("stripe_not_configured");
  if (!client || clientKey !== key) {
    // Under Bun the package resolves to its worker build: fetch HTTP client +
    // SubtleCrypto. Sync webhooks.constructEvent THROWS there — every caller
    // below uses constructEventAsync.
    client = new Stripe(key, { apiVersion: STRIPE_API_VERSION as any, httpClient: Stripe.createFetchHttpClient(), maxNetworkRetries: 2, timeout: 20_000, telemetry: false, appInfo: { name: "vantis-card", url: "https://card.vantis.sh" } });
    clientKey = key;
  }
  return client;
}

// Copy Stripe sees (and shows on the hosted page + receipts). Compliance
// wording is load-bearing: prepaid, closed-loop, non-refundable, no monetary
// value — the same words as the site.
export const PRODUCT_NAME = "Vantis Cards usage credits";
export const PRODUCT_DESCRIPTION = "Prepaid credits redeemable only for AI inference and related services on card.vantis.sh. Non-transferable, no cash value, cannot be withdrawn or exchanged for money, non-refundable except where required by law.";
const SUBMIT_MESSAGE = "You are buying prepaid usage credits for the Vantis Cards service. Credits are added to your account immediately after payment, are non-refundable, non-transferable and have no cash value.";

export async function createCheckoutSession(t: TopupRow, user: any): Promise<{ id: string; url: string }> {
  const s = stripe();
  const origin = publicOrigin();
  const expiresAt = Math.floor(Date.now() / 1000) + 60 * 60; // Stripe allows 30 min .. 24 h; 60 keeps clear of the floor
  const session = await s.checkout.sessions.create(
    {
      mode: "payment",
      submit_type: "pay",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: t.amount_minor,
            product_data: { name: `${PRODUCT_NAME} — USD ${(t.amount_minor / 100).toFixed(2)}`, description: PRODUCT_DESCRIPTION },
          },
        },
      ],
      client_reference_id: t.id,
      metadata: { topup_id: t.id, user_id: t.user_id, destination: t.destination },
      payment_intent_data: { description: `${PRODUCT_NAME} top-up (USD ${(t.amount_minor / 100).toFixed(2)}) ${t.id}`, metadata: { topup_id: t.id, user_id: t.user_id }, statement_descriptor_suffix: "CREDITS" },
      custom_text: { submit: { message: SUBMIT_MESSAGE } },
      ...(user?.email ? { customer_email: String(user.email) } : {}),
      success_url: `${origin}/topup/return?id=${encodeURIComponent(t.id)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/topup/return?id=${encodeURIComponent(t.id)}&result=cancel`,
      expires_at: expiresAt,
      // No shipping, no phone, no promo codes — a credit purchase.
      billing_address_collection: "auto",
    },
    { idempotencyKey: `topup-${t.id}` }
  );
  if (!session.url) throw new Error("stripe_no_url");
  markTopup(t.id, { status: "pending", provider_ref: session.id, meta: { stripe_session_url: session.url, livemode: session.livemode }, });
  return { id: session.id, url: session.url };
}

// ── settlement from a session object (webhook or reconcile) ──

type SessionLike = Pick<Stripe.Checkout.Session, "id" | "payment_status" | "amount_total" | "currency" | "metadata" | "client_reference_id" | "customer_details" | "payment_intent" | "livemode" | "status">;

export function settleFromSession(sess: SessionLike, eventId?: string | null): { ok: boolean; already?: boolean; error?: string; topupId?: string } {
  const topupId = String(sess.metadata?.topup_id || sess.client_reference_id || "");
  if (!topupId) return { ok: false, error: "no_topup_id" };
  const t = getTopup(topupId);
  if (!t) return { ok: false, error: "topup_not_found", topupId };
  if (t.provider !== "stripe") return { ok: false, error: "provider_mismatch", topupId };
  // The session must be the one we opened for this row (a forged session
  // carrying our metadata cannot settle it) — provider_ref is set at create.
  if (t.provider_ref && t.provider_ref !== sess.id) return { ok: false, error: "session_mismatch", topupId };
  if (sess.metadata?.user_id && sess.metadata.user_id !== t.user_id) { markTopup(t.id, { status: "failed", error: "user_mismatch" }); return { ok: false, error: "user_mismatch", topupId }; }
  if (sess.payment_status !== "paid") return { ok: false, error: `payment_status_${sess.payment_status}`, topupId };
  const cur = String(sess.currency || "").toLowerCase();
  if (cur !== "usd" || Number(sess.amount_total) !== Number(t.amount_minor)) {
    markTopup(t.id, { status: "failed", error: `amount_mismatch: got ${sess.amount_total} ${cur}, expected ${t.amount_minor} usd` });
    return { ok: false, error: "amount_mismatch", topupId };
  }
  const pi = typeof sess.payment_intent === "string" ? sess.payment_intent : sess.payment_intent?.id;
  const r = settleTopup(t.id, {
    provider_ref: sess.id,
    payer: sess.customer_details?.email || null,
    event_id: eventId || null,
    meta: { payment_intent: pi || null, livemode: !!sess.livemode, card: "stripe" },
    description: `Top-up: $${(t.amount_minor / 100).toFixed(2)} by card`,
  });
  if (!r.ok) return { ok: false, error: r.error, topupId };
  return { ok: true, already: r.already, topupId };
}

// ── webhook ──

export async function handleStripeWebhook(rawBody: string, sigHeader: string | null | undefined): Promise<{ status: number; body: any }> {
  const secret = String(process.env.STRIPE_WEBHOOK_SECRET || "");
  if (!secret || !stripeConfigured()) return { status: 503, body: { error: "stripe_not_configured" } };
  if (!sigHeader) return { status: 400, body: { error: "missing_signature" } };
  let event: Stripe.Event;
  try {
    // constructEventAsync uses WebCrypto — the Bun-safe variant.
    event = await stripe().webhooks.constructEventAsync(rawBody, sigHeader, secret, 300, Stripe.createSubtleCryptoProvider());
  } catch (e: any) {
    return { status: 400, body: { error: "bad_signature", message: String(e?.message || e).slice(0, 200) } };
  }
  // A live event on a test key (or the reverse) is misrouted — never act on it.
  if (!!event.livemode !== stripeLivemode()) return { status: 400, body: { error: "mode_mismatch" } };
  const kind = event.type;
  const obj: any = (event.data as any)?.object || {};
  const topupIdHint = String(obj?.metadata?.topup_id || obj?.client_reference_id || "") || null;
  // Dedupe on event id: Stripe retries deliveries; a replay must be a no-op.
  const fresh = recordProviderEvent("stripe", event.id, kind, { livemode: event.livemode, topup_id: topupIdHint, session: obj?.id }, topupIdHint);
  if (!fresh) return { status: 200, body: { received: true, replay: true } };

  switch (kind) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded": {
      const r = settleFromSession(obj as SessionLike, event.id);
      return { status: 200, body: { received: true, ...r } };
    }
    case "checkout.session.async_payment_failed": {
      if (topupIdHint) markTopup(topupIdHint, { status: "failed", error: "async_payment_failed" });
      return { status: 200, body: { received: true } };
    }
    case "checkout.session.expired": {
      if (topupIdHint) markTopup(topupIdHint, { status: "expired", error: "checkout_expired" });
      return { status: 200, body: { received: true } };
    }
    default:
      return { status: 200, body: { received: true, ignored: kind } };
  }
}

// ── reconcile (return page / status poll): ask Stripe, never the browser ──

export async function reconcileStripeTopup(t: TopupRow): Promise<{ ok: boolean; already?: boolean; error?: string }> {
  if (!stripeConfigured()) return { ok: false, error: "stripe_not_configured" };
  if (t.status === "credited") return { ok: true, already: true };
  if (!t.provider_ref) return { ok: false, error: "no_session" };
  const sess = await stripe().checkout.sessions.retrieve(t.provider_ref);
  if (sess.status === "expired") { markTopup(t.id, { status: "expired", error: "checkout_expired" }); return { ok: false, error: "expired" }; }
  const r = settleFromSession(sess, null);
  return r;
}

// Best-effort: close an open hosted session so it can no longer be paid.
// Returns true when Stripe confirms the session is no longer payable.
export async function expireStripeSession(t: TopupRow): Promise<boolean> {
  if (!stripeConfigured() || !t.provider_ref) return !t.provider_ref; // nothing to expire = safe to cancel
  try {
    const sess = await stripe().checkout.sessions.expire(t.provider_ref);
    return sess.status === "expired";
  } catch (e: any) {
    // Already complete/expired sessions throw; re-read to learn which.
    try {
      const sess = await stripe().checkout.sessions.retrieve(t.provider_ref);
      if (sess.payment_status === "paid") { settleFromSession(sess, null); return false; }
      return sess.status === "expired";
    } catch { return false; }
  }
}
