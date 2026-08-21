// lib/fonts.js
// next/font self-hosts and subsets these automatically at build time —
// no external request to fonts.googleapis.com at runtime, no layout shift,
// and font-display is handled for you. This replaces the <link> tags to
// Google Fonts / Fontshare from the static build.

import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

/**
 * General Sans isn't on Google Fonts, so it needs to be self-hosted via
 * next/font/local for the same performance benefit.
 *
 * 1. Download the woff2 files from https://www.fontshare.com/fonts/general-sans
 * 2. Place them at: app/fonts/GeneralSans-Medium.woff2, -Semibold.woff2, -Bold.woff2
 * 3. Uncomment the block below (and the localFont import above it).
 *
 * Until then, --font-display below falls back to IBM Plex Sans, which is
 * visually very close and keeps the build working out of the box.
 */
// import localFont from "next/font/local";
// export const generalSans = localFont({
//   src: [
//     { path: "../app/fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
//     { path: "../app/fonts/GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
//     { path: "../app/fonts/GeneralSans-Bold.woff2", weight: "700", style: "normal" },
//   ],
//   variable: "--font-display",
//   display: "swap",
// });
