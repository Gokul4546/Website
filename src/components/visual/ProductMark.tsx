/**
 * Custom product identity system. Every WovVTech product gets a unique
 * geometric mark drawn in the site's network language — structural strokes
 * in the current text color, active nodes in signal cyan / pulse blue.
 * No stock icon library is used for product branding.
 */

const STROKE = 1.6;

function Frame({ children }: { children: React.ReactNode }) {
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
      {children}
    </svg>
  );
}

const node = (cx: number, cy: number, active = false, r = 2.6) => (
  <circle
    cx={cx}
    cy={cy}
    r={r}
    className={active ? "fill-signal" : "fill-current"}
    stroke="none"
  />
);

const marks: Record<string, React.ReactNode> = {
  // Revenue Assurance — ascending settlement path
  WovVRA: (
    <Frame>
      <path d="M8 38 L20 27 L30 31 L40 12" className="stroke-current" />
      <path d="M40 12 h-8 M40 12 v8" className="stroke-current opacity-50" />
      {node(8, 38)}
      {node(20, 27)}
      {node(30, 31)}
      {node(40, 12, true)}
    </Frame>
  ),
  // Business Intelligence — node columns rising from a data baseline
  WovVBI: (
    <Frame>
      <path d="M8 40 h32" className="stroke-current opacity-50" />
      <path d="M14 40 V26 M24 40 V14 M34 40 V20" className="stroke-current" />
      {node(14, 26)}
      {node(24, 14, true)}
      {node(34, 20)}
    </Frame>
  ),
  // Indoor Wayfinding — routed path between two terminals
  WovVMaps: (
    <Frame>
      <path
        d="M10 38 C10 26 22 30 24 22 C26 14 38 20 38 10"
        className="stroke-current"
        strokeDasharray="4 4"
      />
      {node(10, 38)}
      {node(24, 22)}
      {node(38, 10, true)}
    </Frame>
  ),
  // Inspection & Audit — inspection frame with verified node
  WovVIA: (
    <Frame>
      <path d="M10 10 h28 v28 h-28 z" className="stroke-current opacity-60" />
      <path d="M17 25 l6 6 L34 18" className="stroke-current" />
      {node(10, 10, false, 2)}
      {node(38, 10, false, 2)}
      {node(10, 38, false, 2)}
      {node(38, 38, true, 2)}
    </Frame>
  ),
  // CCTV Video Analytics — observing aperture with tracked subjects
  WovVVideo: (
    <Frame>
      <circle cx="24" cy="22" r="11" className="stroke-current" />
      <circle cx="24" cy="22" r="4.5" className="stroke-current opacity-60" />
      <path d="M13 38 h22" className="stroke-current opacity-50" />
      {node(17, 38)}
      {node(31, 38, true)}
    </Frame>
  ),
  // Lease Management — contract strata with active term
  WovVLease: (
    <Frame>
      <path d="M12 10 h24 v8 h-24 z" className="stroke-current opacity-45" />
      <path d="M12 22 h24 v8 h-24 z" className="stroke-current" />
      <path d="M12 34 h24" className="stroke-current opacity-45" />
      {node(36, 26, true)}
    </Frame>
  ),
  // Experience Management — stakeholder signals radiating from center
  WovVXM: (
    <Frame>
      <path
        d="M24 24 L24 9 M24 24 L38 17 M24 24 L37 34 M24 24 L11 34 M24 24 L10 17"
        className="stroke-current opacity-70"
      />
      {node(24, 24, true, 3.2)}
      {node(24, 9)}
      {node(38, 17)}
      {node(37, 34)}
      {node(11, 34)}
      {node(10, 17)}
    </Frame>
  ),
  // Loyalty Management — returning orbits around the customer
  WovVLoyalty: (
    <Frame>
      <circle cx="24" cy="24" r="15" className="stroke-current opacity-45" />
      <circle cx="24" cy="24" r="8" className="stroke-current" />
      {node(24, 24, false, 2.2)}
      {node(39, 24, true)}
      {node(24, 16)}
    </Frame>
  ),
  // Business Automation & Billing — ledger grid with posting node
  WovVBiz: (
    <Frame>
      <path d="M10 12 h28 M10 24 h28 M10 36 h28" className="stroke-current opacity-55" />
      <path d="M18 12 v24" className="stroke-current" />
      {node(18, 24, true)}
      {node(32, 12)}
      {node(32, 36)}
    </Frame>
  ),
  // Vendor Management — coordinated hub and vendor spokes
  WovVContest: (
    <Frame>
      <path d="M24 24 L24 10 M24 24 L37 31 M24 24 L11 31" className="stroke-current" />
      <path d="M24 10 L37 31 L11 31 Z" className="stroke-current opacity-35" />
      {node(24, 24, true, 3)}
      {node(24, 10)}
      {node(37, 31)}
      {node(11, 31)}
    </Frame>
  ),
  // Tenant Communication — a full communication loop
  WovV360: (
    <Frame>
      <path d="M38 24 a14 14 0 1 1 -5 -10.7" className="stroke-current" />
      <path d="M33 8 v6 h6" className="stroke-current opacity-60" />
      {node(38, 24, true)}
      {node(10, 24)}
    </Frame>
  ),
  // Workflow Automation — a monitored pipeline with a branch
  WovVFlow: (
    <Frame>
      <path d="M8 24 h32" className="stroke-current" />
      <path d="M24 24 L34 12" className="stroke-current opacity-55" />
      {node(8, 24)}
      {node(24, 24)}
      {node(40, 24, true)}
      {node(34, 12)}
    </Frame>
  ),
  // Experience & Loyalty+ Mobile App — a beacon device
  OKEN: (
    <Frame>
      <rect x="16" y="12" width="16" height="28" rx="3" className="stroke-current" />
      <path
        d="M18 8 a9 9 0 0 1 12 0 M21 11 a5 5 0 0 1 6 0"
        className="stroke-current opacity-60"
      />
      {node(24, 34, true, 2.2)}
    </Frame>
  ),
};

export function ProductMark({ name }: { name: string }) {
  return marks[name] ?? marks.WovVFlow;
}
