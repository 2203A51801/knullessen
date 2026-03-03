import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "knullessen_admin";

function getSecret() {
  const secret = process.env.ADMIN_COOKIE_SECRET;
  if (!secret) throw new Error("Missing ADMIN_COOKIE_SECRET");
  return secret;
}

export function isAuthed(): boolean {
  const c = cookies().get(COOKIE_NAME)?.value;
  if (!c) return false;

  // format: <sig>.<ts>
  const [sig, ts] = c.split(".");
  if (!sig || !ts) return false;

  const expected = crypto.createHmac("sha256", getSecret()).update(ts).digest("hex");

  // constant-time-ish compare
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

export function setAuthCookie() {
  const ts = Date.now().toString();
  const sig = crypto.createHmac("sha256", getSecret()).update(ts).digest("hex");

  cookies().set(COOKIE_NAME, `${sig}.${ts}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
}

export function clearAuthCookie() {
  cookies().set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
}