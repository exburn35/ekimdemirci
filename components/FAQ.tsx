import React from "react";
import { ChevronDown, LucideIcon, HelpCircle } from "lucide-react";
import FAQSchema from "@/components/schemas/FAQSchema";

export interface FAQItemData {
  question: string;
  answer: string | React.ReactNode;
  category?: string;
  icon?: LucideIcon;
}

export interface FAQProps {
  id?: string;
  items: FAQItemData[];
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  badge?: string | React.ReactNode;
  showBadge?: boolean;
  defaultOpenIndex?: number | null;
  includeSchema?: boolean;
  renderSection?: boolean;
  name?: string;
  theme?: "purple" | "cyan";
  className?: string;
  containerClassName?: string;
}

export default function FAQ({
  id,
  items,
  title,
  subtitle,
  badge,
  showBadge = true,
  defaultOpenIndex = 0,
  includeSchema = true,
  renderSection,
  name = "faq-accordion",
  theme = "purple",
  className = "",
  containerClassName = "",
}: FAQProps) {
  if (!items || items.length === 0) return null;

  // Decide whether to wrap in full section based on whether title/badge or explicit prop was given
  const shouldRenderSection = renderSection !== undefined ? renderSection : Boolean(title || badge);

  const isCyan = theme === "cyan";

  const accordionContent = (
    <>
      {includeSchema && <FAQSchema items={items} />}

      <div className={`space-y-4 ${containerClassName}`}>
        {items.map((faq, index) => {
          const Icon = faq.icon;
          const isOpenDefault = defaultOpenIndex === index;

          return (
            <React.Fragment key={index}>
              {"\n"}
              <details
                name={name}
                open={isOpenDefault ? true : undefined}
              className={`group transition-all duration-300 rounded-2xl border overflow-hidden select-none ${
                isCyan
                  ? "bg-slate-900/60 border-white/10 hover:border-white/20 open:border-cyan-500/30 open:bg-cyan-500/[0.02]"
                  : "glass-strong border-white/5 hover:border-white/10 open:border-purple-500/30 open:bg-purple-500/[0.02]"
              }`}
            >
              <summary
                className={`w-full p-6 md:p-8 flex items-start gap-4 md:gap-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden focus:outline-none focus-visible:ring-2 rounded-2xl transition-colors ${
                  isCyan
                    ? "focus-visible:ring-cyan-500 hover:bg-white/5"
                    : "focus-visible:ring-purple-500 hover:bg-white/[0.02]"
                }`}
              >
                {/* Left Category Icon if provided */}
                {Icon && (
                  <div
                    className={`p-3 rounded-xl border flex-shrink-0 transition-all duration-300 ${
                      isCyan
                        ? "bg-white/5 border-white/10 text-gray-400 group-hover:text-white group-open:bg-cyan-500/10 group-open:border-cyan-500/20 group-open:text-cyan-400"
                        : "bg-white/5 border-white/10 text-gray-400 group-hover:text-white group-open:bg-purple-500/10 group-open:border-purple-500/20 group-open:text-purple-400"
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  </div>
                )}

                {/* Question & Category Header */}
                <div className="flex-1 pt-1 md:pt-1.5 min-w-0">
                  {faq.category && (
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider mb-1 block ${
                        isCyan ? "text-cyan-400/80" : "text-purple-400/80"
                      }`}
                    >
                      {faq.category}
                    </span>
                  )}
                  <h3
                    className={`text-base md:text-lg font-bold transition-colors ${
                      isCyan
                        ? "text-white"
                        : "text-gray-200 group-hover:text-white group-open:text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* Right Expand/Collapse Chevron Indicator */}
                <div
                  className={`p-2 rounded-lg border transition-all duration-300 self-center flex-shrink-0 ml-2 group-open:rotate-180 ${
                    isCyan
                      ? "border-white/5 bg-white/5 text-cyan-400 group-hover:text-white group-open:rotate-180 group-open:border-cyan-500/20 group-open:bg-cyan-500/10 group-open:text-cyan-400"
                      : "border-white/5 bg-white/5 text-gray-400 group-hover:text-white group-open:rotate-180 group-open:border-purple-500/20 group-open:bg-purple-500/10 group-open:text-purple-400"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300" />
                </div>
              </summary>

              {/* Answer Body - Always in SSR DOM for Crawlers (GPTBot, ClaudeBot, Googlebot) */}
              <div
                className={`px-6 md:px-8 pb-8 pt-2 border-t border-white/5 text-gray-300 leading-relaxed text-sm md:text-base ${
                  Icon ? "pl-[4.5rem] md:pl-28" : "pl-6 md:pl-8"
                }`}
              >
                {typeof faq.answer === "string" ? (
                  <p>{faq.answer}</p>
                ) : (
                  faq.answer
                )}
              </div>
            </details>
          </React.Fragment>
        );
        })}
      </div>
    </>
  );

  if (!shouldRenderSection) {
    return accordionContent;
  }

  return (
    <section
      id={id}
      className={`py-24 bg-gradient-to-b from-black to-[#0a0f25] relative overflow-hidden border-t border-white/5 ${className}`}
    >
      {/* Decorative background grid and ambient lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] z-0" />
      <div
        className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${
          isCyan ? "bg-cyan-600/5" : "bg-purple-600/5"
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {(badge || title || subtitle) && (
          <div className="text-center mb-16">
            {badge && showBadge && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider ${
                  isCyan
                    ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                    : "bg-purple-500/10 border border-purple-500/20 text-purple-400"
                }`}
              >
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                {badge}
              </div>
            )}

            {title && (
              typeof title === "string" ? (
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                  {title}
                </h2>
              ) : (
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                  {title}
                </h2>
              )
            )}

            {subtitle && (
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {accordionContent}
      </div>
    </section>
  );
}
