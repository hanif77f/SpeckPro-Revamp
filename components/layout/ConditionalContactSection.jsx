"use client";

import { usePathname } from "next/navigation";
import ContactSection from "./ContactSection";

/**
 * Rendered once from app/layout.jsx so every page automatically ends with
 * the shared contact chapter + footer — except /contact, which renders its
 * own enhanced version (with the real map embed) directly in its page
 * content, so it doesn't need — and shouldn't get — this one too.
 */
export default function ConditionalContactSection() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <ContactSection />;
}
