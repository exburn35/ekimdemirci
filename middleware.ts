import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminToken } from "@/lib/adminAuth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Exclude public auth endpoints and login page
  if (
    pathname === "/admin/login" ||
    pathname === "/api/admin/auth/login" ||
    pathname === "/api/admin/auth/logout"
  ) {
    return NextResponse.next();
  }

  // 2. Extract and verify session token
  const token =
    request.cookies.get("admin_session")?.value ||
    request.cookies.get("admin_token")?.value ||
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  const isAuthenticated = await verifyAdminToken(token);

  // 3. Central Protection for ALL /api/admin/* routes
  if (pathname.startsWith("/api/admin")) {
    if (!isAuthenticated) {
      return NextResponse.json(
        {
          error: "Yetkisiz erişim. Oturum bulunamadı veya süresi doldu.",
          code: "UNAUTHORIZED",
        },
        { status: 401 }
      );
    }
    return NextResponse.next();
  }

  // 4. Central Protection for ALL /admin/* dashboard pages
  if (pathname.startsWith("/admin")) {
    if (!isAuthenticated) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
