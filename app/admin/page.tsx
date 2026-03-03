import Link from "next/link";
import { listApps } from "@/lib/apps";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const apps = await listApps();

  return (
    <main>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Admin</h1>
          <p className="mt-1 text-sm text-zinc-400">Manage your apps</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/new"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 transition"
          >
            + New app
          </Link>
          <form action="/api/admin/logout" method="post">
            <button
              type="submit"
              className="rounded-xl bg-red-500/15 px-4 py-2 text-sm text-red-200 ring-1 ring-red-500/30 hover:bg-red-500/20 transition"
            >
              Logout
            </button>
          </form>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-zinc-300">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Description</th>
              <th className="px-4 py-3 font-medium">Created</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a) => (
              <tr key={a.id} className="border-t border-white/10">
                <td className="px-4 py-3 font-medium">{a.name}</td>
                <td className="px-4 py-3 text-zinc-400 max-w-xs truncate">{a.description}</td>
                <td className="px-4 py-3 text-zinc-400">
                  {new Date(a.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <Link
                      className="text-zinc-300 hover:text-white transition"
                      href={`/admin/${a.id}`}
                    >
                      Edit
                    </Link>
                    <form action={`/api/apps/${a.id}`} method="post" className="inline">
                      <input type="hidden" name="_method" value="DELETE" />
                      <button
                        type="submit"
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}

            {apps.length === 0 && (
              <tr>
                <td className="px-4 py-8 text-zinc-400 text-center" colSpan={4}>
                  No apps yet. Click &quot;+ New app&quot; to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white transition">
          ← Back to landing page
        </Link>
      </div>
    </main>
  );
}