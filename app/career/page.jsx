import ChapterRail from "../../components/layout/ChapterRail";
import AnimVariant from "../../components/ui/AnimVariant";
import PageHeroSub from "../../components/ui/PageHeroSub";
import SectionHead from "../../components/ui/SectionHead";
import Reveal from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import JobsFilter from "../../components/career/JobsFilter";
import { siteConfig } from "../../lib/siteConfig";

export const metadata = {
  title: "Career",
  description:
    "Open roles at SpeckPro Digital across our Pakistan and UK offices — engineering, design, marketing, and internships.",
  alternates: { canonical: "/career" },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-roles", label: "Open Roles" },
  { id: "ch-culture", label: "Culture" },
  { id: "ch-contact", label: "Contact" },
];

const heroPills = [
  { title: "Growth & Self Development", text: "Grow both personally and professionally." },
  { title: "Experienced & Friendly Team", text: "Positive interactions within the organization, every day." },
  { title: "Bright Corporate Culture", text: "A purpose-driven culture of learning and wellness." },
];

export default function CareerPage() {
  return (
    <>
      <AnimVariant name="anim-pop" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="career"
        crumbLabel="Career"
        kicker="Careers at SpeckPro"
        title="Grow personally and professionally, on real work"
        lead="We're building a team across Islamabad and Bolton — join a group that values growth, friendly collaboration, and a genuinely bright corporate culture."
        pills={heroPills}
      />

      {/* ============ OPEN ROLES ============ */}
      <section className="c-sec" id="ch-roles">
        <div className="c-w">
          <SectionHead kicker="Open Roles" title="Seven roles, across two offices" />
          <JobsFilter />
        </div>
      </section>

      {/* ============ CULTURE ============ */}
      <section className="c-sec" id="ch-culture" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead
            kicker="Don't See Your Role?"
            title="Send us your resume anyway"
            lead="We're always glad to hear from good people, even outside a listed opening."
          />
          <Reveal index={3}>
            <Button href={`mailto:${siteConfig.contact.email}`} external>
              Email Your Resume
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
