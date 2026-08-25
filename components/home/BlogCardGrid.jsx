import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function BlogCardGrid() {
  return (
    <section className="c-sec" id="ch-journal" style={{ background: "var(--cm)" }}>
      <div className="c-w">
        <SectionHead
          kicker="From the Blog"
          title="Notes on software and growth"
          lead="The latest technology-related content and analysis from our team."
        />

        <Reveal as="div" className="c-blog__grid" index={3}>
          <a className="c-blog__card" href="/blog">
            <div className="c-blog__thumb">
              <svg viewBox="0 0 300 188" preserveAspectRatio="xMidYMid slice">
                <rect width="300" height="188" fill="#0A0E1A" />
                <defs>
                  <radialGradient id="bgGrad1" cx="30%" cy="20%" r="80%">
                    <stop offset="0" stopColor="#123B34" />
                    <stop offset="1" stopColor="#0A0E1A" />
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="300" height="188" fill="url(#bgGrad1)" />
                <rect x="95" y="64" width="110" height="60" rx="10" fill="#121a2e" stroke="#2b3a52" strokeWidth="1.5" />
                <circle cx="122" cy="94" r="13" fill="none" stroke="#17B892" strokeWidth="2.2" />
                <path d="M118.5 94h7M122 90.5v7" stroke="#17B892" strokeWidth="2.2" />
                <circle cx="172" cy="86" r="6" fill="#FFB020" />
                <circle cx="188" cy="100" r="6" fill="#6FE3C9" />
                <rect x="132" y="132" width="36" height="8" rx="4" fill="#17B892" opacity=".9" />
              </svg>
            </div>
            <div className="c-blog__body">
              <span className="c-blog__tag">Coming Soon</span>
              <h4>Dot Chaser – Classic Arcade Fun</h4>
              <p>A retro arcade game experience on Fire Tablets and TV.</p>
              <span className="c-blog__more">
                Coming soon
                <ArrowIcon />
              </span>
            </div>
          </a>

          <a className="c-blog__card" href="/blog">
            <div className="c-blog__thumb">
              <svg viewBox="0 0 300 188" preserveAspectRatio="xMidYMid slice">
                <rect width="300" height="188" fill="#0A0E1A" />
                <defs>
                  <radialGradient id="bgGrad2" cx="70%" cy="80%" r="80%">
                    <stop offset="0" stopColor="#7A5A22" />
                    <stop offset="1" stopColor="#0A0E1A" />
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="300" height="188" fill="url(#bgGrad2)" />
                <rect x="128" y="70" width="44" height="34" rx="6" fill="#121a2e" stroke="#2b3a52" strokeWidth="1.5" />
                <path d="M138 70v-12a12 12 0 0 1 24 0v12" fill="none" stroke="#FFB020" strokeWidth="3" />
                <circle cx="150" cy="86" r="4.5" fill="#FFB020" />
                <rect x="80" y="120" width="140" height="6" rx="3" fill="#2b3a52" />
                <rect x="80" y="134" width="90" height="6" rx="3" fill="#2b3a52" />
              </svg>
            </div>
            <div className="c-blog__body">
              <span className="c-blog__tag">Coming Soon</span>
              <h4>Permit Hub App</h4>
              <p>Take control of your app permissions and protect your digital privacy.</p>
              <span className="c-blog__more">
                Coming soon
                <ArrowIcon />
              </span>
            </div>
          </a>

          <a className="c-blog__card" href="/blog">
            <div className="c-blog__thumb">
              <svg viewBox="0 0 300 188" preserveAspectRatio="xMidYMid slice">
                <rect width="300" height="188" fill="#0A0E1A" />
                <defs>
                  <radialGradient id="bgGrad3" cx="50%" cy="50%" r="75%">
                    <stop offset="0" stopColor="#123B34" />
                    <stop offset="1" stopColor="#0A0E1A" />
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="300" height="188" fill="url(#bgGrad3)" />
                <rect x="90" y="58" width="80" height="98" rx="8" fill="#121a2e" stroke="#2b3a52" strokeWidth="1.5" />
                <rect x="104" y="74" width="52" height="6" rx="3" fill="#17B892" />
                <rect x="104" y="88" width="52" height="5" rx="2.5" fill="#2b3a52" />
                <rect x="104" y="99" width="40" height="5" rx="2.5" fill="#2b3a52" />
                <rect x="104" y="122" width="52" height="5" rx="2.5" fill="#2b3a52" />
                <rect x="104" y="133" width="30" height="5" rx="2.5" fill="#2b3a52" />
                <circle cx="182" cy="60" r="9" fill="#FFB020" />
              </svg>
            </div>
            <div className="c-blog__body">
              <span className="c-blog__tag">Coming Soon</span>
              <h4>More stories on the way</h4>
              <p>We&rsquo;re building out the full journal — check back after launch.</p>
              <span className="c-blog__more">
                Visit the blog
                <ArrowIcon />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}