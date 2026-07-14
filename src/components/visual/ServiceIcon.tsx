/**
 * Custom service iconography — one meaningful mark per capability,
 * drawn in the network language with a per-service gradient identity:
 * Oracle (enterprise data rings), SAP (integrated module stack),
 * Salesforce (cloud circuitry), Mobile (device with live signal),
 * Design and Branding (layered canvas + pen node), Blockchain (linked
 * blocks), Trained Resources (people nodes joining a system).
 */

export const SERVICE_HUES: Record<string, { from: string; to: string; chip: string }> = {
  Oracle: { from: "#2E6BFF", to: "#37D4E6", chip: "text-pulse" },
  SAP: { from: "#8467F3", to: "#C65CF0", chip: "text-haze" },
  Salesforce: { from: "#37D4E6", to: "#23C39B", chip: "text-aurora-deep" },
  "Mobile App Development": { from: "#23C39B", to: "#2E6BFF", chip: "text-aurora-deep" },
  "Design and Branding": { from: "#C65CF0", to: "#FF7A5E", chip: "text-orchid-deep" },
  Blockchain: { from: "#F5A524", to: "#FF7A5E", chip: "text-solar-deep" },
  "Trained Resources": { from: "#2E6BFF", to: "#8467F3", chip: "text-pulse" },
};

function Frame({ id, name, children }: { id: string; name: string; children: React.ReactNode }) {
  const hue = SERVICE_HUES[name] ?? SERVICE_HUES.Oracle;
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden
      className="h-full w-full"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor={hue.from} />
          <stop offset="1" stopColor={hue.to} />
        </linearGradient>
      </defs>
      {children}
    </svg>
  );
}

const dot = (cx: number, cy: number, fill: string, r = 2.4) => (
  <circle cx={cx} cy={cy} r={r} fill={fill} stroke="none" />
);

const icons: Record<string, React.ReactNode> = {
  Oracle: (
    <Frame id="svc-oracle" name="Oracle">
      <ellipse cx="28" cy="16" rx="15" ry="6" stroke="url(#svc-oracle)" />
      <path d="M13 16 v22 c0 3.3 6.7 6 15 6 s15 -2.7 15 -6 V16" stroke="url(#svc-oracle)" />
      <path d="M13 27 c0 3.3 6.7 6 15 6 s15 -2.7 15 -6" stroke="url(#svc-oracle)" opacity="0.55" />
      {dot(43, 38, "#37D4E6")}
    </Frame>
  ),
  SAP: (
    <Frame id="svc-sap" name="SAP">
      <path d="M14 34 l14 -8 14 8 -14 8 z" stroke="url(#svc-sap)" />
      <path d="M14 26 l14 -8 14 8" stroke="url(#svc-sap)" opacity="0.6" />
      <path d="M14 18 l14 -8 14 8" stroke="url(#svc-sap)" opacity="0.3" />
      {dot(42, 34, "#C65CF0")}
    </Frame>
  ),
  Salesforce: (
    <Frame id="svc-sf" name="Salesforce">
      <path
        d="M18 36 a8 8 0 1 1 2 -15.8 A10 10 0 0 1 39 22 a7 7 0 0 1 -1 14 z"
        stroke="url(#svc-sf)"
      />
      <path d="M22 30 h8 m4 0 h4" stroke="url(#svc-sf)" opacity="0.6" />
      {dot(34, 30, "#23C39B", 1.8)}
    </Frame>
  ),
  "Mobile App Development": (
    <Frame id="svc-mob" name="Mobile App Development">
      <rect x="19" y="10" width="18" height="36" rx="4" stroke="url(#svc-mob)" />
      <path d="M25 14 h6" stroke="url(#svc-mob)" opacity="0.6" />
      <path d="M12 22 a20 20 0 0 1 0 12 M44 22 a20 20 0 0 0 0 12" stroke="url(#svc-mob)" opacity="0.5" />
      {dot(28, 40, "#23C39B", 2)}
    </Frame>
  ),
  "Design and Branding": (
    <Frame id="svc-des" name="Design and Branding">
      <rect x="12" y="12" width="26" height="26" rx="3" stroke="url(#svc-des)" opacity="0.45" />
      <rect x="18" y="18" width="26" height="26" rx="3" stroke="url(#svc-des)" />
      <path d="M26 36 l6 -10 6 10 z" stroke="url(#svc-des)" opacity="0.8" />
      {dot(44, 18, "#FF7A5E")}
    </Frame>
  ),
  Blockchain: (
    <Frame id="svc-bc" name="Blockchain">
      <rect x="10" y="10" width="14" height="14" rx="3" stroke="url(#svc-bc)" />
      <rect x="32" y="32" width="14" height="14" rx="3" stroke="url(#svc-bc)" />
      <rect x="32" y="10" width="14" height="14" rx="3" stroke="url(#svc-bc)" opacity="0.5" />
      <rect x="10" y="32" width="14" height="14" rx="3" stroke="url(#svc-bc)" opacity="0.5" />
      <path d="M24 17 h8 M17 24 v8 M39 24 v8 M24 39 h8" stroke="url(#svc-bc)" opacity="0.7" />
      {dot(28, 28, "#F5A524", 2)}
    </Frame>
  ),
  "Trained Resources": (
    <Frame id="svc-tr" name="Trained Resources">
      <circle cx="20" cy="18" r="5" stroke="url(#svc-tr)" />
      <path d="M11 40 a9 9 0 0 1 18 0" stroke="url(#svc-tr)" />
      <circle cx="38" cy="20" r="4" stroke="url(#svc-tr)" opacity="0.6" />
      <path d="M31 38 a7.5 7.5 0 0 1 14 0" stroke="url(#svc-tr)" opacity="0.6" />
      <path d="M26 15 l7 3" stroke="url(#svc-tr)" opacity="0.45" />
      {dot(45, 32, "#8467F3", 2)}
    </Frame>
  ),
};

export function ServiceIcon({ name }: { name: string }) {
  return icons[name] ?? icons.Oracle;
}
