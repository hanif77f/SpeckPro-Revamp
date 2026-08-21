"use client";

import { useEffect, useState } from "react";

/**
 * Mirrors the original vanilla-JS header behavior:
 * the header stays transparent over the hero and gains a blurred
 * backdrop + hairline border once the page scrolls past 90px.
 */
export function useStickyHeader(threshold = 90) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > threshold);
    onScroll(); // set initial state (e.g. on back/forward navigation mid-scroll)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return stuck;
}
