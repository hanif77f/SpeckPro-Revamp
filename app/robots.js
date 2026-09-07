// app/robots.js
//
// Next.js automatically serves whatever this returns at /robots.txt.
//
// Disallow: "/*?*" blocks crawling of ANY URL with a query string,
// site-wide — this is deliberately broad rather than listing individual
// spam patterns (?l=, ?product/, ?shop/, etc.), since new spam
// campaigns can invent new junk query strings at any time. None of the
// real pages in sitemap.xml use query strings, so this only ever
// blocks junk variants — it never affects the clean URLs Google should
// actually be crawling and indexing.

import { siteConfig } from "../lib/siteConfig";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/account/deletion", "/*?*"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
