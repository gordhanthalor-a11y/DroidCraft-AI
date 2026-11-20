import { skills } from "@/lib/content";

const words = skills.flatMap((g) => g.items);

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-white/[0.015] py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060a] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060a] to-transparent"
      />
      <div className="marquee-track flex w-max animate-marquee items-center gap-8">
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/35">
              {word}
            </span>
            <span className="size-1 rounded-full bg-violet-400/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
