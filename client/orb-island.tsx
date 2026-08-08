// The agent's face on the scoring run — thinking-orbs (Jakub Antalik &
// Alex Brinza), the package Luca picked. Monochrome dotted canvas, auto
// theme, nine states; the run script drives which verb is showing via
// window CustomEvents so the vanilla page stays in charge.

import React, { useEffect, useRef, useState } from "react";
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

// While the model reasons (the one long silence), the orb thinks through a
// cycle of verbs instead of freezing on one — and every state switch
// crossfades instead of hard-cutting.
const THINK_CYCLE: OrbState[] = ["solving", "weaving", "composing", "working"];
const reduced = () =>
  typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function OrbHost() {
  // The page may have dispatched before this module resolved — catch up.
  const initial = (window as any).__orbLast;
  const init: OrbState = VALID.includes(initial) ? initial : "breathing";
  const [base, setBase] = useState<OrbState>(init);
  const [shown, setShown] = useState<OrbState>(init);
  const [dim, setDim] = useState(false);
  const shownRef = useRef(shown);
  shownRef.current = shown;

  useEffect(() => {
    const onState = (e: Event) => {
      const s = (e as CustomEvent).detail;
      if (VALID.includes(s)) setBase(s);
    };
    window.addEventListener("orbstate", onState);
    return () => window.removeEventListener("orbstate", onState);
  }, []);

  useEffect(() => {
    const swap = (s: OrbState) => {
      if (shownRef.current === s) return;
      if (reduced()) { setShown(s); return; }
      setDim(true);
      window.setTimeout(() => {
        setShown(s);
        requestAnimationFrame(() => setDim(false));
      }, 190);
    };
    swap(base);
    if (base === "solving" && !reduced()) {
      let i = 0;
      const id = window.setInterval(() => {
        i = (i + 1) % THINK_CYCLE.length;
        swap(THINK_CYCLE[i]);
      }, 5500);
      return () => window.clearInterval(id);
    }
  }, [base]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{ opacity: dim ? 0.15 : 1, transform: dim ? "scale(.93)" : "scale(1)", transition: "opacity .19s ease, transform .19s ease" }}>
        <ThinkingOrb state={shown} size={64} theme="light" aria-label={`Agent ${shown}`} />
      </div>
      <div className="orb-caption" style={{ opacity: dim ? 0.3 : 1, transition: "opacity .19s ease" }}>{CAPTION[shown]}</div>
    </div>
  );
}

const el = document.getElementById("orb-root");
if (el) createRoot(el).render(<OrbHost />);
