// lib/ringMath.js
// Pure geometry helpers that generate the orbital-ring SVG pieces from a
// handful of parameters, instead of hand-drawing 13 separate SVGs. This is
// what lets OrbitalRing.jsx stay a single reusable component.

// Rounds to 2 decimal places and returns a Number (not a string) — this
// is what fixes the hydration mismatch. Math.sin/Math.cos can return a
// value that differs from the client's result by a tiny fraction (e.g.
// 42.38337651123223 vs 42.3833765112322) due to floating-point precision
// differences between Node's V8 and the browser's JS engine running the
// exact same calculation. React hydration does an exact string
// comparison between server- and client-rendered attribute values, so
// even a difference many decimal places out breaks it. Rounding first
// eliminates that sub-hundredth noise before it ever reaches JSX.
function round(n) {
  return Number(n.toFixed(2));
}

export function tickLines(count, rIn = 182, rOut = 198, cx = 200, cy = 200) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const ang = (i * (360 / count) * Math.PI) / 180;
    lines.push({
      x1: round(cx + rIn * Math.sin(ang)),
      y1: round(cy - rIn * Math.cos(ang)),
      x2: round(cx + rOut * Math.sin(ang)),
      y2: round(cy - rOut * Math.cos(ang)),
    });
  }
  return lines;
}

export function arcPath(startDeg, sweepDeg, r = 150, cx = 200, cy = 200) {
  const a1 = (startDeg * Math.PI) / 180;
  const a2 = ((startDeg + sweepDeg) * Math.PI) / 180;
  const x1 = cx + r * Math.sin(a1);
  const y1 = cy - r * Math.cos(a1);
  const x2 = cx + r * Math.sin(a2);
  const y2 = cy - r * Math.cos(a2);
  const largeArc = sweepDeg > 180 ? 1 : 0;
  return `M${x1.toFixed(0)} ${y1.toFixed(0)} A${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(
    0
  )} ${y2.toFixed(0)}`;
}

export const RING_RADII_3 = [118, 150, 182];
export const RING_RADII_2 = [134, 172];
