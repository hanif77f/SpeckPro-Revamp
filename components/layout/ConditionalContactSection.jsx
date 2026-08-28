"use client";

import { usePathname } from "next/navigation";
import ContactSection from "./ContactSection";

// Routes that render their own ContactSection directly in their page
// content (with different props — a map, a dark variant, etc.) and
// shouldn't also get the default one auto-appended underneath it.
const EXCLUDED_PATHS = ["/contact", "/privacy-policy"];

/**
 * Rendered once from app/layout.jsx so every page automatically ends with
 * the shared contact chapter + footer — except the routes above, which
 * render their own tailored version directly in their page content.
 */
export default function ConditionalContactSection() {
  const pathname = usePathname();
  if (EXCLUDED_PATHS.includes(pathname)) return null;
  return <ContactSection />;
}
