import ChapterRail from "../components/layout/ChapterRail";
import AnimVariant from "../components/ui/AnimVariant";
import Blooms from "../components/ui/Blooms";
import OrbitalRing from "../components/ui/OrbitalRing";
import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import HairlineList from "../components/ui/HairlineList";
import ListRow from "../components/ui/ListRow";
import HeroSearch from "../components/home/HeroSearch";
import ProofPanel from "../components/home/ProofPanel";
import ServicesExplorer from "../components/home/ServicesExplorer";
import ScopeEstimator from "../components/home/ScopeEstimator";
import { ringPresets } from "../lib/ringPresets";

export const metadata = {
  title: "Home",
  description:
    "SpeckPro is a global IT solutions company building mobile apps, websites, and IoT-powered platforms with agile precision.",
  alternates: { canonical: "/" },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-services", label: "Services" },
  { id: "ch-estimate", label: "Estimate" },
  { id: "ch-work", label: "Work" },
  { id: "ch-journal", label: "Journal" },
  { id: "ch-contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <>
      <AnimVariant name="anim-rise" />
      <ChapterRail items={railItems} />

      {/* ============ 01 · COLD OPEN ============ */}
      <section className="c-open c-void" id="top">
        <Blooms />
        <OrbitalRing config={ringPresets.home} size="hero" />

        <div className="c-w">
          <div className="c-open__g">
            <div>
              <Reveal as="h1" className="c-open__t" index={1}>
                Engineering digital work, <em>built to move business forward</em>
              </Reveal>
              <Reveal as="p" className="c-open__s" index={2}>
                SpeckPro is a global IT solutions company building mobile apps, websites, and
                IoT-powered platforms with agile precision — helping you replace legacy systems
                with technology built for a customer-centric, digital world.
              </Reveal>
              <HeroSearch />
            </div>
            <ProofPanel />
          </div>
        </div>
      </section>

      {/* ============ 02 · SERVICES ============ */}
      <section className="c-sec" id="ch-services">
        <div className="c-w">
          <SectionHead
            kicker="Capabilities"
            title="Six ways to move faster"
            lead="The disciplines we bring to every engagement — pick one, or combine several into a single build."
          />
          <Reveal>
            <ServicesExplorer />
          </Reveal>
        </div>
      </section>

      {/* ============ 03 · SCOPE ESTIMATOR ============ */}
      <section className="c-calc c-void" id="ch-estimate">
        <Blooms />
        <div className="c-w">
          <div className="c-calc__in">
            <Reveal as="span" className="c-cap c-cap--n" style={{ justifyContent: "center" }}>
              Project Scope · Indicative
            </Reveal>
            <Reveal as="h3" index={1}>
              How big is this, really?
            </Reveal>
            <Reveal as="p" index={2}>
              Set a rough team size and timeline — we&rsquo;ll show what kind of engagement that
              typically looks like. This is directional only; every project gets a real scoping
              call before anything is estimated in detail.
            </Reveal>
            <Reveal index={3}>
              <ScopeEstimator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 04 · WORK ============ */}
      <section className="c-sec" id="ch-work">
        <div className="c-w">
          <SectionHead
            kicker="Selected Work"
            title="Products we've helped build"
            lead="A few of the platforms we've shipped — spanning e-commerce, publishing, and public-sector work."
          />
          <HairlineList>
            <ListRow
              tag="E-Commerce"
              title="Kasabeeston"
              description="A complete e-commerce suite — website, Android app, and iOS app built as one connected shopping experience."
              externalHref="https://kasabeeston.com/"
            />
            <ListRow
              tag="Publishing"
              title="Entertainment Couch"
              description="A content publishing platform for entertainment, technology, fashion, and lifestyle news."
              externalHref="https://entertainmentcouch.com/"
            />
            <ListRow
              tag="Web"
              title="Islamabad Tennis Complex"
              description="Web development for a sports facility's public-facing site."
              externalHref="https://islamabadtennis.com/"
            />
          </HairlineList>
        </div>
      </section>

      {/* ============ 05 · JOURNAL ============ */}
      <section className="c-sec" id="ch-journal" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead
            kicker="From the Blog"
            title="Notes on software and growth"
            lead="The latest technology-related content and analysis from our team."
          />
          <HairlineList>
            <ListRow
              tag="Jul 20, 2026"
              title="Dot Chaser – Classic Arcade Fun"
              description="A retro arcade game experience on Fire Tablets and TV."
              externalHref="https://speckpro.com/dot-chaser-classic-arcade-game/"
            />
            <ListRow
              tag="Jul 19, 2026"
              title="Permit Hub App"
              description="Take control of your app permissions and protect your digital privacy."
              externalHref="https://speckpro.com/https-speckpro-com-permit-hub-app-permission-manager/"
            />
            <ListRow
              tag="Archive"
              title="Read the full journal"
              description="More on web design, app development, and digital marketing."
              externalHref="https://speckpro.com/blog/"
            />
          </HairlineList>
        </div>
      </section>
    </>
  );
}
