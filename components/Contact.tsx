"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { site } from "@/lib/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.20),transparent_65%)] blur-3xl animate-pulse-slow" />
      </div>

      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-violet-300/80">
            Contact
          </span>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.9rem]">
            Koi idea hai?{" "}
            <span className="text-gradient">Chaliye banate hain.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/50">
            Freelance projects, full-time roles ya bas ek achhi technical conversation —
            inbox khula hai. Aam taur par 24 ghante mein reply karta hoon.
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-white/90 sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" className="size-4">
                <path
                  d="M3 7.5 12 13l9-5.5M3.5 6.5h17A.5.5 0 0 1 21 7v10a.5.5 0 0 1-.5.5h-17A.5.5 0 0 1 3 17V7a.5.5 0 0 1 .5-.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {site.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <ul className="mt-14 flex flex-wrap items-center justify-center gap-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-4 py-2 text-[12.5px] text-white/55 transition hover:border-white/20 hover:text-white"
                >
                  {s.label}
                  <span className="font-mono text-[11px] text-white/30 transition group-hover:text-violet-300/80">
                    {s.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
