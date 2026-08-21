import Link from "next/link";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/**
 * Props:
 *  - href
 *  - variant     "primary" (default) | "ghost"
 *  - external    render a plain <a target="_blank"> instead of <Link>
 *  - withArrow   defaults to true for "primary", false for "ghost"
 */
export function Button({ href, children, variant = "primary", external = false, withArrow }) {
  const shouldShowArrow = withArrow ?? variant === "primary";
  const className = `c-btn c-btn--${variant === "primary" ? "pri" : "ghost"}`;
  const content = (
    <>
      {children}
      {shouldShowArrow && <ArrowIcon />}
    </>
  );

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {content}
    </Link>
  );
}

/** The pill-shaped cross-link chip used in "Explore More" chapters on service pages. */
export function XLink({ href, children }) {
  return (
    <Link className="x-link" href={href}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
