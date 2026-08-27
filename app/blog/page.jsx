"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import ChapterRail from "../../components/layout/ChapterRail";
import { siteConfig } from "../../lib/siteConfig";

// Self-contained, client-side (same pattern as Career/Account Deletion) —
// document.title is set manually since a Client Component can't export
// Next's `metadata`.
//
// IMPORTANT: only the first post below has a real destination
// (/blog/outgrown-legacy-website). The other eight are placeholder
// entries with stock photography, included so this grid can be previewed
// fully populated — give each one a real page and update its `href`
// before publishing, same as the callout below says.

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
  </svg>
);

const POSTS = [
  {
    category: "Web Development",
    title: "Why Every Small Business Needs a Professional Website in 2026",
    excerpt:
      "Most small businesses do not lose potential customers because their product is poor or their service lacks value.",
    date: "Aug 27, 2026",
    readTime: "5 min read",
    image: "/images/blog/blog 1 - featured image.png",
    href: "/blog/small-business-professional-website-2026",
  },
  // {
  //   category: "IoT",
  //   title: 'What "Smart" Actually Means for Connected Products',
  //   excerpt: "A practical look at where IoT adds real value in a product — and where it's mostly a buzzword.",
  //   date: "Aug 3, 2026",
  //   readTime: "4 min read",
  //   image: "https://picsum.photos/seed/speckpro-post-3/700/440",
  //   href: "#",
  // },
  // {
  //   category: "Design",
  //   title: "Designing for Trust: UI Patterns That Reduce Cart Abandonment",
  //   excerpt:
  //     "Small interface decisions — from checkout progress indicators to error messaging — that measurably change conversion.",
  //   date: "Jul 22, 2026",
  //   readTime: "7 min read",
  //   image: "https://picsum.photos/seed/speckpro-post-4/700/440",
  //   href: "#",
  // },
  // {
  //   category: "Web Development",
  //   title: "Headless CMS or Traditional? A Decision Framework",
  //   excerpt: "How to decide between a headless setup and a traditional CMS based on your team, timeline, and content needs.",
  //   date: "Jul 9, 2026",
  //   readTime: "6 min read",
  //   image: "https://picsum.photos/seed/speckpro-post-5/700/440",
  //   href: "#",
  // },
  // {
  //   category: "Mobile",
  //   title: "Offline-First Apps: Designing for Unreliable Connectivity",
  //   excerpt: "Why offline-first architecture matters more than ever, and the patterns that make sync feel invisible to users.",
  //   date: "Jun 28, 2026",
  //   readTime: "5 min read",
  //   image: "https://picsum.photos/seed/speckpro-post-6/700/440",
  //   href: "#",
  // },
  // {
  //   category: "Design",
  //   title: "A Practical Guide to Design Systems for Small Teams",
  //   excerpt: "You don't need a 40-page design system to move faster — here's what actually matters at a small scale.",
  //   date: "Jun 15, 2026",
  //   readTime: "8 min read",
  //   image: "https://picsum.photos/seed/speckpro-post-7/700/440",
  //   href: "#",
  // },
  // {
  //   category: "IoT",
  //   title: "Edge Computing for Small and Mid-Sized Deployments",
  //   excerpt: "When it makes sense to process data on-device versus in the cloud, and what that trade-off costs in practice.",
  //   date: "Jun 2, 2026",
  //   readTime: "5 min read",
  //   image: "https://picsum.photos/seed/speckpro-post-8/700/440",
  //   href: "#",
  // },
  // {
  //   category: "Web Development",
  //   title: "Core Web Vitals in 2026: What Actually Moves the Needle",
  //   excerpt: "A grounded look at which performance optimizations are worth engineering time, and which are diminishing returns.",
  //   date: "May 20, 2026",
  //   readTime: "6 min read",
  //   image: "https://picsum.photos/seed/speckpro-post-9/700/440",
  //   href: "#",
  // },
];

const CATEGORIES = ["all", "Web Development", "Mobile", "Design", "IoT"];

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-posts", label: "Posts" },
  { id: "ch-contact", label: "Contact" },
];

export default function BlogPage() {
  useEffect(() => {
    document.title = "Blog — Notes on Software and Growth — " + siteConfig.name;
  }, []);

  const [category, setCategory] = useState("all");
  const filtered = useMemo(
    () => (category === "all" ? POSTS : POSTS.filter((p) => p.category === category)),
    [category]
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

          <div className="c-filters" style={{ marginTop: "clamp(28px,4vw,40px)" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`c-filter${category === cat ? " active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat === "all" ? "All Posts" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POST GRID ============ */}
      <section className="c-sec" id="ch-posts">
        <div className="c-w">
          

          <div className="c-bgrid">
            {filtered.map((post) => (
              <Link key={post.title} className="c-bcard" href={post.href}>
                <div className="c-bcard__img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title + " — sample thumbnail"} loading="lazy" />
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
        </div>
      </section>
    </>
  );
}
