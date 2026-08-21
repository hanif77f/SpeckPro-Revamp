"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import IndexOverlay from "./IndexOverlay";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

/**
 * Owns the two pieces of state that Header and IndexOverlay both need
 * (sticky/materialize + overlay open/closed), so neither of those files
 * has to know about the other. Rendered once from app/layout.jsx.
 */
export default function SiteChrome() {
  const stuck = useStickyHeader();
  const [overlayOpen, setOverlayOpen] = useState(false);
  const pathname = usePathname();

  // Close the overlay automatically on route change (covers back/forward nav
  // and any link inside the overlay that doesn't already call onClose).
  useEffect(() => {
    setOverlayOpen(false);
  }, [pathname]);

  return (
    <>
      <Header
        stuck={stuck}
        overlayOpen={overlayOpen}
        onBurgerClick={() => setOverlayOpen((v) => !v)}
      />
      <IndexOverlay open={overlayOpen} onClose={() => setOverlayOpen(false)} />
    </>
  );
}
