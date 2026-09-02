import ChapterRail from "../../../components/layout/ChapterRail";
import PageHeroSub from "../../../components/ui/PageHeroSub";
import HairlineList from "../../../components/ui/HairlineList";
import ListRow from "../../../components/ui/ListRow";
import SectionHead from "../../../components/ui/SectionHead";
import ApproachSection from "../../../components/services/ApproachSection";
import ExploreMore from "../../../components/services/ExploreMore";

export const metadata = {
  title: "AI & Automation Solutions",
  description:
    "Custom AI automation and intelligent assistants from SpeckPro Digital, validated fast with a rapid proof of concept.",
  keywords: [
    "AI automation",
    "AI development company",
    "AI assistants",
    "workflow automation",
    "predictive analytics",
  ],
  alternates: {
    canonical: "/services/ai-automation",
  },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-stack", label: "Capabilities" },
  { id: "ch-process", label: "Process" },
  { id: "ch-more", label: "More" },
  { id: "ch-contact", label: "Contact" },
];

const heroPills = [
  { title: "Workflow Automation", text: "Repetitive processes handled without manual intervention." },
  { title: "AI Assistants & Chatbots", text: "Trained on your own processes and documentation." },
  { title: "Predictive Insights", text: "Forecasts and recommendations from your own data." },
];

export default function AiAutomationPage() {
  return (
    <>
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="ai-automation"
        crumbLabel="AI & Automation"
        kicker="AI & Automation"
        title="Custom AI automation, built to scale"
        lead="We design and build AI-powered automation and intelligent assistants — consultation-driven, cost-effective, and backed by a rapid proof of concept before you commit to full-scale development."
        pills={heroPills}
      />

      <section className="c-sec" id="ch-stack">
        <div className="c-w">
          <ApproachSection
            kicker="Consultation-Driven"
            title="From proof of concept to production AI"
            description="Every engagement starts with consultation, not code — we validate the idea with a rapid proof of concept, then scale into a cost-effective, production-ready AI system with real-time automation and security built in from day one."
            checklist={[
              { tag: "01", title: "Process mapping & automation design" },
              { tag: "02", title: "AI assistant & chatbot development" },
              { tag: "03", title: "Predictive analytics integration" },
              { tag: "04", title: "Data security & compliance" },
            ]}
            sideKicker="Where We're Strongest"
            sideItems={[
              { label: "Automation Workflows", value: 96 },
              { label: "AI Assistants", value: 91 },
              { label: "Predictive Models", value: 85 },
              { label: "System Integration", value: 88 },
            ]}
          />
        </div>
      </section>

      <section className="c-sec" id="ch-process" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="How We Work" title="Consult, build, then keep it secure" />
          <HairlineList>
            <ListRow
              tag="01 · Consult"
              title="Validate the idea before we build it"
              description="We scope the workflows, data, and integrations, then prove it out fast."
              showArrow={false}
            />
            <ListRow
              tag="02 · Build"
              title="Connect systems to real automation"
              description="Your data and workflows feed an AI system you actually use, not a demo."
              showArrow={false}
            />
            <ListRow
              tag="03 · Secure & Maintain"
              title="Ongoing model and data security"
              description="We keep the system patched, monitored, and secure well past launch day."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      <ExploreMore
        title="Pair AI with the rest of our services"
        links={[
          { label: "Digital Transformation", href: "/services/digital-transformation" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },
          { label: "Web Development", href: "/services/web-development" },
        ]}
      />
    </>
  );
}
