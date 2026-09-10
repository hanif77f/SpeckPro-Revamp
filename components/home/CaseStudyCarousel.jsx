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

// mark paths reuse the exact same numbered logo files as the Portfolio
// page (1.png through 13.png) for the same projects — no separate set
// of images to manage. "SpeckPro Portfolio" is the one card that isn't
// an external client project, so it keeps a plain text mark instead of
// a numbered logo file.
const cases = [
  {
    mark: "/images/logos/4.png",
    name: "Entertainment Couch",
    category: "Publishing",
    stat: (
      <>
        A fully automated <b>AI content publisher</b> that verifies and publishes engaging
        entertainment stories to the platform around the clock.
      </>
    ),
    href: "https://entertainmentcouch.com/",
    external: true,
    cta: "Visit the site",
  },
  {
    mark: "/images/logos/5.png",
    name: "The Stray Media Website",
    category: "Web Development",
    stat: (
      <>
        A fully responsive <b>WordPress website</b> built for a video production and digital
        media studio, ready to scale their online presence.
      </>
    ),
    href: "https://straymediaco.com/",
    external: true,
    cta: "Visit the site",
  },
  {
    mark: "/images/logos/6.png",
    name: "Unit Converter App",
    category: "Mobile App Development",
    stat: (
      <>
        A fast, user-friendly unit converter for iOS and Android —{" "}
        <b>15+ categories, hundreds of units</b>, and live currency exchange rates.
      </>
    ),
    href: "https://apps.apple.com/nz/app/unit-converter-app/id1640879755",
    external: true,
    cta: "View on App Store",
  },
  {
    mark: "/images/logos/3.png",
    name: "Kasabeeston",
    category: "E-Commerce",
    stat: (
      <>
        A grocery and household essentials e-commerce store —{" "}
        <b>website, Android app, and iOS app</b> — letting shoppers order anytime, anywhere.
      </>
    ),
    href: "https://kasabeeston.com/",
    external: true,
    cta: "Visit the site",
  },
  {
    mark: "/images/logos/7.png",
    name: "WiFi Analyzer",
    category: "Mobile App Development",
    stat: (
      <>
        An all-in-one WiFi analysis app that tests, diagnoses, and improves wireless networks
        using <b>practical tools and AI-powered guidance</b>.
      </>
    ),
    href: "https://play.google.com/store/apps/details?id=com.wifi.optimizer.internet.app.analyzer.tool.android.odl",
    external: true,
    cta: "View on Google Play",
  },
  {
    mark: "/images/logos/8.png",
    name: "Kasookoo",
    category: "Web Development",
    stat: (
      <>
        A modern <b>ReactJS website</b> for Kasookoo, showcasing their cloud communication and
        customer engagement tools built for the digital era.
      </>
    ),
    href: "https://www.kasookoo.com/",
    external: true,
    cta: "Visit the site",
  },
  {
    mark: "/images/logos/1.png",
    name: "Permit Hub",
    category: "Mobile App Development",
    stat: (
      <>
        A smart <b>permission manager app</b> that helps users review and control app
        permissions with clarity, security, and full transparency.
      </>
    ),
    href: "https://play.google.com/store/apps/details?id=com.permithubpermissionmanager.app.android.googleplay",
    external: true,
    cta: "View on Google Play",
  },
  {
    mark: "/images/logos/9.png",
    name: "Blood Pressure & Sugar Tracker",
    category: "Mobile App Development",
    stat: (
      <>
        A comprehensive mobile app that helps users <b>track and monitor</b> their blood
        pressure and blood sugar levels with ease.
      </>
    ),
    href: "https://play.google.com/store/apps/details?id=com.sugur.blood.playstore",
    external: true,
    cta: "View on Google Play",
  },
  {
    mark: "/images/logos/10.png",
    name: "FamiGuard",
    category: "Mobile App Development",
    stat: (
      <>
        A parental control app that helps parents guide kids&rsquo; digital habits —{" "}
        <b>tracking location, managing apps, and remote device locking</b>.
      </>
    ),
    href: "https://play.google.com/store/apps/details?id=com.familyguard.parent.app.android.googleplay",
    external: true,
    cta: "View on Google Play",
  },
  {
    mark: "/images/logos/11.png",
    name: "Amazon Books (Cyan Publication)",
    category: "Publishing",
    stat: (
      <>
        A Kindle publishing catalog for Cyan Publishing, delivering{" "}
        <b>thoughtfully crafted books</b> with creative visual aids for young readers.
      </>
    ),
    href: "https://www.amazon.com/stores/author/B08SWMBKPW",
    external: true,
    cta: "View on Amazon",
  },
  {
    mark: "/images/logos/2.png",
    name: "Little Good Deeds Kids",
    category: "Content / Media",
    stat: (
      <>
        A <b>3D animated kids&rsquo; channel</b> teaching kindness, honesty, and good habits
        through colorful stories and everyday moral lessons.
      </>
    ),
    href: "https://www.youtube.com/@LittleGoodDeedsKids",
    external: true,
    cta: "Watch on YouTube",
  },
  {
    mark: null, // not a numbered client logo — this card is about SpeckPro itself
    markText: "SP",
    name: "SpeckPro Portfolio",
    category: "All Projects",
    stat: (
      <>
        More of what we&rsquo;ve shipped — see the <b>full portfolio</b> across e-commerce,
        publishing, and mobile app projects.
      </>
    ),
    href: "/portfolio",
    external: false,
    cta: "View Portfolio",
  },
];

