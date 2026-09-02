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
    absolute: "Web Design & Development Services | SpeckPro Digital",
  },
  description:
    "Custom web application development, WordPress and Shopify e-commerce, and responsive website design built to convert visitors into customers.",
      keywords: [
    "web design and development services",
    "custom website development",
    "WordPress development",
    "Shopify e-commerce development",
    "responsive website design",
    "custom web application development",
  ],
  alternates: {
    canonical: "/services/web-development",
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
  { title: "Experience Design Innovation", text: "Design better websites for your product." },
  { title: "Enhanced Focus with Automation", text: "Reduce redundancies and time to market." },
  { title: "Reliable Systems Architecture", text: "Full-stack custom website development." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <AnimVariant name="anim-enter-left" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="web-development"
        crumbLabel="Web Development"
        kicker="Web Design & Development"
        title="Digital branding, website design, and development that performs"
        lead="Timely, scalable, and customized website design and development that puts your best web presence forward. We map the full user journey — not just the site — so every touchpoint stays user-centric and brand-focused, optimized for desktop and mobile alike."
        pills={heroPills}
      />

      <section className="c-sec" id="ch-stack">
        <div className="c-w">
          <ApproachSection
            kicker="Our Approach"
            title="Built around your customers, not just your product"
            description="We deliver timely, scalable, and customized website design and development — creating the complete digital experience for your customers, from first impression to final conversion. Our team is skilled in effective website interfaces, WordPress development with WooCommerce, and e-commerce website development."
            checklist={[
              { tag: "01", title: "WordPress development experts" },
              { tag: "02", title: "Shopify development services" },
              { tag: "03", title: "Custom web applications" },
              { tag: "04", title: "E-commerce development" },
            ]}
            sideKicker="Core Technology Stack"
            sideItems={[
              { label: "React", value: 92 },
              { label: "Node.js", value: 97 },
              { label: "Angular", value: 84 },
              { label: "jQuery", value: "Supporting library" },
            ]}
          />
        </div>
      </section>

      <section className="c-sec" id="ch-process" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="How We Work" title="From research to a live, revenue-ready site" />
          <HairlineList>
            <ListRow
              tag="01 · Research"
              title="Study your customers & market"
              description="We study your customers, competition, and market before a single pixel is designed."
              showArrow={false}
            />
            <ListRow
              tag="02 · Design"
              title="Map the user journey"
              description="Clickable mockups mapping the entire user journey, from click to conversion."
              showArrow={false}
            />
            <ListRow
              tag="03 · Build"
              title="Ship a site that ranks and converts"
              description="Responsive, optimized, reliable, and scalable — clean on the front end, robust on the back end."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      <ExploreMore
        title="Pair your website with the rest of our services"
        links={[
          { label: "UI/UX Design", href: "/services/uiux-design" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },
          { label: "Digital Transformation", href: "/services/digital-transformation" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
          { label: "AI & Automation", href: "/services/ai-automation" },
        ]}
      />
    </>
  );
}
