import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-violet-300/70">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Yeh page nahi mila.
        </h1>
        <p className="mt-3 text-sm text-white/45">
          Ho sakta hai link purana ho ya page hata diya gaya ho.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#05060a] transition hover:bg-white/90"
        >
          Home par jaayein
        </Link>
      </div>
    </main>
  );
}
