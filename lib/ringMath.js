// lib/ringMath.js
// Pure geometry helpers that generate the orbital-ring SVG pieces from a
// handful of parameters, instead of hand-drawing 13 separate SVGs. This is
// what lets OrbitalRing.jsx stay a single reusable component.

export function tickLines(count, rIn = 182, rOut = 198, cx = 200, cy = 200) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const ang = (i * (360 / count) * Math.PI) / 180;
    lines.push({
      x1: cx + rIn * Math.sin(ang),
      y1: cy - rIn * Math.cos(ang),
      x2: cx + rOut * Math.sin(ang),
      y2: cy - rOut * Math.cos(ang),
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
