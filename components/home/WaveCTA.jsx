import Reveal from "../ui/Reveal";

export default function WaveCTA() {
  return (
    <section className="c-wave c-void" id="ch-cta">
      <div className="c-wave__bg" aria-hidden="true">
        <svg className="c-wave__svg" viewBox="0 0 2400 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveA" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#5CE0C4" stopOpacity="0" />
              <stop offset=".5" stopColor="#5CE0C4" stopOpacity=".55" />
              <stop offset="1" stopColor="#5CE0C4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveB" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FFB020" stopOpacity="0" />
              <stop offset=".5" stopColor="#FFB020" stopOpacity=".4" />
              <stop offset="1" stopColor="#FFB020" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,210 C150,150 300,270 450,210 C600,150 750,270 900,210 C1050,150 1200,270 1200,210 C1350,150 1500,270 1650,210 C1800,150 1950,270 2100,210 C2250,150 2400,270 2400,210"
            fill="none"
            stroke="url(#waveA)"
            strokeWidth="1.4"
          />
          <path
            d="M0,260 C150,210 300,310 450,260 C600,210 750,310 900,260 C1050,210 1200,310 1200,260 C1350,210 1500,310 1650,260 C1800,210 1950,310 2100,260 C2250,210 2400,310 2400,260"
            fill="none"
            stroke="url(#waveB)"
            strokeWidth="1.2"
          />
          <path
            d="M0,160 C150,120 300,200 450,160 C600,120 750,200 900,160 C1050,120 1200,200 1200,160 C1350,120 1500,200 1650,160 C1800,120 1950,200 2100,160 C2250,120 2400,200 2400,160"
            fill="none"
            stroke="url(#waveA)"
            strokeWidth="1"
            opacity=".6"
          />
        </svg>
      </div>

      <div className="c-atm">
        <span
          className="c-bloom"
          style={{
            width: "44vw",
            height: "44vw",
            top: "-14vw",
            left: "20vw",
            background: "radial-gradient(circle,#0E8F79,transparent 70%)",
          }}
        />
      </div>

      <div className="c-w">
        <div className="c-wave__in">
          <Reveal as="span" className="c-cap c-cap--n" style={{ justifyContent: "center" }}>
            Ready When You Are
          </Reveal>
          <Reveal as="h2" index={1}>
            Innovate Without the Rebuild.
          </Reveal>
          <Reveal as="p" index={2}>
            SpeckPro plugs into what you already have — legacy systems, existing platforms,
            half-finished builds — and ships from there. No rip-and-replace required.
          </Reveal>
          <Reveal as="div" className="c-actions" index={3}>
            <a className="c-btn c-btn--pri" href="#ch-estimate">
              Start a Project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="c-btn c-btn--ghost" href="#ch-work">
              See Our Work
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
