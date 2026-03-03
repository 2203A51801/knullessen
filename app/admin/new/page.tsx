import Link from "next/link";

export default function AdminNewAppPage() {
  return (
    <main className="max-w-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">New app</h1>
        <Link className="text-zinc-300 hover:text-white transition" href="/admin">
          ← Back
        </Link>
      </div>

      <form action="/api/apps" method="post" className="mt-6 space-y-3">
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Name</label>
          <input
            name="name"
            placeholder="My App"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Description</label>
          <textarea
            name="description"
            placeholder="What does this app do?"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
            rows={5}
            required
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Download URL</label>
          <input
            name="download_url"
            placeholder="https://example.com/download/app.zip"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-white/10 px-4 py-3 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 transition"
        >
          Create app
        </button>
      </form>
    </main>
  );
}