import Link from "next/link";
import { siteConfig } from "../../lib/siteConfig";
import { footerNav } from "../../lib/nav";
import { Button } from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function ContactSection() {
  const { offices, contact } = siteConfig;

  return (
    <section className="c-contact" id="ch-contact">
      <div className="c-w">
        <div className="c-cgrid">
          <div>
            <Reveal as="span" className="c-cap">
              Get In Touch
            </Reveal>
            <Reveal as="h2" index={1} style={{ marginTop: 18, fontSize: "clamp(26px,3vw,38px)" }}>
              Let&rsquo;s build what&rsquo;s next.
            </Reveal>
            <Reveal
              as="p"
              index={2}
              style={{ color: "var(--ci2)", marginTop: 14, maxWidth: "50ch" }}
            >
              Describe your project requirements — our expert team will discuss the ways we can
              collaborate with you.
            </Reveal>
            <Reveal as="div" className="c-actions" index={3}>
              <Button href={`mailto:${contact.email}`} external>
                Email Us
              </Button>
              <Button href={`tel:${contact.phonePkTel}`} variant="ghost" external withArrow={false}>
                Call Us
              </Button>
            </Reveal>
          </div>

          <Reveal as="div" index={2}>
            <div className="c-off">
              <span className="cap2">{offices.pakistan.label}</span>
              <p>{offices.pakistan.address}</p>
              <p>
                {contact.phonePk} · {contact.email}
              </p>
            </div>
            <div className="c-off">
              <span className="cap2">{offices.uk.label}</span>
              <p>{offices.uk.address}</p>
              <p>
                {contact.phoneUk} · {contact.emailUk}
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
