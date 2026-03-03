import { NextResponse } from "next/server";
import { setAuthCookie, clearAuthCookie } from "@/lib/adminAuth";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return new NextResponse("Missing ADMIN_PASSWORD", { status: 500 });
  }

  if (password !== expected) {
    clearAuthCookie();
    return NextResponse.redirect(new URL("/admin/login?error=1", req.url));
  }

  setAuthCookie();
  return NextResponse.redirect(new URL("/admin", req.url));
}
