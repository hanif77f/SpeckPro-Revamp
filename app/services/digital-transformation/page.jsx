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
    absolute: "Digital Transformation & ERP Systems | SpeckPro Digital",
  },
  description:
    "Scalable ERP-powered digital transformation from SpeckPro Digital — HR, finance, CRM, and inventory systems configured around your business.",
      keywords: [
    "digital transformation services",
    "ERP systems",
    "CRM development",
    "business process automation",
    "enterprise software solutions",
  ],
  alternates: {
    canonical: "/services/digital-transformation",
  },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-stack", label: "Capabilities" },
  { id: "ch-modules", label: "Modules" },
  { id: "ch-more", label: "More" },
  { id: "ch-contact", label: "Contact" },
];

const heroPills = [
  { title: "HR & Finance", text: "Payroll, accounts, and finance in one system." },
  { title: "Inventory & Procurement", text: "Full visibility over stock and ordering." },
  { title: "CRM Integration", text: "Customer data connected to the rest of the business." },
];

export default function DigitalTransformationPage() {
  return (
    <>
      <AnimVariant name="anim-drop" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="digital-transformation"
        crumbLabel="Digital Transformation"
        kicker="Digital Transformation"
        title="Scalable ERP systems, configured around your business"
        lead="We build enterprise resource planning systems that give you greater control over HR, accounts, procurement, and inventory management — replacing legacy processes with one connected, scalable system."
        pills={heroPills}
      />

      <section className="c-sec" id="ch-stack">
        <div className="c-w">
          <ApproachSection
            kicker="Configured, Not Off-The-Shelf"
            title="One system, built around how you actually work"
            description="Rather than forcing your business into a generic template, we configure ERP modules around your existing workflows — HR, accounts, procurement, and inventory all connected, giving your team one source of truth instead of five disconnected spreadsheets."
            checklist={[
              { tag: "01", title: "HR & payroll management" },
              { tag: "02", title: "Accounts & finance" },
              { tag: "03", title: "CRM & customer data" },
              { tag: "04", title: "Inventory & procurement" },
            ]}
            sideKicker="Where We're Strongest"
            sideItems={[
              { label: "BI & Analytics", value: 97 },
              { label: "Enterprise Apps", value: 92 },
              { label: "App Modernization", value: 87 },
              { label: "Tech Consulting", value: 84 },
            ]}
          />
        </div>
      </section>

      <section className="c-sec" id="ch-modules" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="Core Modules" title="The four systems most businesses start with" />
          <HairlineList>
            <ListRow
              tag="Module"
              title="Accounts Information System"
              description="A complete financial picture — invoicing, ledgers, and reporting in one place."
              showArrow={false}
            />
            <ListRow
              tag="Module"
              title="Human Resource Management"
              description="Payroll, attendance, and employee records without the spreadsheet sprawl."
              showArrow={false}
            />
            <ListRow
              tag="Module"
              title="Customer Relationship Management"
              description="Every customer interaction tracked and connected to the rest of your data."
              showArrow={false}
            />
            <ListRow
              tag="Module"
              title="Inventory & Procurement"
              description="Real-time stock visibility, tied directly to purchasing and vendor management."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      <ExploreMore
        title="Pair transformation with the rest of our services"
        links={[
          { label: "AI & Automation", href: "/services/ai-automation" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
        ]}
      />
    </>
  );
}
