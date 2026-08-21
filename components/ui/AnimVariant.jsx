"use client";

import { useEffect } from "react";

/**
 * Because app/layout.jsx renders <body> once for the whole app, a page
 * can't set its own body class statically. This mounts/unmounts the
 * page's anim-* class (see globals.css: .anim-scale, .anim-wipe, etc.)
 * so each route keeps its own distinct Reveal animation.
 *
 * Usage: render <AnimVariant name="anim-scale" /> once, anywhere in the page.
 */
export default function AnimVariant({ name }) {
  useEffect(() => {
    document.body.classList.add(name);
    return () => document.body.classList.remove(name);
  }, [name]);

  return null;
}
