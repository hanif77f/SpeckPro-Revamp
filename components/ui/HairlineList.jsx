import Reveal from "./Reveal";

export default function HairlineList({ children, index = 2 }) {
  return (
    <Reveal as="div" className="c-list" index={index}>
      {children}
    </Reveal>
  );
}
