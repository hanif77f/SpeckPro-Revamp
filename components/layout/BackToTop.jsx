"use client";

import { useEffect, useState } from "react";

// Site-wide floating button, same pattern as WhatsAppFab.jsx — add this
// once in app/layout.jsx and it shows up on every page automatically.
// Stacks directly above the WhatsApp button (same right offset, higher
// up) so the two never overlap.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
