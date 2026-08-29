// app/api/project-inquiry/route.js
//
// Receives Project Starter Wizard submissions and emails them via Gmail
// SMTP using Nodemailer. This is what replaces "open the visitor's email
// client and hope they hit send" with guaranteed server-side delivery.
//
// REQUIRED SETUP:
//   1. npm install nodemailer
//   2. Enable 2-Step Verification on the sending Gmail account, then
//      generate an App Password at myaccount.google.com/apppasswords
//   3. Add to .env.local (never commit this file, never paste it in
//      chat — treat every value in it as a real secret):
//        GMAIL_USER=your-sending-account@gmail.com
//        GMAIL_APP_PASSWORD=your16charapppassword
//        NOTIFY_EMAIL=where-you-want-to-receive-these@gmail.com
//   4. Restart the dev server after adding env vars.

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { service, tier, team, weeks, description, email } = body;

    // Basic server-side validation — never trust the client alone. The
    // wizard's own UI already prevents this, but a direct API call
    // (or a modified client) could skip that, so we check again here.
    if (!service || typeof service !== "string") {
      return Response.json({ error: "Missing required field: service" }, { status: 400 });
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email)) {
      return Response.json({ error: "Missing or invalid email" }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.NOTIFY_EMAIL) {
      console.error(
        "Project inquiry email not sent: GMAIL_USER, GMAIL_APP_PASSWORD, or NOTIFY_EMAIL is missing from environment variables."
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

    const teamLabel = team === 1 ? "1 person" : `${team} people`;

    await transporter.sendMail({
      from: `"SpeckPro Website" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      // Lets you hit "Reply" in your email client and have it go
      // straight to the customer, instead of back to your own sending
      // address.
      replyTo: email,
      subject: `New Project Enquiry — ${service}`,
      text:
        `New project starter submission from the website.\n\n` +
        `From: ${email}\n` +
        `Service: ${service}\n` +
        `Engagement: ${tier || "N/A"}, ${teamLabel}, ${weeks || "N/A"} weeks\n` +
        `Details:\n${description?.trim() || "N/A"}\n`,
      html:
        `<h2>New Project Enquiry</h2>` +
        `<p><b>From:</b> ${escapeHtml(email)}</p>` +
        `<p><b>Service:</b> ${escapeHtml(service)}</p>` +
        `<p><b>Engagement:</b> ${escapeHtml(tier || "N/A")}, ${teamLabel}, ${escapeHtml(String(weeks || "N/A"))} weeks</p>` +
        `<p><b>Details:</b><br>${escapeHtml(description?.trim() || "N/A").replace(/\n/g, "<br>")}</p>`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Project inquiry email failed to send:", err);
    return Response.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}

// Minimal HTML-escaping so submitted text can't break the email's markup
// or inject unintended HTML into it.
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
