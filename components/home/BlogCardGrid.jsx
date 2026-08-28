import Link from "next/link";
import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";
import { POSTS } from "../../lib/posts";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

// No "use client" here on purpose — this reads lib/posts.js (which uses
// Node's fs/path to load Markdown files), so it must stay a Server
// Component. It has no interactivity of its own, so that's no loss.
export default function BlogCardGrid() {
  // lib/posts.js already sorts newest-first, so this always shows
  // whatever's actually latest — add a new .md file and it appears here
  // automatically, no code change needed.
  const latestPosts = POSTS.slice(0, 3);

  return (
    <section className="c-sec" id="ch-journal" style={{ background: "var(--cm)" }}>
      <div className="c-w">
        <SectionHead
          kicker="From the Blog"
          title="Notes on software and growth"
          lead="The latest technology-related content and analysis from our team."
        />

        {latestPosts.length === 0 ? (
          <Reveal as="p" index={3} style={{ color: "var(--ci3)" }}>
            New articles are on the way — check back soon.
          </Reveal>
        ) : (
          <Reveal
            as="div"
            className="c-blog__grid"
            index={3}
            style={{
              gridTemplateColumns: `repeat(${Math.min(latestPosts.length, 3)}, 1fr)`,
              maxWidth: latestPosts.length < 3 ? `${latestPosts.length * 380 + (latestPosts.length - 1) * 26}px` : "none",
              marginInline: latestPosts.length < 3 ? "auto" : undefined,
            }}
          >
            {latestPosts.map((post) => (
              <Link key={post.slug} className="c-blog__card" href={`/blog/${post.slug}`}>
                <div className="c-blog__thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="c-blog__body">
                  <span className="c-blog__tag">{post.category}</span>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <span className="c-blog__more">
                    Read more
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </Reveal>
        )}

        <Reveal as="div" index={4} style={{ marginTop: 40, textAlign: "center" }}>
          <Link className="c-btn c-btn--ghost" href="/blog">
            Read More Blogs
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
