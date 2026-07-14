# WovVTech — Website Redesign: "Connected Enterprise Intelligence"

A ground-up repair and redesign of [wovvtech.com](https://www.wovvtech.com/)'s
homepage. The site's copy is **locked and machine-verified**; the design is a
bespoke enterprise-technology system built around one evolving visual
metaphor — a living digital network of intelligent nodes, pathways and
signals that connects WovVTech's products, services, industries and global
operations.

## Stack

Next.js 15 (App Router, static export) · TypeScript · Tailwind CSS ·
Framer Motion · hand-rolled 2D canvas network systems ·
Archivo Variable + IBM Plex Sans + IBM Plex Mono (self-hosted via Fontsource)

## Commands

```bash
npm install
npm run dev             # develop
npm run build           # production build — FAILS if content drifts
npm run verify:content  # content gate on its own (needs a prior build)
npm run lint            # eslint (next/core-web-vitals)
```

## Content lock

All site copy lives in **`src/content/original-content.ts`** (header:
CONTENT LOCKED), organized by route → section → type → original order, with
a provenance note per section. No component contains marketing copy.
`scripts/verify-content.mjs` compares the manifest against the exported
HTML and fails the build on missing, altered, invented, duplicated or
reordered strings — see `docs/final-quality-report.md` §1 for the
provenance caveat (the live site blocks automated access, so strings were
recovered verbatim from its search-index snapshots).

## Architecture

```
src/
├─ content/original-content.ts   ← locked copy (single source of truth)
├─ app/                          ← layout (fonts, schema.org), page, tokens
├─ lib/                          ← motion variants, reduced-motion hook
└─ components/
   ├─ SiteHeader / MobileNavigation / SiteFooter
   ├─ SectionIntro / AnimatedMetric / MotionProvider
   ├─ visual/                    ← NetworkBackground (canvas), ProductMark
   │                               (13 custom product glyphs),
   │                               IndustryConstellation
   └─ sections/                  ← HeroNetwork, TrustSignal, OverviewStory,
                                   ProductEcosystem, ServiceJourney,
                                   IndustryExplorer, TechnologyArchitecture,
                                   ValueNarrative, AboutStatement,
                                   GlobalOperationsMap, FinalCTA
scripts/verify-content.mjs       ← build-gating content verification
docs/
├─ current-redesign-audit.md     ← Phase 1 failure audit
├─ motion-system.md              ← visual tokens + 4-level motion system
└─ final-quality-report.md       ← gates, viewports, a11y, limitations
```

## Design system

Palette: deep midnight (`#070B14`) ↔ warm off-white (`#F7F5F0`) with
electric blue (`#2E6BFF`), cyan (`#37D4E6`), restrained violet and metallic
gray. Type scale: hero `clamp(3.5rem,8vw,8rem)`, section
`clamp(2.5rem,5vw,5.5rem)`, editorial `clamp(1.35rem,2vw,2rem)`. Motion is
documented in `docs/motion-system.md` and fully respects
`prefers-reduced-motion`; ambient canvases pause when hidden or off-screen.
