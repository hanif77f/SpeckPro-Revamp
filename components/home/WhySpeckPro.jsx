import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";
import { services } from "../../lib/nav";

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z" />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
  </svg>
);

export default function WhySpeckPro() {
  return (
    <section className="c-sec" id="ch-why">
      <div className="c-w">
        <SectionHead
          kicker="Why SpeckPro"
          title="Built for teams who can't afford to slow down"
          lead="Three things that shape every SpeckPro engagement, from kickoff to the years after launch."
        />

        <Reveal as="div" className="c-why__grid" index={3}>
          <svg
            className="c-why__line"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M200,50 L200,170 L600,170 L600,50" />
            <path d="M600,170 L1000,170 L1000,50" />
          </svg>

          <div className="c-why__card">
            <div className="c-why__ic">
              <GlobeIcon />
            </div>
            <h3>Global Presence, Local Delivery</h3>
            <p>
              Teams working out of Islamabad, Pakistan and UK — close enough to your
              timezone, wherever you&rsquo;re building from.
            </p>
          </div>

          <div className="c-why__card c-why__card--mid">
            <div className="c-why__mock">
              <div className="bar">
                <span />
                <span />
                <span />
              </div>
              <div className="body">
                {services.map((s) => (
                  <div className="row" key={s.href}>
                    <span className="dot" />
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
            <h3>One Team, Every Discipline</h3>
            <p>
              Web, mobile, design, ai, and marketing sit under one roof — one point of contact
              instead of five vendors.
            </p>
          </div>

          <div className="c-why__card">
            <div className="c-why__ic">
              <SupportIcon />
            </div>
            <h3>Support Beyond Launch</h3>
            <p>
              We don&rsquo;t disappear after go-live — lifetime updates and support are part of
              the engagement, not an upsell.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
