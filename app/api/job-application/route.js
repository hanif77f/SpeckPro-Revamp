// app/api/job-application/route.js
//
// Receives Career page job applications and emails them via Gmail SMTP —
// same pattern as app/api/project-inquiry/route.js. Uses the same Gmail
// credentials already set up for that route.
//
// REQUIRED SETUP (reuses what's already in .env.local for the Project
// Starter Wizard — no new setup needed unless you want applications
// routed to a different inbox than general enquiries):
//   GMAIL_USER=your-sending-account@gmail.com
//   GMAIL_APP_PASSWORD=your16charapppassword
//   NOTIFY_EMAIL=where-you-want-to-receive-these@gmail.com
//
// OPTIONAL: add HR_NOTIFY_EMAIL to .env.local if you want job
// applications to land in a different inbox than general project
// enquiries (e.g. a dedicated hr@ address). If it's not set, this falls
// back to NOTIFY_EMAIL automatically.

import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      jobTitle,
      jobOffice,
      name,
      email,
      phone,
      location,
      experience,
      notice,
      link,
      salary,
      source,
      message,
    } = body;

    // Basic server-side validation — mirrors the wizard's own checks,
    // never trust the client alone.
    if (!name || !email || !phone || !location || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const notifyTo = process.env.HR_NOTIFY_EMAIL || process.env.NOTIFY_EMAIL;

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !notifyTo) {
      console.error(
        "Job application email not sent: GMAIL_USER, GMAIL_APP_PASSWORD, or a notify address (HR_NOTIFY_EMAIL / NOTIFY_EMAIL) is missing from environment variables."
      );
      return Response.json(
        { error: "Email is not configured on the server yet." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const optionalLines = [
      experience ? `Years of experience: ${experience}` : null,
      notice ? `Availability / notice period: ${notice}` : null,
      link ? `LinkedIn/Portfolio: ${link}` : null,
      salary ? `Expected salary: ${salary}` : null,
      source ? `Heard about us via: ${source}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: `"SpeckPro Website" <${process.env.GMAIL_USER}>`,
      to: notifyTo,
      // Lets you hit "Reply" and respond straight to the candidate.
      replyTo: email,
      subject: `New Job Application — ${jobTitle || "General Application"} — ${name}`,
      text:
        `New job application from the website.\n\n` +
        `Role: ${jobTitle || "General Application"} (${jobOffice || "N/A"})\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Current location: ${location}\n` +
        (optionalLines ? optionalLines + "\n" : "") +
        `\nWhy they're a good fit:\n${message.trim()}\n`,
      html:
        `<h2>New Job Application</h2>` +
        `<p><b>Role:</b> ${escapeHtml(jobTitle || "General Application")} (${escapeHtml(jobOffice || "N/A")})</p>` +
        `<p><b>Name:</b> ${escapeHtml(name)}</p>` +
        `<p><b>Email:</b> ${escapeHtml(email)}</p>` +
        `<p><b>Phone:</b> ${escapeHtml(phone)}</p>` +
        `<p><b>Current location:</b> ${escapeHtml(location)}</p>` +
        (experience ? `<p><b>Years of experience:</b> ${escapeHtml(experience)}</p>` : "") +
        (notice ? `<p><b>Availability / notice period:</b> ${escapeHtml(notice)}</p>` : "") +
        (link ? `<p><b>LinkedIn/Portfolio:</b> ${escapeHtml(link)}</p>` : "") +
        (salary ? `<p><b>Expected salary:</b> ${escapeHtml(salary)}</p>` : "") +
        (source ? `<p><b>Heard about us via:</b> ${escapeHtml(source)}</p>` : "") +
        `<p><b>Why they're a good fit:</b><br>${escapeHtml(message.trim()).replace(/\n/g, "<br>")}</p>`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Job application email failed to send:", err);
    return Response.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
