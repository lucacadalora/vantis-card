// Privy gate island. Two mounts, one bundle:
//   mode "login"   (/login)  — the first gate. Any Privy sign-in passes it;
//                              after the server verifies tokens and sets the
//                              session cookie, the browser moves to `next`.
//   mode "onboard" (/onboard) — the X requirement. Cards are issued against a
//                              verified X account; link it here, GitHub too.
//
// The X gate is enforced server-side in /auth/privy, so an email-only login
// still cannot mint a card — the modal path makes no difference.
//
// Hub lesson (React #185): usePrivy() returns fresh function refs every
// render — effects here key on primitives only, never on the privy object.

import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { PrivyProvider, usePrivy, useIdentityToken, useLinkAccount } from "@privy-io/react-auth";

declare global {
  interface Window {
    __PRIVY: { appId: string; mode: "login" | "onboard"; next?: string };
  }
}

type Campaign = {
  ref_link: string; ref_earned: number; ref_cap: number; ref_bonus: number;
  tasks: { follow: boolean; share: boolean };
  task_rewards: { follow: number; share: number };
  x_handle: string; active: boolean;
};

type GateResp =
  | { status: "ok"; uid: string; x_username: string; github: string | null; linkedin?: boolean; wallet: string | null; reruns_left?: number; score?: number; card: { handle: string } | null; campaign?: Campaign | null }
  | { status: "need_twitter"; reserved?: string | null }
  | { status: "error"; error: string };

// The reserved moment (cloudflare.pay beat): the server remembered which
// handle was reserved before sign-in; fill the pre-rendered card and reveal.
function showReservedMoment(handle: string | null | undefined) {
  const el = document.getElementById("resv-moment");
  if (!el) return;
  if (!handle) { el.style.display = "none"; return; }
  const scene = el.querySelector(".scene");
  if (scene) {
    const eh = scene.querySelector(".chandle");
    if (eh) { eh.textContent = "@" + handle; eh.className = "chandle" + (handle.length > 20 ? " xlong" : handle.length > 14 ? " long" : ""); }
    const curl = scene.querySelector(".curl");
    if (curl) curl.textContent = "card.vantis.sh/" + handle;
  }
  const rh = document.getElementById("resv-h");
  if (rh) rh.textContent = "@" + handle;
  const share = document.getElementById("resv-share") as HTMLAnchorElement | null;
  if (share) {
    share.href = "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(`Reserved my one-of-one Vantis Card — @${handle}. Yours is probably unclaimed:`) +
      "&url=" + encodeURIComponent("https://card.vantis.sh/reserve");
  }
  el.style.display = "block";
}

const short = (a: string) => (a && a.length > 12 ? `${a.slice(0, 6)}…${a.slice(-4)}` : a);

