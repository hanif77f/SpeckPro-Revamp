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
    absolute: "Digital Marketing Services",
  },
  description:
    "SEO, PPC, social, content, and email marketing from SpeckPro Digital, planned as one strategy to maximize reach and return on investment.",
  alternates: {
    canonical: "/services/digital-marketing",
  },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-stack", label: "Capabilities" },
  { id: "ch-channels", label: "Channels" },
  { id: "ch-more", label: "More" },
  { id: "ch-contact", label: "Contact" },
];

const heroPills = [
  { title: "Search Marketing", text: "SEO and SEM that gets you found." },
  { title: "Paid & Social", text: "PPC and social campaigns tuned to convert." },
  { title: "Reporting & Analytics", text: "Clear visibility into what's actually working." },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <AnimVariant name="anim-skew" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="digital-marketing"
        crumbLabel="Digital Marketing"
        kicker="Digital Marketing"
        title="Marketing built to maximize reach and real return"
        lead="SEO, SEM, PPC, social, content, and email marketing working together, not in isolation — built to drive engagement and secure a healthy return on your investment."
        pills={heroPills}
      />

      <section className="c-sec" id="ch-stack">
        <div className="c-w">
          <ApproachSection
            kicker="Channels That Work Together"
            title="Every channel, one growth strategy"
            description="We don't run channels in isolation — SEO, PPC, social, content, and email are planned as one strategy so your budget compounds instead of competing with itself, backed by reporting that shows exactly what's driving results."
            checklist={[
              { tag: "01", title: "Search engine optimization" },
              { tag: "02", title: "Pay-per-click advertising" },
              { tag: "03", title: "Social media marketing" },
              { tag: "04", title: "Content & email marketing" },
            ]}
            sideKicker="Where We're Strongest"
            sideItems={[
              { label: "Reporting & Analytics", value: 97 },
              { label: "Search Marketing", value: 92 },
              { label: "PR", value: 87 },
              { label: "Growth Strategy", value: 84 },
            ]}
          />
        </div>
      </section>

      <section className="c-sec" id="ch-channels" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="Channels" title="Six channels, planned as one campaign" />
          <HairlineList>
            <ListRow
              tag="SEO"
              title="Search Engine Optimization"
              description="Technical, on-page, and content SEO to rank for the terms your customers search."
              showArrow={false}
            />
            <ListRow
              tag="PPC"
              title="Pay-Per-Click Advertising"
              description="Search and display ads managed for efficient spend and measurable return."
              showArrow={false}
            />
            <ListRow
              tag="Social"
              title="Social Media Marketing"
              description="Organic and paid social built around where your audience actually spends time."
              showArrow={false}
            />
            <ListRow
              tag="Content"
              title="Content Marketing"
              description="Content built to earn attention and support search performance long-term."
              showArrow={false}
            />
            <ListRow
              tag="Email"
              title="Email Marketing"
              description="Lifecycle and campaign email that keeps customers engaged after the first sale."
              showArrow={false}
            />
            <ListRow
              tag="PR"
              title="Public Relations"
              description="Building credibility and reach beyond what paid channels alone can do."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      <ExploreMore
        title="Pair marketing with the rest of our services"
        links={[
          { label: "Web Development", href: "/services/web-development" },
          { label: "UI/UX Design", href: "/services/uiux-design" },
          { label: "Digital Transformation", href: "/services/digital-transformation" },
        ]}
      />
    </>
  );
}
