// lib/posts.js
//
// HOW TO PUBLISH A NEW POST (no code, no new folders, no touching this file):
//   1. Copy any existing file in content/posts/ as a starting point.
//   2. Save it as content/posts/your-post-slug.md — the filename becomes
//      the URL: speckpro.com/blog/your-post-slug
//   3. Edit the frontmatter (the --- ... --- block at the top) and write
//      the article below it in plain Markdown (## for headings, **bold**,
//      - for bullets, 1. for numbered lists, > for pullquotes).
//   4. Save. That's the entire process — the listing page and the article
//      page both pick it up automatically on the next build.
//
// This file is the only "code" involved, and it never needs to change to
// add, edit, or remove a post — it just reads whatever .md files exist.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function loadAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      category: data.category ?? "General",
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      readTime: data.readTime ?? "",
      image: data.image ?? "",
      featuredImage: data.featuredImage ?? data.image ?? "",
      featuredImageAlt: data.featuredImageAlt ?? data.title ?? "",
      author: {
        name: data.authorName ?? "SpeckPro Editorial Team",
        role: data.authorRole ?? data.category ?? "",
        avatar: data.authorAvatar ?? "SP",
      },
      tags: data.tags ?? [],
      // Markdown -> HTML happens once here, at build time — the page
      // components just render this string, they never touch Markdown.
      contentHtml: marked.parse(content),
    };
  });

  // Newest first, based on the `date` frontmatter field.
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Computed once per build/request rather than per-call, since reading and
// parsing every file on every function call would be wasteful.
export const POSTS = loadAllPosts();

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}

export function getPostHref(post) {
  return `/blog/${post.slug}`;
}

export function getRelatedPosts(currentSlug, count = 2) {
  return POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
