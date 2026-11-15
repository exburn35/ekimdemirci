interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={`${centered ? "text-center" : "flex-1"} mb-10 md:mb-14`}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] mb-3 ${
          dark ? "text-accent-light/80" : "text-brand"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.22] ${
          centered ? "": ""
        } ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink-soft"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