const REAL_LENGTH = cases.length;
// Matches the 3-visible-cards-per-row layout — enough clones on each
// end that there's always real (if repeated) content to scroll into,
// in both directions.
const CLONE_COUNT = 3;
const FIRST_REAL = CLONE_COUNT;
const LAST_REAL = CLONE_COUNT + REAL_LENGTH - 1;

// [clones of last 3] + [all 12 real cards] + [clones of first 3]
const renderedCases = [
  ...cases.slice(-CLONE_COUNT),
  ...cases,
  ...cases.slice(0, CLONE_COUNT),
].map((c, i) => ({ ...c, _key: `${c.name}-${i}` }));

function toRealIndex(renderedIdx) {
  return ((renderedIdx - FIRST_REAL) % REAL_LENGTH + REAL_LENGTH) % REAL_LENGTH;
}

const AUTOPLAY_MS = 4500;
const RESUME_AFTER_MS = 7000;
const RESET_SETTLE_MS = 550; // fallback if the scrollend event isn't supported

export default function CaseStudyCarousel() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const autoplayTimer = useRef(null);
  const resumeTimer = useRef(null);
  const resetTimer = useRef(null);
  const isVisible = useRef(true);
  const reduceMotion = useRef(false);
  const isResetting = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0); // real index, 0-11, for dots/counter

  function currentRenderedIndex() {
    const track = trackRef.current;
    if (!track) return FIRST_REAL;
    let closest = FIRST_REAL;
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

  // Jumps instantly (no animation) to the equivalent real-card position
  // when the current position is sitting on a clone — since clones are
  // visually identical to their real counterparts, this jump is
  // imperceptible as long as it happens after the smooth scroll has
  // actually settled, not mid-animation.
  function settleIfOnClone() {
    const idx = currentRenderedIndex();
    if (idx >= FIRST_REAL && idx <= LAST_REAL) return; // already on a real card, nothing to do

    const shift = idx > LAST_REAL ? -REAL_LENGTH : REAL_LENGTH;
    const targetIdx = idx + shift;
    const targetCard = cardRefs.current[targetIdx];
    const track = trackRef.current;
    if (!targetCard || !track) return;

    isResetting.current = true;
    track.scrollLeft = targetCard.offsetLeft;
    // Release the guard on the next frame, once the instant jump has
    // actually applied — otherwise the scroll listener below could
    // read a stale position mid-jump and miscompute activeIndex.
    requestAnimationFrame(() => {
      isResetting.current = false;
      setActiveIndex(toRealIndex(targetIdx));
    });
  }

  function scrollToRendered(renderedIdx) {
    const card = cardRefs.current[renderedIdx];
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
      scrollToRendered(currentRenderedIndex() + 1);
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

    // Start on the first REAL card, not the leading clones — instant,
    // no animation, since this is the initial mount position.
    const firstReal = cardRefs.current[FIRST_REAL];
    if (firstReal) track.scrollLeft = firstReal.offsetLeft;
    setActiveIndex(0);

    function scheduleSettleCheck() {
      clearTimeout(resetTimer.current);
      if ("onscrollend" in window) {
        // Prefer the real scrollend event when supported — fires
        // exactly when scrolling (including smooth scrolling) stops,
        // which is the precise moment to check for a clone reset.
        return;
      }
      resetTimer.current = setTimeout(settleIfOnClone, RESET_SETTLE_MS);
    }

    function onScroll() {
      if (isResetting.current) return;
      setActiveIndex(toRealIndex(currentRenderedIndex()));
      scheduleSettleCheck();
    }

    function onScrollEnd() {
      if (isResetting.current) return;
      settleIfOnClone();
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("scrollend", onScrollEnd);

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
      track.removeEventListener("scrollend", onScrollEnd);
      if (observer) observer.disconnect();
      stopAutoplay();
      clearTimeout(resumeTimer.current);
      clearTimeout(resetTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Drag-to-scroll for desktop mouse users
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false });

  function onPointerDown(e) {
    pauseAutoplay();

    if (e.pointerType === "touch") return;

    const track = trackRef.current;

    dragState.current = {
      isDown: true,
      startX: e.clientX,
      startScroll: track.scrollLeft,
      moved: false,
    };
  }

  function onPointerMove(e) {
    const ds = dragState.current;
    if (!ds.isDown) return;

    const dx = e.clientX - ds.startX;

    if (Math.abs(dx) > 4) {
      ds.moved = true;

      if (!trackRef.current.hasPointerCapture(e.pointerId)) {
        trackRef.current.setPointerCapture(e.pointerId);
      }
    }

    trackRef.current.scrollLeft = ds.startScroll - dx;
  }

  function onPointerUp() {
    dragState.current.isDown = false;
    // Manual drags don't fire a smooth-scroll "scrollend" the same way
    // programmatic scrolls do in every browser — check for a clone
    // landing shortly after release too.
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(settleIfOnClone, RESET_SETTLE_MS);
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
              <b>{String(activeIndex + 1).padStart(2, "0")}</b> / {String(REAL_LENGTH).padStart(2, "0")}
            </span>
            <div className="c-case__arrows">
              <button
                type="button"
                className="c-case__arrow"
                aria-label="Previous case study"
                onClick={() => {
                  scrollToRendered(currentRenderedIndex() - 1);
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
                  scrollToRendered(currentRenderedIndex() + 1);
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
              {renderedCases.map((c, i) => (
                <article
                  className="c-case__card"
                  key={c._key}
                  ref={(el) => (cardRefs.current[i] = el)}
                  aria-hidden={i < FIRST_REAL || i > LAST_REAL ? "true" : undefined}
                >
                  <p className="c-case__stat">{c.stat}</p>
                  <div className="c-case__logo">
                    <span className="c-case__mark">
                      {c.mark ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={c.mark} alt={`${c.name} logo`} />
                      ) : (
                        c.markText
                      )}
                    </span>
                    <div>
                      <b>{c.name}</b>
                      <span className="c-case__cat">{c.category}</span>
                    </div>
                  </div>
                  {c.external ? (
                    <a
                      className="c-case__btn"
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={i < FIRST_REAL || i > LAST_REAL ? -1 : undefined}
                    >
                      {c.cta}
                      <ExternalArrowIcon />
                    </a>
                  ) : (
                    <a
                      className="c-case__btn"
                      href={c.href}
                      tabIndex={i < FIRST_REAL || i > LAST_REAL ? -1 : undefined}
                    >
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
                  scrollToRendered(FIRST_REAL + i);
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
