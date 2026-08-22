"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import ListRow from "../ui/ListRow";
import { siteConfig } from "../../lib/siteConfig";

const jobs = [
  {
    office: "pk",
    title: "Front End Developer",
    description:
      "Strong knowledge of front-end development and the JavaScript ecosystem, with the judgment to choose the right tool for the job.",
  },
  {
    office: "pk",
    title: "UI / UX Designer",
    description:
      "Design logos, brochures, and promotional content across Photoshop, Illustrator, Quark, and Pagemaker.",
  },
  {
    office: "uk",
    title: "Business Development Officer",
    description:
      "A dynamic, results-driven role identifying new business opportunities and building client relationships across our website, mobile app, and social media marketing services.",
  },
  {
    office: "uk",
    title: "Digital Marketing Internship",
    description:
      "Hands-on experience crafting digital marketing campaigns, optimizing SEO, managing social channels, and supporting content creation.",
  },
  {
    office: "pk",
    title: "Web Development Internship",
    description:
      "A red-carpet welcome for passionate fresh graduates ready to gain hands-on experience alongside a creative, collaborative team.",
  },
  {
    office: "pk",
    title: "Content Writer Internship",
    description:
      "Help create print and video content for our websites and blogs — looking for talented fresh graduates to enrich our content.",
  },
  {
    office: "pk",
    title: "Mobile App Developer",
    description: "Develop mobile apps using the React Native framework for both iOS and Android.",
  },
];

const officeLabel = { pk: "Pakistan Office", uk: "UK Office" };

export default function JobsFilter() {
  const [filter, setFilter] = useState("all");
  const visibleJobs = filter === "all" ? jobs : jobs.filter((j) => j.office === filter);

  return (
    <>
      <div className="c-tog" role="group" aria-label="Filter by office" style={{ marginBottom: 6 }}>
        <button aria-pressed={filter === "all"} onClick={() => setFilter("all")}>
          All Offices
        </button>
        <button aria-pressed={filter === "pk"} onClick={() => setFilter("pk")}>
          Pakistan
        </button>
        <button aria-pressed={filter === "uk"} onClick={() => setFilter("uk")}>
          UK
        </button>
      </div>

      <Reveal as="div" className="c-list" index={3}>
        {visibleJobs.map((job) => (
          <ListRow
            key={job.title}
            tag={officeLabel[job.office]}
            title={job.title}
            description={job.description}
            mailHref={`mailto:${siteConfig.contact.email}`}
          />
        ))}
      </Reveal>
    </>
  );
}
