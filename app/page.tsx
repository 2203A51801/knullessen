import Link from "next/link";
import { listApps } from "@/lib/apps";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const apps = await listApps();

  return (
    <main>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">KnullEssen</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            Browse and download available apps.
          </p>
        </div>

        <Link
          href="/admin"
          className="rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 transition"
        >
          Admin
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {apps.map((a) => (
          <div
            key={a.id}
            className="rounded-2xl bg-white/5 p-5 shadow-panel ring-1 ring-white/10 backdrop-blur"
          >
            <div className="text-lg font-medium">{a.name}</div>
            <div className="mt-2 text-sm text-zinc-300 line-clamp-3">{a.description}</div>
            <div className="mt-3 text-xs text-zinc-500 truncate">{a.download_url}</div>
            <a
              href={a.download_url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 transition"
            >
              ↓ Download
            </a>
          </div>
        ))}

        {apps.length === 0 && (
          <div className="col-span-full rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 text-sm text-zinc-400 text-center">
            No apps yet. An admin can add apps from the{" "}
            <Link className="underline hover:text-white" href="/admin">
              Admin panel
            </Link>.
          </div>
        )}
      </div>
    </main>
  );
}