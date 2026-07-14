# WovVTech Motion System — "Connected Enterprise Intelligence"

The motion language expresses one idea: **an enterprise ecosystem becoming
connected and intelligent**. Every animated element is either a node, a
pathway, a signal traveling a pathway, or a surface being illuminated by one.
Nothing animates for decoration alone.

## Visual system the motion serves

| Token | Value | Role |
| --- | --- | --- |
| `night` | `#070B14` | deep-midnight surfaces (hero, DNA, CTA, footer) |
| `night-soft` | `#0D1526` | raised midnight panels |
| `paper` | `#F7F5F0` | warm off-white environments |
| `paper-deep` | `#ECE9E1` | recessed light panels |
| `ink` | `#131A28` | text on paper |
| `pulse` | `#2E6BFF` | electric blue — active nodes, primary signals |
| `signal` | `#37D4E6` | cyan — traveling packets, live states |
| `haze` | `#8467F3` | restrained violet — secondary accents only |
| `steel` | `#8B94A7` | metallic gray — inactive structure, rules, grids |

Typography: **Archivo Variable** (display, 620–740 weight, tight tracking),
**IBM Plex Sans** (body), **IBM Plex Mono** (system labels, statistics,
technology tokens). Scale: hero `clamp(3.5rem, 8vw, 8rem)`, section display
`clamp(2.5rem, 5vw, 5.5rem)`, editorial copy `clamp(1.35rem, 2vw, 2rem)`,
body `1rem–1.2rem`.

The page alternates midnight → paper → midnight environments; the network
motif **evolves** across them (free network → structured pathways → layered
architecture → converging point) instead of repeating as decoration.

## Level 1 — Ambient motion

- **Hero network (canvas):** ~70 desktop / ~28 mobile nodes drift with
  low-frequency velocity; edges form/dissolve by proximity; 2–3 signal
  pulses at a time travel along active edges. Pointer position shifts a
  parallax depth field (max 24px) and locally brightens nearby nodes.
- **CTA network (canvas, converge mode):** the same particle system with a
  gravity well at the section's center — the ecosystem resolving to a single
  point of contact.
- **DNA grid:** slow luminance drift on grid intersections (CSS animation,
  GPU-composited opacity only).
- All ambient loops **pause** on `visibilitychange: hidden` and when their
  canvas scrolls out of view (IntersectionObserver), and **do not run at
  all** under `prefers-reduced-motion` (a static, fully-drawn network frame
  is rendered once instead).

## Level 2 — Scroll storytelling

Implemented with `framer-motion` `useScroll` + transforms (no scroll
hijacking; native scrolling is never intercepted).

- **Overview:** a vertical pathway line draws with scroll progress
  (`pathLength` 0→1) while the two locked paragraphs shift from `steel` to
  `ink` — the copy itself being "illuminated" as the signal passes.
- **Technology DNA:** the four sourced layers illuminate in sequence over a
  sticky viewport: each layer's grid brightens, its label's node fills, and
  a packet travels to the next layer, driven by section scroll progress.
- **Why Choose WovVTech:** the four locked statements progressively
  foreground with scroll (opacity + letter illumination), one at a time —
  a value narrative, not a card grid.
- **Section transitions:** midnight↔paper boundaries use a shared
  "signal seam" — a 1px pulse line that carries the eye across the color
  change (opacity/scale animation triggered `whileInView`, once).

## Level 3 — Component interaction

- **Product ecosystem:** hovering or focusing a product module highlights
  it (surface lift 4px, mark stroke switches to `pulse`) *and* draws the
  SVG relationship line to the featured panel; the same states fire on
  keyboard focus, and all content is visible without interaction on touch.
- **Industry explorer:** tab selection re-arranges the industry
  constellation (nodes reposition with springs, 380ms), with roving
  tabindex and arrow-key navigation.
- **Buttons:** background signal-sweep on hover (translating gradient, not
  color flash); 150ms spring press.
- **Header:** transparent over hero → compact `night` glass surface after
  120px; active section indicated by a moving underline node
  (`layoutId="nav-node"`).
- **Metrics:** `AnimatedMetric` counts 0→value with an ease-out spring the
  first time it enters view; mono tabular digits prevent layout shift.

## Level 4 — Page transitions

Single-route site today: the transition layer is the header
transformation, anchor-scroll behavior (`scroll-behavior: smooth`, disabled
under reduced motion), and a 350ms mount sequence on the hero (heading
mask-reveal → sub-copy fade → CTAs) that never blocks interaction (content
is interactive from first paint; the sequence is opacity/transform only).
If routes are added later, `AnimatePresence` route wrappers continue the
same seam motif.

## Libraries and why

- **framer-motion** — component/viewport/scroll-linked motion.
- **HTML Canvas (hand-rolled, ~200 lines)** — the network systems. R3F/WebGL
  was rejected: a 2D particle network doesn't justify a 3D runtime's ~90kB+
  and GPU variance on low-power mobile devices.
- **GSAP was not added** — no timeline requires orchestration beyond what
  scroll-progress transforms already provide; adding it would be an
  unjustified dependency.

## Performance & degradation rules

- Canvas work is client-only, dynamically imported, capped at
  `devicePixelRatio ≤ 2`, and skipped entirely in favor of a static SVG
  frame when `prefers-reduced-motion` is set.
- Node counts scale with viewport area; mobile runs ≤ 40% of desktop
  particle budget.
- Only `transform` and `opacity` are animated in DOM motion; no layout
  properties.
- Scroll-linked values use framer's motion values (no per-frame React
  renders).
- Every `whileInView` reveal fires once; observers disconnect after firing.
- All motion respects `prefers-reduced-motion: reduce` — ambient systems
  render static frames, scroll choreography becomes immediate visibility,
  interactions keep instant state changes without springs.
