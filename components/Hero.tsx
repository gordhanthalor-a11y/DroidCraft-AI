import Reveal from "./Reveal";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Ambient aurora blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] size-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.30),transparent_62%)] blur-2xl animate-pulse-slow" />
        <div className="absolute right-[-12rem] top-24 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.20),transparent_65%)] blur-3xl animate-float" />
        <div className="absolute left-[-14rem] top-56 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.14),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 grid-lines opacity-70" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-[12px] text-white/70 backdrop-blur">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                {site.availability}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[4.2rem]">
                <span className="text-gradient">{site.name}</span>
                <br />
                <span className="text-white/90">{site.role}</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-base">
                {site.tagline}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-white/90"
                >
                  Kaam dekhein
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M5 12h14m0 0-6-6m6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/85 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                >
                  Baat karein
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {site.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-[11.5px] uppercase tracking-[0.14em] text-white/40">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Terminal-ish visual card */}
          <Reveal delay={200} className="relative">
            <div className="card overflow-hidden p-0 shadow-[0_40px_120px_-60px_rgba(139,92,246,0.9)]">
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
                <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
                <span className="size-2.5 rounded-full bg-[#28c840]/80" />
                <span className="ml-2 font-mono text-[11px] text-white/35">~/portfolio</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.85] text-white/70">
                <code>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-300">dev</span> = {"{"}
                  {"\n"}  name: <span className="text-emerald-300">&quot;{site.name}&quot;</span>,
                  {"\n"}  role: <span className="text-emerald-300">&quot;{site.role.split(" & ")[0]}&quot;</span>,
                  {"\n"}  stack: [
                  <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;TS&quot;</span>],
                  {"\n"}  location: <span className="text-emerald-300">&quot;{site.location}&quot;</span>,
                  {"\n"}  openToWork: <span className="text-amber-300">true</span>,
                  {"\n"}
                  {"}"};
                  {"\n\n"}
                  <span className="text-white/30">// building things that feel fast</span>
                  {"\n"}
                  <span className="text-violet-400">await</span> dev.
                  <span className="text-cyan-300">build</span>(
                  <span className="text-emerald-300">&quot;something great&quot;</span>);
                  <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] animate-pulse bg-violet-400/80" />
                </code>
              </pre>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl sm:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                Currently
              </p>
              <p className="mt-1 text-[13px] text-white/80">Building with AI ✦</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
