import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-[11.5px] text-white/35">
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          {site.socials.slice(0, 3).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-[12px] text-white/40 transition hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#top"
            className="rounded-full border border-white/10 px-3 py-1.5 text-[11.5px] text-white/50 transition hover:border-white/25 hover:text-white"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
