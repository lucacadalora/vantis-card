---
name: Vantis Cards
description: A precise, signal-green developer rail for metered AI inference.
colors:
  signal-green: "#09F875"
  accessible-green: "#0B7A3E"
  ink: "#0A0A0A"
  developer-panel: "#0C0D0E"
  canvas: "#FFFFFF"
  wash: "#F4F6F4"
  line: "#E4E6E2"
  line-strong: "#D3D6D1"
  body: "#4C5055"
  muted: "#6A6F74"
typography:
  display:
    fontFamily: "Space Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, Helvetica Neue, -apple-system, BlinkMacSystemFont, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "SF Mono, ui-monospace, Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  control: "999px"
  compact: "8px"
  panel: "22px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "36px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.signal-green}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "46px"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "46px"
---

# Design System: Vantis Cards

## Overview

**Creative North Star: "The Metered Rail"**

The interface feels like a physical access point to infrastructure: white technical paper, dark executable surfaces, precise hairlines, and a single signal-green state. Familiar developer patterns carry the interaction so the Vantis identity can remain concentrated and memorable.

It rejects neon crypto theatrics, generic glass panels, and ornamental AI motion. The design earns trust by exposing exact behavior, readable limits, and working examples.

**Key Characteristics:**

- Restrained white and tinted-neutral surfaces
- Signal green reserved for live state and primary intent
- Dark code surfaces with high information density
- Hairlines and spacing create structure before shadows
- Familiar, keyboard-accessible product controls

## Colors

Signal green is rare and operational; ink and softly tinted neutrals carry the product.

### Primary

- **Vantis Signal** (`#09F875`): primary action text on ink, live indicators, and small emphasis fields.
- **Verified Signal** (`#0B7A3E`): accessible green text on light surfaces.

### Neutral

- **Rail Ink** (`#0A0A0A`): primary text, buttons, and high-density code framing.
- **Developer Panel** (`#0C0D0E`): executable examples and technical panels.
- **Paper Canvas** (`#FFFFFF`): primary reading surface.
- **Quiet Wash** (`#F4F6F4`): navigation and alternate surfaces.
- **Hairline** (`#E4E6E2`): structural separators.
- **Body Graphite** (`#4C5055`): prose.
- **Muted Graphite** (`#6A6F74`): labels and captions.

**The Signal Rule.** Signal green communicates action, verification, or live state. It is never decorative wallpaper.

## Typography

**Display Font:** Space Grotesk with system sans fallback  
**Body Font:** Inter with native sans fallback  
**Label/Mono Font:** SF Mono with Menlo and Consolas fallback

**Character:** Display type gives the Vantis mark a geometric voice. Body and mono faces keep long-form documentation and API detail quiet and exact.

### Hierarchy

- **Display** (700, up to 60px, 1.08): marketing-scale product statements only.
- **Headline** (700, 26–40px, 1.08): page and section headings.
- **Title** (700, 18–21px, 1.25): subsection titles.
- **Body** (400, 16px, 1.6): prose capped near 72 characters.
- **Label** (600, 10–12px, tracked uppercase): navigation groups, status, and metadata.

**The Reading Rule.** Dense reference tables may run wide; explanatory prose never exceeds 75 characters per line.

## Elevation

The system is flat by default. Depth comes from tonal surfaces, borders, sticky positioning, and spacing. Shadows appear only on floating controls such as mobile navigation or search results.

**The Flat Rail Rule.** A surface receives a shadow only when it physically overlaps another interactive layer.

## Components

### Buttons

- **Shape:** full pill (`999px`).
- **Primary:** ink ground, signal-green label, 46px height.
- **Hover / Focus:** restrained tonal shift plus a visible focus ring.
- **Ghost:** paper ground with a strong hairline border.

### Cards / Containers

- **Corner Style:** 22px on major product panels; 8–12px for compact code tools.
- **Background:** paper, quiet wash, or developer-panel ink.
- **Shadow Strategy:** flat at rest.
- **Border:** one-pixel structural hairlines.
- **Internal Padding:** 24–44px, scaled by density.

### Inputs / Fields

- **Style:** light ground, one-pixel line, compact radius.
- **Focus:** ink border with a signal-green outer ring.
- **Error / Disabled:** explicit text accompanies the state; color never carries meaning alone.

### Navigation

Sticky desktop navigation uses quiet wash and a one-pixel divider. Active items use ink text and a soft neutral ground. Mobile navigation becomes a single drawer with 44px targets and no horizontal clipping.

### Code Surface

Code uses the developer-panel ground, mono typography, a visible language label, and a copy action. Long lines scroll inside the code surface rather than expanding the page.

## Do's and Don'ts

### Do:

- **Do** make exact model IDs, headers, error codes, and prices selectable text.
- **Do** reserve `#09F875` for primary intent and verified live state.
- **Do** preserve WCAG AA contrast and visible keyboard focus.
- **Do** make code examples usable at 390px without page overflow.

### Don't:

- **Don't** resemble a neon crypto casino, a glassmorphic AI template, a fictional multi-model router, or a marketing page that hides operational constraints.
- **Don't** imply that virtual credits are transferable tokens or that virtual burns are on-chain.
- **Don't** claim zero data retention without the `X-Vantis-ZDR: honored` proof.
- **Don't** use gradient text, decorative blur panels, colored side-stripe borders, or nested cards.
