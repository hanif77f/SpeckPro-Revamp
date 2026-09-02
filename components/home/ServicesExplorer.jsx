"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const servicesData = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Unique, skillfully designed, responsive websites aligned with your business needs — custom web applications, WordPress and Shopify builds, and full e-commerce development.",
  },
  {
    title: "UI/UX Design",
    href: "/services/uiux-design",
    description:
      "Intuitive UX/UI designs from a dedicated team of experts — wireframes, clickable prototypes, and fully tested interfaces built around your customers.",
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "High-performing, scalable, feature-rich mobile apps for iOS and Android, secure and easy to use across business, social, health, and on-demand categories.",
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    description:
      "AI-powered workflow automation and intelligent assistants — consultation-driven, scalable, and cost-effective, backed by rapid proof of concept.",
  },
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description:
      "Scalable ERP systems covering HR, finance, CRM, and inventory — configured around your business, not the other way around.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "SEO, SEM, PPC, social, content, and email marketing built to maximize reach, drive engagement, and secure a healthy return on investment.",
  },
];

export default function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const current = servicesData[active];

  return (
    <div className="c-x">
      <Reveal as="div" className="c-x__l">
        {servicesData.map((s, i) => (
          <button
            key={s.title}
            className={i === active ? "active" : undefined}
            onClick={() => setActive(i)}
          >
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <span className="t">{s.title}</span>
          </button>
        ))}
      </Reveal>

      <div className="c-x__d">
        <h3>{current.title}</h3>
        <p>{current.description}</p>
        <Link className="go" href="/contact">
          Start this project
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
