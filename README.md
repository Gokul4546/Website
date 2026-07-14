# WovVTech — Website Redesign

A complete redesign of [wovvtech.com](https://www.wovvtech.com/) as a premium 2026 AI-SaaS
experience — Apple / Linear / Stripe / Vercel design language — while preserving the site's
copy unchanged.

## Stack

- **Next.js 15** (App Router, fully static output)
- **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **Framer Motion** (scroll reveals, mouse-parallax hero, hover elevation)
- **Lucide** icons

## Run

```bash
npm install
npm run dev     # develop
npm run build   # production build (static)
```

## Architecture

```
src/
├─ content/site.ts        ← ALL site copy lives here (single source of truth)
├─ app/                   ← layout, page, global styles
├─ components/
│  ├─ ui/                 ← design system: Button, Badge, Container,
│  │                        SectionHeading, Reveal (scroll animation), Icon
│  ├─ Navbar.tsx          ← glass navbar, scroll-aware, mobile menu
│  ├─ Footer.tsx          ← dark multi-column footer + newsletter CTA
│  └─ sections/           ← Hero, TrustBar, Overview, Products, Services,
│                           Industries, TechnologyDna, WhyChoose, About,
│                           GlobalPresence, Cta
```

### Design tokens

- **Color** — near-white `mist` backgrounds, deep-charcoal `ink`, and an
  electric-blue → violet → cyan accent ramp (`tailwind.config.ts`).
- **Type scale** — fluid `display-xl/lg/md/sm` clamp() sizes with tight tracking.
- **Elevation** — `shadow-card`, `shadow-card-hover`, `shadow-glow` system.
- **Motion** — one shared `Reveal` primitive (staggerable), reduced-motion safe.

### Accessibility

Semantic landmarks, skip link, keyboard-visible focus rings, `aria` labels on
icon-only controls, `prefers-reduced-motion` respected globally.

## ⚠️ Content fidelity note

The brief requires every string to match www.wovvtech.com exactly. The live site
blocks automated fetching (HTTP 403) and this build environment's network policy
allows no direct route to it, so the copy was reconstructed verbatim from the
site's search-engine index snapshots. **Every user-visible string is centralized
in `src/content/site.ts`** — please diff that one file against the live site and
correct any string that drifted; no component contains inline copy.
