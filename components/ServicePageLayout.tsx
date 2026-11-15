import { ReactNode } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Brain, 
  Settings, 
  FileText, 
  Link2, 
  Sparkles,
  Layers,
  Users,
  Award,
  HelpCircle
} from "lucide-react";
import SEOAuditSection from "./SEOAuditSection";
import ContactForm from "./ContactForm";
import RelatedBlogPosts from "./RelatedBlogPosts";
import RelatedPages from "./RelatedPages";
import ServiceSchema from "./schemas/ServiceSchema";
import ServiceGlowOrbs from "./ServiceGlowOrbs";
import FAQ from "./FAQ";
import ServiceLeadForm from "./ServiceLeadForm";

const iconMap = {
  Brain,
  Settings,
  FileText,
  Link2,
};

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof iconMap;
  gradient: string;
  // 1. Definition Block
  definition?: {
    question: string;
    answer: string;
    paragraph?: string;
  };
  // 2. Scope List (Explanatory Subsections)
  scope?: { title: string; description: string }[];
  // 3. Process Steps
  process?: { step: string; title: string; description: string }[];
  // 4. Target Audience
  targetAudience?: { audience: string; benefit: string }[];
  // 5. Concrete Evidence & Metrics
  evidence?: { projectCode?: string; metric: string; detail: string; source: string }[];
  // 6. FAQ Items
  faqItems?: { question: string; answer: string }[];
  
  canonicalUrl?: string;
  features?: string[];
  benefits?: { title: string; description: string }[];
  blogCategory?: string;
  children?: ReactNode;
  afterHeroNode?: ReactNode;
  hideHero?: boolean;
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  icon,
  gradient,
  definition,
  scope,
  process,
  targetAudience,
  evidence,
  faqItems,
  canonicalUrl,
  features,
  benefits,
  blogCategory,
  children,
  afterHeroNode,
  hideHero = false,
}: ServicePageLayoutProps) {
  const Icon = iconMap[icon] || Settings;

  return (
    <>
      <ServiceSchema name={title} description={description} url={canonicalUrl} />

      {/* 1. HERO SECTION */}
      {!hideHero && (
        <section className="relative pt-32 pb-20 overflow-hidden bg-canvas">
          {/* Background & Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#ffffff_0%,#f7f6f2_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#161b2e05_1px,transparent_1px),linear-gradient(to_bottom,#161b2e05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <ServiceGlowOrbs />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column */}
              <div>
                <Link
                  href="/seo-hizmetleri"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-ink/5 text-ink-muted hover:text-ink mb-8 transition-all duration-300 group text-sm"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  SEO Hizmetlerine Dön
                </Link>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-line text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  {subtitle}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.22]">
                  <span className="text-ink">
                    {title}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-8">
                  {description}
                </p>

                {features && features.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-6">
                    {features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-ink-soft bg-white border border-line px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column - Form */}
              <div>
                <ServiceLeadForm />
              </div>
            </div>
          </div>
        </section>
      )}

      {afterHeroNode}

      {/* 2. DEFINITION BLOCK ("Bu Hizmet Nedir?") */}
      {definition && (
        <section className="py-20 bg-canvas border-t border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <h2 className="text-2xl md:text-4xl font-bold text-ink mb-6 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                {definition.question}
              </h2>
              <div className="space-y-4 text-ink-soft text-base md:text-lg leading-relaxed">
                <p className="font-semibold text-ink bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded-r-xl">
                  {definition.answer}
                </p>
                {definition.paragraph && (
                  <p className="pt-2 text-ink-soft">
                    {definition.paragraph}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SCOPE LIST ("Hizmet Kapsamı") */}
      {scope && scope.length > 0 && (
        <section className="py-20 md:py-24 bg-canvas border-t border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Kapsam</p>
              <h2 className="text-3xl md:text-[40px] md:leading-[1.2] font-bold tracking-tight text-ink">
                {title} kapsamında neler yapıyorum?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {scope.map((item, index) => (
                <div key={item.title} className="rounded-3xl border border-line bg-white p-7 shadow-card">
                  <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-light text-sm font-bold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 text-lg font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Legacy Benefits Section fallback if scope is missing */}
      {(!scope || scope.length === 0) && benefits && benefits.length > 0 && (
        <section className="py-20 bg-canvas border-t border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-ink mb-4">Hizmet Kapsamı ve Avantajlar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white border border-line p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-ink mb-3">{benefit.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PROCESS STEPS ("Süreç Adımları") */}
      {process && process.length > 0 && (
        <section className="py-20 md:py-24 bg-white border-t border-line">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Çalışma süreci</p>
                <h2 className="text-3xl md:text-[40px] md:leading-[1.2] font-bold tracking-tight text-ink">
                  Adım adım nasıl ilerliyorum?
                </h2>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Her aşamada ne yaptığımı ve neden yaptığımı bilirsiniz. Süreç boyunca tek muhatabınız benim.
                </p>
              </div>
            </div>

            <ol className="relative space-y-5 lg:col-span-8 before:absolute before:left-[22px] before:top-4 before:bottom-4 before:w-px before:bg-line">
              {process.map((item) => (
                <li key={item.step} className="relative flex gap-5">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-sm font-bold text-brand shadow-card">
                    {item.step}
                  </span>
                  <div className="flex-1 rounded-3xl border border-line bg-canvas p-6">
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* 5. TARGET AUDIENCE MAPPING ("Bu Hizmetten Kimler Faydalanır?") */}
      {targetAudience && targetAudience.length > 0 && (
        <section className="py-20 md:py-24 bg-canvas-alt border-t border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">Kimler için?</p>
              <h2 className="text-3xl md:text-[40px] md:leading-[1.2] font-bold tracking-tight text-ink">
                Bu hizmet en çok kimin işine yarar?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {targetAudience.map((item) => (
                <div key={item.audience} className="flex gap-4 rounded-3xl border border-line bg-white p-7 shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{item.audience}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CONCRETE RESULTS & EVIDENCE ("Somut Sonuç Kanıtı") */}
      {evidence && evidence.length > 0 && (
        <section className="py-20 md:py-24 bg-night">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-center gap-3">
              <Award className="h-6 w-6 shrink-0 text-accent" />
              <h2 className="text-3xl md:text-[40px] md:leading-[1.2] font-bold tracking-tight text-white">
                Rakamlarla sonuçlar
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {evidence.map((item, idx) => (
                <div key={idx} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                  {item.projectCode && (
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{item.projectCode}</p>
                  )}
                  <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">{item.metric}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{item.detail}</p>
                  <p className="mt-auto border-t border-white/10 pt-4 text-xs text-white/45">{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Children Node injection */}
      {children}

      {/* 7. SERVICE SPECIFIC FAQ SECTION */}
      {faqItems && faqItems.length > 0 && (
        <FAQ
          items={faqItems}
          title="Sıkça Sorulan Sorular"
          subtitle={`${title} hakkında en çok merak edilen konular.`}
          name="service-faq"
          defaultOpenIndex={0}
          includeSchema={true}
        />
      )}

      {/* 8. RELATED BLOG POSTS LINK BLOCK */}
      {blogCategory && (
        <div className="border-t border-line">
          <RelatedBlogPosts category={blogCategory} />
        </div>
      )}

      {/* 9. CROSS-SERVICE LINK BLOCK ("Yolculuğunuza Devam Edin") */}
      <div className="border-t border-line">
        <RelatedPages />
      </div>

      {/* 10. CLOSING CTA & AUDIT SECTION */}
      <SEOAuditSection />

      <ContactForm
        title="Projeleriniz İçin Hemen Teklif Alın"
        description="Arama sonuçlarında ve yapay zeka yanıtlarında sektörünüzün lideri olmak için doğrudan benimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}
