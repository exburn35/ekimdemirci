"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search, Award, Clock, Settings, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: any;
  category: string;
}

export default function ServicesFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Genel Bilgi",
      icon: Search,
      question: "SEO Hizmeti Nedir ve İşletmenize Ne Kazandırır?",
      answer: (
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          <strong>SEO hizmeti</strong> (Arama Motoru Optimizasyonu), web sitenizin Google gibi arama motorlarında hedeflenen anahtar kelimelerde üst sıralara çıkması için yapılan stratejik ve teknik çalışmaların tamamıdır. Profesyonel bir SEO hizmeti sayesinde markanız, potansiyel müşterilerinizin yaptığı aramalarda organik olarak karşılarına çıkar. Reklam maliyetlerinizi (CPC) düşürür, sitenize sürekli ve dönüşüm oranı yüksek bir ziyaretçi akışı sağlar ve dijital prestijinizi kalıcı olarak artırır.
        </p>
      ),
    },
    {
      category: "Hizmet Kapsamı",
      icon: Settings,
      question: "SEO Danışmanlığı Neleri Kapsar? Süreç Nasıl İşler?",
      answer: (
        <div className="space-y-3 text-gray-300 text-sm md:text-base">
          <p className="leading-relaxed">
            <strong>SEO danışmanlığı</strong> süreci, sitenizin dijital dünyadaki tüm ihtiyaçlarını kapsayan uçtan uca bir yol haritasıdır. Bu danışmanlık kapsamında sunduğum hizmetler şunlardır:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-blue-400">
            <li><strong>Detaylı Teknik SEO Analizi:</strong> Sitenizin hız, taranabilirlik, mobil uyumluluk ve indeks problemlerinin çözülmesi.</li>
            <li><strong>Kapsamlı Anahtar Kelime Araştırması:</strong> Sektörünüzde en yüksek dönüşüm ve arama hacmine sahip kelimelerin belirlenmesi.</li>
            <li><strong>Semantik İçerik Stratejisi:</strong> Google'ın güncel yapay zeka algoritmalarına uyumlu, kaliteli ve derinlemesine içerik yapısının kurulması.</li>
            <li><strong>Site Dışı SEO (Link İnşası):</strong> Sitenizin otoritesini artıracak doğal ve kaliteli backlink profili oluşturulması.</li>
            <li><strong>Şeffaf Raporlama:</strong> Her ay organik trafik, sıralama kazanımları ve dönüşüm verilerinin detaylı analizi.</li>
          </ul>
        </div>
      ),
    },
    {
      category: "Danışman Seçimi",
      icon: Award,
      question: "SEO Hizmeti Alırken Doğru Uzman veya Danışman Nasıl Seçilir?",
      answer: (
        <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            Başarılı bir <strong>SEO çalışması</strong> için doğru iş ortağını seçmek hayati önem taşır. Dikkat etmeniz gereken en önemli hususlar:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-purple-400">
            <li><strong>Gerçekçi Hedefler:</strong> Size &quot;1 haftada 1. sıraya çıkarma&quot; gibi gerçek dışı ve manipülatif garantiler verenlerden kaçınmalısınız. Google algoritması sürekli güncellenmektedir ve hiçbir uzman arama motorunun sahibi değildir.</li>
            <li><strong>Şeffaflık ve İletişim:</strong> Süreç boyunca ne yapıldığını, neden yapıldığını net raporlarla sunan ve projenizle doğrudan ilgilenen bir <strong>SEO danışmanı</strong> ile çalışmalısınız.</li>
            <li><strong>Teknik ve Algoritmik Yetkinlik:</strong> Modern SEO sadece anahtar kelime yazmaktan ibaret değildir; yapay zeka entegrasyonu (AI SEO), veri analizi ve teknik şema optimizasyonuna hakimiyet şarttır.</li>
          </ul>
        </div>
      ),
    },
    {
      category: "Zamanlama",
      icon: Clock,
      question: "SEO Çalışmalarının Etkisi Ne Zaman Görülmeye Başlar?",
      answer: (
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          SEO, uzun vadeli ve sürekli değer üreten dijital bir yatırımdır. Arama motorlarının sitenizi taraması, yapılan değişiklikleri dizine eklemesi ve rakiplerin durumuna göre sıralamanızı yeniden hesaplaması organik zaman alır. Genellikle teknik iyileştirmelerin ve kaliteli içeriklerin etkisi <strong>3. aydan itibaren</strong> net şekilde grafiklere yansır. Sektörünüzün rekabet yoğunluğuna ve hedeflenen kelimelerin zorluğuna bağlı olarak, kalıcı ve domine edici sonuçlar <strong>6 ila 12 ay</strong> arasında tam olgunluğa ulaşır.
        </p>
      ),
    },
    {
      category: "Süreklilik",
      icon: Sparkles,
      question: "Aylık SEO Hizmeti Almak Zorunlu mu? Tek Seferlik SEO Yetmez mi?",
      answer: (
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Web sitenizdeki kritik teknik hataların çözülmesi tek seferlik bir <strong>teknik SEO</strong> çalışmasıyla tamamlanabilir. Ancak Google algoritmaları yılda binlerce kez güncellenir, rakipleriniz boş durmaz ve sektörünüzdeki arama trendleri sürekli değişir. Sektörünüzde kalıcı bir liderlik elde etmek, güncel kalmak ve organik trafiğinizi sürekli artırmak için <strong>aylık SEO danışmanlığı</strong> almak şarttır. Sürekli analiz, güncel içerik stratejileri ve düzenli link profili optimizasyonu olmadan elde edilen sıralamaların kalıcı olması mümkün değildir.
        </p>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#030712] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-blue-400 mb-6 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            Merak Edilenler
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              SEO Hizmeti Hakkında Sıkça Sorulan Sorular
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Profesyonel bir SEO danışmanlığı yatırımı yapmadan önce kafanızdaki tüm soru işaretlerini giderin. İşte en çok merak edilen konular.
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
                  isOpen ? "border-blue-500/30 bg-blue-500/[0.02]" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full p-6 md:p-8 flex items-start gap-4 md:gap-6 text-left transition-colors cursor-pointer group"
                >
                  <div className={`p-3 rounded-xl border flex-shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-400" 
                      : "bg-white/5 border-white/10 text-gray-400 group-hover:text-white"
                  }`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  <div className="flex-1 pt-1 md:pt-1.5">
                    <span className="text-xs font-semibold text-blue-400/80 uppercase tracking-wider mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className={`text-base md:text-lg font-bold transition-colors ${
                      isOpen ? "text-white" : "text-gray-200 group-hover:text-white"
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-lg border border-white/5 bg-white/5 text-gray-400 group-hover:text-white transition-all duration-300 self-center ${
                    isOpen ? "rotate-180 border-blue-500/20 bg-blue-500/10 text-blue-400" : ""
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
