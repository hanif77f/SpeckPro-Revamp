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
              <p>{contact.email}</p>
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
