"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ChapterRail from "../layout/ChapterRail";
import PageHeroSub from "../ui/PageHeroSub";

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-featured", label: "Featured" },
  { id: "ch-more", label: "All Work" },
  { id: "ch-contact", label: "Contact" },
];

// The 2 flagship projects shown big, above the filterable grid.
const FEATURED = [
  {
    tag: "Mobile App Development",
    name: "Permit Hub",
    desc: "A smart permission manager app that helps users review and control app permissions with clarity, security, and full transparency.",
    href: "https://play.google.com/store/apps/details?id=com.permithubpermissionmanager.app.android.googleplay",
    mark: "/images/logos/1.png",
    sub: "Google Play",
    cta: "View on Google Play",
  },
  {
    tag: "Content / Media",
    name: "Little Good Deeds Kids",
    desc: "A 3D animated kids\u2019 channel teaching kindness, honesty, and good habits through colorful stories and everyday moral lessons.",
    href: "https://www.youtube.com/@LittleGoodDeedsKids",
    mark: "/images/logos/2.png",
    sub: "YouTube",
    cta: "Watch on YouTube",
  },
];

// Everything else, filterable by category. AppMatch AI is deliberately
// first — that ordering is the point of this array's sequence, since the
// grid renders in array order.
const PROJECTS = [
  {
    cat: "Mobile App Development",
    name: "AppMatch AI: App Finder",
    desc: "An AI-powered app finder that helps users discover and compare Android apps matched to their exact needs and preferences.",
    href: "https://play.google.com/store/search?q=AppMatch%20AI%20App%20Finder&c=apps",
    mark: "/images/logos/12.png",
    cta: "View on Google Play",
  },
  {
    cat: "E-Commerce",
    name: "Kasabeeston",
    desc: "A grocery and household essentials e-commerce store \u2014 website, Android app, and iOS app built as one connected shopping experience.",
    href: "https://kasabeeston.com/",
    mark: "/images/logos/3.png",
    cta: "Visit the site",
  },
  {
    cat: "Publishing",
    name: "Entertainment Couch",
    desc: "A fully automated AI content publisher that verifies and publishes engaging entertainment stories to the platform around the clock.",
    href: "https://entertainmentcouch.com/",
    mark: "/images/logos/4.png",
    cta: "Visit the site",
  },
  {
    cat: "Web Development",
    name: "The Stray Media Website",
    desc: "A fully responsive WordPress website built for a video production and digital media studio, ready to scale their online presence.",
    href: "https://straymediaco.com/",
    mark: "/images/logos/5.png",
    cta: "Visit the site",
  },
  {
    cat: "Mobile App Development",
    name: "Unit Converter App",
    desc: "A fast, user-friendly unit converter for iOS and Android \u2014 15+ categories, hundreds of units, and live currency exchange rates.",
    href: "https://apps.apple.com/nz/app/unit-converter-app/id1640879755",
    mark: "/images/logos/6.png",
    cta: "View on App Store",
  },
  {
    cat: "Mobile App Development",
    name: "WiFi Analyzer",
    desc: "An all-in-one WiFi analysis app that tests, diagnoses, and improves wireless networks using practical tools and AI-powered guidance.",
    href: "https://play.google.com/store/apps/details?id=com.wifi.optimizer.internet.app.analyzer.tool.android.odl",
    mark: "/images/logos/7.png",
    cta: "View on Google Play",
  },
  {
    cat: "Web Development",
    name: "Kasookoo",
    desc: "A modern ReactJS website for Kasookoo, showcasing their cloud communication and customer engagement tools built for the digital era.",
    href: "https://www.kasookoo.com/",
    mark: "/images/logos/8.png",
    cta: "Visit the site",
  },
  {
    cat: "Mobile App Development",
    name: "Blood Pressure & Sugar Tracker",
    desc: "A comprehensive mobile app that helps users track and monitor their blood pressure and blood sugar levels with ease.",
    href: "https://play.google.com/store/apps/details?id=com.sugur.blood.playstore",
    mark: "/images/logos/9.png",
    cta: "View on Google Play",
  },
  {
    cat: "Mobile App Development",
    name: "FamiGuard",
    desc: "A parental control app that helps parents guide kids\u2019 digital habits \u2014 tracking location, managing apps, and remote device locking.",
    href: "https://play.google.com/store/apps/details?id=com.familyguard.parent.app.android.googleplay",
    mark: "/images/logos/10.png",
    cta: "View on Google Play",
  },
  {
    cat: "Publishing",
    name: "Amazon Books (Cyan Publication)",
    desc: "A Kindle publishing catalog for Cyan Publishing, delivering thoughtfully crafted books with creative visual aids for young readers.",
    href: "https://www.amazon.com/stores/author/B08SWMBKPW",
    mark: "/images/logos/11.png",
    cta: "View on Amazon",
  },
  {
    cat: "Mobile App Development",
    name: "Castyra \u2013 Cast to TV & Remote",
    desc: "A universal TV remote and screen-casting app connecting to Fire TV, Android TV, and Roku, with gesture-based navigation and control.",
    href: "https://play.google.com/store/search?q=Castyra%20Cast%20to%20TV%20Remote&c=apps",
    mark: "/images/logos/13.png",
    cta: "View on Google Play",
  },
];

