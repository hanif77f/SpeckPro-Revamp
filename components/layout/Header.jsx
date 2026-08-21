"use client";

import Link from "next/link";
import { services, primaryNav } from "../../lib/nav";

export default function Header({ stuck, onBurgerClick, overlayOpen }) {
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
          {/* First primary-nav item is "About"; render it, then the Services
              dropdown, then the rest, to match the original order exactly. */}
          <Link href={primaryNav[0].href}>{primaryNav[0].label}</Link>

          <div className="has-drop">
            <Link href={services[0].href}>Services</Link>
            <div className="drop">
              {services.map((s) => (
                <Link key={s.href} href={s.href}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {primaryNav.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="c-hact">
          <Link className="c-hbtn" href="/contact">
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
