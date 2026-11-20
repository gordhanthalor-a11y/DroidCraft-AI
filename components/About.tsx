import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { about, skills } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About" title={about.heading} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-[15px] leading-[1.85] text-white/55 sm:text-base">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {about.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="rounded-xl border border-white/8 bg-white/[0.02] p-4"
                  >
                    <p className="text-[13px] font-medium text-white/90">{h.title}</p>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/45">
                      {h.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div id="skills" className="card p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-white/85">Tech stack</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                  01 — 04
                </span>
              </div>
              <div className="mt-6 space-y-6">
                {skills.map((group) => (
                  <div key={group.group}>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-violet-300/70">
                      {group.group}
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[12px] text-white/65 transition hover:border-violet-400/30 hover:text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
