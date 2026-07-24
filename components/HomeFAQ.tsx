"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Brain, Zap, DollarSign, Target, Award, ShieldAlert, Sparkles } from "lucide-react";
import FAQSchema from "./schemas/FAQSchema";

interface FAQItem {
  question: string;
  answer: string;
  icon: any;
  category: string;
}

export default function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Kapsam & Tanım",
      icon: Brain,
      question: "SEO Danışmanlığı nedir ve neden gereklidir?",
      answer: "SEO danışmanlığı, bir web sitesinin Google ve diğer arama motorlarında üst sıralara çıkması için yürüttüğüm teknik, semantik ve stratejik iyileştirme süreçlerinin tamamıdır. Ben Ekim Demirci olarak, web sitenizin arama algoritmaları tarafından doğru anlamlandırılmasını sağlıyor, organik trafiğinizi artırıyor ve markanızın dijital görünürlüğünü kalıcı olarak inşa ediyorum.",
    },
    {
      category: "Metodoloji",
      icon: Target,
      question: "Bir SEO Danışmanı olarak çalışmalarımda hangi araçları ve teknikleri kullanıyorum?",
      answer: "Çalışmalarımda Google Analytics, Search Console, Ahrefs ve Semrush gibi sektör standartlarının ötesine geçiyorum. Gelişmiş semantik SEO analizi, Python tabanlı veri madenciliği ve yapay zeka destekli GEO (Generative Engine Optimization) optimizasyon yöntemlerini entegre ederek sitenizin bilgi grafiğindeki (Knowledge Graph) otoritesini yükseltiyorum.",
    },
    {
      category: "Yatırım & Fiyat",
      icon: DollarSign,
      question: "SEO Danışmanlığı fiyatları nasıl belirlenir?",
      answer: "SEO danışmanlığı fiyatları; web sitenizin mevcut teknik durumuna, sektörünüzün rekabet yoğunluğuna ve hedeflediğiniz anahtar kelime dikeyinin derinliğine göre belirlenir. Her projeye özel, şeffaf ve ölçülebilir bir eylem planı hazırlayarak bütçenizi en yüksek yatırım getirisini (ROI) sağlayacak şekilde optimize ediyorum.",
    },
    {
      category: "Yapay Zeka SEO",
      icon: Sparkles,
      question: "Semantik SEO ve Yapay Zeka SEO (GEO) danışmanlığı nedir?",
      answer: "Semantik SEO, arama motorlarının web sayfalarındaki kelimeler yerine varlıkları (Entity) ve bunlar arasındaki ilişkileri anlamasına dayanan modern bir yapay zeka optimizasyonudur. GEO (Generative Engine Optimization) ise sitenizin ChatGPT, Gemini, Perplexity ve Google AI Overview gibi üretken yapay zeka motorlarında referans kaynak gösterilmesini sağlayan yenilikçi bir çalışmadır.",
    },
    {
      category: "Hizmet Kapsamı",
      icon: Zap,
      question: "SEO Danışmanlığı kapsamında hangi somut hizmetleri sunuyorum?",
      answer: "Kapsamlı teknik SEO denetimi (site hızı, tarama bütçesi, şema yapıları), sayfa içi (On-Page) semantik içerik mimarisi, sayfa dışı (Off-Page) güven ve backlink inşası, sektörel yerel SEO ve yapay zeka arama motorları entegrasyonu (GEO) gibi tüm dijital büyüme süreçlerini uçtan uca tek başıma yönetiyorum.",
    },
    {
      category: "Süreç & Sonuç",
      icon: ShieldAlert,
      question: "SEO çalışmalarının etkisi ne kadar sürede görülür?",
      answer: "SEO, sürdürülebilir ve uzun vadeli bir yatırımdır. Gerçekleştirdiğim teknik altyapı iyileştirmeleri ve semantik içerik güncellemeleri sonrasında, ilk 3 ila 6 ay içinde organik trafiğinizde, anahtar kelime sıralamalarınızda ve nihai dönüşümlerinizde kararlı ve belirgin yükselişler görmeye başlarız.",
    },
    {
      category: "Güven & Otorite",
      icon: Award,
      question: "Neden bir ajans yerine benimle (Ekim Demirci) çalışmalısınız?",
      answer: "Ajansların hantal ve çok katmanlı yapısının aksine, projenizle doğrudan ve sadece ben ilgileniyorum. Arada hiçbir müşteri temsilcisi olmadan, web sitenizin performansını günbegün takip ediyor, butik ve işletmenize tamamen özel, doğrudan sonuç odaklı butik bir SEO danışmanlığı deneyimi sunuyorum.",
    },
  ];

  // Map to the schema structure
  const schemaItems = faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0f25] relative overflow-hidden border-t border-white/5">
      {/* Automate structured FAQSchema generation */}
      <FAQSchema items={schemaItems} />

      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] z-0" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-6 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            SSS (Sıkça Sorulan Sorular)
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            SEO Danışmanlığı <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Hakkında Merak Edilenler</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Semantik SEO, yapay zeka odaklı görünürlük stratejileri ve SEO danışmanlığı süreçlerime dair aklınıza takılan tüm soruların doğrudan ve açık yanıtları.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`glass-strong rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-purple-500/30 bg-purple-500/[0.02]" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full p-6 md:p-8 flex items-start gap-4 md:gap-6 text-left transition-colors cursor-pointer group"
                >
                  <div className={`p-3 rounded-xl border flex-shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400" 
                      : "bg-white/5 border-white/10 text-gray-400 group-hover:text-white"
                  }`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  <div className="flex-1 pt-1 md:pt-1.5">
                    <span className="text-xs font-semibold text-purple-400/80 uppercase tracking-wider mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className={`text-base md:text-lg font-bold transition-colors ${
                      isOpen ? "text-white" : "text-gray-200 group-hover:text-white"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-lg border border-white/5 bg-white/5 text-gray-400 group-hover:text-white transition-all duration-300 self-center ${
                    isOpen ? "rotate-180 border-purple-500/20 bg-purple-500/10 text-purple-400" : ""
                  }`}>
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 pl-[4.5rem] md:pl-28 border-t border-white/5 text-gray-300 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
