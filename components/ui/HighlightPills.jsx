import Reveal from "./Reveal";

export default function HighlightPills({ items, index = 4 }) {
  return (
    <Reveal as="div" className="c-hpills" index={index}>
      {items.map((p) =>
        p.href ? (
          <a key={p.title} className="c-hpill" href={p.href}>
            <b>{p.title}</b>
            <p>{p.text}</p>
          </a>
        ) : (
          <div key={p.title} className="c-hpill">
            <b>{p.title}</b>
            <p>{p.text}</p>
          </div>
        )
      )}
    </Reveal>
  );
}
