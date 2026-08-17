// Content-Security-Policy for the card surface.
//
// Privy's production checklist requires a strict CSP around the embedded
// wallet iframe. Their baseline uses `script-src 'self'` with no
// 'unsafe-inline' — but every page here carries inline <script> blocks, so a
// literal copy of their policy would kill the site. The honest fix is a
// per-request NONCE rather than opening the door with 'unsafe-inline':
//
//   * a fresh nonce per response (16 random bytes, base64)
//   * injected into every <script> tag on the way out, centrally — a renderer
//     added later cannot forget it, which a per-page prop would allow
//   * inline event handlers (onclick=) are NOT covered by a nonce and have
//     been converted to addEventListener; keep it that way.
//
// style-src keeps 'unsafe-inline' — Privy's own requirement, and our pages
// use style attributes throughout.
//
// Origins were measured, not guessed: a headless sweep of /, /login,
// /overview, /card/:handle and /reserve touched exactly four origins —
// self, auth.privy.io, explorer-api.walletconnect.com, and Cloudflare's
// injected beacon. The WalletConnect/Privy RPC entries come from Privy's
// documented baseline: they are reachable paths in the wallet flow that a
// single sweep will not necessarily exercise.

import { randomBytes } from "node:crypto";

export const makeNonce = () => randomBytes(16).toString("base64");

export function cspHeader(nonce: string): string {
  return [
    "default-src 'self'",
    // Cloudflare injects its beacon at the edge; challenges.cloudflare.com is
    // Privy's CAPTCHA surface.
    `script-src 'self' 'nonce-${nonce}' https://static.cloudflareinsights.com https://challenges.cloudflare.com https://*.challenges.cloudflare.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    // The card site is never meant to be framed by anyone.
    "frame-ancestors 'none'",
    "child-src https://auth.privy.io https://verify.walletconnect.com https://verify.walletconnect.org",
    "frame-src https://auth.privy.io https://verify.walletconnect.com https://verify.walletconnect.org https://challenges.cloudflare.com https://*.challenges.cloudflare.com",
    // Chain RPCs: the withdraw flow broadcasts from the browser through the
    // embedded wallet's viem transport, one origin per supported chain
    // (balances stay server-proxied — see server/portfolio.ts CHAINS, which
    // this list must mirror).
    //
    // api.mainnet-beta.solana.com is NOT ours to choose: Privy's Solana module
    // has that origin hardcoded as its broadcast endpoint (verified by grepping
    // the built bundle), so signAndSendTransaction dies on a CSP violation
    // without it. Solana BALANCES still come from our server like every other
    // chain — this entry exists purely so a signed transaction can be sent.
    "connect-src 'self' https://auth.privy.io https://explorer-api.walletconnect.com https://*.rpc.privy.systems https://static.cloudflareinsights.com https://rpc.mainnet.chain.robinhood.com https://ethereum-rpc.publicnode.com https://arbitrum-one-rpc.publicnode.com https://base-rpc.publicnode.com https://api.mainnet-beta.solana.com wss://relay.walletconnect.com wss://relay.walletconnect.org wss://www.walletlink.org",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
  ].join("; ");
}

// Stamp the nonce onto every <script> tag in a rendered document. Tags that
// already carry a nonce are left alone.
export function injectNonce(html: string, nonce: string): string {
  return html.replace(/<script(?![^>]*\bnonce=)/gi, `<script nonce="${nonce}"`);
}

// CSP_REPORT_ONLY=1 ships the policy as a report-only header — violations are
// reported to the console and nothing is blocked. Use it to prove a policy
// change is safe on the live site before enforcing it.
export const reportOnly = () => process.env.CSP_REPORT_ONLY === "1";
