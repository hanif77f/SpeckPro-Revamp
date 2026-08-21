"use client";

import { useEffect, useState } from "react";

/**
 * Given a list of section ids (without the "#"), returns the id of the
 * section currently "active" for scroll-spy purposes — the last section
 * whose top has scrolled past 40% of the viewport height.
 * Mirrors the original updateRail() logic 1:1.
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    function update() {
      const y = window.scrollY + window.innerHeight * 0.4;
      let active = sections[0]?.id ?? "";
      for (const section of sections) {
        if (section.offsetTop <= y) active = section.id;
      }
      setActiveId(active);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [ids]);

  return activeId;
}
