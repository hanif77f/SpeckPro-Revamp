import Reveal from "./Reveal";

export default function SectionHead({ kicker, title, lead }) {
  return (
    <div className="c-h">
      <Reveal as="span" className="c-cap">
        {kicker}
      </Reveal>
      <Reveal as="h2" index={1}>
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" index={2}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}
