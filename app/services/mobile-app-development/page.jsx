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
    absolute: "Mobile App Development | SpeckPro Digital",
  },
  description:
    "High-performing iOS and Android app development from SpeckPro Digital, built for business, social, health, and on-demand use cases.",
      keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "cross-platform app development",
    "custom mobile app development company",
  ],
  alternates: {
    canonical: "/services/mobile-app-development",
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
  { title: "Business & On-Demand Apps", text: "Purpose-built for real workflows, not templates." },
  { title: "Hardware Integration", text: "Secure use of mic, GPS, and camera where it matters." },
  { title: "iOS & Android Native", text: "Built natively for each platform's strengths." },
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <AnimVariant name="anim-tilt" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="mobile-app-development"
        crumbLabel="Mobile App Development"
        kicker="Mobile App Development"
        title="High-performing, scalable, feature-rich mobile apps"
        lead="We build secure, easy-to-use mobile apps for iOS and Android across business, social, health, and on-demand categories — engineered to perform reliably at scale, not just in the demo."
        pills={heroPills}
      />

      <section className="c-sec" id="ch-stack">
        <div className="c-w">
          <ApproachSection
            kicker="Built To Perform"
            title="Secure, scalable apps across every category"
            description="Our mobile team ships high-performing, feature-rich apps that are secure and easy to use — from business and finance tools to social, health, and games. Every build is tested across real devices before it ever reaches an app store."
            checklist={[
              { tag: "01", title: "Business & finance apps" },
              { tag: "02", title: "Social & on-demand apps" },
              { tag: "03", title: "Health & wellness apps" },
              { tag: "04", title: "Games & entertainment apps" },
            ]}
            sideKicker="App Types We Build"
            sideItems={[
              { label: "Location-Based Apps", value: "GPS-aware" },
              { label: "Android Instant Apps", value: "No install" },
              { label: "Progressive Web Apps", value: "Installable web" },
              { label: "Social Media Apps", value: "Community-driven" },
            ]}
          />
        </div>
      </section>

      <section className="c-sec" id="ch-process" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="How We Work" title="From concept to a store-ready release" />
          <HairlineList>
            <ListRow
              tag="01 · Design"
              title="Map the app around the user, not the feature list"
              description="We design the flows your users will actually follow, on real devices, from day one."
              showArrow={false}
            />
            <ListRow
              tag="02 · Build"
              title="Native performance, secure by default"
              description="Clean, native builds for iOS and Android, with hardware access scoped to exactly what's needed."
              showArrow={false}
            />
            <ListRow
              tag="03 · Test & Launch"
              title="Real-device QA before submission"
              description="We test across device types and OS versions, then manage the store submission end to end."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      <ExploreMore
        title="Pair your app with the rest of our services"
        links={[
          { label: "UI/UX Design", href: "/services/uiux-design" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "IoT Solutions", href: "/services/iot-solutions" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
        ]}
      />
    </>
  );
}
