/**
 * Hero centerpiece: the enterprise intelligence core — a luminous nucleus
 * with orbiting system nodes, rendered as pure SVG + CSS animation.
 * Purely decorative (aria-hidden); orbit rotation is disabled by the
 * global reduced-motion rules, leaving a rich static composition.
 */

export function HeroCore({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <div className="relative h-full w-full">
        {/* nucleus glow */}
        <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,107,255,0.5),rgba(132,103,243,0.25)_55%,transparent_72%)] blur-xl animate-core-breathe" />

        {/* core */}
        <svg viewBox="0 0 200 200" fill="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="core-ring" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2E6BFF" />
              <stop offset="0.5" stopColor="#37D4E6" />
              <stop offset="1" stopColor="#8467F3" />
            </linearGradient>
            <radialGradient id="core-fill" cx="0.4" cy="0.35" r="0.8">
              <stop stopColor="#5B8AFF" />
              <stop offset="0.55" stopColor="#2E6BFF" />
              <stop offset="1" stopColor="#1D2B70" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="26" fill="url(#core-fill)" />
          <circle cx="100" cy="100" r="26" stroke="url(#core-ring)" strokeOpacity="0.8" />
          <circle cx="100" cy="100" r="25.9" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" strokeDasharray="2 5" />
          {/* inner lattice */}
          <path
            d="M100 82 L114 92 L114 108 L100 118 L86 108 L86 92 Z"
            stroke="#BFD2FF"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          <circle cx="100" cy="100" r="3" fill="#FFFFFF" fillOpacity="0.9" />
        </svg>

        {/* orbit 1 */}
        <div className="absolute inset-[8%] animate-orbit-spin">
          <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
            <circle cx="100" cy="100" r="96" stroke="url(#core-ring)" strokeOpacity="0.35" strokeWidth="0.8" strokeDasharray="3 6" />
            <circle cx="196" cy="100" r="5" fill="#37D4E6" />
            <circle cx="196" cy="100" r="9" fill="#37D4E6" fillOpacity="0.25" />
            <circle cx="32" cy="42" r="3.5" fill="#8467F3" />
          </svg>
        </div>

        {/* orbit 2 */}
        <div className="absolute inset-[22%] animate-orbit-spin-reverse">
          <svg viewBox="0 0 200 200" fill="none" className="h-full w-full">
            <circle cx="100" cy="100" r="94" stroke="#37D4E6" strokeOpacity="0.3" strokeWidth="0.8" />
            <circle cx="100" cy="6" r="4.5" fill="#2E6BFF" />
            <circle cx="100" cy="6" r="8.5" fill="#2E6BFF" fillOpacity="0.3" />
            <circle cx="166" cy="166" r="3" fill="#23C39B" />
          </svg>
        </div>

        {/* floating satellite chips (pure shapes, no text) */}
        <div className="absolute -left-2 top-[18%] h-9 w-9 rotate-12 rounded-lg border border-signal/50 bg-night-raised/80 shadow-[0_0_18px_rgba(55,212,230,0.35)] backdrop-blur animate-float">
          <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" strokeWidth="1.4">
            <path d="M10 22 l6 -8 4 4 6 -8" stroke="#37D4E6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="absolute -right-3 top-[38%] h-10 w-10 -rotate-6 rounded-lg border border-haze/50 bg-night-raised/80 shadow-[0_0_18px_rgba(132,103,243,0.35)] backdrop-blur animate-float-late">
          <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" strokeWidth="1.4">
            <circle cx="18" cy="18" r="7" stroke="#8467F3" />
            <circle cx="18" cy="18" r="2" fill="#C65CF0" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-[14%] h-8 w-8 rotate-6 rounded-lg border border-aurora/50 bg-night-raised/80 shadow-[0_0_16px_rgba(35,195,155,0.3)] backdrop-blur animate-float">
          <svg viewBox="0 0 36 36" fill="none" className="h-full w-full" strokeWidth="1.4">
            <path d="M10 14 h16 M10 18 h16 M10 22 h10" stroke="#23C39B" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
