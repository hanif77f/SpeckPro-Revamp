import Blooms from "./Blooms";
import OrbitalRing from "./OrbitalRing";
import Breadcrumb from "./Breadcrumb";
import HighlightPills from "./HighlightPills";
import Reveal from "./Reveal";
import { ringPresets } from "../../lib/ringPresets";

/**
 * The compact cold-open hero reused on all 12 inner pages.
 *
 * Props:
 *  - ringKey     key into ringPresets, e.g. "about", "web-development"
 *  - crumbLabel  current page label shown in the breadcrumb
 *  - kicker      small mono label above the heading
 *  - title       h1 text
 *  - lead        intro paragraph
 *  - pills       optional array of { title, text, href? } for the 3-pill row
 */
export default function PageHeroSub({ ringKey, crumbLabel, kicker, title, lead, pills }) {
  return (
    <section className="c-open c-void c-open--sub" id="top">
      <Blooms />
      <OrbitalRing config={ringPresets[ringKey]} size="sub" />

      <div className="c-w">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: crumbLabel }]} />

        <Reveal as="span" className="c-cap" index={1}>
          {kicker}
        </Reveal>

        <Reveal as="h1" className="c-open__t" index={2} style={{ marginTop: 20 }}>
          {title}
        </Reveal>

        <Reveal as="p" className="c-open__s" index={3}>
          {lead}
        </Reveal>

        {pills && pills.length > 0 && <HighlightPills items={pills} />}
      </div>
    </section>
  );
}
