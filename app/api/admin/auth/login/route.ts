import { NextRequest, NextResponse } from "next/server";
import { createAdminToken } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Geçersiz istek formatı." },
        { status: 400 }
      );
    }

    const { email, password } = body || {};

    const expectedEmail =
      process.env.ADMIN_EMAIL ||
      process.env.NEXT_PUBLIC_ADMIN_EMAIL ||
      "admin@ekimdemirci.com";
    const expectedPassword =
      process.env.ADMIN_PASSWORD ||
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
      "admin123";

    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanPassword = typeof password === "string" ? password : "";

    if (
      cleanEmail &&
      cleanPassword &&
      cleanEmail.toLowerCase() === expectedEmail.toLowerCase() &&
      cleanPassword === expectedPassword
    ) {
      const token = await createAdminToken(cleanEmail);

      const response = NextResponse.json(
        {
          success: true,
          message: "Yönetici girişi başarılı.",
          role: "ADMIN",
        },
        { status: 200 }
      );

      // Set HTTP-only secure session cookie
      response.cookies.set({
        name: "admin_session",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { error: "Geçersiz e-posta veya şifre." },
      { status: 401 }
    );
  } catch (error: any) {
    console.error("[Admin Auth API] Login error:", error);
    return NextResponse.json(
      { error: "Giriş işlemi sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
