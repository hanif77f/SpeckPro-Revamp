import ChapterRail from "../../../components/layout/ChapterRail";
import AnimVariant from "../../../components/ui/AnimVariant";
import PageHeroSub from "../../../components/ui/PageHeroSub";
import HairlineList from "../../../components/ui/HairlineList";
import ListRow from "../../../components/ui/ListRow";
import SectionHead from "../../../components/ui/SectionHead";
import ApproachSection from "../../../components/services/ApproachSection";
import ExploreMore from "../../../components/services/ExploreMore";

export const metadata = {
  title: {
    absolute: "UI/UX Design Services | SpeckPro Digital",
  },
  description:
    "User-centric UI/UX design from SpeckPro Digital — wireframing, prototyping, and user testing that turns ideas into interfaces customers love.",
      keywords: [
    "UI/UX design services",
    "user interface design",
    "user experience design",
    "wireframes and prototypes",
    "product design agency",
  ],
  alternates: {
    canonical: "/services/uiux-design",
  },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-stack", label: "Approach" },
  { id: "ch-process", label: "Process" },
  { id: "ch-more", label: "More" },
  { id: "ch-contact", label: "Contact" },
];

const heroPills = [
  { title: "User Research Insights", text: "Create designs that your customers want." },
  { title: "Design Sprint Testing", text: "Explore better and more effective options." },
  { title: "UX Consulting", text: "We help you reach your ideal product design." },
];

export default function UiuxDesignPage() {
  return (
    <>
      <AnimVariant name="anim-enter-right" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="uiux-design"
        crumbLabel="UI/UX Design"
        kicker="UI/UX Design"
        title="Creating user-centric UI/UX design solutions your customers actually want"
        lead="User experience is a big part of what we do. Our dedicated team of UX/UI experts crafts intuitive, easy-to-understand designs — from wireframes and clickable prototypes to fully tested interfaces — that fit your customers' needs and exceed end-user expectations."
        pills={heroPills}
      />

      <section className="c-sec" id="ch-stack">
        <div className="c-w">
          <ApproachSection
            kicker="Creating User-Centric Design"
            title="Simple, impactful, and user-friendly by design"
            description="We craft intuitive UX/UI designs with a dedicated team of experts, building products that fit your customers' needs and exceed the end user's expectations — backed by expert-crafted wireframes and prototypes, following proven UI and UX principles and global quality standards."
            checklist={[
              { tag: "01", title: "Mobile app UX/UI design services" },
              { tag: "02", title: "UI and UX consulting" },
              { tag: "03", title: "UX wireframing and prototyping" },
              { tag: "04", title: "UX/UI conceptualization & testing" },
            ]}
            sideKicker="Design Disciplines"
            sideItems={[
              { label: "Mobile App UI/UX Design", value: "Native & hybrid" },
              { label: "Web UI/UX Design Services", value: "Responsive" },
              { label: "User Experience Design", value: "Research-led" },
              { label: "User Interface Design", value: "Visual systems" },
            ]}
          />
        </div>
      </section>

      <section className="c-sec" id="ch-process" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="How We Work" title="A user-centric process, start to launch" />
          <HairlineList>
            <ListRow
              tag="01 · Discover"
              title="Goals, workflows & information architecture"
              description="We start with your business objectives and a proof of concept that aligns with sound IA."
              showArrow={false}
            />
            <ListRow
              tag="02 · Design"
              title="Personas, mockups & layouts"
              description="Design personas your end users would actually want, staying on budget and schedule."
              showArrow={false}
            />
            <ListRow
              tag="03 · Deliver"
              title="Clickable prototype to launch"
              description="Our job isn't done until your idea becomes a working prototype and launches in the market."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      <ExploreMore
        title="Pair design with the rest of our services"
        links={[
          { label: "Web Development", href: "/services/web-development" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },
          { label: "Digital Transformation", href: "/services/digital-transformation" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
          { label: "AI & Automation", href: "/services/ai-automation" },
        ]}
      />
    </>
  );
}
