/**
 * Custom product identity system. Every WovVTech product gets a unique
 * geometric mark drawn in the site's network language, now carrying its
 * own gradient identity: structural strokes run through the product's
 * gradient pair, active nodes glow in the product's accent.
 * No stock icon library is used for product branding.
 */

const STROKE = 1.6;

/** Per-product hue identity, shared by marks and card treatments. */
export const PRODUCT_HUES: Record<
  string,
  {
    from: string;
    to: string;
    accent: string;
    tile: string;
    topline: string;
    linkHover: string;
  }
> = {
  WovVRA: {
    from: "#2E6BFF",
    to: "#37D4E6",
    accent: "#37D4E6",
    tile: "bg-gradient-to-br from-pulse/10 via-transparent to-signal/10",
    topline: "from-pulse to-signal",
    linkHover: "group-hover:text-pulse",
  },
  WovVBI: {
    from: "#8467F3",
    to: "#C65CF0",
    accent: "#C65CF0",
    tile: "bg-gradient-to-br from-haze/10 via-transparent to-orchid/10",
    topline: "from-haze to-orchid",
    linkHover: "group-hover:text-haze",
  },
  WovVMaps: {
    from: "#23C39B",
    to: "#37D4E6",
    accent: "#23C39B",
    tile: "bg-gradient-to-br from-aurora/10 via-transparent to-signal/10",
    topline: "from-aurora to-signal",
    linkHover: "group-hover:text-aurora-deep",
  },
  WovVIA: {
    from: "#F5A524",
    to: "#FF7A5E",
    accent: "#F5A524",
    tile: "bg-gradient-to-br from-solar/10 via-transparent to-solar/5",
    topline: "from-solar to-[#FF7A5E]",
    linkHover: "group-hover:text-solar-deep",
  },
  WovVVideo: {
    from: "#C65CF0",
    to: "#2E6BFF",
    accent: "#C65CF0",
    tile: "bg-gradient-to-br from-orchid/10 via-transparent to-pulse/10",
    topline: "from-orchid to-pulse",
    linkHover: "group-hover:text-orchid-deep",
  },
  WovVLease: {
    from: "#2E6BFF",
    to: "#8467F3",
    accent: "#5B8AFF",
    tile: "bg-gradient-to-br from-pulse/10 via-transparent to-haze/10",
    topline: "from-pulse to-haze",
    linkHover: "group-hover:text-pulse",
  },
  WovVXM: {
    from: "#23C39B",
    to: "#2E6BFF",
    accent: "#23C39B",
    tile: "bg-gradient-to-br from-aurora/10 via-transparent to-pulse/10",
    topline: "from-aurora to-pulse",
    linkHover: "group-hover:text-aurora-deep",
  },
  WovVLoyalty: {
    from: "#C65CF0",
    to: "#FF7A5E",
    accent: "#C65CF0",
    tile: "bg-gradient-to-br from-orchid/10 via-transparent to-solar/10",
    topline: "from-orchid to-[#FF7A5E]",
    linkHover: "group-hover:text-orchid-deep",
  },
  WovVBiz: {
    from: "#F5A524",
    to: "#23C39B",
    accent: "#F5A524",
    tile: "bg-gradient-to-br from-solar/10 via-transparent to-aurora/10",
    topline: "from-solar to-aurora",
    linkHover: "group-hover:text-solar-deep",
  },
  WovVContest: {
    from: "#8467F3",
    to: "#37D4E6",
    accent: "#8467F3",
    tile: "bg-gradient-to-br from-haze/10 via-transparent to-signal/10",
    topline: "from-haze to-signal",
    linkHover: "group-hover:text-haze",
  },
  WovV360: {
    from: "#37D4E6",
    to: "#2E6BFF",
    accent: "#37D4E6",
    tile: "bg-gradient-to-br from-signal/10 via-transparent to-pulse/10",
    topline: "from-signal to-pulse",
    linkHover: "group-hover:text-pulse",
  },
  WovVFlow: {
    from: "#23C39B",
    to: "#8467F3",
    accent: "#23C39B",
    tile: "bg-gradient-to-br from-aurora/10 via-transparent to-haze/10",
    topline: "from-aurora to-haze",
    linkHover: "group-hover:text-aurora-deep",
  },
  OKEN: {
    from: "#FF7A5E",
    to: "#C65CF0",
    accent: "#FF7A5E",
    tile: "bg-gradient-to-br from-[#FF7A5E]/10 via-transparent to-orchid/10",
    topline: "from-[#FF7A5E] to-orchid",
    linkHover: "group-hover:text-orchid-deep",
  },
};

