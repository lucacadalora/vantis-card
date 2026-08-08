// Privy gate island, mounted on /onboard when PRIVY_APP_ID is set.
// One modal does both jobs: the Privy session (account + embedded wallet)
// and the X requirement (card issuance needs a linked X account — enforced
// server-side in /auth/privy, so an email-only login still hits the gate).
//
// Hub lesson (React #185): usePrivy() returns fresh function refs every
// render — effects here key on primitives only, never on the privy object.

import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { PrivyProvider, usePrivy, useIdentityToken, useLinkAccount } from "@privy-io/react-auth";

declare global {
  interface Window {
    __PRIVY: { appId: string };
  }
}

type GateResp =
  | { status: "ok"; uid: string; x_username: string; github: string | null; wallet: string | null }
  | { status: "need_twitter" }
  | { status: "error"; error: string };

const short = (a: string) => (a && a.length > 12 ? `${a.slice(0, 6)}…${a.slice(-4)}` : a);

function Gate() {
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
        setResp(r.ok ? j : { status: "error", error: j.error || `http_${r.status}` });
      } catch (e: any) {
        setResp({ status: "error", error: e?.message || "network_error" });
      } finally {
        setBusy(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, authenticated, userId, acctKey]);

  if (!ready) return <div className="pv-note">Preparing sign-in…</div>;

  if (!authenticated) {
    return (
      <div>
        <button className="pv-cta" onClick={() => login()}>Sign in with X</button>
        <p className="pv-note">
          Signing in verifies you are a real person and creates your Vantis account with an
          embedded wallet. No posts are read or written.
        </p>
      </div>
    );
  }

  if (busy && !resp) return <div className="pv-note">Verifying your account…</div>;

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
        <button className="pv-out" onClick={() => { lastSync.current = ""; setResp(null); logout(); }}>Sign out</button>
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
        <div className="pv-row">
          <div>
            <div className="pv-row-n">GitHub</div>
            <div className="pv-row-d">{resp.github ? `@${resp.github} linked — shipping history counts toward your score.` : "Optional. Linking real shipping history raises your score."}</div>
          </div>
          {resp.github
            ? <span className="pv-ok">Connected</span>
            : <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => linkGithub()} disabled={busy}>Link GitHub</button>}
        </div>
        <a className="pv-cta pv-continue" href={`/onboard/score?uid=${encodeURIComponent(resp.uid)}&step=score`}>
          Continue to scoring
        </a>
        <button className="pv-out" onClick={() => { lastSync.current = ""; setResp(null); logout(); }}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <div className="pv-note">Sign-in hit a snag{resp?.status === "error" ? ` (${resp.error})` : ""}. </div>
      <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => { lastSync.current = ""; setResp(null); }}>
        Try again
      </button>
    </div>
  );
}

const el = document.getElementById("privy-root");
if (el && window.__PRIVY?.appId) {
  createRoot(el).render(
    <PrivyProvider
      appId={window.__PRIVY.appId}
      config={{
        embeddedWallets: { ethereum: { createOnLogin: "users-without-wallets" } },
        appearance: { theme: "light", accentColor: "#09F875" },
      }}
    >
      <Gate />
    </PrivyProvider>
  );
}
