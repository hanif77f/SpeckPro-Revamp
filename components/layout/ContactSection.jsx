import Link from "next/link";
import { siteConfig, whatsappHref } from "../../lib/siteConfig";
import { footerNav } from "../../lib/nav";
import { Button } from "../ui/Button";
import Reveal from "../ui/Reveal";

/**
 * Props:
 *  - heading  overrides the default "Let's build what's next." (used by the
 *             Contact page itself, which wants different copy here)
 *  - lead     overrides the default paragraph
 *  - showMap  when true, embeds the real Google Maps iframe under the
 *             Pakistan office (only the Contact page sets this — every
 *             other page gets the compact version with no map)
 *  - dark     renders the dark/void variant (used by Privacy Policy).
 *             Every color in this component is already a CSS custom
 *             property (var(--ci2), var(--ct), etc.), and .c-void
 *             redefines those properties for its whole subtree — so
 *             adding that one class is genuinely all this needs to
 *             flip the entire section to the dark palette correctly.
 */
export default function ContactSection({
  heading = "Let\u2019s build what\u2019s next.",
  lead = "Describe your project requirements — our expert team will discuss the ways we can collaborate with you.",
  showMap = false,
  dark = false,
}) {
  const { offices, contact } = siteConfig;

  return (
    <section className={`c-contact${dark ? " c-void" : ""}`} id="ch-contact">
      <div className="c-w">
        <div className="c-cgrid">
          <div>
            <Reveal as="span" className="c-cap">
              Get In Touch
            </Reveal>
            <Reveal as="h2" index={1} style={{ marginTop: 18, fontSize: "clamp(26px,3vw,38px)" }}>
              {heading}
            </Reveal>
            <Reveal
              as="p"
              index={2}
              style={{ color: "var(--ci2)", marginTop: 14, maxWidth: "50ch" }}
            >
              {lead}
            </Reveal>
            <Reveal as="div" className="c-actions" index={3}>
              <Button href={`mailto:${contact.email}`} external>
                Email Us
              </Button>
              <a className="c-btn c-btn--ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Reveal>
          </div>

          <Reveal as="div" index={2}>
            <div className="c-off">
              <span className="cap2">{offices.pakistan.label}</span>
              <p>{offices.pakistan.address}</p>
              <p>{contact.phonePk} . {contact.email}</p>
              {showMap && (
                <div className="map-embed">
                  <iframe
                    src={offices.pakistan.mapEmbedUrl}
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SpeckPro Pakistan Office Map"
                  />
                </div>
              )}
            </div>
            <div className="c-off">
              <span className="cap2">{offices.uk.label}</span>
              <p>{offices.uk.address}</p>
              <p>
                {contact.phoneUk} (WhatsApp) · {contact.emailUk}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="c-foot">
  <span>
    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
  </span>

  <div className="c-foot__social">
    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="SpeckPro on LinkedIn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </svg>
    </a>
    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="SpeckPro on Facebook">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </a>
    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="SpeckPro on Instagram">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
    <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="SpeckPro on X">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4l16 16M20 4 4 20" />
      </svg>
    </a>
    <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="SpeckPro on YouTube">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="M10 9.5v5l4.5-2.5Z" fill="currentColor" stroke="none" />
      </svg>
    </a>
  </div>

  <nav>
    {footerNav.map((item) => (
      <Link key={item.href} href={item.href}>
        {item.label}
      </Link>
    ))}
  </nav>
</div>
      </div>
    </section>
  );
}
