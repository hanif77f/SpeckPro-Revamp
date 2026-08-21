import { tickLines, arcPath } from "../../lib/ringMath";

/**
 * No "use client" — the rotation is pure CSS animation (see .spin / .spinr
 * variants in globals.css), so this can render fully on the server and
 * ship zero JS.
 *
 * Props:
 *  - config  the ring preset object (see lib/ringPresets.js)
 *  - size    "hero" (homepage's large split-layout graphic, .c-ap)
 *            or "sub" (smaller decorative graphic on every inner page, .c-ap-sub)
 */
export default function OrbitalRing({ config, size = "sub" }) {
  const ticks = tickLines(config.ticks);
  const arc = arcPath(config.arcStart, config.arcSweep);
  const wrapperClass = size === "hero" ? "c-ap" : "c-ap-sub";

  return (
    <div className={wrapperClass} aria-hidden="true">
      <svg viewBox="0 0 400 400">
        <defs>
          <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7FE3D0" />
            <stop offset=".55" stopColor="#3FB3A0" />
            <stop offset="1" stopColor="#D9A24E" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className={config.spinClass}>
          <g stroke="url(#capGrad)" strokeWidth="1" opacity=".5">
            {ticks.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
            ))}
          </g>
        </g>

        {config.rings.map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke={`rgba(255,255,255,${(0.12 - i * 0.03).toFixed(2)})`}
            strokeWidth="1"
          />
        ))}

        {config.spinrClass && (
          <g className={config.spinrClass}>
            <circle
              cx="200"
              cy="200"
              r={config.dashRing}
              fill="none"
              stroke="#5CE0C4"
              strokeWidth="2.2"
              strokeDasharray={config.dash}
              strokeLinecap="round"
            />
          </g>
        )}

        <path d={arc} fill="none" stroke={config.arcColor} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
