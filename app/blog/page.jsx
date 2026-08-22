import ChapterRail from "../../components/layout/ChapterRail";
import AnimVariant from "../../components/ui/AnimVariant";
import Blooms from "../../components/ui/Blooms";
import OrbitalRing from "../../components/ui/OrbitalRing";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Reveal from "../../components/ui/Reveal";
import SectionHead from "../../components/ui/SectionHead";
import HairlineList from "../../components/ui/HairlineList";
import ListRow from "../../components/ui/ListRow";
import { Button } from "../../components/ui/Button";
import { ringPresets } from "../../lib/ringPresets";

export const metadata = {
  title: "Blog",
  description:
    "Notes on software development, web design, app development, and digital marketing from SpeckPro Digital.",
  alternates: { canonical: "/blog" },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-featured", label: "Featured" },
  { id: "ch-posts", label: "All Posts" },
  { id: "ch-contact", label: "Contact" },
];

const categories = [
  { label: "Digital Marketing", href: "https://speckpro.com/category/digital-marketing/" },
  { label: "Digital Transformation", href: "https://speckpro.com/category/digital-transformation/" },
  { label: "eCommerce", href: "https://speckpro.com/category/ecommerce/" },
  { label: "IT Solutions", href: "https://speckpro.com/category/it-solutions/" },
  { label: "Mobile App Development", href: "https://speckpro.com/category/mobile-app-development/" },
];

const posts = [
  {
    tag: "Jul 19, 2026",
    title: "Permit Hub App: Take Control of Your App Permissions and Protect Your Digital Privacy",
    href: "https://speckpro.com/https-speckpro-com-permit-hub-app-permission-manager/",
  },
  {
    tag: "Jul 18, 2026",
    title: "Smart Tools App: PDF & Cleaner – The Ultimate All-in-One Utility App for Android",
    href: "https://speckpro.com/smart-tools-app-pdf-cleaner-the-ultimate-all-in-one-utility-app-for-android/",
  },
  {
    tag: "Jul 13, 2024",
    title: "Top 5 Screen Recorder Apps for Android in 2024",
    href: "https://speckpro.com/top-5-screen-recorder-apps-for-android-in-2024/",
  },
  {
    tag: "Jan 17, 2024",
    title: "The Double-Edged Scroll: Social Media, ADHD, and the Quest for Connection",
    href: "https://speckpro.com/the-double-edged-scroll-social-media-adhd-and-the-quest-for-connection/",
  },
  {
    tag: "Sep 13, 2021",
    title: "Start an eCommerce Business with These Essential Tips",
    href: "https://speckpro.com/start-an-ecommerce-business-with-these-essential-tips/",
  },
  {
    tag: "Sep 10, 2021",
    title: "5 Reasons to Outsource Software Development",
    href: "https://speckpro.com/5-reasons-to-outsource-software-development/",
  },
  {
    tag: "Sep 6, 2021",
    title: "How to Make a Mobile App for Beginners in 7 Steps",
    href: "https://speckpro.com/how-to-make-a-mobile-app-for-beginners-in-7-steps/",
  },
  {
    tag: "Jul 13, 2021",
    title: "5 Strategies That Can Empower Your Business in Digital Marketing",
    href: "https://speckpro.com/5-strategies-that-can-empower-your-business-in-digital-marketing/",
  },
  {
    tag: "Jul 13, 2021",
    title: "5 Tips to Avoid Failure in Mobile Application Development",
    href: "https://speckpro.com/5-tips-to-avoid-failure-in-mobile-application-development/",
  },
];

export default function BlogPage() {
  return (
    <>
      <AnimVariant name="anim-fade" />
      <ChapterRail items={railItems} />

      {/* ============ CUSTOM HERO (with category chips) ============ */}
      <section className="c-open c-void c-open--sub" id="top">
        <Blooms />
        <OrbitalRing config={ringPresets.blog} size="sub" />

        <div className="c-w">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

          <Reveal as="span" className="c-cap" index={1}>
            The Journal
          </Reveal>

          <Reveal as="h1" className="c-open__t" index={2} style={{ marginTop: 20 }}>
            Notes on software and growth
          </Reveal>

          <Reveal as="p" className="c-open__s" index={3}>
            The latest technology-related content and analysis on software development, web
            design, app development, social media strategy, SEO, and more.
          </Reveal>

          <Reveal as="div" className="c-chips" index={4} style={{ marginTop: 8 }}>
            <span
              style={{
                color: "#93A0B0",
                fontFamily: "var(--mono)",
                fontSize: 11.5,
                textTransform: "uppercase",
                letterSpacing: ".08em",
              }}
            >
              Browse by topic
            </span>
            {categories.map((cat) => (
              <a key={cat.href} className="chip" href={cat.href} target="_blank" rel="noopener noreferrer">
                {cat.label}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="c-sec" id="ch-featured">
        <div className="c-w">
          <SectionHead kicker="Featured" title="Latest from the team" />
          <HairlineList>
            <ListRow
              tag="Jul 20, 2026"
              title="Dot Chaser – Classic Arcade Fun: A Retro Arcade Game Experience on Fire Tablets and TV"
              description="SpeckPro Team"
              externalHref="https://speckpro.com/dot-chaser-classic-arcade-game/"
            />
          </HairlineList>
        </div>
      </section>

      {/* ============ ALL POSTS ============ */}
      <section className="c-sec" id="ch-posts" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="All Posts" title="The full archive" />
          <HairlineList>
            {posts.map((post) => (
              <ListRow key={post.href} tag={post.tag} title={post.title} externalHref={post.href} />
            ))}
          </HairlineList>
          <Reveal index={3} style={{ marginTop: 36 }}>
            <Button href="https://speckpro.com/blog/page/2/" variant="ghost" external withArrow={false}>
              More Posts — Page 2
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
