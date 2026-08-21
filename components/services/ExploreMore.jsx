import Reveal from "../ui/Reveal";
import SectionHead from "../ui/SectionHead";
import { XLink } from "../ui/Button";

/**
 * Props:
 *  - title   the chapter heading (varies slightly in original copy per page)
 *  - links   array of { label, href }
 */
export default function ExploreMore({ title, links }) {
  return (
    <section className="c-sec" id="ch-more">
      <div className="c-w">
        <SectionHead kicker="Explore More" title={title} />
        <Reveal index={2}>
          {links.map((link) => (
            <XLink key={link.href} href={link.href}>
              {link.label}
            </XLink>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
