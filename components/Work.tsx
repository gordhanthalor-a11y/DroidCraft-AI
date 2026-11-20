import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/content";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-4">
      <path
        d="M7 17 17 7m0 0H9m8 0v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Work() {
  const [featured, ...rest] = projects;

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects jinke saath maine waqt bitaya."
        >
          Har project ek problem se shuru hua — niche wo solutions hain jinke delivery
          mein maine end-to-end hissa liya.
        </SectionHeading>

        {/* Featured project */}
        <Reveal delay={80}>
          <a
            href={featured.href}
            className="card group mt-12 block overflow-hidden sm:mt-14"
          >
            <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-9">
                <div className="flex items-center gap-2.5">
                  <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-violet-200">
                    Featured
                  </span>
                  <span className="font-mono text-[11px] text-white/35">
                    {featured.year}
                  </span>
                </div>
                <h3 className="mt-5 flex items-center gap-2 text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
                  {featured.title}
                  <span className="text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-300">
                    <ArrowIcon />
                  </span>
                </h3>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/50">
                  {featured.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Abstract preview panel */}
              <div
                className={`relative min-h-[220px] overflow-hidden bg-gradient-to-br ${featured.accent} md:min-h-full`}
              >
                <div className="absolute inset-0 grid-lines opacity-40" />
                <div className="absolute inset-6 rounded-xl border border-white/10 bg-[#05060a]/60 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
                    <span className="size-1.5 rounded-full bg-white/25" />
                    <span className="size-1.5 rounded-full bg-white/25" />
                    <span className="size-1.5 rounded-full bg-white/25" />
                  </div>
                  <div className="space-y-2 p-3">
                    <div className="h-1.5 w-1/3 rounded-full bg-white/25" />
                    <div className="h-1.5 w-full rounded-full bg-white/10" />
                    <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-12 rounded-md border border-white/8 bg-white/[0.04]"
                        />
                      ))}
                    </div>
                    <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Remaining projects */}
        <div className="mt-5 grid gap-5 sm:mt-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <a href={project.href} className="card group block h-full overflow-hidden">
                <div
                  className={`relative h-28 overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div className="absolute inset-0 grid-lines opacity-40" />
                  <span className="absolute right-4 top-4 font-mono text-[11px] text-white/55">
                    {project.year}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="flex items-center gap-2 text-[17px] font-medium text-white">
                    {project.title}
                    <span className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-300">
                      <ArrowIcon />
                    </span>
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">
                    {project.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
