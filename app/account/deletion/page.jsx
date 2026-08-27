"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../../../lib/siteConfig";

// This page is entirely self-contained on purpose (no separate component
// files) — it's a standalone utility page, not part of the shared design
// system's page templates. It still uses the site's shared header/footer
// automatically (via app/layout.jsx), and reuses the same CSS classes
// (.c-pgbanner, .c-delform, .c-steps, .c-reten, etc. — see globals.css)
// so it looks consistent with the rest of the site.
//
// Note: because this file needs client-side form state, it can't export
// Next's `metadata` (that API is server-only). The <title> below is set
// manually on mount instead as a lightweight substitute.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AccountDeletionPage() {
  useEffect(() => {
    document.title = "Delete Your Account — " + siteConfig.name;
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const emailValid = EMAIL_RE.test(trimmedEmail);

    if (!trimmedName || !emailValid || !confirmed) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const bodyLines = [
      "Name: " + trimmedName,
      "Email: " + trimmedEmail,
      phone.trim() ? "Phone: " + phone.trim() : null,
      reason ? "Reason: " + reason : null,
      notes.trim() ? "Notes: " + notes.trim() : null,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto =
      `mailto:${siteConfig.contact.email}` +
      `?subject=${encodeURIComponent("Account Deletion Request — " + trimmedName)}` +
      `&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <>
      {/* ============ PAGE BANNER ============ */}
      <section className="c-pgbanner c-void">
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
        <div className="c-w">
          <span className="c-cap">Data &amp; Privacy</span>
          <h1>Delete Your Account</h1>
          <p>
            Fill out the form below to permanently delete your account and its associated data.
            We&rsquo;ll verify your request and confirm by email once it&rsquo;s complete.
          </p>
        </div>
      </section>

      {/* ============ DELETION FORM ============ */}
      <section className="c-sec" id="delete-form">
        <div className="c-w" style={{ maxWidth: 820 }}>
          {!submitted ? (
            <form className="c-delform" onSubmit={handleSubmit} noValidate>
              <div className="c-fgrid">
                <div className="c-field">
                  <label htmlFor="fName">
                    Full name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fName"
                    name="name"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="c-field">
                  <label htmlFor="fEmail">
                    Account email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="fEmail"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="c-field">
                  <label htmlFor="fPhone">Phone number (optional)</label>
                  <input
                    type="tel"
                    id="fPhone"
                    name="phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="c-field">
                  <label htmlFor="fReason">Reason (optional)</label>
                  <select
                    id="fReason"
                    name="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  >
                    <option value="">Prefer not to say</option>
                    <option value="Not using it anymore">Not using it anymore</option>
                    <option value="Privacy concerns">Privacy concerns</option>
                    <option value="Found an alternative">Found an alternative</option>
                    <option value="Too many notifications">Too many notifications</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="c-field full">
                  <label htmlFor="fNotes">Anything else we should know? (optional)</label>
                  <textarea
                    id="fNotes"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              <div className="c-confirm">
                <input
                  type="checkbox"
                  id="fConfirm"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  required
                />
                <label htmlFor="fConfirm">
                  <b>I understand this permanently deletes my account.</b> All profile information
                  and account data will be removed and this cannot be undone.
                </label>
              </div>

              {showError && (
                <p className="c-formerr show">
                  Please fill in your name and email, and confirm you understand this action is
                  permanent.
                </p>
              )}

              <div className="c-formfoot">
                <button type="submit" className="c-btn c-btn--pri">
                  Confirm Deletion
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
                <span style={{ fontSize: ".82rem", color: "var(--ci2)" }}>
                  Takes less than a minute.
                </span>
              </div>
            </form>
          ) : (
            <div className="c-delform">
              <div className="c-success show">
                <div className="c-success__ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3>Request received</h3>
                <p>
                  We&rsquo;ve opened an email to our support team with your details. Once we
                  verify your request, your account and its data will be permanently deleted
                  within 30 days, and you&rsquo;ll get a confirmation email.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============ WHAT GETS DELETED ============ */}
      <section className="c-sec" id="what-happens" style={{ background: "var(--cm)" }}>
        <div className="c-w" style={{ maxWidth: 1000 }}>
          <div className="c-h">
            <span className="c-cap">What happens next</span>
            <h2>What gets deleted, and what we keep</h2>
            <p>
              Deleting your account removes your profile and account content. A small set of
              records may be kept for a limited time where we&rsquo;re legally required to.
            </p>
          </div>

          <div className="c-reten">
            <div className="c-reten__col del">
              <h4>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Deleted immediately
              </h4>
              <ul>
                <li>
                  <b>Profile information</b>Name, email, phone number, and any preferences.
                </li>
                <li>
                  <b>Account content</b>Anything you created or saved under your account.
                </li>
                <li>
                  <b>Session data</b>Notification tokens, active sessions, and saved devices.
                </li>
              </ul>
            </div>
            <div className="c-reten__col keep">
              <h4>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V8a5 5 0 0 1 10 0v3" />
                </svg>
                Retained for a limited time
              </h4>
              <ul>
                <li>
                  <b>Billing records</b>Kept where required for tax, accounting, or
                  fraud-prevention obligations.
                </li>
                <li>
                  <b>Anonymized analytics</b>Aggregated usage data that no longer identifies you.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="c-sec" id="timeline">
        <div className="c-w" style={{ maxWidth: 1000 }}>
          <div className="c-h">
            <span className="c-cap">Timeline</span>
            <h2>How long it takes</h2>
          </div>
          <div className="c-steps">
            <div className="c-step">
              <div className="c-step__num">01</div>
              <div className="c-step__body">
                <h4>Request received instantly</h4>
                <p>
                  The moment you submit the form, your request is logged and your account is
                  flagged for deletion.
                </p>
              </div>
            </div>
            <div className="c-step">
              <div className="c-step__num">02</div>
              <div className="c-step__body">
                <h4>Data removed within 30 days</h4>
                <p>
                  Your profile and content are fully removed from active systems and backups
                  within 30 days, aside from the limited records described above.
                </p>
              </div>
            </div>
            <div className="c-step">
              <div className="c-step__num">03</div>
              <div className="c-step__body">
                <h4>Confirmation email sent</h4>
                <p>
                  You&rsquo;ll receive a final email at the address you provided once deletion is
                  complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
