import Reveal from "../ui/Reveal";
import StatBar from "../ui/StatBar";

/**
 * Props:
 *  - kicker, title, description   left column intro copy
 *  - checklist   array of { tag, title } — plain rows, no link/arrow
 *  - sideKicker  label above the right column
 *  - sideItems   array of { label, value } — value: number renders an
 *                animated % bar, string renders as a plain tag
 */
export default function ApproachSection({
  kicker,
  title,
  description,
  checklist,
  sideKicker,
  sideItems,
}) {
  return (
    <div className="c-x">
      <Reveal>
        <span className="c-cap">{kicker}</span>
        <h2 style={{ marginTop: 16, fontSize: "clamp(24px,2.8vw,36px)" }}>{title}</h2>
        <p style={{ color: "var(--ci2)", marginTop: 16, fontSize: "15.5px" }}>{description}</p>
        <div className="c-list" style={{ marginTop: 20 }}>
          {checklist.map((item) => (
            <div className="row" key={item.tag}>
              <span className="tag">{item.tag}</span>
              <div className="ti">
                <h4>{item.title}</h4>
              </div>
              <span />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal index={1}>
        <span className="c-cap">{sideKicker}</span>
        <div style={{ marginTop: 20 }}>
          {sideItems.map((item) => (
            <StatBar key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
