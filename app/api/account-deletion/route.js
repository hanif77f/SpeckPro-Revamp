// app/api/account-deletion/route.js
//
// Receives Account Deletion page submissions and emails them via Gmail
// SMTP — same pattern as app/api/project-inquiry/route.js and
// app/api/job-application/route.js. Reuses the exact same Gmail
// credentials already set up for those two routes — no new .env.local
// values needed.

import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, notes } = body;

    // Basic server-side validation — never trust the client alone.
    if (!name || !email) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.NOTIFY_EMAIL) {
      console.error(
        "Account deletion email not sent: GMAIL_USER, GMAIL_APP_PASSWORD, or NOTIFY_EMAIL is missing from environment variables."
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

    await transporter.sendMail({
      from: `"SpeckPro Website" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      // Lets you hit "Reply" and respond straight to the person who
      // requested deletion.
      replyTo: email,
      subject: `Account Deletion Request — ${name}`,
      text:
        `New account deletion request from the website.\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        (phone ? `Phone: ${phone}\n` : "") +
        (reason ? `Reason: ${reason}\n` : "") +
        (notes ? `\nAdditional notes:\n${notes}\n` : ""),
      html:
        `<h2>Account Deletion Request</h2>` +
        `<p><b>Name:</b> ${escapeHtml(name)}</p>` +
        `<p><b>Email:</b> ${escapeHtml(email)}</p>` +
        (phone ? `<p><b>Phone:</b> ${escapeHtml(phone)}</p>` : "") +
        (reason ? `<p><b>Reason:</b> ${escapeHtml(reason)}</p>` : "") +
        (notes
          ? `<p><b>Additional notes:</b><br>${escapeHtml(notes).replace(/\n/g, "<br>")}</p>`
          : ""),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Account deletion email failed to send:", err);
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
