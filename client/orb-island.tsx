// The agent's face on the scoring run — thinking-orbs (Jakub Antalik &
// Alex Brinza), the package Luca picked. Monochrome dotted canvas, auto
// theme, nine states; the run script drives which verb is showing via
// window CustomEvents so the vanilla page stays in charge.

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThinkingOrb, type OrbState } from "thinking-orbs";

const VALID: OrbState[] = ["working", "searching", "solving", "listening", "connecting", "weaving", "composing", "breathing", "shaping"];

// The verb line under the orb, in the package's own voice.
const CAPTION: Record<OrbState, string> = {
  connecting: "Connecting…",
  listening: "Agent listening…",
  searching: "Searching…",
  solving: "Solving…",
  shaping: "Agent shaping…",
  breathing: "Agent breathing…",
  working: "Working…",
  weaving: "Agent weaving…",
  composing: "Composing…",
};

function OrbHost() {
  // The page may have dispatched before this module resolved — catch up.
  const initial = (window as any).__orbLast;
  const [state, setState] = useState<OrbState>(VALID.includes(initial) ? initial : "breathing");
  useEffect(() => {
    const onState = (e: Event) => {
      const s = (e as CustomEvent).detail;
      if (VALID.includes(s)) setState(s);
    };
    window.addEventListener("orbstate", onState);
    return () => window.removeEventListener("orbstate", onState);
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <ThinkingOrb state={state} size={64} theme="light" aria-label={`Agent ${state}`} />
      <div className="orb-caption">{CAPTION[state]}</div>
    </div>
  );
}

const el = document.getElementById("orb-root");
if (el) createRoot(el).render(<OrbHost />);
