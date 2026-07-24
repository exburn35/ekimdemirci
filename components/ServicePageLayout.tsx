"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
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
import FAQSchema from "./schemas/FAQSchema";
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
  
  // Legacy / Optional props for backwards compatibility
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
  features,
  benefits,
  blogCategory,
  children,
  afterHeroNode,
  hideHero = false,
}: ServicePageLayoutProps) {
  const Icon = iconMap[icon] || Settings;
  const pathname = usePathname();
  const fullUrl = `https://ekimdemirci.com${pathname || ""}`;

  return (
    <>
      <ServiceSchema name={title} description={description} url={fullUrl} />
      {faqItems && faqItems.length > 0 && <FAQSchema items={faqItems} />}

      {/* 1. HERO SECTION */}
      {!hideHero && (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#020617]">
          {/* Background & Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(2,6,23,1)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" 
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Link
                  href="/seo-hizmetleri"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white mb-8 transition-all duration-300 group text-sm"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  SEO Hizmetlerine Dön
                </Link>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {subtitle}
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.15]">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
                  {description}
                </p>

                {features && features.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-6">
                    {features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ServiceLeadForm />
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {afterHeroNode}

      {/* 2. DEFINITION BLOCK ("Bu Hizmet Nedir?") */}
      {definition && (
        <section className="py-20 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111836] border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-blue-400 flex-shrink-0" />
                {definition.question}
              </h2>
              <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                <p className="font-semibold text-white bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded-r-xl">
                  {definition.answer}
                </p>
                {definition.paragraph && (
                  <p className="pt-2 text-gray-300">
                    {definition.paragraph}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 3. SCOPE LIST ("Hizmet Kapsamı") - Paragraphs with H2/H3 headlines */}
      {scope && scope.length > 0 && (
        <section className="py-20 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
                <Layers className="w-3.5 h-3.5" />
                Kapsam Mimarisi
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {title} Kapsamında Neler Sunuyorum?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scope.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-[#111836] border border-white/10 p-8 rounded-2xl hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 font-bold mb-5">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Legacy Benefits Section fallback if scope is missing */}
      {(!scope || scope.length === 0) && benefits && benefits.length > 0 && (
        <section className="py-20 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hizmet Kapsamı ve Avantajlar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#111836] border border-white/10 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. PROCESS STEPS ("Süreç Adımları") */}
      {process && process.length > 0 && (
        <section className="py-20 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Çalışma Süreci ve Adımlar
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                Uçtan uca şeffaf ve ölçülebilir aşamalardan oluşan danışmanlık metodolojim.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[#111836] border border-white/10 p-6 rounded-2xl hover:border-blue-500/40 transition-all duration-300 relative group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center font-bold text-white text-lg mb-5 shadow-lg`}>
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. TARGET AUDIENCE MAPPING ("Bu Hizmetten Kimler Faydalanır?") */}
      {targetAudience && targetAudience.length > 0 && (
        <section className="py-20 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
                <Users className="w-3.5 h-3.5" />
                Hedef Kitle & Sektörler
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Bu Hizmetten Kimler Faydalanabilir?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item, index) => (
                <motion.div
                  key={item.audience}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-[#111836] border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-emerald-400 mb-2">
                    {item.audience}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. CONCRETE RESULTS & EVIDENCE ("Somut Sonuç Kanıtı") */}
      {evidence && evidence.length > 0 && (
        <section className="py-20 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-amber-400 flex-shrink-0" />
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  Somut Başarı & Doğrulanmış Vaka Kanıtı
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {evidence.map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#111836] border border-amber-500/20 rounded-2xl flex flex-col justify-between">
                    <div>
                      {item.projectCode && (
                        <div className="text-xs text-amber-400 font-mono font-semibold mb-2">
                          {item.projectCode}
                        </div>
                      )}
                      <div className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-2">
                        {item.metric}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.detail}
                      </p>
                    </div>
                    <div className="text-xs text-gray-400 border-t border-white/5 pt-3 font-mono">
                      {item.source}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Custom Children Node injection */}
      {children}

      {/* 7. SERVICE SPECIFIC FAQ SECTION */}
      {faqItems && faqItems.length > 0 && (
        <section className="py-20 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                {title} hakkında en çok merak edilen konular.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[#111836] border border-white/10 p-6 md:p-8 rounded-2xl"
                >
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. RELATED BLOG POSTS LINK BLOCK */}
      {blogCategory && (
        <div className="border-t border-white/5">
          <RelatedBlogPosts category={blogCategory} />
        </div>
      )}

      {/* 9. CROSS-SERVICE LINK BLOCK ("Yolculuğunuza Devam Edin") */}
      <div className="border-t border-white/5">
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
