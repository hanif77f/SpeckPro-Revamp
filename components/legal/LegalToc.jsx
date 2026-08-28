"use client";

import { useEffect, useState } from "react";

/**
 * Renders the sticky "On This Page" TOC and highlights whichever section
 * heading is currently in view. Kept as its own small Client Component
 * (rather than making the whole Privacy Policy page client-side) since
 * this is the only interactive part of an otherwise fully static page.
 *
 * Props:
 *  - items  array of { id, label } matching real h2 ids in the article
 */
export default function LegalToc({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el) => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className="legal-toc" id="cToc">
      <h5>On This Page</h5>
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`} className={activeId === item.id ? "active" : undefined}>
          {item.label}
        </a>
      ))}
    </aside>
  );
}