const CATEGORIES = ["all", "Web Development", "Mobile App Development", "E-Commerce", "Publishing"];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function PortfolioClient() {
  const [category, setCategory] = useState("all");
  const filtered = useMemo(
    () => (category === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === category)),
    [category]
  );

  return (
    <>
      <ChapterRail items={railItems} />

      <PageHeroSub
        ringKey="portfolio"
        crumbLabel="Portfolio"
        kicker="Selected Work"
        title="Products we've helped build"
        lead="A cross-section of the platforms we've shipped — spanning e-commerce, mobile apps, publishing, and content platforms."
      />

      {/* ============ FEATURED ============ */}
      <section className="c-sec" id="ch-featured">
        <div className="c-w">
          <div className="c-h">
            <span className="c-cap">Featured</span>
            <h2>Two builds we're proud of</h2>
            <p>The two projects that best show the full range of what SpeckPro delivers end to end.</p>
          </div>

          <div className="c-feat__grid">
            {FEATURED.map((p) => (
              <a key={p.name} className="c-feat__card" href={p.href} target="_blank" rel="noopener noreferrer">
                <span className="c-feat__tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="c-feat__logo">
                  <span className="c-feat__mark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.mark} alt={`${p.name} logo`} />
                  </span>
                  <div>
                    <b style={{ display: "block", fontWeight: 700 }}>{p.name}</b>
                    <span style={{ fontSize: ".76rem", color: "var(--ci3)" }}>{p.sub}</span>
                  </div>
                </div>
                <span className="c-feat__btn">
                  {p.cta}
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ALL WORK ============ */}
      <section className="c-sec" id="ch-more" style={{ background: "var(--cm)" }}>
        <div className="c-w">
          <div className="c-h">
            <span className="c-cap">More Work</span>
            <h2>Every project, browsable</h2>
            <p>From mobile apps and e-commerce to publishing and content platforms.</p>
          </div>

          <div className="c-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`c-filter${category === cat ? " active" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--ci3)", padding: "40px 0" }}>
              No projects in this category yet.
            </p>
          ) : (
            <div className="c-pf__grid">
              {filtered.map((p) => (
                <a key={p.name} className="c-pf__card" href={p.href} target="_blank" rel="noopener noreferrer">
                  <span className="c-pf__tag">{p.cat}</span>
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                  <div className="c-pf__logo">
                    <span className="c-pf__mark">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.mark} alt={`${p.name} logo`} />
                    </span>
                  </div>
                  <span className="c-pf__btn">
                    {p.cta}
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
