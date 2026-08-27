import Link from "next/link";
import ChapterRail from "../../../components/layout/ChapterRail";

export const metadata = {
  title: "5 Signs Your Business Has Outgrown Its Legacy Website",
  description:
    "Five practical signs a website's architecture has started working against your business, and what a modern rebuild actually needs to preserve.",
  alternates: { canonical: "/blog/outgrown-legacy-website" },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-article", label: "Article" },
  { id: "ch-related", label: "Related" },
  { id: "ch-contact", label: "Contact" },
];

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
const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
  </svg>
);

export default function BlogPostPage() {
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
        <div className="c-w">
          <div className="c-abanner__crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>Digital Transformation</span>
          </div>
          <span className="c-cap">Digital Transformation</span>
          <h1 style={{ marginTop: 16 }}>5 Signs Your Business Has Outgrown Its Legacy Website</h1>

          <div className="c-ameta">
            <div className="c-ameta__author">
              <span className="c-ameta__avatar">SP</span>
              <div>
                <div className="c-ameta__name">SpeckPro Editorial Team</div>
                <div className="c-ameta__role">Digital Transformation</div>
              </div>
            </div>
            <span className="c-ameta__dot" />
            <span className="c-ameta__item">August 27, 2026</span>
            <span className="c-ameta__dot" />
            <span className="c-ameta__item">6 min read</span>
          </div>
        </div>
      </section>

      {/* ============ FEATURED IMAGE ============ */}
      <section className="c-featured">
        <div className="c-featured__frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://picsum.photos/seed/speckpro-legacy-website/1600/900"
            alt="Developer reviewing website architecture diagrams on a laptop — sample image, replace before publishing"
          />
          <p className="c-featured__cap">Sample image — replace with your own photography before publishing.</p>
        </div>
      </section>

      {/* ============ ARTICLE BODY ============ */}
      <section className="c-abody" id="ch-article">
        <div className="c-w">
          <div className="c-agrid">
            <article className="c-article">
              <div className="c-edit">
                <EditIcon />
                <p>
                  <b>This is sample content.</b> The headline, image, and article below are
                  placeholder copy showing how a real post will look once published — replace them
                  with your actual writing, then delete this box.
                </p>
              </div>

              <p className="lede">
                Most businesses don&rsquo;t wake up one day and decide their website is holding
                them back. It happens gradually — a form that used to take a minute now takes
                five, a &ldquo;quick update&rdquo; that takes the dev team a week, a mobile
                experience that quietly loses customers before they ever reach checkout. Here are
                five signs it might be time for a rebuild.
              </p>

              <p>
                A website built five or ten years ago was built for a different internet.
                Browsers have changed, customer expectations have changed, and the tools available
                to developers have changed dramatically. None of that is a problem on its own —
                until it starts costing you time, money, or customers.
              </p>

              <p>
                Below are the patterns we see most often when a business reaches out to us about a
                website that&rsquo;s <strong>quietly become more liability than asset</strong>.
              </p>

              <h2>1. Every small change takes an engineer and a week</h2>
              <p>
                If updating a price, swapping a banner image, or adding a new service page
                requires a developer to dig through old code just to make a one-line change, the
                site&rsquo;s architecture is working against you rather than for you. A modern
                build should let your team make routine updates without waiting on engineering.
              </p>

              <h2>2. Mobile visitors bounce before they convert</h2>
              <p>
                If your analytics show a large gap between desktop and mobile conversion rates,
                that&rsquo;s rarely a marketing problem — it&rsquo;s usually a mobile experience
                problem. Slow load times, awkward forms, and layouts that weren&rsquo;t designed
                mobile-first are the most common culprits.
              </p>

              <ul>
                <li>Pages that take more than a few seconds to load on a phone</li>
                <li>Forms that are painful to fill out on a small screen</li>
                <li>Navigation that assumes a mouse, not a thumb</li>
              </ul>

              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/speckpro-mobile-ux/1200/675"
                  alt="Person using a mobile website on a smartphone — sample image"
                />
                <figcaption>Sample inline image — swap for a real screenshot or photo relevant to your post.</figcaption>
              </figure>

              <h3>3. Your team is afraid to touch the CMS</h3>
              <p>
                A content management system should make your team faster, not more cautious. If
                the running joke internally is &ldquo;don&rsquo;t touch that, it&rsquo;ll
                break the site,&rdquo; that&rsquo;s a sign the underlying platform has outlived
                its usefulness.
              </p>

              <h2>4. Integrations feel bolted on, not built in</h2>
              <p>
                Modern businesses run on a stack of connected tools — payments, CRM, inventory,
                support. When every new integration takes months of custom work instead of days,
                it&rsquo;s usually because the original site wasn&rsquo;t designed with that kind
                of flexibility in mind.
              </p>

              <blockquote className="c-pullquote">
                &ldquo;The goal isn&rsquo;t to rebuild everything from scratch — it&rsquo;s to
                replace what&rsquo;s holding you back while keeping what already works.&rdquo;
                <cite>— SpeckPro Digital Transformation Team</cite>
              </blockquote>

              <h3>5. Security updates keep getting pushed back</h3>
              <p>
                Older platforms accumulate technical debt, and technical debt eventually becomes a
                security risk. If patches and updates keep getting delayed because &ldquo;we&rsquo;re
                worried it&rsquo;ll break something,&rdquo; that&rsquo;s often a sign the platform
                has grown too fragile to maintain safely.
              </p>

              <p>
                None of these signs mean you need to start from zero. A well-planned migration can
                preserve your content, your SEO rankings, and your team&rsquo;s familiarity with
                day-to-day operations, while replacing the parts of the system that are actually
                causing friction.
              </p>

              <div className="c-atags">
                <a href="#">Digital Transformation</a>
                <a href="#">Web Development</a>
                <a href="#">Legacy Systems</a>
              </div>

              <div className="c-ashare">
                <span>Share</span>
                <a href="#" aria-label="Share on LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href="#" aria-label="Share on X">
                  <XIcon />
                </a>
                <a href="mailto:?subject=Worth a read" aria-label="Share by email">
                  <MailIcon />
                </a>
              </div>

              <div className="c-abox">
                <span className="c-abox__avatar">SP</span>
                <div>
                  <h4>SpeckPro Editorial Team</h4>
                  <span className="role">Digital Transformation</span>
                  <p>
                    Notes from the SpeckPro team on migrations, platform decisions, and
                    modernizing without a full rebuild.
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
      <section className="c-related" id="ch-related">
        <div className="c-w">
          <div className="c-h">
            <span className="c-cap">Keep Reading</span>
            <h2>More from the journal</h2>
            <p>A few more notes on shipping and scaling digital products.</p>
          </div>

          <div className="c-rcards">
            <a className="c-rcard" href="/blog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/seed/speckpro-post-2/600/340" alt="Sample thumbnail for a related blog post" />
              <div className="c-rcard__body">
                <span className="tag">Mobile</span>
                <h4>Native vs. Cross-Platform: Choosing the Right Stack in 2026</h4>
                <p>What actually changes when you pick React Native over two native codebases.</p>
              </div>
            </a>
            <a className="c-rcard" href="/blog">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://picsum.photos/seed/speckpro-post-3/600/340" alt="Sample thumbnail for a related blog post" />
              <div className="c-rcard__body">
                <span className="tag">IoT</span>
                <h4>What &ldquo;Smart&rdquo; Actually Means for Connected Products</h4>
                <p>A practical look at where IoT adds real value — and where it&rsquo;s just a buzzword.</p>
              </div>
            </a>
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
    </>
  );
}
