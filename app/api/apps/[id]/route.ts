import { NextResponse } from "next/server";
import { deleteApp, updateApp } from "@/lib/apps";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const form = await req.formData();
  const method = String(form.get("_method") ?? "").toUpperCase();

  if (method === "PUT") {
    const name = String(form.get("name") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();
    const download_url = String(form.get("download_url") ?? "").trim();

    if (!name || !description || !download_url) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    await updateApp(id, { name, description, download_url });
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (method === "DELETE") {
    await deleteApp(id);
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return new NextResponse("Unsupported _method", { status: 400 });
}