"use client";

import { useScrollSpy } from "../../lib/hooks/useScrollSpy";

/**
 * Props:
 *  - items  array of { id, label } — id must match a real section id on the page
 */
export default function ChapterRail({ items }) {
  const activeId = useScrollSpy(items.map((i) => i.id));

  return (
    <nav className="c-rail" aria-label="Chapters">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={activeId === item.id ? "active" : undefined}
        >
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
