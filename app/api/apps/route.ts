import { NextResponse } from "next/server";
import { createApp } from "@/lib/apps";

export async function POST(req: Request) {
  const form = await req.formData();

  const name = String(form.get("name") ?? "").trim();
  const description = String(form.get("description") ?? "").trim();
  const download_url = String(form.get("download_url") ?? "").trim();

  if (!name || !description || !download_url) {
    return new NextResponse("Missing fields", { status: 400 });
  }

  await createApp({ name, description, download_url });

  return NextResponse.redirect(new URL("/admin", req.url));
}