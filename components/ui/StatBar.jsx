"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated stat bar row (label, percentage, fill-on-scroll bar) used on
 * the four service pages with real percentages.
 *
 * Props:
 *  - label
 *  - value  either a number (renders an animated fill bar) or a string
 *           (renders as a plain tag, e.g. "Supporting library" / "GPS-aware")
 */
export default function StatBar({ label, value }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);
  const isPercent = typeof value === "number";

  useEffect(() => {
    if (!isPercent) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFilled(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPercent]);

  return (
    <div className="stat-row" ref={ref}>
      <div className="stat-top">
        <b>{label}</b>
        <span style={!isPercent ? { color: "var(--ci3)" } : undefined}>
          {isPercent ? `${value}%` : value}
        </span>
      </div>
      {isPercent && (
        <div className="stat-bar">
          <div className="stat-fill" style={{ width: filled ? `${value}%` : "0%" }} />
        </div>
      )}
    </div>
  );
}
