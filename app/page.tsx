import Link from "next/link";

const cards = [
  {
    title: "Admin",
    desc: "Manage apps and links.",
    href: "/admin",
  },
];

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-semibold tracking-tight">Your vault</h1>
      <p className="mt-2 max-w-2xl text-sm text-zinc-300">
        A minimal starting point. Next we’ll wire Turso + auth and render your
        apps and external links here.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-2xl bg-white/5 p-5 shadow-panel ring-1 ring-white/10 backdrop-blur hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">{c.title}</div>
              <div className="text-zinc-400 group-hover:text-white">→</div>
            </div>
            <div className="mt-2 text-sm text-zinc-300">{c.desc}</div>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
        <div className="text-sm font-medium">Next steps</div>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
          <li>Add Turso database + schema</li>
          <li>Add admin authentication</li>
          <li>Create CRUD routes for apps</li>
          <li>Deploy on Render</li>
        </ul>
      </div>
    </main>
  );
}