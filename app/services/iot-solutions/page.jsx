import ChapterRail from "../../../components/layout/ChapterRail";
import AnimVariant from "../../../components/ui/AnimVariant";
import PageHeroSub from "../../../components/ui/PageHeroSub";
import HairlineList from "../../../components/ui/HairlineList";
import ListRow from "../../../components/ui/ListRow";
import SectionHead from "../../../components/ui/SectionHead";
import ApproachSection from "../../../components/services/ApproachSection";
import ExploreMore from "../../../components/services/ExploreMore";

export const metadata = {
  title: "IoT Solutions",
  description:
    "Customized IoT business applications and smart device solutions from SpeckPro Digital, backed by rapid proof of concept.",
  alternates: { canonical: "/services/iot-solutions" },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-stack", label: "Capabilities" },
  { id: "ch-process", label: "Process" },
  { id: "ch-more", label: "More" },
  { id: "ch-contact", label: "Contact" },
];

const heroPills = [
  { title: "Smart Device Integration", text: "Sensors, gateways, and connected devices in sync." },
  { title: "Real-Time Monitoring", text: "Live dashboards over device and system data." },
  { title: "Cloud & On-Premise", text: "Deploy the way that fits your infrastructure." },
];

export default function IotSolutionsPage() {
  return (
    <>
      <AnimVariant name="anim-wipe" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="iot-solutions"
        crumbLabel="IoT Solutions"
        kicker="IoT Solutions"
        title="Customized IoT business applications, built to scale"
        lead="We design and build IoT-powered business applications and smart devices — consultation-driven, cost-effective, and backed by a rapid proof of concept before you commit to full-scale development."
        pills={heroPills}
      />

      <section className="c-sec" id="ch-stack">
        <div className="c-w">
          <ApproachSection
            kicker="Consultation-Driven"
            title="From proof of concept to production IoT"
            description="Every engagement starts with consultation, not code — we validate the idea with a rapid proof of concept, then scale into a cost-effective, production-ready IoT application with real-time tracking and security built in from day one."
            checklist={[
              { tag: "01", title: "Sensor & gateway integration" },
              { tag: "02", title: "Real-time tracking dashboards" },
              { tag: "03", title: "Cloud and on-premise deployment" },
              { tag: "04", title: "Device-level security" },
            ]}
            sideKicker="Where We're Strongest"
            sideItems={[
              { label: "Control Services", value: 97 },
              { label: "Smart Apps", value: 92 },
              { label: "Device Software", value: 87 },
              { label: "Cloud Integration", value: 84 },
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
              description="We scope the devices, data flows, and integrations, then prove it out fast."
              showArrow={false}
            />
            <ListRow
              tag="02 · Build"
              title="Connect devices to a real dashboard"
              description="Sensors and gateways feed a live monitoring and tracking dashboard you actually use."
              showArrow={false}
            />
            <ListRow
              tag="03 · Secure & Maintain"
              title="Ongoing device and data security"
              description="We keep the system patched, monitored, and secure well past launch day."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      <ExploreMore
        title="Pair IoT with the rest of our services"
        links={[
          { label: "Digital Transformation", href: "/services/digital-transformation" },
          { label: "Mobile App Development", href: "/services/mobile-app-development" },
          { label: "Web Development", href: "/services/web-development" },
        ]}
      />
    </>
  );
}
