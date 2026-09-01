import ChapterRail from "../components/layout/ChapterRail";
import AnimVariant from "../components/ui/AnimVariant";
import Blooms from "../components/ui/Blooms";
import OrbitalRing from "../components/ui/OrbitalRing";
import Reveal from "../components/ui/Reveal";
import SectionHead from "../components/ui/SectionHead";
import HeroSearch from "../components/home/HeroSearch";
import ProofPanel from "../components/home/ProofPanel";
import ServicesExplorer from "../components/home/ServicesExplorer";
import WhySpeckPro from "../components/home/WhySpeckPro";
import ProjectStarterWizard from "../components/home/ProjectStarterWizard";
import CaseStudyCarousel from "../components/home/CaseStudyCarousel";
import BlogCardGrid from "../components/home/BlogCardGrid";
import WaveCTA from "../components/home/WaveCTA";
import { ringPresets } from "../lib/ringPresets";

export const metadata = {
  title: {
    absolute: "Website, Mobile App & AI Software Development | SpeckPro Digital",
  },
  description:
    "SpeckPro Digital builds websites, mobile apps, AI solutions, and custom software with agile precision. Offices in Pakistan and the UK.",
  alternates: {
    canonical: "/",
  },
};




const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-why", label: "Why Us" },
  { id: "ch-services", label: "Services" },
  { id: "ch-estimate", label: "Start" },
  { id: "ch-work", label: "Work" },
  { id: "ch-journal", label: "Journal" },
  { id: "ch-cta", label: "Next Step" },
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

      {/* ============ 01.5 · WHY SPECKPRO ============ */}
      <WhySpeckPro />

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

      {/* ============ 03 · PROJECT STARTER ============ */}
      <section className="c-calc c-void" id="ch-estimate">
        <div className="c-atm">
          <span
            className="c-bloom"
            style={{
              width: "42vw",
              height: "42vw",
              top: "-10vw",
              right: "-8vw",
              background: "radial-gradient(circle,#7A5A22,transparent 68%)",
            }}
          />
          <span
            className="c-bloom"
            style={{
              width: "38vw",
              height: "38vw",
              bottom: "-14vw",
              left: "-8vw",
              background: "radial-gradient(circle,#0E8F79,transparent 70%)",
            }}
          />
        </div>
        <div className="c-w">
          <ProjectStarterWizard />
        </div>
      </section>

      {/* ============ 04 · WORK (case study carousel) ============ */}
      <section className="c-sec" id="ch-work">
        <CaseStudyCarousel />
      </section>

      {/* ============ 05 · JOURNAL (illustrated blog cards) ============ */}
      <BlogCardGrid />

      {/* ============ 05.5 · CTA ============ */}
      <WaveCTA />
    </>
  );
}
