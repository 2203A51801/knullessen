"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-sm rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
        <h1 className="text-2xl font-semibold tracking-tight text-center">Admin Login</h1>
        <p className="mt-2 text-sm text-zinc-400 text-center">
          Enter the admin password to continue.
        </p>

        {error && (
          <div className="mt-4 rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-200 ring-1 ring-red-500/30">
            Invalid password. Please try again.
          </div>
        )}

        <form action="/api/admin/login" method="post" className="mt-6 space-y-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
            required
            autoFocus
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15"
          >
            Log in
          </button>
        </form>
      </div>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}