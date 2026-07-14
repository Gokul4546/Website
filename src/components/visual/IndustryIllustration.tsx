/**
 * Custom industry illustrations — a distinct geometric scene per industry,
 * drawn in the network language with per-industry gradient light:
 * mall concourse arches, airport tower and runway, retail shelving,
 * entertainment stage and screen, FEC ferris wheel, B2B partner towers.
 * Rendered inside the explorer's midnight panel.
 */

const HUES: [string, string][] = [
  ["#2E6BFF", "#37D4E6"], // Malls or Shopping centers
  ["#37D4E6", "#8467F3"], // Airports
  ["#23C39B", "#37D4E6"], // Retail businesses
  ["#C65CF0", "#FF7A5E"], // Entertainment
  ["#F5A524", "#FF7A5E"], // Family entertainment centers (FECs)
  ["#8467F3", "#2E6BFF"], // B2B businesses
];

function Scene({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  const [from, to] = HUES[index % HUES.length];
  return (
    <svg
      viewBox="0 0 110 100"
      fill="none"
      aria-hidden
      className="h-full w-full"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={`ind-${index}`} x1="0" y1="0" x2="110" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <radialGradient id={`ind-glow-${index}`} cx="0.5" cy="0.45" r="0.6">
          <stop stopColor={from} stopOpacity="0.28" />
          <stop offset="1" stopColor={to} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="110" height="100" fill={`url(#ind-glow-${index})`} />
      {children}
    </svg>
  );
}

const dot = (cx: number, cy: number, fill: string, r = 1.8) => (
  <circle cx={cx} cy={cy} r={r} fill={fill} stroke="none" />
);

const G = (i: number) => `url(#ind-${i})`;

const scenes: React.ReactNode[] = [
  // 0 — Malls or Shopping centers: concourse arches with walking nodes
  <Scene index={0} key="malls">
    <path d="M12 78 h86" stroke={G(0)} opacity="0.5" />
    <path d="M18 78 v-26 a12 12 0 0 1 24 0 v26" stroke={G(0)} />
    <path d="M46 78 v-32 a13 13 0 0 1 26 0 v32" stroke={G(0)} />
    <path d="M76 78 v-26 a11 11 0 0 1 22 0 v26" stroke={G(0)} opacity="0.7" />
    <path d="M30 38 v-10 m29 4 v-14 m28 12 v-8" stroke={G(0)} opacity="0.4" />
    {dot(30, 26, "#37D4E6")}
    {dot(59, 16, "#2E6BFF")}
    {dot(87, 34, "#37D4E6", 1.4)}
    {dot(38, 85, "#8B94A7", 1.3)}
    {dot(62, 85, "#8B94A7", 1.3)}
  </Scene>,
  // 1 — Airports: control tower, radiating runways, ascending path
  <Scene index={1} key="airports">
    <path d="M14 82 h82" stroke={G(1)} opacity="0.5" />
    <path d="M30 82 L58 60 M42 82 L66 66 M56 82 L74 72" stroke={G(1)} opacity="0.45" />
    <path d="M22 82 v-30 l8 -6 v36" stroke={G(1)} />
    <path d="M18 46 h16" stroke={G(1)} opacity="0.7" />
    <path d="M40 70 C58 58 74 44 92 24" stroke={G(1)} strokeDasharray="4 4" />
    {dot(26, 42, "#37D4E6", 2.2)}
    {dot(92, 24, "#8467F3", 2.4)}
    {dot(64, 50, "#37D4E6", 1.4)}
  </Scene>,
  // 2 — Retail businesses: shelving aisles with stocked nodes
  <Scene index={2} key="retail">
    <path d="M16 26 h50 M16 46 h50 M16 66 h50" stroke={G(2)} />
    <path d="M16 26 v54 M66 26 v54 M16 80 h50" stroke={G(2)} opacity="0.5" />
    {dot(26, 22, "#23C39B", 2)}
    {dot(40, 42, "#37D4E6", 2)}
    {dot(54, 62, "#23C39B", 2)}
    <path d="M78 70 a9 9 0 1 0 14 8" stroke={G(2)} />
    <path d="M76 62 l4 8 h16 l3 -8 z" stroke={G(2)} />
    {dot(84, 84, "#37D4E6", 1.6)}
    {dot(93, 84, "#37D4E6", 1.6)}
  </Scene>,
  // 3 — Entertainment: stage, screen glow and audience arc
  <Scene index={3} key="entertainment">
    <rect x="24" y="18" width="62" height="34" rx="3" stroke={G(3)} />
    <path d="M32 35 l10 -8 8 6 10 -10 14 12" stroke={G(3)} opacity="0.75" />
    <path d="M20 72 a42 18 0 0 1 70 0" stroke={G(3)} opacity="0.55" />
    <path d="M26 84 a34 14 0 0 1 58 0" stroke={G(3)} opacity="0.3" />
    {dot(38, 70, "#C65CF0", 1.6)}
    {dot(55, 66, "#FF7A5E", 1.6)}
    {dot(72, 70, "#C65CF0", 1.6)}
  </Scene>,
  // 4 — FECs: ferris wheel with lit cabins
  <Scene index={4} key="fecs">
    <circle cx="55" cy="46" r="26" stroke={G(4)} />
    <path d="M55 20 v52 M29 46 h52 M37 28 l36 36 M73 28 l-36 36" stroke={G(4)} opacity="0.4" />
    <path d="M42 86 L55 68 L68 86" stroke={G(4)} />
    <path d="M30 86 h50" stroke={G(4)} opacity="0.5" />
    {dot(55, 20, "#F5A524", 2.2)}
    {dot(81, 46, "#FF7A5E", 2)}
    {dot(29, 46, "#FF7A5E", 2)}
    {dot(55, 72, "#F5A524", 1.6)}
    {dot(73, 28, "#F5A524", 1.6)}
    {dot(37, 28, "#F5A524", 1.6)}
  </Scene>,
  // 5 — B2B businesses: partner towers exchanging signals
  <Scene index={5} key="b2b">
    <path d="M20 84 V34 h20 v50" stroke={G(5)} />
    <path d="M70 84 V24 h20 v60" stroke={G(5)} />
    <path d="M14 84 h84" stroke={G(5)} opacity="0.5" />
    <path d="M26 42 h8 M26 52 h8 M26 62 h8 M76 32 h8 M76 42 h8 M76 52 h8 M76 62 h8" stroke={G(5)} opacity="0.4" />
    <path d="M40 46 C52 38 58 38 70 44" stroke={G(5)} strokeDasharray="3.5 3.5" />
    <path d="M40 62 C52 70 58 70 70 64" stroke={G(5)} strokeDasharray="3.5 3.5" opacity="0.6" />
    {dot(40, 46, "#8467F3", 1.8)}
    {dot(70, 44, "#2E6BFF", 1.8)}
    {dot(70, 64, "#8467F3", 1.6)}
    {dot(40, 62, "#2E6BFF", 1.6)}
  </Scene>,
];

export function IndustryIllustration({ index }: { index: number }) {
  return scenes[index % scenes.length];
}
