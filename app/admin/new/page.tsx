export default function AdminNewAppPage() {
  return (
    <main className="max-w-xl">
      <h1 className="text-2xl font-semibold tracking-tight">New app</h1>

      <form action="/api/apps" method="post" className="mt-6 space-y-3">
        <input
          name="name"
          placeholder="Name"
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
          rows={5}
          required
        />
        <input
          name="download_url"
          placeholder="Download URL"
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
          required
        />

        <button
          type="submit"
          className="rounded-xl bg-white/10 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-white/15"
        >
          Create
        </button>
      </form>
    </main>
  );
}