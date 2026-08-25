"use client";

import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function HeroSearch() {
  return (
    <Reveal as="div" className="c-find" index={3}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.hash = "ch-estimate";
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4.3-4.3" />
        </svg>
        <label className="vh" htmlFor="qc">
          What are you building?
        </label>
        <input id="qc" type="text" placeholder="Try “mobile app for logistics” or “website redesign”…" />
        <button type="submit">
          Start a Project
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>

      <div className="c-chips">
        <span>Popular now</span>
        <Link className="chip" href="/services/web-development">
          Web Development
        </Link>
        <Link className="chip" href="/services/uiux-design">
          UI/UX Design
        </Link>
        <Link className="chip" href="/services/mobile-app-development">
          Mobile Apps
        </Link>
        <Link className="chip" href="/services/iot-solutions">
          IoT Solutions
        </Link>
      </div>
    </Reveal>
  );
}
