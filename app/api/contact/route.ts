import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  needCall?: string;
  startLocation?: string;
  nationality?: string;
  contactTime?: string;
  message?: string;
};

const transporter = nodemailer.createTransport({
  host: "lax028.hawkhost.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@demotempwebsite.co.in",
    pass: "bP@$Eb}yuCxtKG.V",
  },
});

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const {
      fullName = "",
      email = "",
      phone = "",
      company = "",
      needCall = "",
      startLocation = "",
      nationality = "",
      contactTime = "",
      message = "",
    } = body;

    if (!fullName.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      return NextResponse.json(
        { error: "Full name, email, phone, and message are required." },
        { status: 400 }
      );
    }

    const safe = {
      fullName: escapeHtml(fullName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      company: escapeHtml(company || "N/A"),
      needCall: escapeHtml(needCall || "N/A"),
      startLocation: escapeHtml(startLocation || "N/A"),
      nationality: escapeHtml(nationality || "N/A"),
      contactTime: escapeHtml(contactTime || "N/A"),
      message: escapeHtml(message),
    };

    const adminSubject = `New Contact Form Request - ${fullName}`;
    const adminText = [
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company || "N/A"}`,
      `Need Call: ${needCall || "N/A"}`,
      `Start Location: ${startLocation || "N/A"}`,
      `Nationality: ${nationality || "N/A"}`,
      `Contact Time: ${contactTime || "N/A"}`,
      "",
      "Message:",
      message,
    ].join("\n");
    const adminHtml = `
      <div style="font-family:Segoe UI,Arial,sans-serif;background:#f8fafc;padding:24px;">
        <table style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;padding:24px;">
          <tr>
            <td>
              <h2 style="margin:0 0 8px;color:#0f172a;">New Contact Form Request</h2>
              <p style="margin:0 0 20px;color:#64748b;">A new inquiry was submitted from the website.</p>
            </td>
          </tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Name:</strong> ${safe.fullName}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Email:</strong> ${safe.email}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Phone:</strong> ${safe.phone}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Company:</strong> ${safe.company}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Need Call:</strong> ${safe.needCall}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Start Location:</strong> ${safe.startLocation}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Nationality:</strong> ${safe.nationality}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Contact Time:</strong> ${safe.contactTime}</td></tr>
          <tr><td style="padding:12px 0;border-top:1px solid #e2e8f0;"><strong>Message:</strong><br/><div style="margin-top:8px;white-space:pre-line;color:#334155;">${safe.message}</div></td></tr>
        </table>
      </div>
    `;

    const thankYouSubject = "Thank you for contacting us";
    const thankYouText = [
      `Hi ${fullName},`,
      "",
      "Thank you for contacting us. We have received your request successfully.",
      "Our team will review your details and get back to you shortly.",
      "",
      "Best regards,",
      "Support Team",
    ].join("\n");
    const thankYouHtml = `
      <div style="font-family:Segoe UI,Arial,sans-serif;background:#f8fafc;padding:24px;">
        <table style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="background:#0f172a;color:#ffffff;padding:18px 24px;font-size:18px;font-weight:600;">
              Thank You for Your Request
            </td>
          </tr>
          <tr>
            <td style="padding:24px;color:#334155;line-height:1.65;">
              <p style="margin:0 0 12px;">Hi ${safe.fullName},</p>
              <p style="margin:0 0 12px;">
                We have received your request successfully. Our team will review your details and reach out to you shortly.
              </p>
              <p style="margin:0 0 16px;">
                If you need immediate support, simply reply to this email and we will assist you.
              </p>
              <p style="margin:0;color:#0f172a;font-weight:600;">Support Team</p>
            </td>
          </tr>
        </table>
      </div>
    `;

    await Promise.all([
      transporter.sendMail({
        from: "info@demotempwebsite.co.in",
        to: "aliinshad711@gmail.com",
        replyTo: email,
        subject: adminSubject,
        text: adminText,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: "info@demotempwebsite.co.in",
        to: email,
        subject: thankYouSubject,
        text: thankYouText,
        html: thankYouHtml,
      }),
    ]);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
