// app/sitemap.js
//
// Next.js automatically serves whatever this returns at /sitemap.xml —
// no separate XML file to maintain by hand. Submit that URL
// (https://speckpro.com/sitemap.xml) to Google Search Console.
//
// Blog posts are pulled directly from lib/posts.js, so adding a new
// .md file to content/posts/ automatically adds it here too — same
// "no code changes needed" principle as the rest of the blog system.
//
// /account/deletion is intentionally excluded — it's a compliance/
// utility page, not something meant to attract organic search traffic.

import { POSTS } from "../lib/posts";
import { siteConfig } from "../lib/siteConfig";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/web-development", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/uiux-design", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/mobile-app-development", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/ai-automation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/digital-transformation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/digital-marketing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
    { path: "/career", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    // /account/deletion intentionally NOT included here.
  ].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPosts = POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
