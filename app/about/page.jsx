import ChapterRail from "../../components/layout/ChapterRail";
import AnimVariant from "../../components/ui/AnimVariant";
import PageHeroSub from "../../components/ui/PageHeroSub";
import SectionHead from "../../components/ui/SectionHead";
import HairlineList from "../../components/ui/HairlineList";
import ListRow from "../../components/ui/ListRow";
import Reveal from "../../components/ui/Reveal";

export const metadata = {
  title: {
    absolute: "About Us – Custom Software Development Company | SpeckPro Digital",
  },
  description:
    "SpeckPro Digital delivers websites, mobile apps, AI solutions, and custom software development for clients worldwide, from offices in Pakistan and the UK.",
      keywords: [
    "custom software development company",
    "about SpeckPro Digital",
    "software agency Pakistan UK",
  ],
  alternates: {
    canonical: "/about",
  },
};
const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-mission", label: "Mission" },
  { id: "ch-do", label: "What We Do" },
  { id: "ch-contact", label: "Contact" },
];

const heroPills = [
  {
    title: "User Experience",
    text: "Designing, crafting, and prototyping digital solutions for the end user.",
  },
  {
    title: "Exclusive Support",
    text: "Professional IT support services that cater to real customer needs.",
  },
  {
    title: "Innovative",
    text: "Bringing innovation by leveraging modern tools and technologies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AnimVariant name="anim-scale" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="about"
        crumbLabel="About"
        kicker="About SpeckPro"
        title="Delivering complete, IT-powered solutions — engineered around your business"
        lead="SpeckPro is a global IT solutions company specializing in customized ERP systems, mobile app development, web design, SEO, digital marketing, UI/UX design, and IoT-powered business applications. We design on-time, in-budget, responsive, scalable, and marketable solutions tailored to your business needs."
        pills={heroPills}
      />

      {/* ============ MISSION ============ */}
      <section className="c-sec" id="ch-mission">
        <div className="c-w">
          <div className="c-h">
            <Reveal as="span" className="c-cap">
              Our Mission
            </Reveal>
            <Reveal as="h2" index={1}>
              Transforming your ideas into reality —{" "}
              <span style={{ color: "var(--ct)" }}>making IT easier</span>
            </Reveal>
            <Reveal as="p" index={2}>
              We provide clear, simple, straight-to-the-point solutions to businesses worldwide —
              replacing outdated legacy systems with technology built to thrive in a
              customer-centric, digital world.
            </Reveal>
          </div>

          <HairlineList>
            <ListRow
              tag="Enterprise"
              title="Enterprise Resource Planning (ERP) Systems"
              description="Customized ERP systems that give you greater control over HR, accounts, procurement, and inventory management."
              showArrow={false}
            />
            <ListRow
              tag="Design"
              title="Digital Product Development & UI/UX Design"
              description="UX wireframing, prototyping, and user testing across logistics, healthcare, education, finance, and e-commerce."
              showArrow={false}
            />
            <ListRow
              tag="Engineering"
              title="Web & Mobile App Development and Digital Marketing"
              description="Responsive apps for Android, iOS, and Windows — backed by SEO, SEM, and social media marketing that grow your reach."
              showArrow={false}
            />
          </HairlineList>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="c-sec" id="ch-do" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead
            kicker="What We Do"
            title="Full-spectrum IT services, under one roof"
            lead="From first wireframe to production support, our teams cover every layer of your digital product."
          />
          <HairlineList>
            <ListRow
              tag="01"
              title="Web Application Development"
              description="Custom web applications, web portals, and responsive e-commerce solutions."
              href="/services/web-development"
            />
            <ListRow
              tag="02"
              title="Mobile Application Development"
              description="Android, iPhone, and Windows apps from a professional, expert team."
              href="/services/mobile-app-development"
            />
            <ListRow
              tag="03"
              title="Digital Transformation"
              description="Scalable ERP-powered solutions for HR, accounts, procurement, and inventory."
              href="/services/digital-transformation"
            />
            <ListRow
              tag="04"
              title="Digital Marketing"
              description="SEO, SEM, social, email, video marketing, and PPC ads that build your presence."
              href="/services/digital-marketing"
            />
            <ListRow
              tag="05"
              title="UI/UX Design"
              description="Wireframing, prototyping, and user testing across every sector."
              href="/services/uiux-design"
            />
            <ListRow
              tag="06"
              title="IoT Solutions"
              description="IoT-powered business applications with machine learning and cloud integration."
              href="/services/iot-solutions"
            />
          </HairlineList>
        </div>
      </section>
    </>
  );
}
