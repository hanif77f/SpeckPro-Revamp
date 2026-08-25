import Blooms from "../../components/ui/Blooms";
import OrbitalRing from "../../components/ui/OrbitalRing";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Reveal from "../../components/ui/Reveal";
import AnimVariant from "../../components/ui/AnimVariant";
import { Button } from "../../components/ui/Button";
import { ringPresets } from "../../lib/ringPresets";

export const metadata = {
  title: "Blog – Coming Soon",
  description:
    "SpeckPro Digital's blog is on its way — articles on software development, web design, app development, and digital marketing, coming soon.",
  alternates: { canonical: "/blog" },
  robots: { index: false, follow: true }, // don't index a placeholder page
};

export default function BlogComingSoonPage() {
  return (
    <>
      <AnimVariant name="anim-fade" />

      <section className="c-open c-void" id="top" style={{ minHeight: "90vh" }}>
        <Blooms />
        <OrbitalRing config={ringPresets.blog} size="sub" />

        <div className="c-w" style={{ textAlign: "center", maxWidth: 720, marginInline: "auto" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          </div>

          <Reveal
            as="span"
            className="c-cap c-cap--n"
            index={1}
            style={{ justifyContent: "center", display: "flex" }}
          >
            The Journal
          </Reveal>

          <Reveal
            as="h1"
            className="c-open__t"
            index={2}
            style={{ marginTop: 20, maxWidth: "none", marginInline: "auto" }}
          >
            Our journal is being written.
          </Reveal>

          <Reveal
            as="p"
            className="c-open__s"
            index={3}
            style={{ marginInline: "auto" }}
          >
            We&rsquo;re putting together articles on software development, web design, app
            development, and digital marketing — the blog will go live shortly after launch. In
            the meantime, reach out directly and we&rsquo;ll pick up the conversation right away.
          </Reveal>

          <Reveal
            as="div"
            className="c-actions"
            index={4}
            style={{ justifyContent: "center", marginTop: 34 }}
          >
            <Button href="/contact">Get in Touch</Button>
            <Button href="/" variant="ghost" withArrow={false}>
              Back to Home
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
