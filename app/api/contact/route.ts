import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, website, formType } = body;

    // Validate required fields based on formType
    const isNewsletter = formType === "newsletter";
    
    if (isNewsletter) {
      if (!email) {
        return NextResponse.json(
          { error: "E-posta alanı zorunludur." },
          { status: 400 }
        );
      }
    } else {
      if (!name || !email) {
        return NextResponse.json(
          { error: "Ad ve e-posta alanları zorunludur." },
          { status: 400 }
        );
      }
    }

    // 1. Try to save the submission to the database (robustly)
    let isSavedToDb = false;
    try {
      if (process.env.DATABASE_URL) {
        await prisma.contactMessage.create({
          data: {
            name: name || null,
            email,
            phone: phone || null,
            website: website || null,
            message: message || null,
            formType: formType || "contact",
          },
        });
        isSavedToDb = true;
      } else {
        console.warn("DATABASE_URL is not set. Skipping DB submission save.");
      }
    } catch (dbError) {
      // Don't crash the route if DB saving fails (e.g. database hasn't been pushed/migrated yet)
      console.error("Failed to save contact submission to database:", dbError);
    }

    // 2. Determine subject and contents based on form type
    let subject = "";
    if (formType === "lead") {
      subject = `🔍 Yeni Analiz Talebi - ${name}`;
    } else if (formType === "newsletter") {
      subject = `📰 Yeni Bülten Aboneliği - ${email}`;
    } else {
      subject = `📩 Yeni İletişim Formu - ${name}`;
    }

    // Build HTML email content
    let htmlContent = "";
    if (isNewsletter) {
      htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0f25; color: #ffffff; border-radius: 16px; overflow: hidden;">
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
                  <a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 16px 32px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.05);">
            Bu mesaj ekimdemirci.com web sitesinden gönderilmiştir.
          </div>
        </div>
      `;
    } else {
      htmlContent = `
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
    }

    // Plain text fallback
    let textContent = "";
    if (isNewsletter) {
      textContent = `
Yeni Bülten Aboneliği
${"=".repeat(40)}

E-posta: ${email}

---
Bu mesaj ekimdemirci.com web sitesinden gönderilmiştir.
      `.trim();
    } else {
      textContent = `
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
    }

    // 3. Email sending with local development fallback
    const isDev = process.env.NODE_ENV === "development";
    const hasSmtpCredentials = process.env.SMTP_USER && process.env.SMTP_PASS;

    if (isDev && !hasSmtpCredentials) {
      console.log("\n================ [DEVELOPMENT MODE: Form Submission] ================");
      console.log(`Form Type: ${formType || "contact"}`);
      console.log(`Subject: ${subject}`);
      console.log(`Email Content:\n${textContent}`);
      console.log("======================================================================\n");

      return NextResponse.json(
        { 
          message: "Mesajınız (Geliştirici Modu) başarıyla kaydedildi ve konsola yazdırıldı!",
          savedToDb: isSavedToDb
        },
        { status: 200 }
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

    // Send email
    await transporter.sendMail({
      from: `"Ekim Demirci Web Site" <${process.env.SMTP_USER || contactEmail}>`,
      to: contactEmail,
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json(
      { 
        message: "Mesajınız başarıyla gönderildi!",
        savedToDb: isSavedToDb
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("E-posta veya Form İşleme Hatası:", error);
    return NextResponse.json(
      { 
        error: "İşlem sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        details: error?.message || error
      },
      { status: 500 }
    );
  }
}
