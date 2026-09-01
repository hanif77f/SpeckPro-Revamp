import ChapterRail from "../../components/layout/ChapterRail";
import AnimVariant from "../../components/ui/AnimVariant";
import PageHeroSub from "../../components/ui/PageHeroSub";
import ContactSection from "../../components/layout/ContactSection";
import { siteConfig } from "../../lib/siteConfig";

export const metadata = {
  title: "Contact Us | SpeckPro Digital",
  description:
    "Get in touch with SpeckPro Digital — offices in Pakistan and the UK. Describe your project and our team will reach out.",
      keywords: [
    "contact SpeckPro Digital",
    "software development quote",
    "hire web developers",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-contact", label: "Contact" },
];

export default function ContactPage() {
  const heroPills = [
    { title: "Call Us", text: siteConfig.contact.phonePk, href: `tel:${siteConfig.contact.phonePkTel}` },
    { title: "Email Us", text: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { title: "Visit Us", text: "Islamabad & Bolton offices", href: "#ch-contact" },
  ];

  return (
    <>
      <AnimVariant name="anim-zoom" />
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="contact"
        crumbLabel="Contact"
        kicker="Hire Us"
        title="Hey! Get in touch."
        lead="Describe your project requirements — our expert team will discuss the ways we can collaborate with you."
        pills={heroPills}
      />

      <ContactSection
        heading="Describe your project — let's talk collaboration."
        lead="Describe your project requirements — our expert team will discuss the ways we can collaborate with you."
        showMap
      />
    </>
  );
}
