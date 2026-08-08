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

type GateResp =
  | { status: "ok"; uid: string; x_username: string; github: string | null; wallet: string | null; card: { handle: string } | null }
  | { status: "need_twitter" }
  | { status: "error"; error: string };

const short = (a: string) => (a && a.length > 12 ? `${a.slice(0, 6)}…${a.slice(-4)}` : a);

function Gate({ mode, next }: { mode: "login" | "onboard"; next: string }) {
  const { ready, authenticated, user, login, logout, getAccessToken } = usePrivy();
  const { identityToken } = useIdentityToken();
  const { linkTwitter, linkGithub } = useLinkAccount();
  const [resp, setResp] = useState<GateResp | null>(null);
  const [busy, setBusy] = useState(false);
  const lastSync = useRef("");

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
    return (
      <div>
        <div className="pv-row">
          <div>
            <div className="pv-row-n">X account required</div>
            <div className="pv-row-d">Cards are issued against a verified X identity — one card per account.</div>
          </div>
          <button className="pv-cta pv-cta--sm" onClick={() => linkTwitter()}>Link X</button>
        </div>
        <button className="pv-out" onClick={signOut}>Sign out</button>
      </div>
    );
  }

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
        {!resp.card && (
          <div className="pv-row">
            <div>
              <div className="pv-row-n">GitHub</div>
              <div className="pv-row-d">{resp.github ? `@${resp.github} linked — shipping history counts toward your score.` : "Optional. Linking real shipping history raises your score."}</div>
            </div>
            {resp.github
              ? <span className="pv-ok">Connected</span>
              : <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => linkGithub()}>Link GitHub</button>}
          </div>
        )}
        {resp.card ? (
          <a className="pv-cta pv-continue" href={`/card/${encodeURIComponent(resp.card.handle)}`}>
            View your card
          </a>
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
