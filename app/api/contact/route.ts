import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, website, formType } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Ad ve e-posta alanları zorunludur." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const contactEmail = process.env.CONTACT_EMAIL || "ekmdmrci@gmail.com";

    // Determine subject based on form type
    const subject =
      formType === "lead"
        ? `🔍 Yeni Analiz Talebi - ${name}`
        : `📩 Yeni İletişim Formu - ${name}`;

    // Build HTML email content
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0f25; color: #ffffff; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #7c3aed, #3b82f6); padding: 32px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; color: #ffffff;">
            ${formType === "lead" ? "🔍 Yeni Analiz Talebi" : "📩 Yeni İletişim Mesajı"}
          </h1>
        </div>
        
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold; width: 140px;">Ad Soyad</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold;">E-posta</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
                <a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold;">Telefon</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
                <a href="tel:${phone}" style="color: #818cf8; text-decoration: none;">${phone}</a>
              </td>
            </tr>`
                : ""
            }
            ${
              website
                ? `<tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold;">Web Sitesi</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
                <a href="${website}" style="color: #818cf8; text-decoration: none;" target="_blank">${website}</a>
              </td>
            </tr>`
                : ""
            }
            ${
              message
                ? `<tr>
              <td style="padding: 12px 16px; color: #a78bfa; font-weight: bold; vertical-align: top;">Mesaj</td>
              <td style="padding: 12px 16px; color: #e2e8f0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
            </tr>`
                : ""
            }
          </table>
        </div>
        
        <div style="padding: 16px 32px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05);">
          Bu mesaj ekimdemirci.com web sitesinden gönderilmiştir.
        </div>
      </div>
    `;

    // Plain text fallback
    const textContent = `
${formType === "lead" ? "Yeni Analiz Talebi" : "Yeni İletişim Mesajı"}
${"=".repeat(40)}

Ad Soyad: ${name}
E-posta: ${email}
${phone ? `Telefon: ${phone}` : ""}
${website ? `Web Sitesi: ${website}` : ""}
${message ? `\nMesaj:\n${message}` : ""}

---
Bu mesaj ekimdemirci.com web sitesinden gönderilmiştir.
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"Ekim Demirci Web Site" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Mesajınız başarıyla gönderildi!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
