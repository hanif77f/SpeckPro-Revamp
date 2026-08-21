import Link from "next/link";
import { Fragment } from "react";
import Reveal from "./Reveal";

export default function Breadcrumb({ items }) {
  return (
    <Reveal as="div" className="c-crumb">
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          {i < items.length - 1 && <span>/</span>}
        </Fragment>
      ))}
    </Reveal>
  );
}
