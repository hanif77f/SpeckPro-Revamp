import Link from "next/link";
import { notFound } from "next/navigation";
import ChapterRail from "../../../components/layout/ChapterRail";
import ArticleBody from "../../../components/blog/ArticleBody";
import OrbitalRing from "../../../components/ui/OrbitalRing";
import { ringPresets } from "../../../lib/ringPresets";
import { POSTS, getPostBySlug, getPostHref, getRelatedPosts } from "../../../lib/posts";

// Statically generates one page per post found in content/posts/ at build
// time. Add a new .md file there and it gets its own fast, pre-rendered
// page automatically on the next build — nothing here needs editing.
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: post.featuredImage ? [{ url: post.featuredImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

function buildRailItems(hasRelated) {
  return [
    { id: "top", label: "Open" },
    { id: "ch-article", label: "Article" },
    ...(hasRelated ? [{ id: "ch-related", label: "Related" }] : []),
    { id: "ch-contact", label: "Contact" },
  ];
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4l16 16M20 4 4 20" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 2);
  const railItems = buildRailItems(related.length > 0);

  return (
    <>
      <ChapterRail items={railItems} />

      {/* ============ ARTICLE TITLE BAND ============ */}
      <section className="c-abanner c-void" id="top">
        <div className="c-atm">
          <span
            className="c-bloom"
            style={{
              width: "40vw",
              height: "40vw",
              top: "-16vw",
              left: "-14vw",
              background: "radial-gradient(circle,#0E8F79,transparent 68%)",
            }}
          />
          <span
            className="c-bloom"
            style={{
              width: "26vw",
              height: "26vw",
              bottom: "-14vw",
              right: "-8vw",
              background: "radial-gradient(circle,#7A5A22,transparent 66%)",
            }}
          />
        </div>

        <OrbitalRing config={ringPresets["blog-post"]} size="sub" />

        <div className="c-w">
          <div className="c-abanner__crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>
          <span className="c-cap">{post.category}</span>
          <h1 style={{ marginTop: 16 }}>{post.title}</h1>

          <div className="c-ameta">
            <div className="c-ameta__author">
              <span className="c-ameta__avatar">{post.author.avatar}</span>
              <div>
                <div className="c-ameta__name">{post.author.name}</div>
                <div className="c-ameta__role">{post.author.role}</div>
              </div>
            </div>
            <span className="c-ameta__dot" />
            <span className="c-ameta__item">{post.date}</span>
            <span className="c-ameta__dot" />
            <span className="c-ameta__item">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ============ FEATURED IMAGE ============ */}
      {post.featuredImage && (
        <section className="c-featured">
          <div className="c-featured__frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.featuredImage} alt={post.featuredImageAlt} />
          </div>
        </section>
      )}

      {/* ============ ARTICLE BODY ============ */}
      <section className="c-abody" id="ch-article">
        <div className="c-w">
          <div className="c-agrid">
            <article>
              <ArticleBody html={post.contentHtml} />

              {post.tags.length > 0 && (
                <div className="c-atags">
                  {post.tags.map((tag) => (
                    <a href="#" key={tag}>
                      {tag}
                    </a>
                  ))}
                </div>
              )}

              <div className="c-ashare">
                <span>Share</span>
                <a href="#" aria-label="Share on LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="#" aria-label="Share on X">
                  <XIcon />
                </a>
                <a href={`mailto:?subject=${encodeURIComponent(post.title)}`} aria-label="Share by email">
                  <MailIcon />
                </a>
              </div>

              <div className="c-abox">
                <span className="c-abox__avatar">{post.author.avatar}</span>
                <div>
                  <h4>{post.author.name}</h4>
                  <span className="role">{post.author.role}</span>
                  <p>
                    Notes from the SpeckPro team on building, improving, and scaling digital
                    products.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 44 }}>
                <Link className="c-back" href="/blog">
                  <BackIcon />
                  Back to all posts
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ RELATED POSTS ============ */}
      {related.length > 0 && (
        <section className="c-related" id="ch-related">
          <div className="c-w">
            <div className="c-h">
              <span className="c-cap">Keep Reading</span>
              <h2>More from the journal</h2>
              <p>A few more notes on shipping and scaling digital products.</p>
            </div>

            <div className="c-rcards">
              {related.map((r) => (
                <Link className="c-rcard" href={getPostHref(r)} key={r.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.title} />
                  <div className="c-rcard__body">
                    <span className="tag">{r.category}</span>
                    <h4>{r.title}</h4>
                    <p>{r.excerpt}</p>
                  </div>
                </Link>
              ))}
              <Link className="c-rcard" href="/blog">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/speckpro-all-posts/600/340" alt="View all blog posts" />
                <div className="c-rcard__body">
                  <span className="tag">Journal</span>
                  <h4>View all posts</h4>
                  <p>See everything we&rsquo;ve published so far.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
