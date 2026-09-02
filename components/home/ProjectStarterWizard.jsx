"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "../../lib/siteConfig";

const SERVICE_OPTIONS = [
  { v: "Web Development", label: "Web Development", sub: "Websites, e-commerce, custom apps" },
  { v: "UI/UX Design", label: "UI/UX Design", sub: "Wireframes, prototypes, interfaces" },
  { v: "Mobile App Development", label: "Mobile Apps", sub: "iOS, Android, cross-platform" },
  { v: "AI & Automation", label: "AI & Automation", sub: "Connected devices, smart platforms" },
  { v: "Digital Transformation", label: "Digital Transformation", sub: "ERP, HR, finance, CRM systems" },
  { v: "Digital Marketing", label: "Digital Marketing", sub: "SEO, PPC, social, content" },
  { v: "Other", label: "Other", sub: "Tell us about it in step 3" },
];

const STEP_LABELS = ["Service", "Scope", "Describe", "Review"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function tierFor(team, mode) {
  const scale = mode === "full" ? team + 2 : team;
  if (scale <= 3) return { tier: "Solo Sprint", sub: "1–3 specialists" };
  if (scale <= 8) return { tier: "Core Team", sub: "3–8 specialists" };
  return { tier: "Full Squad", sub: "9+ specialists" };
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 13l4 4L19 7" />
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ProjectStarterWizard() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [mode, setMode] = useState("lean");
  const [team, setTeam] = useState(4);
  const [weeks, setWeeks] = useState(8);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [showServiceError, setShowServiceError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [success, setSuccess] = useState(null); // null | "WhatsApp" | "Email"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { tier, sub } = useMemo(() => tierFor(team, mode), [team, mode]);

  const summary =
    `Hi SpeckPro, I'd like to discuss a project.\n` +
    `Service: ${service || "Not specified"}\n` +
    `Engagement: ${tier}, ${team} ${team === 1 ? "person" : "people"}, ${weeks} weeks\n` +
    `Email: ${email || "Not provided"}\n` +
    `Details: ${description.trim() || "N/A"}`;

  const waHref = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(summary)}`;

  // Sends the submission to our own API route, which emails it via Gmail
  // SMTP — this is what actually guarantees the submission arrives,
  // rather than depending on the visitor's own email client being set up
  // and them actually pressing send.
  async function handleSubmit() {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/project-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, tier, team, weeks, description, email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSuccess("Email");
    } catch (err) {
      setSubmitError(
        "Something went wrong sending your request — please try WhatsApp instead, or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function goNext() {
    if (step === 1 && !service) {
      setShowServiceError(true);
      return;
    }
    setShowServiceError(false);

    if (step === 3 && !EMAIL_RE.test(email.trim())) {
      setShowEmailError(true);
      return;
    }
    setShowEmailError(false);

    if (step < 4) setStep(step + 1);
  }

  function goBack() {
    if (step > 1) setStep(step - 1);
  }

  function reset() {
    setStep(1);
    setService("");
    setMode("lean");
    setTeam(4);
    setWeeks(8);
    setDescription("");
    setEmail("");
    setShowServiceError(false);
    setShowEmailError(false);
    setSuccess(null);
  }

  if (success) {
    return (
      <div className="c-wiz" id="cWiz">
        <div className="c-wiz__panel">
          <div className="c-wiz__success in">
            <div className="c-wiz__check">
              <CheckIcon />
            </div>
            <span className="c-cap c-cap--n" style={{ justifyContent: "center" }}>
              Request Received
            </span>
            <h3>You&rsquo;re all set.</h3>
            <p>
              Your requirements have been received — a member of the SpeckPro team will get back
              to you within 24 hours to start the conversation.
            </p>
            <div className="c-wiz__tag">
              <span className="dot" />
              Sent via {success}
            </div>
            <div className="c-actions">
              <a className="c-btn c-btn--pri" href="#ch-work">
                See Our Work
                <ArrowIcon />
              </a>
              <button type="button" className="c-btn c-btn--ghost" onClick={reset}>
                Start Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="c-wiz" id="cWiz">
      <div className="c-wiz__head">
        <span className="c-cap c-cap--n" style={{ justifyContent: "center" }}>
          Start Here · 2 Minutes
        </span>
        <h3>Tell us what you&rsquo;re building.</h3>
        <p>Four quick steps to prep your first call — nothing is sent until you choose to send it.</p>
      </div>

      <div className="c-wiz__panel">
        <div className="c-wiz__steps" role="list" aria-label="Progress">
          {STEP_LABELS.map((label, i) => {
            const n = i + 1;
            return (
              <div
                key={label}
                className={`c-wiz__step${step === n ? " active" : ""}${step > n ? " done" : ""}`}
              >
                <span className="n">{String(n).padStart(2, "0")}</span>
                <span className="t">{label}</span>
              </div>
            );
          })}
        </div>

        {step === 1 && (
          <div className="c-wiz__body">
            <span className="c-wiz__lbl">Step 01 · Service</span>
            <h4>Which service are you looking for?</h4>
            <p className="c-wiz__sub">We&rsquo;ll tailor the rest of this to your answer.</p>
            <div
              className="c-wiz__grid"
              style={showServiceError ? { outline: "1px solid #FFB020", borderRadius: 14 } : undefined}
            >
              {SERVICE_OPTIONS.map((opt) => (
                <button
                  key={opt.v}
                  type="button"
                  className={service === opt.v ? "sel" : undefined}
                  onClick={() => {
                    setService(opt.v);
                    setShowServiceError(false);
                  }}
                >
                  <b>{opt.label}</b>
                  <span>{opt.sub}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="c-wiz__body">
            <span className="c-wiz__lbl">Step 02 · Scope</span>
            <h4>How big is this, roughly?</h4>
            <p className="c-wiz__sub">
              Directional only — every project gets a real scoping call before anything is
              estimated in detail.
            </p>
            <div className="c-tog" role="group" aria-label="Engagement style">
              <button type="button" aria-pressed={mode === "lean"} onClick={() => setMode("lean")}>
                Lean &amp; Fast
              </button>
              <button type="button" aria-pressed={mode === "full"} onClick={() => setMode("full")}>
                Full Build
              </button>
            </div>
            <div className="c-out">
              <b>{tier}</b>
              <i>{sub}</i>
            </div>
            <div className="c-sl">
              <div className="c-sl__r">
                <label htmlFor="teamR">Team size</label>
                <output htmlFor="teamR">
                  {team} {team === 1 ? "person" : "people"}
                </output>
              </div>
              <input
                id="teamR"
                type="range"
                min={1}
                max={20}
                step={1}
                value={team}
                onChange={(e) => setTeam(Number(e.target.value))}
              />
            </div>
            <div className="c-sl">
              <div className="c-sl__r">
                <label htmlFor="weekR">Rough timeline</label>
                <output htmlFor="weekR">{weeks} weeks</output>
              </div>
              <input
                id="weekR"
                type="range"
                min={2}
                max={40}
                step={1}
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="c-wiz__body">
            <span className="c-wiz__lbl">Step 03 · Describe</span>
            <h4>What are you trying to build?</h4>
            <p className="c-wiz__sub">
              A few sentences is enough — more context just means a sharper first call.
            </p>

            <label htmlFor="wizEmail" className="c-wiz__inputlbl">
              Your email <span style={{ color: "var(--cw)" }}>*</span>
            </label>
            <input
              type="email"
              id="wizEmail"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setShowEmailError(false);
              }}
              style={showEmailError ? { borderColor: "#FFB020" } : undefined}
            />
            {showEmailError && (
              <p className="c-wiz__note" style={{ color: "#C24545", marginTop: 8 }}>
                Please enter a valid email so we can get back to you.
              </p>
            )}

            <label htmlFor="wizDesc" className="c-wiz__inputlbl">
              Project details
            </label>
            <textarea
              id="wizDesc"
              rows={5}
              placeholder="e.g. We need a customer-facing mobile app to replace our current booking spreadsheet…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        )}

        {step === 4 && (
          <div className="c-wiz__body">
            <span className="c-wiz__lbl">Step 04 · Review</span>
            <h4>Here&rsquo;s what we&rsquo;ve got.</h4>
            <p className="c-wiz__sub">
              Double check the details below, then submit — we&rsquo;ll take it from there.
            </p>
            <div className="c-wiz__rev">
              <div className="r">
                <span>Service</span>
                <span>{service || "Not selected"}</span>
              </div>
              <div className="r">
                <span>Engagement</span>
                <span>
                  {tier} · {team} {team === 1 ? "person" : "people"}, {weeks} weeks
                </span>
              </div>
              <div className="r">
                <span>Email</span>
                <span>{email || "Not provided"}</span>
              </div>
              <div className="r">
                <span>Details</span>
                <span>{description.trim() || "No description added"}</span>
              </div>
            </div>
          </div>
        )}

        <div className="c-wiz__nav">
          <span className="c-wiz__auto">Nothing is sent until you submit</span>

          {step < 4 ? (
            <div className="c-wiz__btns">
              {step > 1 && (
                <button type="button" className="c-btn c-btn--ghost" onClick={goBack}>
                  Back
                </button>
              )}
              <button type="button" className="c-btn c-btn--pri" onClick={goNext}>
                Continue
                <ArrowIcon />
              </button>
            </div>
          ) : (
            <div className="c-wiz__btns">
              <button type="button" className="c-btn c-btn--ghost" onClick={goBack} disabled={isSubmitting}>
                Back
              </button>
              <a
                className="c-btn c-btn--ghost"
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSuccess("WhatsApp")}
              >
                Send via WhatsApp
              </a>
              <button
                type="button"
                className="c-btn c-btn--pri"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Submit Request"}
                <ArrowIcon />
              </button>
              {submitError && <span className="c-wiz__note" style={{ color: "#C24545" }}>{submitError}</span>}
              <span className="c-wiz__note">
                Submitting sends your answers directly to our team — WhatsApp opens the app with
                your answers pre-filled instead.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
