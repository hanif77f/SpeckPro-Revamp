"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ChapterRail from "../layout/ChapterRail";

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-posts", label: "Posts" },
  { id: "ch-contact", label: "Contact" },
];

// Receives posts as a prop from the Server Component parent (app/blog/page.jsx)
// instead of importing lib/posts.js directly. That file reads Markdown files
// from disk using Node's fs/path, which only works on the server — a Client
// Component (this one, since it needs useState for the filter buttons) can
// never safely import it: Next.js would try to bundle fs/path for the
// browser too, and the build fails because those modules don't exist there.
export default function BlogPageClient({ posts }) {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map((p) => p.category)));
    return ["all", ...unique];
  }, [posts]);

  const [category, setCategory] = useState("all");
  const filtered = useMemo(
    () => (category === "all" ? posts : posts.filter((p) => p.category === category)),
    [posts, category]
  );

  return (
    <>
      <ChapterRail items={railItems} />

      {/* ============ HERO ============ */}
      <section className="c-hero c-void" id="top">
        <div className="c-atm">
          <span
            className="c-bloom"
            style={{
              width: "44vw",
              height: "44vw",
              top: "-18vw",
              left: "-12vw",
              background: "radial-gradient(circle,#0E8F79,transparent 68%)",
            }}
          />
          <span
            className="c-bloom"
            style={{
              width: "30vw",
              height: "30vw",
              bottom: "-16vw",
              right: "-8vw",
              background: "radial-gradient(circle,#7A5A22,transparent 66%)",
            }}
          />
        </div>

        <div className="c-w">
          <div className="c-crumb__row">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </div>
          <span className="c-cap">From the Blog</span>
          <h1>Notes on software and growth</h1>
          <p className="lead">The latest technology-related content and analysis from our team.</p>

          {categories.length > 1 && (
            <div className="c-filters" style={{ marginTop: "clamp(28px,4vw,40px)" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`c-filter${category === cat ? " active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat === "all" ? "All Posts" : cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ POST GRID ============ */}
      <section className="c-sec" id="ch-posts">
        <div className="c-w">
          {filtered.length === 0 ? (
            <p style={{ color: "var(--ci3)", textAlign: "center", padding: "40px 0" }}>
              No posts yet — add a .md file to content/posts/ to get started.
            </p>
          ) : (
            <div className="c-bgrid">
              {filtered.map((post) => (
                <Link key={post.slug} className="c-bcard" href={`/blog/${post.slug}`}>
                  <div className="c-bcard__img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="c-bcard__badge">{post.category}</span>
                  </div>
                  <div className="c-bcard__body">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="c-bcard__meta">
                      <span>{post.date}</span>
                      <span className="dot" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
