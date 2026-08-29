"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import ChapterRail from "../../components/layout/ChapterRail";
import { siteConfig } from "../../lib/siteConfig";

// Self-contained on purpose (matches the pattern used for the Account
// Deletion page) — everything for this page lives in this one file rather
// than being split into reusable components, since none of this is meant
// to be reused elsewhere. Client-side only, so it can't export Next's
// `metadata`; document.title is set manually below instead.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const JOBS = [
  {
    office: "Pakistan Office",
    title: "Front End Developer",
    desc: "Strong knowledge of front-end development and the JavaScript ecosystem, with the judgment to choose the right tool for the job.",
  },
  {
    office: "Pakistan Office",
    title: "UI / UX Designer",
    desc: "Design logos, brochures, and promotional content across Photoshop, Illustrator, Quark, and Pagemaker.",
  },
  {
    office: "UK Office",
    title: "Business Development Officer",
    desc: "A dynamic, results-driven role identifying new business opportunities and building client relationships across our website, mobile app, and social media marketing services.",
  },
  {
    office: "UK Office",
    title: "Digital Marketing Internship",
    desc: "Hands-on experience crafting digital marketing campaigns, optimizing SEO, managing social channels, and supporting content creation.",
  },
  {
    office: "Pakistan Office",
    title: "Web Development Internship",
    desc: "A red-carpet welcome for passionate fresh graduates ready to gain hands-on experience alongside a creative, collaborative team.",
  },
  {
    office: "Pakistan Office",
    title: "Content Writer Internship",
    desc: "Help create print and video content for our websites and blogs — looking for talented fresh graduates to enrich our content.",
  },
  {
    office: "Pakistan Office",
    title: "Mobile App Developer",
    desc: "Develop mobile apps using the React Native framework for both iOS and Android.",
  },
];

const GENERAL_JOB = {
  office: "General Application",
  title: "General Application",
  desc: "You're not applying for a specific role — tell us where you'd fit best.",
};