function Frame({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const hue = PRODUCT_HUES[name] ?? PRODUCT_HUES.WovVFlow;
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className="h-full w-full"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={`pm-${name}`} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor={hue.from} />
          <stop offset="1" stopColor={hue.to} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const grad = (name: string) => `url(#pm-${name})`;

const node = (name: string, cx: number, cy: number, active = false, r = 2.6) => (
  <circle
    cx={cx}
    cy={cy}
    r={r}
    fill={active ? (PRODUCT_HUES[name] ?? PRODUCT_HUES.WovVFlow).accent : "currentColor"}
    stroke="none"
  />
);

const marks: Record<string, (n: string) => React.ReactNode> = {
  // Revenue Assurance — ascending settlement path
  WovVRA: (n) => (
    <Frame name={n}>
      <path d="M8 38 L20 27 L30 31 L40 12" stroke={grad(n)} />
      <path d="M40 12 h-8 M40 12 v8" stroke={grad(n)} opacity="0.5" />
      {node(n, 8, 38)}
      {node(n, 20, 27)}
      {node(n, 30, 31)}
      {node(n, 40, 12, true)}
    </Frame>
  ),
  // Business Intelligence — node columns rising from a data baseline
  WovVBI: (n) => (
    <Frame name={n}>
      <path d="M8 40 h32" stroke="currentColor" opacity="0.4" />
      <path d="M14 40 V26 M24 40 V14 M34 40 V20" stroke={grad(n)} />
      {node(n, 14, 26)}
      {node(n, 24, 14, true)}
      {node(n, 34, 20)}
    </Frame>
  ),
  // Indoor Wayfinding — routed path between two terminals
  WovVMaps: (n) => (
    <Frame name={n}>
      <path
        d="M10 38 C10 26 22 30 24 22 C26 14 38 20 38 10"
        stroke={grad(n)}
        strokeDasharray="4 4"
      />
      {node(n, 10, 38)}
      {node(n, 24, 22)}
      {node(n, 38, 10, true)}
    </Frame>
  ),
  // Inspection & Audit — inspection frame with verified node
  WovVIA: (n) => (
    <Frame name={n}>
      <path d="M10 10 h28 v28 h-28 z" stroke="currentColor" opacity="0.4" />
      <path d="M17 25 l6 6 L34 18" stroke={grad(n)} />
      {node(n, 10, 10, false, 2)}
      {node(n, 38, 10, false, 2)}
      {node(n, 10, 38, false, 2)}
      {node(n, 38, 38, true, 2)}
    </Frame>
  ),
  // CCTV Video Analytics — observing aperture with tracked subjects
  WovVVideo: (n) => (
    <Frame name={n}>
      <circle cx="24" cy="22" r="11" stroke={grad(n)} />
      <circle cx="24" cy="22" r="4.5" stroke={grad(n)} opacity="0.6" />
      <path d="M13 38 h22" stroke="currentColor" opacity="0.4" />
      {node(n, 17, 38)}
      {node(n, 31, 38, true)}
    </Frame>
  ),
  // Lease Management — contract strata with active term
  WovVLease: (n) => (
    <Frame name={n}>
      <path d="M12 10 h24 v8 h-24 z" stroke="currentColor" opacity="0.35" />
      <path d="M12 22 h24 v8 h-24 z" stroke={grad(n)} />
      <path d="M12 34 h24" stroke="currentColor" opacity="0.35" />
      {node(n, 36, 26, true)}
    </Frame>
  ),
  // Experience Management — stakeholder signals radiating from center
  WovVXM: (n) => (
    <Frame name={n}>
      <path
        d="M24 24 L24 9 M24 24 L38 17 M24 24 L37 34 M24 24 L11 34 M24 24 L10 17"
        stroke={grad(n)}
        opacity="0.85"
      />
      {node(n, 24, 24, true, 3.2)}
      {node(n, 24, 9)}
      {node(n, 38, 17)}
      {node(n, 37, 34)}
      {node(n, 11, 34)}
      {node(n, 10, 17)}
    </Frame>
  ),
  // Loyalty Management — returning orbits around the customer
  WovVLoyalty: (n) => (
    <Frame name={n}>
      <circle cx="24" cy="24" r="15" stroke="currentColor" opacity="0.35" />
      <circle cx="24" cy="24" r="8" stroke={grad(n)} />
      {node(n, 24, 24, false, 2.2)}
      {node(n, 39, 24, true)}
      {node(n, 24, 16)}
    </Frame>
  ),
  // Business Automation & Billing — ledger grid with posting node
  WovVBiz: (n) => (
    <Frame name={n}>
      <path d="M10 12 h28 M10 24 h28 M10 36 h28" stroke="currentColor" opacity="0.4" />
      <path d="M18 12 v24" stroke={grad(n)} />
      {node(n, 18, 24, true)}
      {node(n, 32, 12)}
      {node(n, 32, 36)}
    </Frame>
  ),
  // Vendor Management — coordinated hub and vendor spokes
  WovVContest: (n) => (
    <Frame name={n}>
      <path d="M24 24 L24 10 M24 24 L37 31 M24 24 L11 31" stroke={grad(n)} />
      <path d="M24 10 L37 31 L11 31 Z" stroke="currentColor" opacity="0.25" />
      {node(n, 24, 24, true, 3)}
      {node(n, 24, 10)}
      {node(n, 37, 31)}
      {node(n, 11, 31)}
    </Frame>
  ),
  // Tenant Communication — a full communication loop
  WovV360: (n) => (
    <Frame name={n}>
      <path d="M38 24 a14 14 0 1 1 -5 -10.7" stroke={grad(n)} />
      <path d="M33 8 v6 h6" stroke={grad(n)} opacity="0.6" />
      {node(n, 38, 24, true)}
      {node(n, 10, 24)}
    </Frame>
  ),
  // Workflow Automation — a monitored pipeline with a branch
  WovVFlow: (n) => (
    <Frame name={n}>
      <path d="M8 24 h32" stroke={grad(n)} />
      <path d="M24 24 L34 12" stroke={grad(n)} opacity="0.55" />
      {node(n, 8, 24)}
      {node(n, 24, 24)}
      {node(n, 40, 24, true)}
      {node(n, 34, 12)}
    </Frame>
  ),
  // Experience & Loyalty+ Mobile App — a beacon device
  OKEN: (n) => (
    <Frame name={n}>
      <rect x="16" y="12" width="16" height="28" rx="3" stroke={grad(n)} />
      <path d="M18 8 a9 9 0 0 1 12 0 M21 11 a5 5 0 0 1 6 0" stroke={grad(n)} opacity="0.6" />
      {node(n, 24, 34, true, 2.2)}
    </Frame>
  ),
};

export function ProductMark({ name }: { name: string }) {
  const render = marks[name] ?? marks.WovVFlow;
  return render(name);
}
