"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { services, primaryNav } from "../../lib/nav";

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

// Small grace period before closing, so quickly moving the mouse from the
// trigger down into the menu (or briefly grazing the gap between them)
// doesn't close it — but genuinely moving away always closes it shortly
// after. Using real open/close state (instead of pure CSS :hover) avoids
// the menu staying open just because its box happens to visually overlap
// a neighboring nav link.
const CLOSE_DELAY = 150;

export default function Header({ stuck, onBurgerClick, overlayOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef(null);

  function openServices() {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }
  function closeServicesSoon() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), CLOSE_DELAY);
  }

  return (
    <header className={`c-hd${stuck ? " stuck" : ""}`}>
      <div className="c-hd__in">
        <Link className="c-brand" href="/">
          <svg className="mark" viewBox="0 0 36 36" aria-hidden="true">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5CE0C4" />
                <stop offset="1" stopColor="#0E8F79" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="6" fill="#123B34" />
            <rect x="9" y="9" width="24" height="24" rx="7" fill="url(#logoGrad)" />
            <circle cx="30" cy="9" r="3.4" fill="#FFB020" />
          </svg>
          <span className="word">
            Speck<i>Pro</i>
          </span>
        </Link>

        <nav className="c-hnav">
          {/* Services leads the nav now (button-trigger dropdown). Open
              state is JS-controlled (see openServices/closeServicesSoon
              above) rather than pure CSS :hover, so it closes reliably
              once the mouse truly leaves — :focus-within stays as a
              keyboard-only fallback for Tab navigation. */}
          <div
            className={`c-hnav__drop${servicesOpen ? " open" : ""}`}
            onMouseEnter={openServices}
            onMouseLeave={closeServicesSoon}
          >
            <button
              className="c-hnav__trig"
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onFocus={openServices}
            >
              Services
              <ChevronIcon />
            </button>
            <div className="c-hnav__menu">
              <div className="c-hnav__menu-inner">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onBlur={closeServicesSoon}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="c-hact">
          {/* Links to the homepage's project-starter wizard. Using a real
              href (not a raw onClick hash-set) so this works correctly
              from every page, not just when already on "/". */}
          <Link className="c-hbtn" href="/#ch-estimate">
            Start a Project
          </Link>
          <button
            className="c-burg"
            aria-expanded={overlayOpen}
            aria-controls="cOvl"
            onClick={onBurgerClick}
          >
            <span className="vh">Index</span>
            <i />
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}