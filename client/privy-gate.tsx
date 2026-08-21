// Privy gate island. Three mounts, one bundle:
//   mode "login"   (/login)  — the first gate. Any Privy sign-in passes it;
//                              after the server verifies tokens and sets the
//                              session cookie, the browser moves to `next`.
//   mode "onboard" (/onboard) — the X requirement. Cards are issued against a
//                              verified X account; link it here, GitHub too.
//   mode "wallet" (/portfolio) — withdraw from the embedded wallet on
//                              Robinhood Chain. The user signs here in the
//                              browser; the server never holds a key.
//
// The X gate is enforced server-side in /auth/privy, so an email-only login
// still cannot mint a card — the modal path makes no difference.
//
// Hub lesson (React #185): usePrivy() returns fresh function refs every
// render — effects here key on primitives only, never on the privy object.

import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { PrivyProvider, usePrivy, useIdentityToken, useLinkAccount, useSendTransaction, useLoginWithEmail, useLoginWithOAuth, Captcha } from "@privy-io/react-auth";
import { useSignAndSendTransaction, useWallets as useSolanaWallets, useCreateWallet as useCreateSolanaWallet } from "@privy-io/react-auth/solana";
import { defineChain } from "viem";
// Solana transactions are built HERE and handed to Privy as wire bytes —
// signAndSendTransaction takes a Uint8Array, not a high-level object. These
// are the official instruction builders (already in the tree as Privy
// transitive deps), never hand-rolled encoding: a wrong byte in a transfer
// is somebody's money.
import {
  address as solAddress, pipe, createTransactionMessage, setTransactionMessageFeePayer,
  setTransactionMessageLifetimeUsingBlockhash, appendTransactionMessageInstructions,
  compileTransaction, getTransactionEncoder, createNoopSigner, lamports, getBase58Decoder,
} from "@solana/kit";
import { getTransferSolInstruction } from "@solana-program/system";
import {
  getTransferCheckedInstruction, findAssociatedTokenPda,
  getCreateAssociatedTokenIdempotentInstruction, TOKEN_PROGRAM_ADDRESS,
} from "@solana-program/token";

declare global {
  interface Window {
    __PRIVY: { appId: string; mode: "login" | "onboard" | "wallet"; next?: string; signupPaused?: boolean; addr?: string; sol?: string; methods?: { primary: string[]; overflow: string[] } | null };
  }
}

