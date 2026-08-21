"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Client-only wrapper that reproduces the original .rv / .rv.in
 * IntersectionObserver reveal system. The actual "from" state per page
 * (blur-rise, scale-in, wipe, skew, etc.) is still controlled entirely by
 * CSS via the body's anim-* class in globals.css — this component only
 * toggles the "in" class at the right scroll moment.
 *
 * Props:
 *  - children
 *  - index      (number) stagger index — same purpose as the original --i CSS var
 *  - as         (string|Component) element/tag to render, defaults to "div"
 *  - className  (string)
 *  - ...rest    passed straight through (style, id, role, etc.)
 */
export default function Reveal({ children, index, as: Component = "div", className = "", style, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`rv${visible ? " in" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, "--i": index ?? 0 }}
      {...rest}
    >
      {children}
    </Component>
  );
}
