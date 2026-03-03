"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function LoginForm() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10">
        <h1 className="text-center text-2xl font-semibold tracking-tight">
          Admin Login
        </h1>

        {error && (
          <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Incorrect password. Please try again.
          </p>
        )}

        <form action="/api/admin/login" method="post" className="space-y-4">
          <label className="block">
            <span className="text-sm text-zinc-300">Password</span>
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="mt-1 block w-full rounded-xl border-0 bg-white/10 px-4 py-2.5 text-white placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/25"
              placeholder="Enter admin password"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-zinc-200"
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