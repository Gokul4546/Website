# Current Redesign — Failure Audit

Audit of the implementation at commit `823ef78` (branch
`claude/wovvtech-website-redesign-3qb7u8`) against the original site
(www.wovvtech.com) and against the repair brief. Every route and component in
the repository was inspected: the project contains a single route (`/`) built
from `src/app/page.tsx`, 12 section components, 6 UI primitives, `Navbar`,
`Footer`, and one content module (`src/content/site.ts`).

**Access constraint (affects items 1 and 12):** the original site cannot be
reached from this build environment — direct requests are refused by the
environment's network egress policy, and the site's own firewall returns
HTTP 403 to the available fetch service and to public render proxies. All
content comparison below is against the most reliable verbatim source
available: search-engine index snapshots that quote the live pages. Strings
that cannot be traced to such a quote are treated as **content defects** and
are removed or replaced in the repair, never kept on trust.

---

## 1. Content deviations from the original

Strings in `src/content/site.ts` that do not match a verbatim source:

| Location | String | Problem |
| --- | --- | --- |
| `hero.badge` | "Global Business Productivity SaaS company" | Taken from the company's Crunchbase/legacy page title, not verified on the current homepage. Remove. |
| `hero.secondaryCta` | "Explore Products" | Invented CTA label. Replace with the sourced nav label "Products". |
| `hero.stats[2]` | "13" / "SaaS Products" | Derived statistic — the site's sourced claim is "3000 locations in 50 countries" only. Remove. |
| `hero.stats[3]` | "2016" / "Founded" | Founding year comes from third-party profiles (Tracxn/YourStory), not from site copy. Remove. |
| `overview.heading` | "Digital transformation and operational excellence" | Invented heading paraphrased from the body paragraph. Remove; let the sourced paragraph itself carry the section. |
| `products.items[1].description` (WovVRA) | "Additional revenues through accurate Automatic Daily Sales Reports and insights." | Index quote reads "…provides additional revenues through accurate Automatic Daily Sales Reports and insights". Sentence-subject trimming — keep the noun-phrase form but flag as unverified against the on-page card. |
| `industries.heading` | "Solutions across industries and verticals" | Invented heading built from the phrase "across industries and verticals". Remove. |
| `technologyDna.heading` | "The technological backbone behind every product" | Invented heading paraphrased from the sourced body. Remove; use the section name from the approved brief ("Technology DNA"). |
| `whyChoose.heading` | "The world's most customer-obsessed company" | Extracted fragment presented as a heading. Remove; use the approved section name "Why Choose WovVTech" and keep the full sourced sentence as body. |
| `whyChoose.reasons[*].title` | "Customer Obsessed", "Ownership & Accountability", "Configuration, Flexibility & Scalability", "Trusted by Fortune 500" | Invented card titles. Remove; present the four sourced sentences as statements without invented titles. |
| `about.timeline` | "2016 Founded" | Unsourced milestone — brief forbids invented timeline entries. Remove. |
| `globalPresence.heading` | "Operations spanning multiple continents" | Near-quote of "with operations spanning multiple continents" but re-cased as a heading. Keep only in its sourced sentence form. |
| `cta.description` | "Grow your business with WovVTech's SaaS products and technology services." | Invented sentence. Remove. |
| `footer.tagline` | "Global Business Productivity SaaS company. AI-powered SaaS for…" | Two strings merged into a new sentence — merging is prohibited. Keep only the sourced meta description. |
| `footer.newsletter.*` | "Stay ahead in the technology game" / "Enter your email" / "Subscribe" | Invented newsletter block; the brief explicitly forbids adding newsletter text. Remove entirely. |
| `footer.copyright` | "© 2026 WovV Technologies. All Rights Reserved." | Invented legal line. The verifiable legal facts are: operating entity "Technocompass Consulting Pvt Ltd", legal pages "Disclaimer", "Terms of Use", "Privacy Policy", contact "info@WovVTech.com". Replace with sourced strings only. |
| `services.items[4].name` | "UI & Web Development" | Composited service name; the sourced description mentions "intuitive design and branding services" and "user interfaces using Angular, HTML, CSS, and Drupal". Name flagged as unverified. |
| `services.items[6].name` | "Staff Augmentation" | Service name inferred from third-party listings; description is sourced. Flagged. |
| service chips (all) | e.g. "Enterprise Software", "Consulting", "CRM" | Editorial labels invented for the chip UI, except those quoting the sourced tech lists ("Native", "React", "JS", "Android", "iOS", "Angular", "HTML", "CSS", "Drupal"). Remove invented chips; keep only technology names quoted in the sourced sentences. |
| `technologyDna.pillars[3]` | "Low-Code aPaaS" | Compressed label invented from "low-code" + "aPaaS" mentions. Replace with the exact sourced phrase "Application Platform as a Service (aPaaS)". |

Missing sourced content that the current build omits:

- Footer legal links "Disclaimer", "Terms of Use", "Privacy Policy" (page exists at `/disclaimer/`).
- Contact email "info@WovVTech.com" (Terms page contact).
- Products-page description sentence is present, but the sourced product-page title "Innovative Business Software Solutions" is used as a display heading — acceptable (it is the page's own title).

## 2. Repetitive card layouts

Five of ten content sections are the same component pattern — a rounded-3xl
card with icon-top-left, title, paragraph, hover `y: -5` lift:

- Products: 13 identical cards in a uniform 3-column grid.
- Services: 7 identical cards, same grid, same radius, same shadow.
- Industries: 6 identical tiles (icon circle + label).
- Technology DNA: 4 identical glass cards (icon + label) — "four ordinary
  cards on a dark background", exactly what the brief prohibits.
- Why Choose: 4 identical two-column cards.

The stats bar, About timeline, and Global Presence pills are also all
rounded-full/rounded-3xl boxes. The page reads as one card system repeated.

## 3. Weak typography and hierarchy

- Display scale tops out at `clamp(2.75rem, 6vw, 5.25rem)` and is used once;
  section headings all sit at the same `display-lg` size, so no section
  outranks another.
- System font stack only (no loaded typefaces): the design has no typographic
  identity; display and body are the same face at different sizes.
- Micro-type is overused: 12.5–13px uppercase labels appear in stats, chips,
  timeline, trust rail, and footer — the "tiny labels and tiny statistics"
  failure named in the brief.
- Long paragraphs in Overview are set at up to 20px in a narrow column with a
  decorative left border — a template tic, not hierarchy.

## 4. Excessive / inconsistent whitespace

- Every section uses identical `py-24 md:py-36` padding regardless of content
  density, producing evenly-spaced, story-less scrolling.
- TrustBar is a large near-empty band containing three small pills.
- The CTA is "a small dark rounded rectangle inside a large empty white
  section" — verbatim the anti-pattern in the brief.

## 5. Generic components

- `Badge` (pill + dot), `Button` (rounded-full), `SectionHeading`
  (kicker/heading/description, centered) are interchangeable with any SaaS
  template; every section opens with the same centered kicker-pill stack.
- Gradient blobs (`blur-3xl` circles) float in Hero, DNA, CTA, and Footer —
  the "generic gradient blobs" and "purple gradient on every section" failures.
- Glassmorphism applied without purpose (nav, badge, stats, DNA cards).

## 6. Missing visual assets

- No WovVTech logo (text-only wordmark approximation).
- No product iconography: all 13 products use generic Lucide icons as their
  branding, which the brief forbids as final product identity.
- No imagery, no custom visual system, no network/enterprise motif.
- No favicon or OG image.

## 7. Missing interactions

- No mega-navigation, no active-section indication.
- Products/Services/Industries have no expansion, focus, selection, or
  relationship behavior — hover lift only.
- No industry explorer; industries are static tiles.
- No global-operations visual; locations are static pills.
- No cursor-responsive effects beyond the hero orb parallax.

## 8. Basic animations only

- Every scroll entrance is the same `Reveal` opacity/translate fade-up.
- Hover states are uniform `y: -5` lifts.
- No scroll storytelling, no sticky chapters, no path/network activation, no
  ambient system, no state-driven transitions, no page-transition concept.

## 9. Mobile layout problems

- 13 equal product cards stack into an undifferentiated ~6,500px column.
- Stats bar squeezes into 2×2 with 13px uppercase labels (small tap/read).
- The mobile menu is functional, but nav CTA target height ≈ 40px (<44px).
- Industries grid at 2 columns produces cramped 14.5px labels in narrow tiles.

## 10. Accessibility problems

- Icon-only mobile menu button has aria-label, but the open menu lacks focus
  trapping and Escape handling.
- Product cards are entire anchors around block content with a decorative
  "Learn More" — link purpose is duplicated/noisy for screen readers.
- Newsletter form (now to be removed) had a submit with no action — a dead
  interactive control.
- No `aria-current`/active state in navigation.
- Reveal wrappers hide content from initial paint; with JS enabled but IO
  delayed, content below the fold is invisible until observed (fragile for
  full-page rendering, printing, and some crawlers).
- Contrast: `text-white/40`–`/45` footer text on `#0B0D17` is below AA for
  body-size text.

## 11. Performance risks

- `framer-motion` is imported by 14 modules including trivial ones (Button,
  every section) — the whole page hydrates as client components; almost
  nothing is server-only.
- Dozens of simultaneous IntersectionObservers from per-item `Reveal`s.
- Three permanently-running `blur-3xl` animated layers (hero, DNA, CTA,
  footer) repaint large areas; no `visibilitychange` pausing.
- No lazy loading/dynamic import of any heavy visual (none exist yet, but the
  repair adds canvas work that must be dynamically imported).

## 12. Pages/sections missing vs the original site

- The original site is multi-page: `/products/` (13+ product detail pages),
  `/services/` (Oracle, SAP, Salesforce, mobile, blockchain…), `/industry/*`
  (retail, mall of future, airport of future, entertainment), `/about-us/`,
  `/contact-us/`, `/careers/`, `/resources/brochures/`, `/blog/`,
  `/disclaimer/` (Disclaimer / Terms of Use / Privacy Policy). The redesign
  implements only the homepage; all other routes are absent and remain out of
  scope for this repair (documented limitation).
- Homepage sections themselves are all present per the approved flow, but the
  footer omits the legal links and info@ contact that the original carries.

---

## Repair implications (inputs to Phases 2–4)

1. Build `src/content/original-content.ts` containing only sourced strings,
   organized by route → section → type → order, with the LOCKED header and a
   provenance note per section; delete `src/content/site.ts`.
2. Enforce with `scripts/verify-content.mjs`: rendered text ⊆ manifest,
   manifest ⊆ rendered text, exact character comparison; wire into the build.
3. Replace the card system with the "Connected Enterprise Intelligence"
   direction: one evolving network motif (canvas hero → scroll-activated
   pathways → dark architecture → global map), mixed compositions per
   section, dramatic editorial type scale, alternating warm-light/midnight
   surfaces.
4. Motion: four-level system documented in `docs/motion-system.md`;
   ambient canvas paused when hidden; reduced-motion variants; no
   fade-up-everywhere.
