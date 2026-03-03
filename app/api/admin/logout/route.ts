import { NextResponse } from "next/server";
import { clearAuthCookie } from "@/lib/adminAuth";

export async function POST(req: Request) {
  clearAuthCookie();
  return NextResponse.redirect(new URL("/admin/login", req.url));
}