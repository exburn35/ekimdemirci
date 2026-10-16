import { HelpCircle, ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Sıralama garantisi veriyor musunuz?",
    answer: "Hayır, arama motoru algoritmalarının sahibi olmayan hiçbir dürüst SEO uzmanı 1. sıra garantisi veremez. Google'ın kendi resmi yönergeleri de kesin sıralama vaat edenlerden uzak durulmasını tavsiye eder. Ben gerçek dışı vaatler yerine; kanıtlanmış teknik optimizasyonlar, kaliteli semantik içerik ve şeffaf veri takibiyle organik trafiğinizi ve dönüşümlerinizi sürdürülebilir biçimde artırıyorum.",
  },
  {
    question: "SEO ile GEO arasındaki fark nedir?",
    answer: "SEO geleneksel arama motoru sonuç sayfalarında (Google SERP) ilk sıralara yerleşmeyi hedeflerken, GEO (Generative Engine Optimization) ChatGPT, Gemini ve Perplexity gibi yapay zeka motorlarında referans gösterilmeyi sağlar. SEO tıklama ve trafik odaklıyken, GEO doğrudan yanıt ve marka otoritesi odaklıdır. İki disiplin birbirini tamamlayarak dijital varlığınızı geleceğe hazırlar.",
  },
  {
    question: "SEO danışmanlığı kimler için uygundur?",
    answer: "SEO danışmanlığı; Google ve yapay zeka aramalarından düzenli, nitelikli müşteri ve satış kazanmak isteyen e-ticaret siteleri, B2B şirketler, sağlık klinikleri ve kurumsal işletmeler için uygundur. Dijital varlığını reklam bütçelerine bağımlı kılmadan uzun vadeli, sürdürülebilir organik büyüme sağlamak isteyen her marka için en yüksek yatırım getirili stratejidir.",
  },
  {
    question: "ChatGPT'de görünmek garanti edilebilir mi?",
    answer: "Hayır, yapay zeka modelleri kapalı olasılık algoritmalarıyla çalıştığı için hiçbir platformda kesin görünüm garantisi verilemez. Ancak doğru varlık (Entity) yapılandırması, Schema.org veri mimarisi ve yüksek otoriteli dijital PR stratejileriyle modelin bilgi grafiğinde (Knowledge Graph) yer almanız ve tavsiye edilen birincil kaynak olmanız yüksek olasılıkla sağlanır.",
  },
  {
    question: "Çalışma süresi ve sözleşme nasıl?",
    answer: "SEO ve GEO çalışmaları kalıcı sonuçlar üreten uzun soluklu bir süreç olduğundan, işbirliklerimi genellikle en az 3 ila 6 aylık dönemler halinde yürütüyorum. Sizi bağlayan katı ve hantal ajans sözleşmeleri yerine; aylık şeffaf raporlama, somut hedefler ve karşılıklı güvene dayalı esnek bir çalışma modeli benimsiyorum.",
  },
];

export default function HomeFaq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[#0a0f25] border-b border-white/5 py-12 md:py-16 relative">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            SEO ve GEO Danışmanlığı Hakkında Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Süreçler, garantiler, çalışma modelleri ve arama motoru optimizasyonuna dair merak edilen doğrudan yanıtlar.
          </p>
        </div>

        {/* Accordion List (HTML details/summary: answers stay in DOM for SEO & crawlers even when closed) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none">
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors pr-4">
                  {faq.question}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-white group-open:rotate-180 transition-transform duration-300">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
