import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KnullEssen",
  description: "Dev vault for apps",
};

export default function RootLayout({
  children,
}: Readonly<{  
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="vault-bg noise min-h-screen text-zinc-100">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <header className="mb-10 flex items-center justify-between">
            <div className="font-semibold tracking-tight">KnullEssen</div>
            <nav className="text-sm text-zinc-300">
              <a className="hover:text-white" href="/admin">Admin</a>
            </nav>
          </header>
          {children}
          <footer className="mt-14 text-xs text-zinc-500">
            © {new Date().getFullYear()} KnullEssen
          </footer>
        </div>
      </body>
    </html>
  );
}