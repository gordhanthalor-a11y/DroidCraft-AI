import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  className?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
  align = "left",
  children,
}: Props) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/60" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-violet-300/80">
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="mt-4 max-w-2xl text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[2.35rem]">
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={130}>
          <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-white/50">
            {children}
          </p>
        </Reveal>
      )}
    </div>
  );
}
