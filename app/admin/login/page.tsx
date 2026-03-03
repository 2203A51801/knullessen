export default function AdminLoginPage() {
  return (
    <main className="max-w-md">
      <h1 className="text-2xl font-semibold tracking-tight">Admin login</h1>
      <p className="mt-2 text-sm text-zinc-300">
        Enter the admin password to continue.
      </p>

      <form action="/admin/login" method="post" className="mt-6 space-y-3">
        <input
          type="password"
          name="password"
          placeholder="Admin password"
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
          required
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-ember-500 px-4 py-3 text-sm font-medium text-black hover:bg-ember-600"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}