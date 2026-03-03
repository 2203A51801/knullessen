import Link from "next/link";
import { listApps } from "@/lib/apps";

export default async function HomePage() {
  const apps = await listApps();

  return (
    <main>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Your vault</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            Apps available to download.
          </p>
        </div>

        <Link
          href="/admin"
          className="rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/15"
        >
          Admin
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {apps.map((a) => (
          <a
            key={a.id}
            href={a.download_url}
            className="group rounded-2xl bg-white/5 p-5 shadow-panel ring-1 ring-white/10 backdrop-blur hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">{a.name}</div>
              <div className="text-zinc-400 group-hover:text-white">→</div>
            </div>
            <div className="mt-2 text-sm text-zinc-300">{a.description}</div>
          </a>
        ))}

        {apps.length === 0 && (
          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 text-sm text-zinc-300">
            No apps yet. Add one in <Link className="underline" href="/admin">Admin</Link>.
          </div>
        )}
      </div>
    </main>
  );
}