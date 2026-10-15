import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    { status: "ok", endpoint: "/api/contact", methods: ["POST"] },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Geçersiz istek formatı. JSON verisi bekleniyor." },
        { status: 400 }
      );
    }

    const { name, email, phone, message, website, formType } = body || {};

    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanPhone = typeof phone === "string" ? phone.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";
    const cleanWebsite = typeof website === "string" ? website.trim() : "";
    const cleanFormType = formType || "contact";

    // 1. Validation
    const isNewsletter = cleanFormType === "newsletter";

    if (!cleanEmail || !cleanEmail.includes("@")) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi zorunludur." },
        { status: 400 }
      );
    }

    if (!isNewsletter && !cleanName) {
      return NextResponse.json(
        { error: "Ad Soyad alanı zorunludur." },
        { status: 400 }
      );
    }

    // 2. Save submission to database (Robust & Isolated)
    let isSavedToDb = false;
    try {
      if (process.env.DATABASE_URL) {
        await prisma.contactMessage.create({
          data: {
            name: cleanName || null,
            email: cleanEmail.toLowerCase(),
            phone: cleanPhone || null,
            website: cleanWebsite || null,
            message: cleanMessage || null,
            formType: cleanFormType,
          },
        });
        isSavedToDb = true;
      } else {
        console.warn("[Contact API] DATABASE_URL is not set. Skipping DB submission save.");
      }
    } catch (dbError) {
      console.error("[Contact API] Failed to save contact submission to database:", dbError);
    }

    // 3. Prepare email subject and contents
    let subject = "";
    if (cleanFormType === "lead") {
      subject = `🔍 Yeni Analiz Talebi - ${cleanName || cleanEmail}`;
    } else if (cleanFormType === "newsletter") {
      subject = `📰 Yeni Bülten Aboneliği - ${cleanEmail}`;
    } else if (cleanFormType === "audit") {
      subject = `📊 Yeni Audit Talebi - ${cleanName || cleanEmail}`;
    } else {
      subject = `📩 Yeni İletişim Formu - ${cleanName || cleanEmail}`;
    }

    // HTML email template
    let htmlContent = "";
    if (isNewsletter) {
      htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0f25; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
          <div style="background: linear-gradient(135deg, #7c3aed, #3b82f6); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #ffffff;">
              📰 Yeni Bülten Aboneliği
            </h1>
          </div>
          
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold; width: 140px;">E-posta</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
                  <a href="mailto:${cleanEmail}" style="color: #818cf8; text-decoration: none;">${cleanEmail}</a>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 16px 32px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05);">
            Bu bildirim ekimdemirci.com web sitesinden otomatik olarak gönderilmiştir.
          </div>
        </div>
      `;
    } else {
      htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0f25; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
          <div style="background: linear-gradient(135deg, #7c3aed, #3b82f6); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #ffffff;">
              ${cleanFormType === "lead" ? "🔍 Yeni Analiz Talebi" : cleanFormType === "audit" ? "📊 Yeni Audit Talebi" : "📩 Yeni İletişim Mesajı"}
            </h1>
          </div>
          
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold; width: 140px;">Ad Soyad</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold;">E-posta</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
                  <a href="mailto:${cleanEmail}" style="color: #818cf8; text-decoration: none;">${cleanEmail}</a>
                </td>
              </tr>
              ${
                cleanPhone
                  ? `<tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold;">Telefon</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
                  <a href="tel:${cleanPhone}" style="color: #818cf8; text-decoration: none;">${cleanPhone}</a>
                </td>
              </tr>`
                  : ""
              }
              ${
                cleanWebsite
                  ? `<tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a78bfa; font-weight: bold;">Web Sitesi</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
                  <a href="${cleanWebsite.startsWith("http") ? cleanWebsite : "https://" + cleanWebsite}" style="color: #818cf8; text-decoration: none;" target="_blank" rel="noopener noreferrer">${cleanWebsite}</a>
                </td>
              </tr>`
                  : ""
              }
              ${
                cleanMessage
                  ? `<tr>
                <td style="padding: 12px 16px; color: #a78bfa; font-weight: bold; vertical-align: top;">Mesaj</td>
                <td style="padding: 12px 16px; color: #e2e8f0; line-height: 1.6;">${cleanMessage.replace(/\n/g, "<br>")}</td>
              </tr>`
                  : ""
              }
            </table>
          </div>
          
          <div style="padding: 16px 32px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05);">
            Bu bildirim ekimdemirci.com web sitesinden otomatik olarak gönderilmiştir.
          </div>
        </div>
      `;
    }

    // Plain text content
    let textContent = "";
    if (isNewsletter) {
      textContent = `Yeni Bülten Aboneliği\n${"=".repeat(40)}\nE-posta: ${cleanEmail}\n\n---\nBu mesaj ekimdemirci.com web sitesinden gönderilmiştir.`;
    } else {
      textContent = `${subject}\n${"=".repeat(40)}\nAd Soyad: ${cleanName}\nE-posta: ${cleanEmail}\n${cleanPhone ? `Telefon: ${cleanPhone}\n` : ""}${cleanWebsite ? `Web Sitesi: ${cleanWebsite}\n` : ""}${cleanMessage ? `\nMesaj:\n${cleanMessage}\n` : ""}\n---\nBu mesaj ekimdemirci.com web sitesinden gönderilmiştir.`;
    }

    // 4. Email Sending (Isolated & Resilient)
    const hasSmtpCredentials = Boolean(
      process.env.SMTP_USER && process.env.SMTP_PASS
    );
    let isEmailSent = false;

    if (hasSmtpCredentials) {
      try {
        const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
        const smtpPort = Number(process.env.SMTP_PORT) || 465;
        const smtpSecure =
          process.env.SMTP_SECURE !== undefined
            ? process.env.SMTP_SECURE === "true"
            : smtpPort === 465;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 10000,
        });

        const contactEmail = process.env.CONTACT_EMAIL || "ekmdmrci@gmail.com";

        await transporter.sendMail({
          from: `"Ekim Demirci Web Site" <${process.env.SMTP_FROM || process.env.SMTP_USER || contactEmail}>`,
          to: contactEmail,
          replyTo: cleanEmail,
          subject,
          text: textContent,
          html: htmlContent,
        });

        isEmailSent = true;
        console.log(`[Contact API] Email notification successfully sent to ${contactEmail}`);
      } catch (err: any) {
        console.error("[Contact API] Nodemailer email dispatch error:", err?.message || err);
      }
    } else {
      console.warn(
        "[Contact API] SMTP credentials (SMTP_USER / SMTP_PASS) not set. Email dispatch skipped."
      );
      if (process.env.NODE_ENV === "development") {
        console.log("\n================ [DEV MODE: Form Submission] ================");
        console.log(`Type: ${cleanFormType}`);
        console.log(`Subject: ${subject}`);
        console.log(textContent);
        console.log("==============================================================\n");
      }
    }

    // 5. Optional Webhook Notification (Discord / Slack / Telegram)
    if (process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `📬 **${subject}**\n- **Ad:** ${cleanName || "-"}\n- **E-posta:** ${cleanEmail}\n- **Telefon:** ${cleanPhone || "-"}\n- **Site:** ${cleanWebsite || "-"}\n- **Mesaj:** ${cleanMessage || "-"}`,
          }),
        }).catch((err) => console.error("[Contact API] Webhook failed:", err));
      } catch {
        // Ignore webhook error
      }
    }

    // 6. Return success response
    return NextResponse.json(
      {
        success: true,
        message: isNewsletter
          ? "Bülten aboneliğiniz başarıyla tamamlandı!"
          : "Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağım.",
        savedToDb: isSavedToDb,
        emailSent: isEmailSent,
        ...((!hasSmtpCredentials && !isSavedToDb)
          ? { warning: "Sunucu tarafında SMTP veya Veritabanı yapılandırması bekleniyor." }
          : {}),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Contact API] Unexpected error in form processing:", error);
    return NextResponse.json(
      {
        error: "İşlem sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        details: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}
