import Link from "next/link";
import { listApps } from "@/lib/apps";

export default async function AdminPage() {
  const apps = await listApps();

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Admin</h1>
        <Link
          href="/admin/new"
          className="rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/15"
        >
          + New app
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-zinc-300">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a) => (
              <tr key={a.id} className="border-t border-white/10">
                <td className="px-4 py-3">{a.name}</td>
                <td className="px-4 py-3 text-zinc-400">
                  {new Date(a.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    className="text-zinc-300 hover:text-white"
                    href={`/admin/${a.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}

            {apps.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-zinc-400" colSpan={3}>
                  No apps yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}