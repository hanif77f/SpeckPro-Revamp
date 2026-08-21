"use client";

import Link from "next/link";
import { overlayNav, services } from "../../lib/nav";

export default function IndexOverlay({ open, onClose }) {
  return (
    <div id="cOvl" className={`c-ovl${open ? " open" : ""}`} aria-hidden={!open}>
      <button className="c-ovl__x" onClick={onClose}>
        <span className="vh">Close</span>
      </button>
      <div className="c-ovl__in">
        <nav className="c-ovl__nav">
          {overlayNav.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="c-ovl__side">
          <h4>All Capabilities</h4>
          <div className="c-ovl__list">
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={onClose}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