// Chain roster — MUST mirror server/portfolio.ts CHAINS (keys, ids, RPCs,
// assets, decimals). One EVM key = the same address on all of them; RPCs
// pinned explicitly so the CSP connect-src list stays deterministic.
const VANTIS_CA = "0xB6d695d5fbcEbD837f6b9f214c9BeeE8bA90762B";
const mkChain = (id: number, name: string, rpc: string, explorer: string) => defineChain({
  id, name,
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: [rpc] } },
  blockExplorers: { default: { name: "Explorer", url: explorer } },
});
type WdAsset = { symbol: string; contract: string | null; decimals: number };
type WdChain = {
  chain: ReturnType<typeof defineChain> | null; // null on Solana — viem is EVM-only
  family: "evm" | "solana";
  id: number;
  name: string;
  explorer: string;
  txPath: string; // Solscan wants /tx/ too, but EVM scans and it differ elsewhere
  gas: string;    // the symbol that pays fees on this chain
  assets: WdAsset[];
  headroom?: bigint;
};
const CHAIN_CFG: Record<string, WdChain> = {
  robinhood: {
    chain: mkChain(4663, "Robinhood Chain", "https://rpc.mainnet.chain.robinhood.com", "https://robinscan.io"),
    family: "evm", txPath: "/tx/", gas: "ETH", id: 4663, name: "Robinhood Chain", explorer: "https://robinscan.io",
    assets: [
      { symbol: "VANTIS", contract: VANTIS_CA, decimals: 18 },
      { symbol: "ETH", contract: null, decimals: 18 },
    ],
  },
  ethereum: {
    chain: mkChain(1, "Ethereum", "https://ethereum-rpc.publicnode.com", "https://etherscan.io"),
    family: "evm", txPath: "/tx/", gas: "ETH", id: 1, name: "Ethereum", explorer: "https://etherscan.io",
    // Mainnet gas is real money: 0.0021 ETH covers a 21000-gas transfer up
    // to ~100 gwei maxFeePerGas, so Max keeps working under congestion.
    headroom: 2_100_000_000_000_000n,
    assets: [
      { symbol: "ETH", contract: null, decimals: 18 },
      { symbol: "USDC", contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", decimals: 6 },
    ],
  },
  arbitrum: {
    chain: mkChain(42161, "Arbitrum", "https://arbitrum-one-rpc.publicnode.com", "https://arbiscan.io"),
    family: "evm", txPath: "/tx/", gas: "ETH", id: 42161, name: "Arbitrum", explorer: "https://arbiscan.io",
    assets: [
      { symbol: "ETH", contract: null, decimals: 18 },
      { symbol: "USDC", contract: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", decimals: 6 },
    ],
  },
  base: {
    chain: mkChain(8453, "Base", "https://base-rpc.publicnode.com", "https://basescan.org"),
    family: "evm", txPath: "/tx/", gas: "ETH", id: 8453, name: "Base", explorer: "https://basescan.org",
    assets: [
      { symbol: "ETH", contract: null, decimals: 18 },
      { symbol: "USDC", contract: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", decimals: 6 },
    ],
  },
  // Solana: `contract` is the SPL mint, fees are paid in SOL, and there is no
  // viem chain object because viem does not model non-EVM chains.
  solana: {
    chain: null, family: "solana", txPath: "/tx/", gas: "SOL", id: 0,
    name: "Solana", explorer: "https://solscan.io",
    // ~0.001 SOL: the signature fee plus rent if the recipient's token
    // account has to be created, so Max on SOL still leaves a landable send.
    headroom: 1_000_000n,
    assets: [
      { symbol: "SOL", contract: null, decimals: 9 },
      { symbol: "USDC", contract: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", decimals: 6 },
    ],
  },
};
// supportedChains is a viem concept — Solana is excluded by construction.
const ALL_CHAINS = Object.values(CHAIN_CFG)
  .map((c) => c.chain)
  .filter((c): c is ReturnType<typeof defineChain> => c !== null);
const ROBINHOOD = CHAIN_CFG.robinhood.chain!;
// Every token contract we know about, across ALL chains — a recipient that
// matches any of them is a loss address on every chain (the classic
// wrong-tab copy of a USDC contract), so the blocklist is the union, never
// just the selected chain's set. EVM only: these are compared lowercased,
// and base58 is case-SIGNIFICANT, so Solana mints get their own set.
const KNOWN_TOKEN_CONTRACTS = new Set(
  Object.values(CHAIN_CFG)
    .filter((c) => c.family === "evm")
    .flatMap((c) => c.assets.map((a) => (a.contract || "").toLowerCase()))
    .filter(Boolean)
);
const KNOWN_SOL_MINTS = new Set(
  Object.values(CHAIN_CFG)
    .filter((c) => c.family === "solana")
    .flatMap((c) => c.assets.map((a) => a.contract || ""))
    .filter(Boolean)
);
const SOL_ADDR_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

type Campaign = {
  ref_link: string; ref_earned: number; ref_cap: number; ref_bonus: number;
  tasks: { follow: boolean; share: boolean };
  task_rewards: { follow: number; share: number };
  x_handle: string; active: boolean;
};

type GateResp =
  | { status: "ok"; uid: string; booked?: string | null; x_username: string; github: string | null; linkedin?: boolean; wallet: string | null; reruns_left?: number; score?: number; key_reveal?: string | null; card: { handle: string } | null; campaign?: Campaign | null;
      tier?: string | null; breakdown?: Record<string, number> | null; balance_usd?: number; lanes?: { purpose: string; balance_usd: number }[] }
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

// ─── Custom auth panel (mode "login") ───
// Our own UI over Privy's HEADLESS flows — the Privy modal never opens for
// email or SSO. Email = sendCode/loginWithCode with our own code screen;
// Google/X/GitHub/LinkedIn = initOAuth straight to the provider's consent
// page; only the wallet lane still opens Privy UI (its connector modal,
// scoped to wallets). Which buttons exist comes from __PRIVY.methods — the
// server's live read of the dashboard — so Google appears here by itself
// once it is enabled, and a method that is off can never render a button
// that fails on click. <Captcha /> is Privy's own invisible-Turnstile
// element for headless forms (exactly one instance may exist at a time).

const SSO_LABEL: Record<string, string> = { google: "Google", twitter: "X", github: "GitHub", linkedin: "LinkedIn" };
// The two headline providers wear their REAL marks (Luca's call, Wafer-style
// row): Google's four-color G, GitHub's octocat in ink. The overflow rows
// stay monochrome per house style.
const G_LOGO = <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.46c-.28 1.49-1.13 2.75-2.4 3.6v3h3.88c2.27-2.09 3.56-5.17 3.56-8.79Z"/><path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.13 0-5.78-2.11-6.72-4.95H1.27v3.09C3.24 21.3 7.31 24 12 24Z"/><path fill="#FBBC05" d="M5.28 14.29A7.2 7.2 0 0 1 4.9 12c0-.8.14-1.57.38-2.29V6.62H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.38l4.01-3.09Z"/><path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.24 2.7 1.27 6.62l4.01 3.09C6.22 6.87 8.87 4.77 12 4.77Z"/></svg>;
const SSO_GLYPH: Record<string, React.ReactNode> = {
  twitter: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L2.7 2h6.4l4.4 5.9L18.9 2Zm-1.1 18.1h1.7L7.1 3.7H5.3l12.5 16.4Z"/></svg>,
  github: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>,
  linkedin: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.2 8.3h4.6V22H.2V8.3Zm7.6 0h4.4v1.9h.1c.6-1.2 2.1-2.4 4.3-2.4 4.6 0 5.5 3 5.5 7V22h-4.6v-6.4c0-1.5 0-3.5-2.1-3.5s-2.5 1.7-2.5 3.4V22H8V8.3Z" transform="translate(1.9 -1)"/></svg>,
  wallet: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 9.5h13.5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H21" strokeLinecap="round"/><circle cx="16.6" cy="13" r="1" fill="currentColor" stroke="none"/></svg>,
};

function AuthPanel({ paused }: { paused: boolean }) {
  // Wallet lane = login() with a per-call loginMethods override. That
  // override LOSES to a config-level loginMethodsAndOrder pin (and
  // connectOrCreateWallet is just the generic login modal) — both verified
  // live — which is why PrivyGateRoot only pins the config in wallet mode.
  const { login } = usePrivy();
  const { sendCode, loginWithCode } = useLoginWithEmail();
  const { initOAuth } = useLoginWithOAuth();
  const [step, setStep] = useState<"start" | "code">("start");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [more, setMore] = useState(false);
  // Captcha trouble (blocked script, strict privacy setups) must never
  // strand anyone: offer Privy's own window, which carries the visible
  // Turnstile challenge UI, as the escape hatch.
  const [showFallback, setShowFallback] = useState(false);
  // The provider's redirect lands back here with privy_oauth_code and the
  // SDK finishes the login on its own — show progress, never a fresh form.
  const [oauthReturn] = useState(() => new URLSearchParams(window.location.search).has("privy_oauth_code"));

  const methods = window.__PRIVY?.methods || null;
  const primary = methods?.primary?.length ? methods.primary : ["email"];
  const overflow = methods?.overflow ?? ["twitter", "github", "linkedin", "detected_ethereum_wallets"];
  // GitHub and Google are ALWAYS shown in the headline row (Luca's call —
  // Wafer-style). Whether a click actually starts OAuth keys off the live
  // dashboard read, so Google arms itself the moment it is enabled there.
  const googleLive = primary.includes("google") || overflow.includes("google");
  const githubLive = primary.includes("github") || overflow.includes("github");
  const ssoOverflow = overflow.filter((m) => m === "twitter" || m === "linkedin");
  const hasWallet = overflow.some((m) => m !== "twitter" && m !== "github" && m !== "linkedin");

  const sso = async (provider: "google" | "twitter" | "github" | "linkedin") => {
    setErr("");
    try {
      await initOAuth({ provider, disableSignup: paused });
    } catch (ex: any) {
      console.debug("[auth] initOAuth failed:", ex?.privyErrorCode, ex?.message);
      if (/captcha/i.test(String(ex?.privyErrorCode || "") + String(ex?.message || ""))) setShowFallback(true);
      setErr(`Could not open ${SSO_LABEL[provider]} sign-in — try again.`);
    }
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const em = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setErr("That doesn't look like an email address."); return; }
    setBusy(true); setErr("");
    try {
      await sendCode({ email: em, disableSignup: paused });
      setStep("code"); setCode("");
    } catch (ex: any) {
      const m = String(ex?.message || "");
      const code = String(ex?.privyErrorCode || "");
      // Raw reason to the console for diagnosis; the UI stays friendly.
      console.debug("[auth] sendCode failed:", code, m);
      if (/captcha/i.test(code + m)) setShowFallback(true);
      setErr(/captcha/i.test(code + m)
        ? "We couldn't verify you're human — reload the page and try once more."
        : paused && /not exist|not found|disabled|sign.?up/i.test(m)
          ? "New sign-ups are paused for a short while — this email has no account yet."
          : "Could not send the code just now — try again in a moment.");
    } finally { setBusy(false); }
  };

  const submitCode = async (e: React.FormEvent) => {
    e.preventDefault();
    const c = code.trim();
    if (!/^\d{6}$/.test(c)) { setErr("The code is the 6 digits from the email."); return; }
    setBusy(true); setErr("");
    try {
      await loginWithCode({ code: c });
      // authenticated flips and the Gate takes over — keep the busy state so
      // the form never flashes back.
    } catch {
      setErr("That code didn't match. Re-check the email, or resend.");
      setBusy(false);
    }
  };

  if (oauthReturn) {
    return (
      <div className="pv-panel">
        <div className="pv-note">Completing sign-in&hellip;</div>
        <a className="pv-morelink" href="/login">Start over</a>
      </div>
    );
  }

  if (step === "code") {
    return (
      <form className="pv-panel" onSubmit={submitCode}>
        <Captcha />
        <div className="pv-panel-h">Check your email</div>
        <p className="pv-note" style={{ margin: "4px 0 12px" }}>We sent a 6-digit code to <strong>{email.trim()}</strong>.</p>
        <input
          className="pv-in pv-in--code" value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
          placeholder="000000" inputMode="numeric" autoComplete="one-time-code"
          autoFocus spellCheck={false} aria-label="6-digit code"
        />
        {err && <p className="pv-err" role="alert">{err}</p>}
        <button className="pv-cta" type="submit" disabled={busy}>{busy ? "Verifying…" : "Verify & sign in"}</button>
        <div className="pv-panel-foot">
          <button type="button" className="pv-morelink" disabled={busy} onClick={(e) => { setStep("start"); setErr(""); }}>Use a different email</button>
          <button type="button" className="pv-morelink" disabled={busy} onClick={() => submitEmail({ preventDefault: () => {} } as any)}>Resend code</button>
        </div>
      </form>
    );
  }

  return (
    <form className="pv-panel" onSubmit={submitEmail}>
      <Captcha />
      <div className="pv-ssorow">
        <button type="button" className="pv-sso pv-sso--half"
          onClick={() => githubLive ? sso("github") : setErr("GitHub sign-in opens soon — use email meanwhile.")}>
          {SSO_GLYPH.github}GitHub
        </button>
        <button type="button" className="pv-sso pv-sso--half"
          onClick={() => googleLive ? sso("google") : setErr("Google sign-in opens soon — use email meanwhile.")}>
          {G_LOGO}Google
        </button>
      </div>
      <div className="pv-or"><span>or</span></div>
      <input
        className="pv-in" type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com" autoComplete="email" inputMode="email"
        spellCheck={false} aria-label="Email address"
      />
      {err && <p className="pv-err" role="alert">{err}</p>}
      {showFallback && (
        <button type="button" className="pv-morelink" onClick={() => login()}>Use the standard sign-in window instead</button>
      )}
      <button className="pv-cta" type="submit" disabled={busy}>{busy ? "Sending code…" : "Continue with email"}</button>
      {(ssoOverflow.length > 0 || hasWallet) && (
        <>
          {!more && (
            <button type="button" className="pv-morelink pv-morelink--c" onClick={() => setMore(true)}>
              More ways to sign in
            </button>
          )}
          {more && (
            <div className="pv-morebox">
              {ssoOverflow.map((p) => (
                <button key={p} type="button" className="pv-sso" onClick={() => sso(p as any)}>
                  {SSO_GLYPH[p]}Continue with {SSO_LABEL[p]}
                </button>
              ))}
              {hasWallet && (
                <button type="button" className="pv-sso" onClick={() => (login as any)({ loginMethods: ["wallet"] })}>
                  {SSO_GLYPH.wallet}Continue with a wallet
                </button>
              )}
            </div>
          )}
        </>
      )}
    </form>
  );
}

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
        <AuthPanel paused={!!window.__PRIVY?.signupPaused} />
        <p className="pv-note" style={{ marginTop: 12 }}>
          {window.__PRIVY?.signupPaused
            ? "Sign in to an account you already have. Creating a brand-new account is paused for a short while — your reserved handle is held until it reopens."
            : "Sign-in verifies you are a real person. Your account and embedded wallet are created on first sign-in. No posts are read or written."}
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
            <div className="pv-row-n">{reserved ? `@${reserved} is booked — verify to claim` : "X account required"}</div>
            <div className="pv-row-d">{reserved
              ? "Your handle is yours. Verifying with an X account proves you're real and lets the agent score you — the card mints under your booked handle."
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
            <div className="pv-row-d">{resp.booked
              ? `Your card will mint as @${resp.booked} — your booked handle.`
              : resp.wallet ? `Wallet ${short(resp.wallet)} created for this account.` : "Account verified."}</div>
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
              ? "Linked — your public LinkedIn presence (role, company, posts) is scanned into your profile."
              : resp.card
                ? "Optional. The agent scans your public LinkedIn — role, company, posts."
                : "Optional. Your public LinkedIn — role, company, posts — is scanned into your score."}</div>
          </div>
          {resp.linkedin
            ? <span className="pv-ok">Connected</span>
            : <button className="pv-cta pv-cta--sm pv-cta--ghost" onClick={() => linkLinkedIn()}>Link LinkedIn</button>}
        </div>
        {resp.card ? (
          <>
            {resp.key_reveal && (
              <div className="pv-row" style={{ display: "block" }}>
                <div className="pv-row-n">Your API key is ready</div>
                <div className="pv-row-d" style={{ margin: "6px 0 8px" }}>Shown once — copy it now. It spends the credits already on your card.</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12.5, background: "var(--ink)", color: "var(--green)", padding: "12px 14px", borderRadius: 10, wordBreak: "break-all" }}>{resp.key_reveal}</div>
              </div>
            )}
            <a className="pv-cta pv-continue" href={`/card/${encodeURIComponent(resp.card.handle)}`}>
              View your card
            </a>
            {(() => {
              // Tool cards with live previews — real score bars, real lane
              // balances, real re-runs left. Never placeholder numbers.
              const dims = resp.breakdown
                ? Object.values(resp.breakdown as Record<string, number>).slice(0, 5)
                : null;
              const inf = resp.lanes?.find((l) => l.purpose === "inference")?.balance_usd ?? 0;
              const dev = resp.lanes?.find((l) => l.purpose === "devtools")?.balance_usd ?? 0;
              const main = resp.balance_usd ?? 0;
              const total = main + inf + dev;
              const rerunsLeft = resp.reruns_left ?? 0;
              return (
                <div className="pv-tools">
                  <a className="pv-tool" href="/report">
                    <div className="pv-tool-th">
                      <div className="pv-th-score">
                        {resp.score ?? 0}<span>/100</span>
                        {resp.tier && <em className="pv-th-tier">{resp.tier}</em>}
                      </div>
                      <div className="pv-th-bars">
                        {(dims || [12, 8, 15, 6, 10]).map((v, i) => (
                          <div key={i} className="pv-th-bar"><i style={{ width: `${Math.min(100, (Number(v) / 20) * 100)}%` }} /></div>
                        ))}
                      </div>
                    </div>
                    <div className="pv-tool-n">Agent report</div>
                    <div className="pv-tool-d">How your score was decided</div>
                  </a>
                  <a className="pv-tool" href="/wallets">
                    <div className="pv-tool-th">
                      <div className="pv-th-score">${main.toFixed(2)}<span> main</span></div>
                      <div className="pv-th-split">
                        <i style={{ width: total > 0 ? `${(main / total) * 100}%` : "100%", background: "var(--green-ink)" }} />
                        <i style={{ width: total > 0 ? `${((inf + dev) / total) * 100}%` : "0%", background: "var(--green)" }} />
                      </div>
                      <div className="pv-th-lane">INF ${inf.toFixed(2)} · DEV ${dev.toFixed(2)}</div>
                    </div>
                    <div className="pv-tool-n">Console</div>
                    <div className="pv-tool-d">Agent budgets from your balance</div>
                  </a>
                  {rerunsLeft > 0 ? (
                    <a className="pv-tool" href={`/onboard/score?uid=${encodeURIComponent(resp.uid)}&step=rescore`}>
                      <div className="pv-tool-th pv-tool-th--c">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M20 12a8 8 0 1 1-2.34-5.66" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
                          <path d="M20 3v4h-4" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="pv-th-lane" style={{ justifyContent: "center" }}>{rerunsLeft} OF 5 LEFT</div>
                      </div>
                      <div className="pv-tool-n">Re-run the agent</div>
                      <div className="pv-tool-d">Refreshes the verdict, never the grant</div>
                    </a>
                  ) : (
                    <div className="pv-tool pv-tool--off">
                      <div className="pv-tool-th pv-tool-th--c">
                        <div className="pv-th-lane" style={{ justifyContent: "center" }}>0 OF 5 LEFT</div>
                      </div>
                      <div className="pv-tool-n">Re-run the agent</div>
                      <div className="pv-tool-d">All five re-runs used</div>
                    </div>
                  )}
                </div>
              );
            })()}
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

// ─── Withdraw (mode "wallet", /portfolio) ───

type PfAsset = { symbol: string; contract: string | null; decimals: number; raw: string | null; amount: number | null; usd: number | null };
type Pf = { address: string; chain: string; assets: PfAsset[] };

// "1.5" @ 18 → 1500000000000000000n. String math only — float
// multiplication loses base units and a withdraw must move exactly what
// was typed. Decimals vary per asset (USDC is 6).
function toBase(s: string, decimals: number): bigint | null {
  const re = new RegExp("^(\\d*)(?:\\.(\\d{1," + decimals + "}))?$");
  const m = re.exec(String(s || "").trim());
  if (!m || (!m[1] && !m[2])) return null;
  try { return BigInt(m[1] || "0") * 10n ** BigInt(decimals) + BigInt((m[2] || "0").padEnd(decimals, "0")); } catch { return null; }
}
const fromBase = (raw: string | null, decimals: number): string => {
  if (!raw) return "0";
  try {
    const v = BigInt(raw);
    const unit = 10n ** BigInt(decimals);
    const whole = v / unit;
    const frac = (v % unit).toString().padStart(decimals, "0").replace(/0+$/, "");
    return frac ? `${whole}.${frac}` : whole.toString();
  } catch { return "0"; }
};
// Headroom kept back when withdrawing the full ETH balance — gas must
// still be payable from what remains.
const GAS_HEADROOM = 200_000_000_000_000n; // 0.0002 ETH

// Privy hands back a 64-byte signature; explorers address transactions by its
// base58 form. ("Decoder" is kit's naming for bytes → string.)
const b58 = (bytes: Uint8Array): string => {
  try { return String(getBase58Decoder().decode(bytes)); } catch { return ""; }
};

// Build a Solana transfer and return the wire bytes Privy wants. Kept out of
// the component so it is a pure function of its inputs and can be reasoned
// about on its own. `payer` signs; the noop signer just marks which account
// that is, since the real signature comes from Privy.
async function buildSolanaTransfer(opts: {
  from: string; to: string; mint: string | null; amount: bigint; decimals: number;
  blockhash: { blockhash: string; lastValidBlockHeight: number };
}): Promise<Uint8Array> {
  const from = solAddress(opts.from);
  const to = solAddress(opts.to);
  const signer = createNoopSigner(from);
  let ixs;
  if (opts.mint === null) {
    ixs = [getTransferSolInstruction({ source: signer, destination: to, amount: lamports(opts.amount) })];
  } else {
    const mint = solAddress(opts.mint);
    const [srcAta] = await findAssociatedTokenPda({ owner: from, mint, tokenProgram: TOKEN_PROGRAM_ADDRESS });
    const [dstAta] = await findAssociatedTokenPda({ owner: to, mint, tokenProgram: TOKEN_PROGRAM_ADDRESS });
    // SPL tokens live in per-owner token accounts, and a recipient who has
    // never held this mint has none — the transfer would simply fail. The
    // IDEMPOTENT create is a no-op when the account already exists, so one
    // instruction covers both cases without a pre-flight read.
    ixs = [
      getCreateAssociatedTokenIdempotentInstruction({ payer: signer, ata: dstAta, owner: to, mint }),
      // "Checked" carries the mint and decimals so the chain itself rejects a
      // mismatch, rather than silently moving the wrong number of units.
      getTransferCheckedInstruction({
        source: srcAta, mint, destination: dstAta, authority: signer,
        amount: opts.amount, decimals: opts.decimals,
      }),
    ];
  }
  const msg = pipe(
    createTransactionMessage({ version: 0 }),
    (m) => setTransactionMessageFeePayer(from, m),
    (m) => setTransactionMessageLifetimeUsingBlockhash(opts.blockhash, m),
    (m) => appendTransactionMessageInstructions(ixs, m),
  );
  return getTransactionEncoder().encode(compileTransaction(msg)) as Uint8Array;
}

function WalletPanel() {
  const { ready, authenticated, user, login, getAccessToken } = usePrivy();
  const { sendTransaction } = useSendTransaction();
  const { signAndSendTransaction } = useSignAndSendTransaction();
  const solWallets = useSolanaWallets();
  const { createWallet: createSolWallet } = useCreateSolanaWallet();
  const { identityToken } = useIdentityToken();
  const [solMinting, setSolMinting] = useState(false);
  const [solMintErr, setSolMintErr] = useState("");
  const [chainKey, setChainKey] = useState("robinhood");
  const [pf, setPf] = useState<Pf | null>(null);
  const [asset, setAsset] = useState("VANTIS");
  const [to, setTo] = useState("");
  const [amt, setAmt] = useState("");
  const [st, setSt] = useState<{ k: "idle" | "sending" | "sent" | "err"; msg?: string; hash?: string }>({ k: "idle" });
  const [pfErr, setPfErr] = useState(false);
  const chainRef = useRef(chainKey);
  chainRef.current = chainKey;

  const loadPf = (key?: string) => {
    const k = key || chainRef.current;
    setPfErr(false);
    fetch("/api/portfolio?chain=" + encodeURIComponent(k), { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("http_" + r.status))))
      .then((j) => { if (j.chain === chainRef.current) setPf(j); })
      .catch(() => { if (k === chainRef.current) setPfErr(true); });
  };
  // The page's chain selector drives this island too — one selector, both
  // panels. The event carries the chain key. This island lives in a LAZY
  // chunk, so pills are clickable before the listener exists: adopt the
  // page's live pill state at mount (the .on class flips synchronously on
  // every click) BEFORE the first fetch, or an early click is silently
  // lost and a withdraw could build on the wrong chain.
  useEffect(() => {
    const onPill = document.querySelector(".pf-chain.on") as HTMLElement | null;
    const initial = onPill?.getAttribute("data-chain") || "";
    if (CHAIN_CFG[initial] && initial !== chainRef.current) {
      chainRef.current = initial;
      setChainKey(initial);
      setAsset(CHAIN_CFG[initial].assets[0].symbol);
    }
    loadPf();
    const onChain = (e: Event) => {
      const key = String((e as CustomEvent).detail || "");
      const cfg = CHAIN_CFG[key];
      if (!cfg) return;
      setChainKey(key);
      chainRef.current = key;
      setPf(null);
      setAsset(cfg.assets[0].symbol);
      setAmt("");
      setSt({ k: "idle" });
      loadPf(key);
    };
    window.addEventListener("vantis:chain", onChain);
    return () => window.removeEventListener("vantis:chain", onChain);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const solRegistered = useRef("");
  const solAddr = solWallets.wallets[0]?.address || "";

  // createOnLogin only fires at LOGIN, so every account that already had a
  // session when the Solana lane shipped would sit here with no wallet and no
  // way to get one short of signing out. Mint it on demand instead: same
  // embedded wallet Privy would have created, just triggered by the visit.
  // Guarded by a ref because createWallet() throws if one already exists, and
  // solWallets takes a beat to populate after mount.
  const solMintTried = useRef(false);
  useEffect(() => {
    if (!ready || !authenticated || !solWallets.ready) return;
    if (solAddr || solMintTried.current) return;
    // The server mints this on the /portfolio route and it takes a few
    // seconds to reach the browser's Privy state. If the page already carries
    // an address, the wallet EXISTS and this client is merely behind — asking
    // for another one here is how you end up with two wallets and a balance
    // shown against the address you cannot sign from. Let it catch up.
    if (window.__PRIVY?.sol) return;
    solMintTried.current = true;
    setSolMinting(true);
    setSolMintErr("");
    const note = document.getElementById("pf-nosol");
    if (note) note.textContent = "Creating your Solana wallet…";
    createSolWallet()
      .then(() => { /* the register effect below picks it up and reloads */ })
      .catch((e: any) => {
        const msg = String(e?.message || e || "");
        // "already has an embedded wallet" is a benign race, not a failure:
        // solWallets simply had not populated yet when we checked.
        if (/already/i.test(msg)) return;
        setSolMintErr(msg.slice(0, 160) || "Could not create the Solana wallet.");
        if (note) note.textContent = "Your Solana wallet could not be created just now. Reload the page to try again.";
      })
      .finally(() => setSolMinting(false));
  }, [ready, authenticated, solWallets.ready, solAddr, createSolWallet]);

  // Privy mints the Solana key in the browser, so the server only learns the
  // address if we tell it. A signed-in user on /portfolio never re-runs
  // /auth/privy, and without this the page would show "no Solana wallet yet"
  // for a wallet that already exists. We post the identity TOKEN, not the
  // address — the server reads the address out of the verified claim.
  // Bounded because the identity token is a SNAPSHOT: a token minted before
  // the wallet existed carries no Solana account, so the server correctly
  // records nothing and we have to wait for Privy to reissue one. Latching
  // "done" on that first null would strand a wallet that does exist, so the
  // ref is only set on success and each fresh token gets another attempt.
  const solRegisterTries = useRef(0);
  useEffect(() => {
    if (!authenticated || !solAddr || !identityToken) return;
    if (solRegistered.current === solAddr) return;
    if ((window.__PRIVY?.sol || "") === solAddr) { solRegistered.current = solAddr; return; }
    if (solRegisterTries.current >= 6) return;
    solRegisterTries.current += 1;
    let cancelled = false;
    (async () => {
      // Send BOTH. The access token lets the server read the live user from
      // Privy's REST API, which always reflects a just-created wallet — the
      // identity token alone can be a snapshot from before it existed.
      let access_token: string | undefined;
      try { access_token = (await getAccessToken()) || undefined; } catch { /* identity token alone then */ }
      const r = await fetch("/api/wallet/solana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identity_token: identityToken, access_token }),
      });
      const j = r.ok ? await r.json().catch(() => null) : null;
      if (cancelled) return;
      if (j?.solana) {
        solRegistered.current = solAddr;
        // Reload so the page picks up the address it renders server-side.
        window.location.reload();
      }
    })().catch(() => { /* a later token refresh retries */ });
    return () => { cancelled = true; };
  }, [authenticated, solAddr, identityToken, getAccessToken]);

  if (!ready) return <p className="wd-note">Preparing wallet…</p>;
  if (!authenticated) {
    return (
      <div className="wd-form">
        <p className="wd-note">Withdrawals are signed in your browser, so the wallet needs its own sign-in — same account, one extra step.</p>
        <div className="wd-row"><button className="wd-signin" onClick={() => login()}>Sign in to withdraw</button></div>
      </div>
    );
  }

  // chainType MUST be pinned to ethereum. Once a Solana wallet exists there
  // are two embedded wallets in linkedAccounts, and an unfiltered find() can
  // return the base58 one — which then fails the address comparison below and
  // locks the whole panel behind a bogus "different wallet" warning.
  const embedded = (user?.linkedAccounts ?? []).find(
    (a: any) => a.type === "wallet" && (a.chainType ?? "ethereum") === "ethereum"
      && (a.walletClientType === "privy" || a.connectorType === "embedded")
  ) as any;
  const serverAddr = (window.__PRIVY?.addr || "").toLowerCase();
  if (embedded?.address && serverAddr && embedded.address.toLowerCase() !== serverAddr) {
    return <p className="wd-warn">This browser is signed in to a different wallet than this account&apos;s. Sign out and back in with the account that owns {serverAddr.slice(0, 6)}…{serverAddr.slice(-4)}.</p>;
  }

  const cfg = CHAIN_CFG[chainKey] || CHAIN_CFG.robinhood;
  const isSol = cfg.family === "solana";
  const assetDef = cfg.assets.find((a) => a.symbol === asset) || cfg.assets[0];
  const balOf = (sym: string): PfAsset | null => pf?.assets?.find((a) => a.symbol === sym) || null;
  const sel = balOf(assetDef.symbol);
  // The fee asset is the chain's native coin either way — ETH on EVM, SOL on
  // Solana — and both are the entry with no contract/mint.
  const eth = pf?.assets?.find((a) => a.contract === null) || null;
  // raw === null means the read FAILED — unknown, never zero. Confusing the
  // two locks withdraw and tells the user to deposit ETH they already have.
  const ethRaw = eth?.raw != null ? BigInt(eth.raw) : null;
  const noGas = ethRaw === 0n;
  const ethUnknown = pf !== null && ethRaw === null;
  // No Solana key on this account yet: the panel would otherwise offer a
  // withdraw it cannot sign.
  const solMissing = isSol && !solAddr;
  // Balances come from the address the SERVER recorded; signing happens with
  // the address in THIS browser. If they ever diverge the page would show one
  // wallet's balance and spend from another, so refuse rather than build a
  // transaction against a balance that is not there. Base58 compares exactly.
  const serverSol = window.__PRIVY?.sol || "";
  const solMismatch = isSol && !!solAddr && !!serverSol && solAddr !== serverSol;

  const setMax = () => {
    if (!sel?.raw) return;
    if (assetDef.contract === null) {
      const v = BigInt(sel.raw);
      const hr = cfg.headroom ?? GAS_HEADROOM;
      setAmt(fromBase((v > hr ? v - hr : 0n).toString(), assetDef.decimals));
    } else {
      setAmt(fromBase(sel.raw, assetDef.decimals));
    }
  };

  const send = async () => {
    // Address shape is family-specific, and the mistake this guards against is
    // a real one: pasting a 0x address into the Solana form (or the reverse)
    // would otherwise build a transaction to nowhere.
    const addrOk = isSol ? SOL_ADDR_RE.test(to) : /^0x[0-9a-fA-F]{40}$/.test(to);
    const wei = toBase(amt, assetDef.decimals);
    if (!addrOk) {
      setSt({ k: "err", msg: isSol
        ? "That recipient is not a valid Solana address. Solana addresses are base58 — they never start with 0x."
        : "That recipient is not a valid 0x address." });
      return;
    }
    if (isSol) {
      // Base58 is case-significant, so these compare exactly, not lowercased.
      // The all-1s address is Solana's system program / burn sink.
      if (to === "11111111111111111111111111111111" || KNOWN_SOL_MINTS.has(to)) {
        setSt({ k: "err", msg: "That is a program or token mint address — anything sent there is lost forever. Paste the destination wallet address instead." });
        return;
      }
    } else {
      const toLc = to.toLowerCase();
      if (toLc === "0x0000000000000000000000000000000000000000" || KNOWN_TOKEN_CONTRACTS.has(toLc)) {
        setSt({ k: "err", msg: "That is the zero address or a token contract — anything sent there is lost forever. Paste the destination wallet address instead." });
        return;
      }
    }
    if (wei === null) { setSt({ k: "err", msg: `That amount is not valid — digits only, up to ${assetDef.decimals} decimal places for ${assetDef.symbol}.` }); return; }
    if (wei <= 0n) { setSt({ k: "err", msg: "Enter an amount above zero." }); return; }
    if (sel?.raw == null) { setSt({ k: "err", msg: "Balance is unavailable right now — try again in a minute." }); return; }
    if (wei > BigInt(sel.raw)) { setSt({ k: "err", msg: "That is more than the balance." }); return; }
    setSt({ k: "sending" });
    try {
      if (isSol) {
        const wallet = solWallets.wallets[0];
        if (!wallet) { setSt({ k: "err", msg: "No Solana wallet in this browser session. Sign out and back in, then try again." }); return; }
        // The blockhash comes from our server, not a public RPC, so the CSP
        // stays closed — same reasoning as reading balances server-side.
        const bhRes = await fetch("/api/solana/blockhash", { cache: "no-store" });
        if (!bhRes.ok) throw new Error("Could not reach Solana just now — try again in a moment.");
        const blockhash = await bhRes.json();
        const bytes = await buildSolanaTransfer({
          from: wallet.address, to, mint: assetDef.contract,
          amount: wei, decimals: assetDef.decimals, blockhash,
        });
        const out: any = await signAndSendTransaction({ transaction: bytes, wallet });
        // Solana returns a 64-byte signature; the explorer wants it base58.
        const sig = out?.signature;
        const hash = typeof sig === "string" ? sig : sig ? b58(sig) : "";
        setSt({ k: "sent", hash });
      } else {
        const tx = assetDef.contract
          ? { to: assetDef.contract, data: ("0xa9059cbb" + to.slice(2).toLowerCase().padStart(64, "0") + wei.toString(16).padStart(64, "0")) as `0x${string}`, chainId: cfg.id }
          : { to: to as `0x${string}`, value: ("0x" + wei.toString(16)) as `0x${string}`, chainId: cfg.id };
        const r: any = await sendTransaction(tx as any, embedded?.address ? ({ address: embedded.address } as any) : undefined);
        const hash = typeof r === "string" ? r : r?.hash || r?.transactionHash || "";
        setSt({ k: "sent", hash });
      }
      setAmt("");
      setTimeout(() => loadPf(), 8000);
    } catch (e: any) {
      const raw = String(e?.message || e || "transaction_failed");
      setSt({ k: "err", msg: /insufficient funds|insufficient lamports/i.test(raw)
        ? `Not enough ${cfg.gas} to pay the network fee for this transaction.`
        : raw.slice(0, 200) });
    }
  };

  return (
    <div className="wd-form">
      <div className="wd-row">
        <div className="wd-l">Asset</div>
        <div className="wd-pills">
          {cfg.assets.map((a) => (
            <button key={a.symbol} className={"wd-pill" + (assetDef.symbol === a.symbol ? " on" : "")} onClick={() => { setAsset(a.symbol); setAmt(""); setSt({ k: "idle" }); }}>{a.symbol}</button>
          ))}
        </div>
      </div>
      <div className="wd-row">
        <div className="wd-l">To — {isSol ? "Solana address" : "0x address"} on {cfg.name}</div>
        <input className="wd-in" value={to} onChange={(e) => setTo(e.target.value.trim())} placeholder={isSol ? "Base58 address…" : "0x…"} spellCheck={false} autoComplete="off" />
      </div>
      <div className="wd-row">
        <div className="wd-l">Amount</div>
        <div className="wd-amt">
          <input className="wd-in" value={amt} onChange={(e) => setAmt(e.target.value)} placeholder="0.0" inputMode="decimal" autoComplete="off" />
          <button className="wd-max" onClick={setMax} disabled={!sel?.raw}>Max</button>
        </div>
        <div className="wd-bal">
          Balance: {sel?.raw != null ? fromBase(sel.raw, assetDef.decimals) : "—"} {assetDef.symbol}{assetDef.contract === null ? ` · the ${cfg.gas} network fee comes out of this` : ""}
        </div>
      </div>
      {solMismatch && (
        <p className="wd-warn">
          This browser holds a different Solana wallet ({solAddr.slice(0, 6)}…{solAddr.slice(-4)}) than the one this page is showing ({serverSol.slice(0, 6)}…{serverSol.slice(-4)}). Withdrawals are blocked until they agree — reload the page, and if it persists, tell us before sending anything to either address.
        </p>
      )}
      {solMissing && solMinting && <p className="wd-warn">Creating your Solana wallet&hellip; this takes a moment, and the page refreshes when it is ready.</p>}
      {solMissing && !solMinting && !solMintErr && <p className="wd-warn">Setting up your Solana wallet&hellip; if this does not clear, reload the page.</p>}
      {solMissing && solMintErr && (
        <p className="wd-warn">
          Your Solana wallet could not be created: {solMintErr}{" "}
          <button type="button" className="wd-pill" onClick={() => { solMintTried.current = false; setSolMintErr(""); setSolMinting(false); loadPf(); }}>Try again</button>
        </p>
      )}
      {isSol && assetDef.contract !== null && <p className="wd-note">If the recipient has never held this token, the transfer also creates their token account — that costs about 0.002 SOL from this wallet, once.</p>}
      {noGas && !solMissing && <p className="wd-warn">This wallet has no {cfg.gas} on {cfg.name}, and every withdrawal there needs a little to pay the network fee. Send a small amount of {cfg.gas}{isSol ? "" : ` (chain id ${cfg.id})`} to your address above first.</p>}
      {ethUnknown && <p className="wd-warn">Could not read this wallet&apos;s {cfg.gas} balance just now. <button type="button" className="wd-pill" onClick={() => loadPf()}>Retry</button></p>}
      {pfErr && !pf && <p className="wd-warn">Balances did not load. <button type="button" className="wd-pill" onClick={() => loadPf()}>Retry</button></p>}
      <button className="wd-send" onClick={send} disabled={st.k === "sending" || noGas || ethUnknown || !pf || solMissing || solMismatch}>
        {st.k === "sending" ? "Confirm in the wallet…" : `Withdraw ${assetDef.symbol} on ${cfg.name}`}
      </button>
      {st.k === "sent" && (
        <p className="wd-ok">
          Sent. {st.hash ? <a href={`${cfg.explorer}${cfg.txPath}${st.hash}`} target="_blank" rel="noopener noreferrer">{st.hash.slice(0, 10)}…{st.hash.slice(-8)}</a> : "Transaction submitted."} Balances refresh in about a minute.
        </p>
      )}
      {st.k === "err" && <p className="wd-err">{st.msg}</p>}
    </div>
  );
}

export default function PrivyGateRoot({ cfg }: { cfg: Window["__PRIVY"] }) {
  // Server-computed method list (live read of the dashboard). On /login the
  // CUSTOM PANEL is the sign-in surface and renders from it directly — the
  // Privy modal only appears there as the wallet lane (connectOrCreateWallet)
  // or the captcha-trouble fallback, and pinning loginMethodsAndOrder drags
  // BOTH back to the generic landing screen (verified live). So the pin
  // applies ONLY in wallet mode (/portfolio), where the modal is still the
  // primary sign-in and should stay email-first.
  const methods = cfg.mode === "wallet" && cfg.methods && cfg.methods.primary?.length ? cfg.methods : null;
  return (
    <PrivyProvider
      appId={cfg.appId}
      config={{
        ...(methods ? { loginMethodsAndOrder: { primary: methods.primary as any, overflow: methods.overflow as any } } : {}),
        // Two chain families, two keys. Solana signs on ed25519 and cannot
        // reuse the secp256k1 EVM key, so Privy mints a second wallet with
        // its own base58 address. "users-without-wallets" is per family:
        // existing EVM-only accounts pick up a Solana key on next sign-in.
        embeddedWallets: {
          ethereum: { createOnLogin: "users-without-wallets" },
          solana: { createOnLogin: "users-without-wallets" },
        },
        appearance: { theme: "light", accentColor: "#09F875" },
        defaultChain: ROBINHOOD,
        supportedChains: ALL_CHAINS,
      }}
    >
      {cfg.mode === "wallet"
        ? <WalletPanel />
        : <Gate mode={cfg.mode === "onboard" ? "onboard" : "login"} next={cfg.next || "/onboard"} />}
    </PrivyProvider>
  );
}