function Gate({ mode, next }: { mode: "login" | "onboard"; next: string }) {
  const { ready, authenticated, user, login, logout, getAccessToken } = usePrivy();
  const { identityToken } = useIdentityToken();
  const { linkTwitter, linkGithub, linkLinkedIn } = useLinkAccount();
  const [resp, setResp] = useState<GateResp | null>(null);
  const [busy, setBusy] = useState(false);
  const [claimed, setClaimed] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);
  const lastSync = useRef("");

  const claim = async (task: "follow" | "share", openUrl: string) => {
    window.open(openUrl, "_blank", "noopener");
    try {
      const r = await fetch("/api/task/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });
      if (r.ok) setClaimed((c) => ({ ...c, [task]: true }));
    } catch {}
  };

  const userId = user?.id ?? "";
  // linkedAccounts length + types = the primitive that changes when a link lands
  const acctKey = (user?.linkedAccounts ?? []).map((a: any) => a.type).sort().join(",");

  useEffect(() => {
    if (!ready || !authenticated || !userId) return;
    const key = `${userId}:${acctKey}`;
    if (lastSync.current === key) return;
    lastSync.current = key;
    setBusy(true);
    (async () => {
      try {
        const access_token = await getAccessToken();
        const r = await fetch("/auth/privy", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_token, identity_token: identityToken || undefined }),
        });
        const j = await r.json();
        const out: GateResp = r.ok ? j : { status: "error", error: j.error || `http_${r.status}` };
        // The login gate's only job is a verified session — the cookie is set
        // on both outcomes, so move on and let /onboard handle the X step.
        if (mode === "login" && (out.status === "ok" || out.status === "need_twitter")) {
          window.location.href = next;
          return;
        }
        setResp(out);
      } catch (e: any) {
        setResp({ status: "error", error: e?.message || "network_error" });
      } finally {
        setBusy(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, authenticated, userId, acctKey, mode]);

  const signOut = async () => {
    lastSync.current = "";
    setResp(null);
    try { await fetch("/auth/signout", { method: "POST" }); } catch {}
    await logout();
    window.location.href = "/";
  };

  if (!ready) return <div className="pv-note">Preparing sign-in…</div>;

  if (!authenticated) {
    if (mode === "onboard") {
      return (
        <div>
          <div className="pv-note">Your session has ended.</div>
          <a className="pv-cta pv-continue" href="/login?next=%2Fonboard">Sign in</a>
        </div>
      );
    }
    return (
      <div>
        <button className="pv-cta" onClick={() => login()}>Sign in</button>
        <p className="pv-note" style={{ marginTop: 12 }}>
          Sign-in verifies you are a real person. Your account and embedded wallet are created
          on first sign-in. No posts are read or written.
        </p>
      </div>
    );
  }

  if (busy || (mode === "login" && !resp)) return <div className="pv-note">Signing you in…</div>;

  if (resp?.status === "need_twitter") {
    const reserved = resp.reserved || null;
    showReservedMoment(reserved);
    return (
      <div>
        <div className="pv-row">
          <div>
            <div className="pv-row-n">{reserved ? `Claim @${reserved} with X` : "X account required"}</div>
            <div className="pv-row-d">{reserved
              ? "Your reservation is in. The card itself is claimed by the X account — link it to finish."
              : "Cards are issued against a verified X identity — one card per account."}</div>
          </div>
          <button className="pv-cta pv-cta--sm" onClick={() => linkTwitter()}>Link X</button>
        </div>
        <button className="pv-out" onClick={signOut}>Sign out</button>
      </div>
    );
  }
  if (resp?.status === "ok") showReservedMoment(null);

  if (resp?.status === "ok") {
    return (
      <div>
        <div className="pv-row">
          <div>
            <div className="pv-row-n">@{resp.x_username} verified</div>
            <div className="pv-row-d">{resp.wallet ? `Wallet ${short(resp.wallet)} created for this account.` : "Account verified."}</div>
          </div>
          <span className="pv-ok">Connected</span>
        </div>
        <div className="pv-row">
          <div>
            <div className="pv-row-n">GitHub</div>
            <div className="pv-row-d">{resp.github
              ? `@${resp.github} linked — your shipping history is part of your profile.`
              : resp.card
                ? "Optional. Connects your builder profile to your card."
                : "Optional. Linking real shipping history raises your score."}</div>
          </div>
          {resp.github
            ? <span className="pv-ok">Connected</span>
            : <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => linkGithub()}>Link GitHub</button>}
        </div>
        <div className="pv-row">
          <div>
            <div className="pv-row-n">LinkedIn</div>
            <div className="pv-row-d">{resp.linkedin
              ? "Linked — a verified work email is part of your profile."
              : resp.card
                ? "Optional. Connects a verified work email to your card."
                : "Optional. A verified work email strengthens your score."}</div>
          </div>
          {resp.linkedin
            ? <span className="pv-ok">Connected</span>
            : <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => linkLinkedIn()}>Link LinkedIn</button>}
        </div>
        {resp.card ? (
          <>
            <a className="pv-cta pv-continue" href={`/card/${encodeURIComponent(resp.card.handle)}`}>
              View your card
            </a>
            <a className="pv-cta pv-cta--ghost pv-continue" style={{ marginTop: 10 }} href="/report">
              Agent report — how your score was decided
            </a>
            {(resp.reruns_left ?? 0) > 0 ? (
              <a className="pv-cta pv-cta--ghost pv-continue" style={{ marginTop: 10 }} href={`/onboard/score?uid=${encodeURIComponent(resp.uid)}&step=rescore`}>
                Re-run the agent · {resp.reruns_left} of 5 left
              </a>
            ) : (
              <p className="pv-note" style={{ marginTop: 12 }}>Re-runs used up — 5 of 5.</p>
            )}
            {resp.campaign && resp.campaign.active && (
              <div style={{ marginTop: 22, borderTop: "1px solid var(--line)", paddingTop: 6 }}>
                <div className="pv-row">
                  <div>
                    <div className="pv-row-n">Follow on X</div>
                    <div className="pv-row-d">@{resp.campaign.x_handle} — claim ${resp.campaign.task_rewards.follow.toFixed(2)} in credits, once.</div>
                  </div>
                  {resp.campaign.tasks.follow || claimed.follow
                    ? <span className="pv-ok">Claimed</span>
                    : <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => claim("follow", `https://twitter.com/intent/follow?screen_name=${resp.campaign!.x_handle}`)}>Follow &amp; claim</button>}
                </div>
                <div className="pv-row">
                  <div>
                    <div className="pv-row-n">Share your card</div>
                    <div className="pv-row-d">Post it on X — claim ${resp.campaign.task_rewards.share.toFixed(2)} in credits, once.</div>
                  </div>
                  {resp.campaign.tasks.share || claimed.share
                    ? <span className="pv-ok">Claimed</span>
                    : <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => claim("share", `https://twitter.com/intent/tweet?text=${encodeURIComponent(`The agent scored my public record ${resp.score ?? 0}/100 — my one-of-one Vantis Card:`)}&url=${encodeURIComponent(`https://card.vantis.sh/card/${resp.card!.handle.replace("@", "")}?via=${resp.card!.handle.replace("@", "")}`)}`)}>Share &amp; claim</button>}
                </div>
                <div className="pv-row">
                  <div>
                    <div className="pv-row-n">Refer builders</div>
                    <div className="pv-row-d">${resp.campaign.ref_bonus.toFixed(2)} per referred card that scores — ${resp.campaign.ref_earned.toFixed(2)} of ${resp.campaign.ref_cap.toFixed(0)} earned.</div>
                  </div>
                  <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => { navigator.clipboard?.writeText(resp.campaign!.ref_link); setCopied(true); setTimeout(() => setCopied(false), 1600); }}>
                    {copied ? "Copied" : "Copy link"}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <a className="pv-cta pv-continue" href={`/onboard/score?uid=${encodeURIComponent(resp.uid)}&step=score`}>
            Continue to scoring
          </a>
        )}
        <div><button className="pv-out" onClick={signOut}>Sign out</button></div>
      </div>
    );
  }

  return (
    <div>
      <div className="pv-note">Sign-in hit a snag{resp?.status === "error" ? ` (${resp.error})` : ""}. </div>
      <button className="pv-cta pv-cta--sm pv-cta--ghost" style={{ marginTop: 12 }} onClick={() => { lastSync.current = ""; setResp(null); }}>
        Try again
      </button>
    </div>
  );
}

const el = document.getElementById("privy-root");
const cfg = window.__PRIVY;
if (el && cfg?.appId) {
  createRoot(el).render(
    <PrivyProvider
      appId={cfg.appId}
      config={{
        embeddedWallets: { ethereum: { createOnLogin: "users-without-wallets" } },
        appearance: { theme: "light", accentColor: "#09F875" },
      }}
    >
      <Gate mode={cfg.mode === "onboard" ? "onboard" : "login"} next={cfg.next || "/onboard"} />
    </PrivyProvider>
  );
}
