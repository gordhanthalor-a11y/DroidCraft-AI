import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience, testimonials } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_70%)]" />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Kahan kahan kaam kiya." />

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <ol className="relative border-l border-white/10 pl-6">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.role} delay={i * 80} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[1.9rem] top-1.5 grid size-3 place-items-center rounded-full border border-violet-400/40 bg-[#05060a]">
                  <span className="size-1.5 rounded-full bg-violet-400" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
                  {item.period}
                </p>
                <h3 className="mt-2 text-[15.5px] font-medium text-white">{item.role}</h3>
                <p className="text-[13px] text-violet-300/80">{item.company}</p>
                <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-white/45">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ol>

          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 110}>
                <figure className="card p-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-violet-400/40"
                    aria-hidden
                  >
                    <path d="M9.5 6C6.5 7.6 5 10.1 5 13.4V18h5.2v-5.2H7.9c0-2 .9-3.4 2.7-4.3L9.5 6Zm9 0C15.5 7.6 14 10.1 14 13.4V18h5.2v-5.2h-2.3c0-2 .9-3.4 2.7-4.3L18.5 6Z" />
                  </svg>
                  <blockquote className="mt-3 text-[14px] leading-relaxed text-white/70">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-[12.5px] text-white/45">
                    <span className="text-white/80">{t.author}</span> · {t.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