const railItems = [
  { id: "top", label: "Open" },
  { id: "ch-roles", label: "Open Roles" },
  { id: "ch-culture", label: "Culture" },
  { id: "ch-contact", label: "Contact" },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function CareerPage() {
  useEffect(() => {
    document.title = "Careers – Join Our Team — " + siteConfig.name;
  }, []);

  const [officeFilter, setOfficeFilter] = useState("all");
  const filteredJobs = useMemo(
    () => (officeFilter === "all" ? JOBS : JOBS.filter((j) => j.office === officeFilter)),
    [officeFilter]
  );

  // ---------------- Application modal state ----------------
  const [modalOpen, setModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(GENERAL_JOB);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const lastFocused = useRef(null);
  const nameInputRef = useRef(null);

  const [apName, setApName] = useState("");
  const [apEmail, setApEmail] = useState("");
  const [apPhone, setApPhone] = useState("");
  const [apLocation, setApLocation] = useState("");
  const [apExp, setApExp] = useState("");
  const [apNotice, setApNotice] = useState("");
  const [apLink, setApLink] = useState("");
  const [apSalary, setApSalary] = useState("");
  const [apSource, setApSource] = useState("");
  const [apMsg, setApMsg] = useState("");

  function resetFormFields() {
    setApName("");
    setApEmail("");
    setApPhone("");
    setApLocation("");
    setApExp("");
    setApNotice("");
    setApLink("");
    setApSalary("");
    setApSource("");
    setApMsg("");
  }

  function openModal(job) {
    setCurrentJob(job || GENERAL_JOB);
    resetFormFields();
    setShowError(false);
    setSubmitError("");
    setSubmitted(false);
    lastFocused.current = document.activeElement;
    setModalOpen(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => nameInputRef.current?.focus(), 100);
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "";
    if (lastFocused.current) lastFocused.current.focus();
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && modalOpen) closeModal();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  // Sends the application to our own API route, which emails it via
  // Gmail SMTP — same pattern as the Project Starter Wizard. This is
  // what guarantees the application actually reaches us, rather than
  // depending on the candidate's own email client being set up and them
  // pressing send on a pre-filled mailto: draft.
  async function handleApplySubmit(e) {
    e.preventDefault();
    const name = apName.trim();
    const email = apEmail.trim();
    const phone = apPhone.trim();
    const location = apLocation.trim();
    const msg = apMsg.trim();
    const emailValid = EMAIL_RE.test(email);

    if (!name || !emailValid || !phone || !location || !msg) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/job-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobTitle: currentJob.title,
          jobOffice: currentJob.office,
          name,
          email,
          phone,
          location,
          experience: apExp,
          notice: apNotice,
          link: apLink.trim(),
          salary: apSalary.trim(),
          source: apSource,
          message: msg,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        "Something went wrong sending your application — please try again, or email us directly at " +
          siteConfig.contact.email +
          "."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <ChapterRail items={railItems} />

      {/* ============ HERO ============ */}
      <section className="c-hero c-void" id="top">
        <div className="c-atm">
          <span
            className="c-bloom"
            style={{
              width: "44vw",
              height: "44vw",
              top: "-18vw",
              left: "-12vw",
              background: "radial-gradient(circle,#0E8F79,transparent 68%)",
            }}
          />
          <span
            className="c-bloom"
            style={{
              width: "30vw",
              height: "30vw",
              bottom: "-16vw",
              right: "-8vw",
              background: "radial-gradient(circle,#7A5A22,transparent 66%)",
            }}
          />
        </div>

        <div className="c-w">
          <div className="c-crumb__row">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Career</span>
          </div>
          <span className="c-cap">Careers at SpeckPro</span>
          <h1>Grow personally and professionally, on real work</h1>
          <p className="lead">
            We&rsquo;re building a team across Pakistan and the UK — join a group that values
            growth, friendly collaboration, and a genuinely bright corporate culture.
          </p>

          <div className="c-perks">
            <div className="c-perk">
              <h4>Growth &amp; Self Development</h4>
              <p>Grow both personally and professionally.</p>
            </div>
            <div className="c-perk">
              <h4>Experienced &amp; Friendly Team</h4>
              <p>Positive interactions within the organization, every day.</p>
            </div>
            <div className="c-perk">
              <h4>Bright Corporate Culture</h4>
              <p>A purpose-driven culture of learning and wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OPEN ROLES ============ */}
      <section className="c-sec" id="ch-roles">
        <div className="c-w">
          <div className="c-h">
            <span className="c-cap">Open Roles</span>
            <h2>Seven roles, across two offices</h2>
            <p>Click a role to open the application form — no separate login or account needed.</p>
          </div>

          <div className="c-filters">
            <button
              className={`c-filter${officeFilter === "all" ? " active" : ""}`}
              onClick={() => setOfficeFilter("all")}
            >
              All Offices
            </button>
            <button
              className={`c-filter${officeFilter === "Pakistan Office" ? " active" : ""}`}
              onClick={() => setOfficeFilter("Pakistan Office")}
            >
              Pakistan
            </button>
            <button
              className={`c-filter${officeFilter === "UK Office" ? " active" : ""}`}
              onClick={() => setOfficeFilter("UK Office")}
            >
              UK
            </button>
          </div>

          <div className="c-jobs">
            {filteredJobs.map((job) => (
              <button key={job.title} type="button" className="c-job" onClick={() => openModal(job)}>
                <span className="tag">{job.office.replace(" Office", "")}</span>
                <span className="ti">
                  <h4>{job.title}</h4>
                  <p>{job.desc}</p>
                </span>
                <span className="go">
                  <ArrowIcon />
                </span>
              </button>
            ))}
          </div>
          {filteredJobs.length === 0 && (
            <p className="c-jobs-empty show">
              No open roles in this office right now — check back soon, or send us your resume
              anyway below.
            </p>
          )}
        </div>
      </section>

      {/* ============ DON'T SEE YOUR ROLE ============ */}
      <section className="c-sec" id="ch-culture" style={{ background: "var(--cm)", paddingTop: 0 }}>
        <div className="c-w">
          <div className="c-openreq">
            <div>
              <span className="c-cap" style={{ marginBottom: 10 }}>
                Don&rsquo;t See Your Role?
              </span>
              <h3>Send us your resume anyway</h3>
              <p>We&rsquo;re always glad to hear from good people, even outside a listed opening.</p>
            </div>
            <button className="c-btn c-btn--pri" onClick={() => openModal(null)}>
              Apply Anyway
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>

      {/* ============ APPLICATION MODAL ============ */}
      <div
        className={`c-modalwrap${modalOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="applyModalTitle"
      >
        <div className="c-modal__backdrop" onClick={closeModal} />
        <div className="c-modal">
          <button className="c-modal__x" onClick={closeModal}>
            <span className="vh">Close</span>
            <CloseIcon />
          </button>

          {!submitted ? (
            <div>
              <span className="c-modal__tag">{currentJob.office}</span>
              <h3 id="applyModalTitle">
                Apply — <span>{currentJob.title}</span>
              </h3>
              <p className="c-modal__sub">{currentJob.desc}</p>

              <form onSubmit={handleApplySubmit} noValidate>
                <div className="c-mfgrid">
                  <div className="c-mfield">
                    <label htmlFor="apName">
                      Full name <span className="req">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      type="text"
                      id="apName"
                      autoComplete="name"
                      required
                      value={apName}
                      onChange={(e) => setApName(e.target.value)}
                    />
                  </div>
                  <div className="c-mfield">
                    <label htmlFor="apEmail">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="apEmail"
                      autoComplete="email"
                      required
                      value={apEmail}
                      onChange={(e) => setApEmail(e.target.value)}
                    />
                  </div>
                  <div className="c-mfield">
                    <label htmlFor="apPhone">
                      Phone <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="apPhone"
                      autoComplete="tel"
                      required
                      value={apPhone}
                      onChange={(e) => setApPhone(e.target.value)}
                    />
                  </div>
                  <div className="c-mfield">
                    <label htmlFor="apLocation">
                      Current city / location <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="apLocation"
                      autoComplete="address-level2"
                      required
                      value={apLocation}
                      onChange={(e) => setApLocation(e.target.value)}
                    />
                  </div>
                  <div className="c-mfield">
                    <label htmlFor="apExp">Years of experience</label>
                    <select id="apExp" value={apExp} onChange={(e) => setApExp(e.target.value)}>
                      <option value="">Select</option>
                      <option value="Fresh graduate / no experience">Fresh graduate / no experience</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1–2 years">1–2 years</option>
                      <option value="3–5 years">3–5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                  <div className="c-mfield">
                    <label htmlFor="apNotice">Availability / notice period</label>
                    <select id="apNotice" value={apNotice} onChange={(e) => setApNotice(e.target.value)}>
                      <option value="">Select</option>
                      <option value="Immediately available">Immediately available</option>
                      <option value="1–2 weeks">1–2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="More than 1 month">More than 1 month</option>
                    </select>
                  </div>
                  <div className="c-mfield">
                    <label htmlFor="apLink">LinkedIn / Portfolio URL</label>
                    <input
                      type="url"
                      id="apLink"
                      placeholder="https://"
                      value={apLink}
                      onChange={(e) => setApLink(e.target.value)}
                    />
                  </div>
                  <div className="c-mfield">
                    <label htmlFor="apSalary">Expected salary (optional)</label>
                    <input
                      type="text"
                      id="apSalary"
                      placeholder="e.g. PKR 120,000/month"
                      value={apSalary}
                      onChange={(e) => setApSalary(e.target.value)}
                    />
                  </div>
                  <div className="c-mfield full">
                    <label htmlFor="apSource">How did you hear about this role? (optional)</label>
                    <select id="apSource" value={apSource} onChange={(e) => setApSource(e.target.value)}>
                      <option value="">Select</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="SpeckPro website">SpeckPro website</option>
                      <option value="Referral">Referral from someone at SpeckPro</option>
                      <option value="Job board">Job board (Indeed, Rozee, etc.)</option>
                      <option value="Social media">Social media</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="c-mfield full">
                    <label htmlFor="apMsg">
                      Why you&rsquo;re a good fit for this role <span className="req">*</span>
                    </label>
                    <textarea
                      id="apMsg"
                      required
                      placeholder="A short summary of your relevant experience and why this role interests you."
                      value={apMsg}
                      onChange={(e) => setApMsg(e.target.value)}
                    />
                  </div>
                </div>

                {showError && (
                  <p className="c-merr show">
                    Please fill in all required fields with a valid email before submitting.
                  </p>
                )}
                {submitError && <p className="c-merr show">{submitError}</p>}

                <div className="c-mfoot">
                  <button type="submit" className="c-btn c-btn--pri" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Submit Application"}
                    <ArrowIcon />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="c-msuccess show">
              <div className="c-msuccess__ic">
                <CheckIcon />
              </div>
              <h3>Application sent</h3>
              <p>
                Your application has been received by our hiring team. We&rsquo;ll review it and
                get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
