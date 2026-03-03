import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "knullessen_admin";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Always allow the login page and auth API routes
  if (pathname.startsWith("/admin/login")) return NextResponse.next();
  if (pathname.startsWith("/api/admin/login")) return NextResponse.next();
  if (pathname.startsWith("/api/admin/logout")) return NextResponse.next();

  if (pathname.startsWith("/admin")) {
    const cookie = req.cookies.get(COOKIE_NAME)?.value;
    if (!cookie) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};