"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";
import FAQClient from "./FAQClient";

const faqs = [
  {
    question: "SEO nedir ve neden önemlidir?",
    answer: "SEO (Search Engine Optimization), web sitenizin arama motorlarında daha üst sıralarda görünmesini sağlayan bir dizi teknik ve içerik optimizasyonudur. SEO, organik trafik çekmenin en etkili yollarından biridir ve uzun vadede sürdürülebilir sonuçlar sağlar. Doğru SEO stratejisi ile web siteniz arama sonuçlarında üst sıralarda yer alır ve daha fazla ziyaretçi çeker.",
  },
  {
    question: "SEO sonuçları ne kadar sürede görülür?",
    answer: "SEO sonuçları genellikle 3-6 ay içinde görülmeye başlar, ancak bu süre web sitenizin mevcut durumuna, rekabet seviyesine ve uygulanan stratejilere göre değişiklik gösterebilir. İlk iyileştirmeler genellikle teknik SEO optimizasyonlarından sonra görülür, ancak tam sonuçlar için sabırlı olmak ve sürekli çalışmak gerekir.",
  },
  {
    question: "SEO hizmeti fiyatları nasıl belirlenir?",
    answer: "SEO hizmeti fiyatları, web sitenizin büyüklüğü, sektör, rekabet seviyesi, hedeflenen anahtar kelimeler ve ihtiyaç duyulan hizmetlerin kapsamına göre belirlenir. Her işletmenin ihtiyaçları farklı olduğu için, size özel bir teklif hazırlamak için detaylı bir analiz yapılması gerekir.",
  },
  {
    question: "Yerel SEO nedir?",
    answer: "Yerel SEO, belirli bir coğrafi bölgede arama yapan kullanıcılara ulaşmak için yapılan SEO optimizasyonudur. Özellikle fiziksel bir konumu olan işletmeler (restoranlar, mağazalar, klinikler vb.) için çok önemlidir. Yerel SEO ile Google My Business optimizasyonu, yerel dizinlere kayıt ve yerel anahtar kelime optimizasyonu yapılır.",
  },
  {
    question: "Teknik SEO nedir?",
    answer: "Teknik SEO, web sitenizin arama motorları tarafından daha iyi anlaşılması ve indekslenmesi için yapılan teknik iyileştirmelerdir. Site hızı, mobil uyumluluk, URL yapısı, sitemap, robots.txt, schema markup ve Core Web Vitals gibi faktörler teknik SEO kapsamındadır.",
  },
  {
    question: "SEO ve Google Ads arasındaki fark nedir?",
    answer: "SEO, organik arama sonuçlarında üst sıralarda yer almak için yapılan uzun vadeli optimizasyonlardır. Google Ads ise ücretli reklamlarla anında sonuç alınan bir pazarlama yöntemidir. SEO sonuçları daha uzun sürede görülür ancak sürdürülebilirdir, Google Ads ise anında sonuç verir ancak reklam bütçesi bittiğinde sonuçlar durur. İdeal strateji, her iki yöntemi de birlikte kullanmaktır.",
  },
  {
    question: "SEO çalışması sırasında web sitem kapanır mı?",
    answer: "Hayır, SEO çalışması sırasında web siteniz kapanmaz. SEO optimizasyonları genellikle web sitenizin çalışmasını etkilemeden yapılır. Teknik SEO iyileştirmeleri sırasında geçici kesintiler olabilir, ancak bunlar minimum seviyede tutulur ve önceden planlanır.",
  },
  {
    question: "SEO raporlaması nasıl yapılır?",
    answer: "SEO raporlaması, web sitenizin performansını takip etmek için düzenli olarak hazırlanan raporlardır. Bu raporlarda trafik, anahtar kelime sıralamaları, backlink sayısı, teknik SEO metrikleri ve dönüşüm oranları gibi veriler yer alır. Genellikle aylık veya haftalık raporlar hazırlanır ve müşteri ile paylaşılır.",
  },
  {
    question: "SEO için içerik ne kadar önemlidir?",
    answer: "İçerik, SEO'nun en önemli faktörlerinden biridir. Kaliteli, kullanıcı odaklı ve SEO optimize edilmiş içerikler, arama motorlarında üst sıralarda yer almanızı sağlar. Düzenli olarak yayınlanan blog yazıları, sayfa içerikleri ve görsel içerikler, web sitenizin otoritesini artırır ve organik trafiği çeker.",
  },
  {
    question: "SEO çalışması sonrası ne yapmalıyım?",
    answer: "SEO çalışması sürekli bir süreçtir. İlk optimizasyonlar yapıldıktan sonra, düzenli olarak içerik güncellemeleri, teknik iyileştirmeler ve performans takibi yapılmalıdır. Arama motoru algoritmaları sürekli değiştiği için, SEO stratejinizi de sürekli güncellemek gerekir.",
  },
];


export default function FAQ() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <HelpCircle className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Sık Sorulan Sorular
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              SEO hizmetleri hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQClient faqs={faqs} />
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Sorunuzun Cevabını Bulamadınız mı?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              İletişime Geç
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEO Audit Section */}
      <SEOAuditSection />

      {/* Contact Form */}
      <ContactForm
        title="Başka Sorularınız mı Var?"
        description="SEO hizmetleri hakkında daha fazla bilgi almak için bizimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}

