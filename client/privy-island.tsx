// Instant shell for the Privy gate. The 5MB SDK loads as a LAZY chunk —
// the page becomes real in one small paint (hub perf lesson: never await
// the Privy import at boot). The shell shows a live skeleton until the
// gate lands, then swaps in place.

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

declare global {
  interface Window {
    __PRIVY: { appId: string; mode: "login" | "onboard"; next?: string };
  }
}

function Shell() {
  const [Gate, setGate] = useState<React.ComponentType<{ cfg: Window["__PRIVY"] }> | null>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let alive = true;
    import("./privy-gate")
      .then((m) => { if (alive) setGate(() => m.default); })
      .catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, []);
  if (Gate) return <Gate cfg={window.__PRIVY} />;
  if (failed) {
    return (
      <div>
        <div className="pv-note">Sign-in failed to load.</div>
        <button className="pv-cta pv-cta--sm pv-cta--ghost" style={{ marginTop: 12 }} onClick={() => location.reload()}>Reload</button>
      </div>
    );
  }
  return <div className="pv-note">Preparing sign-in<span className="pv-ellipsis">&hellip;</span></div>;
}

const el = document.getElementById("privy-root");
if (el && window.__PRIVY?.appId) createRoot(el).render(<Shell />);
