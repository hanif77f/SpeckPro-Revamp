import ChapterRail from "../../components/layout/ChapterRail";
import AnimVariant from "../../components/ui/AnimVariant";
import PageHeroSub from "../../components/ui/PageHeroSub";
import SectionHead from "../../components/ui/SectionHead";
import HairlineList from "../../components/ui/HairlineList";
import ListRow from "../../components/ui/ListRow";

export const metadata = {
  title: {
    absolute: "Our Portfolio & Client Projects | SpeckPro Digital",
  },
  description:
    "See websites, mobile apps, and custom software SpeckPro Digital has delivered for clients across e-commerce, publishing, and other industries.",
      keywords: [
    "SpeckPro portfolio",
    "software development case studies",
    "client projects",
    "e-commerce development examples",
    "mobile app portfolio",
  ],
  alternates: {
    canonical: "/portfolio",
  },
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-featured", label: "Featured" },
  { id: "ch-more", label: "More Work" },
  { id: "ch-contact", label: "Contact" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* <AnimVariant name="anim-wipe-r" /> */}
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="portfolio"
        crumbLabel="Portfolio"
        kicker="Selected Work"
        title="Products we've helped build"
        lead="A cross-section of the platforms we've shipped — spanning e-commerce, publishing, sports, education, and public-sector work."
      />

      {/* ============ FEATURED ============ */}
      <section className="c-sec" id="ch-featured">
        <div className="c-w">
          <SectionHead kicker="Featured" title="Two builds we're proud of" />
          <HairlineList>
            <ListRow
              tag="E-Commerce"
              title="Kasabeeston"
              description="A complete e-commerce suite — website, Android app, and iOS app built as one connected shopping experience."
              externalHref="https://kasabeeston.com/"
            />
            <ListRow
              tag="Publishing"
              title="Entertainment Couch"
              description="A content publishing platform for entertainment, technology, fashion, and lifestyle news."
              externalHref="https://entertainmentcouch.com/"
            />
          </HairlineList>
        </div>
      </section>

      {/* ============ MORE WORK ============ */}
      <section className="c-sec" id="ch-more" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <SectionHead kicker="More Work" title="Sports, education, and NGO platforms" />
          <HairlineList>
 
  <ListRow 
    tag="Mobile App Development" 
    title="Unit Converter App" 
    externalHref="https://apps.apple.com/nz/app/unit-converter-app/id1640879755" 
  />

  <ListRow 
    tag="Mobile App Development" 
    title="WiFi Analyzer" 
    externalHref="https://play.google.com/store/apps/details?id=com.wifi.optimizer.internet.app.analyzer.tool.android.odl" 
  />

  <ListRow 
    tag="Web Development" 
    title="Kasookoo" 
    externalHref="https://www.kasookoo.com/" 
  />

  <ListRow 
    tag="Mobile App Development" 
    title="Permit Hub" 
    externalHref="https://play.google.com/store/apps/details?id=com.permithubpermissionmanager.app.android.googleplay" 
  />

  <ListRow 
    tag="Mobile App Development" 
    title="Blood Pressure & Sugar Tracker" 
    externalHref="https://play.google.com/store/apps/details?id=com.sugur.blood.playstore" 
  />

  <ListRow 
    tag="Mobile App Development" 
    title="FamiGuard" 
    externalHref="https://play.google.com/store/apps/details?id=com.familyguard.parent.app.android.googleplay" 
  />

  <ListRow 
    tag="Publishing" 
    title="Amazon Books (Cyan Publication)" 
    externalHref="https://www.amazon.com/stores/author/B08SWMBKPW" 
  />

  <ListRow 
    tag="Content / Media" 
    title="Little Good Deeds Kids" 
    externalHref="https://www.youtube.com/@LittleGoodDeedsKids" 
  />

  <ListRow 
    tag="Mobile App" 
    title="WiFi Analyzer" 
    externalHref="https://play.google.com/store/apps/details?id=com.wifi.optimizer.internet.app.analyzer.tool.android.odl" 
  />

  <ListRow 
    tag="Web" 
    title="The Stray Media" 
    externalHref="https://straymediaco.com/" 
  />



</HairlineList>
        </div>
      </section>
    </>
  );
}
