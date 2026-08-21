// lib/nav.js
// Single source of truth for every nav list in the site. Header, the
// full-screen index overlay, and the footer all read from this file, so
// adding/renaming a page happens in exactly one place.

export const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "UI/UX Design", href: "/services/uiux-design" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "IoT Solutions", href: "/services/iot-solutions" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const overlayNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
