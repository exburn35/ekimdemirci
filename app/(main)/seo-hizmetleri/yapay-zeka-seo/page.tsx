import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import AIVisual from "@/components/AIVisual";
import GoogleAIOverviewSection from "@/components/GoogleAIOverviewSection";

export const metadata: Metadata = {
  title: "Yapay Zeka SEO",
  description: "SEO stratejinizi optimize etmek için yapay zeka ve makine öğreniminden yararlanın. Yapay zeka destekli anahtar kelime araştırması, içerik optimizasyonu ve tahmine dayalı analitik.",
  openGraph: {
    title: "Yapay Zeka SEO Hizmetleri | Ekim Demirci",
    description: "Makine öğrenimi ve gelişmiş analitik kullanarak yapay zeka destekli SEO optimizasyonu.",
  },
};

export default function AISEO() {
  return (
    <ServicePageLayout
      title="Yapay Zeka SEO"
      subtitle="Yapay Zeka"
      description="SEO stratejinizi modernleştirmek için yapay zeka ve makine öğreniminin gücünden yararlanın. Yapay zeka destekli SEO hizmetlerimiz, arama kalıplarını analiz etmek, trendleri tahmin etmek ve içeriğinizi maksimum görünürlük ve etkileşim için optimize etmek amacıyla gelişmiş algoritmalar kullanır."
      icon="Brain"
      gradient="from-blue-500 to-cyan-500"
      features={[
        "Yapay Zeka Destekli Anahtar Kelime Araştırması",
        "Doğal Dil İşleme (NLP)",
        "Yapay Zeka ile İçerik Optimizasyonu",
        "Tahmine Dayalı Analitik",
        "Otomatik Teknik Denetimler",
        "Arama Niyeti Analizi",
        "Rakip İstihbaratı",
        "Performans Tahmini",
      ]}
      benefits={[
        {
          title: "Daha Hızlı Sonuçlar",
          description: "Yapay zeka algoritmaları, insanların keşfetmesi haftalar sürecek optimizasyon fırsatlarını belirleyerek saniyeler içinde büyük miktarda veriyi işleyebilir. Bu, daha hızlı uygulama ve daha hızlı sonuçlar anlamına gelir.",
        },
        {
          title: "İçgörüler",
          description: "Yapay zeka destekli trend tahmini ile rakiplerinizin önüne geçin. Hedef kitlenizin bir sonraki adımda ne arayacağını tahmin etmek için arama kalıplarını ve kullanıcı davranışlarını analiz ediyor, talep zirve yapmadan önce içerik oluşturmanıza olanak tanıyorum.",
        },
        {
          title: "Kişiselleştirilmiş Optimizasyon",
          description: "Yapay zeka, bağlamı ve kullanıcı niyetini geleneksel yöntemlerden daha iyi anlar. İçeriğinizi tam olarak kullanıcıların aradığı şeyle eşleşecek şekilde optimize ederek hem sıralamaları hem de dönüşüm oranlarını iyileştiriyorum.",
        },
        {
          title: "Sürekli Öğrenme",
          description: "Yapay zeka sistemlerimiz, arama motoru güncellemelerinden, algoritma değişikliklerinden ve performans verilerinden sürekli olarak öğrenerek SEO stratejinizin dijital ortamla birlikte gelişmesini sağlar.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Yapay Zeka Analizi ve Denetimi",
          description: "Web sitenizin içerik kalitesi, teknik sorunları ve rekabetçi konumu dahil olmak üzere binlerce veri noktasını analiz ederek kapsamlı denetimler gerçekleştirmek için gelişmiş yapay zeka araçları kullanıyorum.",
        },
        {
          title: "Akıllı Anahtar Kelime Stratejisi",
          step: "2",
          description: "Yapay zeka destekli anahtar kelime araştırması, sektörünüzdeki arama hacmini, rekabeti, kullanıcı niyetini ve ortaya çıkan trendleri analizerek yüksek değerli fırsatları belirler.",
        },
        {
          title: "İçerik Optimizasyonu",
          step: "3",
          description: "NLP algoritmaları, içeriğinizi hem arama motorları hem de kullanıcılar için optimize ederek, hedef kitlenize gerçek değer sağlarken iyi sıralamalar elde etmesini sağlar.",
        },
        {
          title: "Performans İzleme",
          step: "4",
          description: "Sürekli yapay zeka izlemesi, performansınızı takip eder, sorunları sıralamaları etkilemeden önce belirler ve gerçek zamanlı verilere dayalı optimizasyonlar önerir.",
        },
      ]}
      blogCategory="yapay-zeka-seo"
      afterHeroNode={<GoogleAIOverviewSection />}
    >
        <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl overflow-hidden glass-strong shadow-[0_0_50px_rgba(139,92,246,0.1)] border border-purple-500/20 group transition-all duration-300 hover:shadow-[0_0_60px_rgba(139,92,246,0.15)] hover:border-purple-500/30">
                    <AIVisual />
                </div>
            </div>
        </section>
    </ServicePageLayout>
  );
}

