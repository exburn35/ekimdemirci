"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, ChevronDown, Cpu, Sparkles, MessageSquareCode, Terminal, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: any;
  category: string;
}

export default function AISEOFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "GEO (Generative Engine Optimization)",
      icon: Sparkles,
      question: "Generative Engine Optimization (GEO) Nedir ve Neden Hayatidir?",
      answer: (
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          <strong>Generative Engine Optimization (GEO)</strong> (Üretken Arama Motoru Optimizasyonu), web sitenizin Google AI Overview, ChatGPT, Claude, Gemini ve Perplexity gibi üretken yapay zeka motorları tarafından taranıp en güvenilir kaynak olarak gösterilmesi ve önerilmesi için yapılan yeni nesil SEO çalışmasıdır. Geleneksel SEO, sitenize doğrudan arama motoru tıklamaları çekmeye çalışırken; GEO, yapay zekanın ürettiği sentezlenmiş akıllı yanıtlarda markanızın referans kaynak gösterilmesini ve bu sayede doğrudan yüksek dönüşüm potansiyelli kitleye ulaşmanızı hedefler.
        </p>
      ),
    },
    {
      category: "AEO (Answer Engine Optimization)",
      icon: MessageSquareCode,
      question: "Answer Engine Optimization (AEO) Neden Geleceğin Arama Trendidir?",
      answer: (
        <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            <strong>Answer Engine Optimization (AEO)</strong> (Cevap Motoru Optimizasyonu), aslında yine doğrudan AI&apos;ın yani yapay zekanın yanıtlarında web sitenizi seçmesi ve güvenilir bir kaynak olması için yapılan optimizasyondur.
          </p>
          <p>
            AEO çalışmasının amacı, sitenizdeki içerikleri arama motorlarının ve yapay zekaların kolayca ayrıştırıp doğrudan cevap olarak sunabileceği net soru-cevap formlarına, tablolara ve yapılandırılmış verilere dönüştürerek sitenizin otoritesini kanıtlamaktır.
          </p>
        </div>
      ),
    },
    {
      category: "AIO (AI Optimization)",
      icon: Cpu,
      question: "AI Optimization (AIO) ile Yapay Zeka Çağına Nasıl Hazırlanmalıyız?",
      answer: (
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          <strong>AI Optimization (AIO)</strong> (Yapay Zeka Optimizasyonu), web sitenizin tüm teknik altyapısının ve içerik katmanlarının yapay zeka botları (GPTBot, ClaudeBot, Googlebot vb.) tarafından en hızlı ve en doğru şekilde taranıp anlamlandırılmasını sağlayan entegre yaklaşımdır. AIO kapsamında web sitenizde Doğal Dil İşleme (NLP) uyumlu içerik geliştirme, zengin semantik şema işaretlemeleri (JSON-LD) ve bilgi grafikleri (Knowledge Graph) optimize edilerek sitenizin yapay zeka sistemleri için temel bir &quot;bilgi kaynağı&quot; haline gelmesi sağlanır.
        </p>
      ),
    },
    {
      category: "Klasik SEO vs Yapay Zeka SEO",
      icon: Brain,
      question: "Yapay Zeka SEO (AI SEO) Hizmeti Klasik SEO'dan Nasıl Ayrılır?",
      answer: (
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Klasik SEO çalışmaları sadece anahtar kelime sıklığı, meta etiketler ve temel teknik analizlere odaklanırken; <strong>Yapay Zeka SEO hizmeti</strong> (AI SEO), büyük veri setlerini, Doğal Dil İşlemeyi (NLP) ve Google&apos;ın RankBrain ile BERT gibi gelişmiş semantik yapay zeka algoritmalarını temel alır. Yapay zeka destekli optimizasyon süreçlerinde, kullanıcıların sadece ne aradığını değil, <strong>arama niyetini (search intent)</strong> ve kelimeler arasındaki semantik ilişkileri derinlemesine analiz ederek çok daha doyurucu, niş ve otoriter içerik yapıları oluşturuyorum.
        </p>
      ),
    },
    {
      category: "Stratejik Adımlar",
      icon: Terminal,
      question: "Yapay Zeka Aramalarında Önerilen Kaynak Olmak İçin Neler Yapıyorum?",
      answer: (
        <div className="space-y-3 text-gray-300 text-sm md:text-base">
          <p className="leading-relaxed">
            Yapay zekanın (Google SGE, ChatGPT vb.) web sitenizi referans göstermesi ve yanıtlarda öne çıkarması için şu stratejik adımları uyguluyorum:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-cyan-400">
            <li><strong>Semantik Derinlik ve Kapsam:</strong> Sadece yüzeysel yanıtlar yerine, konuyu tüm alt başlıklarıyla ele alan kapsamlı ve uzman içerikler üretiyorum.</li>
            <li><strong>Zengin Şema İşaretlemesi:</strong> Web sitenizi yapay zeka botlarının en rahat okuyacağı JSON-LD ve şema kodlarıyla donatıyorum.</li>
            <li><strong>E-E-A-T (Deneyim, Uzmanlık, Otoriterlik, Güvenilirlik):</strong> İçeriğin gerçek bir uzman tarafından yazıldığını ve kanıtlara dayalı olduğunu yapay zeka algoritmalarına kanıtlıyorum.</li>
            <li><strong>Soru-Cevap Odaklı Yapı (AEO):</strong> Kullanıcıların yapay zekaya sorabileceği spesifik soruları öngörüp, bunlara net, doğrudan ve doğrulanabilir yanıtlar entegre ediyorum.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0f25] to-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-cyan-400 mb-6 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Yapay Zeka Çağında Arama Motorları
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Yapay Zeka Arama Motoru Optimizasyonu (GEO / AEO / AIO) Rehberi
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Google Search Generative Experience (SGE), ChatGPT, Gemini ve diğer yapay zeka cevap motorlarında sitenizin nasıl üst sıralara taşınacağını keşfedin.
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
                  isOpen ? "border-cyan-500/30 bg-cyan-500/[0.02]" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full p-6 md:p-8 flex items-start gap-4 md:gap-6 text-left transition-colors cursor-pointer group"
                >
                  <div className={`p-3 rounded-xl border flex-shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" 
                      : "bg-white/5 border-white/10 text-gray-400 group-hover:text-white"
                  }`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  <div className="flex-1 pt-1 md:pt-1.5">
                    <span className="text-xs font-semibold text-cyan-400/80 uppercase tracking-wider mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className={`text-base md:text-lg font-bold transition-colors ${
                      isOpen ? "text-white" : "text-gray-200 group-hover:text-white"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-lg border border-white/5 bg-white/5 text-gray-400 group-hover:text-white transition-all duration-300 self-center ${
                    isOpen ? "rotate-180 border-cyan-500/20 bg-cyan-500/10 text-cyan-400" : ""
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
                      <div className="px-6 md:px-8 pb-8 pt-2 pl-[4.5rem] md:pl-28 border-t border-white/5">
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
