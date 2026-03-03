import Link from "next/link";
import { getApp } from "@/lib/apps";

export default async function AdminEditAppPage({
  params,
}: {
  params: { id: string };
}) {
  const app = await getApp(params.id);

  if (!app) {
    return (
      <main className="max-w-xl">
        <p className="text-zinc-400">App not found.</p>
        <Link className="text-zinc-300 hover:text-white" href="/admin">
          ← Back
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Edit app</h1>
        <Link className="text-zinc-300 hover:text-white" href="/admin">
          ← Back
        </Link>
      </div>

      <form
        action={`/api/apps/${app.id}`}
        method="post"
        className="mt-6 space-y-3"
      >
        <input type="hidden" name="_method" value="PUT" />

        <input
          name="name"
          defaultValue={app.name}
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
          required
        />
        <textarea
          name="description"
          defaultValue={app.description}
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
          rows={6}
          required
        />
        <input
          name="download_url"
          defaultValue={app.download_url}
          className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm ring-1 ring-white/10 outline-none focus:ring-white/20"
          required
        />

        <button
          type="submit"
          className="rounded-xl bg-white/10 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-white/15"
        >
          Save
        </button>
      </form>

      <form action={`/api/apps/${app.id}`} method="post" className="mt-8">
        <input type="hidden" name="_method" value="DELETE" />
        <button
          type="submit"
          className="rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-200 ring-1 ring-red-500/30 hover:bg-red-500/20"
        >
          Delete app
        </button>
      </form>
    </main>
  );
}