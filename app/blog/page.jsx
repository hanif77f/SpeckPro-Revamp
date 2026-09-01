import BlogPageClient from "../../components/blog/BlogPageClient";
import { POSTS } from "../../lib/posts";

// This file stays a Server Component specifically so it's safe to import
// lib/posts.js (which reads Markdown files from disk via Node's fs/path —
// server-only APIs). All the interactive parts (filter buttons, useState)
// live in BlogPageClient.jsx instead, which receives the already-loaded
// posts as a plain prop rather than reading files itself.
export const metadata = {
  title: "Blog | SpeckPro Digital",
  description: "Notes on software development, web design, app development, and digital marketing from SpeckPro Digital.",
    keywords: [
    "software development blog",
    "web design insights",
    "mobile app development articles",
    "digital marketing tips",
  ],
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogPageClient posts={POSTS} />;
}
