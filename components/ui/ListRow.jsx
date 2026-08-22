import Link from "next/link";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

/**
 * A single hairline-divided list row — the core reusable pattern for
 * services, portfolio, blog, and career listings.
 *
 * Props:
 *  - tag           small label on the left (number, date, category, office...)
 *  - title
 *  - description   optional
 *  - href          internal Next.js route (renders <Link>)
 *  - externalHref  external URL (renders <a target="_blank"> with the external icon)
 *  - mailHref      mailto:/tel: action link (renders a plain <a>, no target/rel,
 *                   used for things like Career's "Apply Now" rows)
 *  - showArrow     defaults to true
 *
 * If none of href / externalHref / mailHref is given, renders a static
 * <div class="row"> (used for plain info rows with no action).
 */
export default function ListRow({
  tag,
  title,
  description,
  href,
  externalHref,
  mailHref,
  showArrow = true,
}) {
  const content = (
    <>
      <span className="tag">{tag}</span>
      <div className="ti">
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
      {showArrow && <span className="go">{externalHref ? <ExternalIcon /> : <ArrowIcon />}</span>}
    </>
  );

  if (mailHref) {
    return <a href={mailHref}>{content}</a>;
  }

  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <div className="row">{content}</div>;
}
