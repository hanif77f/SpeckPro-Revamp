"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../ui/Reveal";

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);
const ExternalArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const cases = [
  {
    mark: "K",
    name: "Kasabeeston",
    category: "E-Commerce",
    stat: (
      <>
        A complete e-commerce suite built as one connected shopping experience —{" "}
        <b>website, Android app, and iOS app</b> shipped together.
      </>
    ),
    href: "https://kasabeeston.com/",
    external: true,
    cta: "Visit the site",
  },
  {
    mark: "EC",
    name: "Entertainment Couch",
    category: "Publishing",
    stat: (
      <>
        A content publishing platform covering{" "}
        <b>entertainment, technology, fashion, and lifestyle</b> news for its readers.
      </>
    ),
    href: "https://entertainmentcouch.com/",
    external: true,
    cta: "Visit the site",
  },
  {
    mark: "IT",
    name: "Islamabad Tennis Complex",
    category: "Web Development",
    stat: (
      <>
        A <b>public-facing website</b> built for a sports facility, covering court schedules,
        facilities, and booking information.
      </>
    ),
    href: "https://islamabadtennis.com/",
    external: true,
    cta: "Visit the site",
  },
  {
    mark: "SP",
    name: "SpeckPro Portfolio",
    category: "All Projects",
    stat: (
      <>
        More of what we&rsquo;ve shipped — see the <b>full portfolio</b> across e-commerce,
        publishing, and public-sector projects.
      </>
    ),
    href: "/portfolio",
    external: false,
    cta: "View Portfolio",
  },
];

const AUTOPLAY_MS = 4500;
const RESUME_AFTER_MS = 7000;

export default function CaseStudyCarousel() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const autoplayTimer = useRef(null);
  const resumeTimer = useRef(null);
  const isVisible = useRef(true);
  const reduceMotion = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  function currentIndex() {
    const track = trackRef.current;
    if (!track) return 0;
    let closest = 0;
    let closestDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const dist = Math.abs(card.offsetLeft - track.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    return closest;
  }

  function scrollToCard(i) {
    const card = cardRefs.current[i];
    if (card) card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer.current);
    autoplayTimer.current = null;
  }

  function startAutoplay() {
    if (reduceMotion.current || autoplayTimer.current) return;
    autoplayTimer.current = setInterval(() => {
      if (!isVisible.current) return;
      scrollToCard((currentIndex() + 1) % cases.length);
    }, AUTOPLAY_MS);
  }

  function pauseAutoplay() {
    stopAutoplay();
    clearTimeout(resumeTimer.current);
    if (reduceMotion.current) return;
    resumeTimer.current = setTimeout(startAutoplay, RESUME_AFTER_MS);
  }

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => setActiveIndex(currentIndex());
    track.addEventListener("scroll", onScroll, { passive: true });

    let observer;
    if (!reduceMotion.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          isVisible.current = entries[0].isIntersecting;
          if (isVisible.current) startAutoplay();
          else stopAutoplay();
        },
        { threshold: 0.35 }
      );
      observer.observe(track);
    } else if (!reduceMotion.current) {
      startAutoplay();
    }

    return () => {
      track.removeEventListener("scroll", onScroll);
      if (observer) observer.disconnect();
      stopAutoplay();
      clearTimeout(resumeTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Drag-to-scroll for desktop mouse users
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false });

  function onPointerDown(e) {
    pauseAutoplay();
    if (e.pointerType === "touch") return;
    const track = trackRef.current;
    dragState.current = { isDown: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
  }
  function onPointerMove(e) {
    const ds = dragState.current;
    if (!ds.isDown) return;
    const dx = e.clientX - ds.startX;
    if (Math.abs(dx) > 4) ds.moved = true;
    trackRef.current.scrollLeft = ds.startScroll - dx;
  }
  function onPointerUp() {
    dragState.current.isDown = false;
  }
  function onClickCapture(e) {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragState.current.moved = false;
    }
  }
  function onTouchStart() {
    pauseAutoplay();
  }

  return (
    <>
      <div className="c-w">
        <div className="c-h c-h--split">
          <div>
            <Reveal as="span" className="c-cap">
              Selected Work
            </Reveal>
            <Reveal as="h2" index={1}>
              Discover the value we delivered
            </Reveal>
            <Reveal as="p" index={2}>
              A few of the platforms we&rsquo;ve shipped — spanning e-commerce, publishing, and
              public-sector work.
            </Reveal>
          </div>
          <Reveal as="div" className="c-case__nav" index={2}>
            <span className="c-case__count">
              <b>{String(activeIndex + 1).padStart(2, "0")}</b> / {String(cases.length).padStart(2, "0")}
            </span>
            <div className="c-case__arrows">
              <button
                type="button"
                className="c-case__arrow"
                aria-label="Previous case study"
                onClick={() => {
                  scrollToCard((currentIndex() - 1 + cases.length) % cases.length);
                  pauseAutoplay();
                }}
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                className="c-case__arrow"
                aria-label="Next case study"
                onClick={() => {
                  scrollToCard((currentIndex() + 1) % cases.length);
                  pauseAutoplay();
                }}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="c-w">
        <Reveal as="div" className="c-case" index={3}>
          <div className="c-case__viewport">
            <div
              className="c-case__track"
              ref={trackRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onClickCapture={onClickCapture}
              onMouseEnter={stopAutoplay}
              onMouseLeave={() => {
                clearTimeout(resumeTimer.current);
                startAutoplay();
              }}
              onTouchStart={onTouchStart}
            >
              {cases.map((c, i) => (
                <article
                  className="c-case__card"
                  key={c.name}
                  ref={(el) => (cardRefs.current[i] = el)}
                >
                  <p className="c-case__stat">{c.stat}</p>
                  <div className="c-case__logo">
                    <span className="c-case__mark">{c.mark}</span>
                    <div>
                      <b>{c.name}</b>
                      <span className="c-case__cat">{c.category}</span>
                    </div>
                  </div>
                  {c.external ? (
                    <a className="c-case__btn" href={c.href} target="_blank" rel="noopener noreferrer">
                      {c.cta}
                      <ExternalArrowIcon />
                    </a>
                  ) : (
                    <a className="c-case__btn" href={c.href}>
                      {c.cta}
                      <ExternalArrowIcon />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
          <div className="c-case__dots">
            {cases.map((c, i) => (
              <button
                key={c.name}
                type="button"
                className={`c-case__dot${i === activeIndex ? " active" : ""}`}
                aria-label={`Go to case study ${i + 1}`}
                onClick={() => {
                  scrollToCard(i);
                  pauseAutoplay();
                }}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}