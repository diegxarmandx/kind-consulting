import nodemailer from "nodemailer";
import { contact } from "@/lib/siteContent";

export const runtime = "nodejs";

type ConsultationPayload = {
  name?: string;
  email?: string;
  phone?: string;
  preferredContact?: string;
  service?: string;
  timeline?: string;
  message?: string;
};

const requiredEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

function clean(value: unknown, maxLength = 1000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let payload: ConsultationPayload;

  try {
    payload = (await request.json()) as ConsultationPayload;
  } catch {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 180);
  const phone = clean(payload.phone, 60);
  const preferredContact = clean(payload.preferredContact, 80);
  const service = clean(payload.service, 140);
  const timeline = clean(payload.timeline, 140);
  const message = clean(payload.message, 1800);

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please include your name, email, and a short message." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    return Response.json(
      {
        error:
          "The form is ready, but email delivery is not configured yet. Please email KINdVibezOnly@gmail.com directly."
      },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const to = process.env.CONTACT_TO_EMAIL || contact.email;
  const from = process.env.SMTP_FROM || process.env.SMTP_USER || contact.email;

  try {
    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `Free Consultation Request from ${name}`,
      text: [
        "New free consultation request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Preferred contact: ${preferredContact || "Not provided"}`,
        `Service interest: ${service || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #17343a; line-height: 1.6;">
          <h2 style="color: #135361;">New free consultation request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Preferred contact:</strong> ${escapeHtml(preferredContact || "Not provided")}</p>
          <p><strong>Service interest:</strong> ${escapeHtml(service || "Not provided")}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(timeline || "Not provided")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    });
  } catch {
    return Response.json(
      {
        error:
          "The form could not send right now. Please email KINdVibezOnly@gmail.com directly."
      },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
