import Reveal from "../ui/Reveal";

const items = [
  {
    title: "Agile Approach",
    text: "Iterative delivery that stays visible at every stage.",
    icon: "M13 2 3 14h7l-1 8 10-12h-7l1-8z",
  },
  {
    title: "Cloud Technology",
    text: "Modern, scalable infrastructure behind every build.",
    icon: "M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 1 8.9",
  },
  {
    title: "Professional Team",
    text: "Specialists across web, mobile, design, and marketing.",
    icon: "M4 21c0-4 4-6 8-6s8 2 8 6",
    circle: true,
  },
  {
    title: "Lifetime Updates",
    text: "Ongoing support long after launch day.",
    icon: "M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8",
  },
];

export default function ProofPanel() {
  return (
    <Reveal as="div" className="c-ro" index={4}>
      <span className="c-ro__c">How we work</span>
      {items.map((item) => (
        <div className="kpi" key={item.title}>
          <div className="kpi__ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {item.circle && <circle cx="12" cy="8" r="4" />}
              <path d={item.icon} />
            </svg>
          </div>
          <div>
            <b>{item.title}</b>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
