"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Target, TrendingUp, Shield, Sliders, Scale, Gem, Building2, Calendar } from "lucide-react";
import Link from "next/link";
import SEOAuditSection from "@/components/SEOAuditSection";
import RelatedPages from "@/components/RelatedPages";
import ContactForm from "@/components/ContactForm";

const pricingPlans = [
  {
    name: "Başlangıç",
    price: "₺20.000",
    period: "aylık",
    description: "Küçük işletmeler ve yeni başlayanlar için",
    features: [
      "Temel SEO Analizi",
      "Anahtar Kelime Araştırması (50 kelime)",
      "On-Page SEO Optimizasyonu",
      "Teknik SEO İyileştirmeleri",
      "Aylık Raporlama",
      "E-posta Desteği",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Profesyonel",
    price: "₺30.000",
    period: "aylık",
    description: "Büyüyen işletmeler için kapsamlı çözüm",
    features: [
      "Kapsamlı SEO Analizi",
      "Anahtar Kelime Araştırması (150 kelime)",
      "On-Page ve Off-Page SEO",
      "Teknik SEO İyileştirmeleri",
      "İçerik Stratejisi ve Optimizasyonu",
      "Link Building (5 backlink/ay)",
      "Aylık Raporlama ve Analiz",
      "Haftalık Toplantı",
      "Öncelikli Destek",
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Kapsamlı",
    price: "₺40.000",
    period: "aylık",
    description: "Büyük kuruluşlar için özelleştirilmiş çözüm",
    features: [
      "Kapsamlı SEO Stratejisi",
      "Sınırsız Anahtar Kelime Araştırması",
      "Tam SEO Hizmet Paketi",
      "Özel İçerik Stratejisi",
      "Gelişmiş Link Building",
      "Rakip Analizi ve Benchmarking",
      "Haftalık Raporlama",
      "7/24 Destek",
      "Özel SEO Eğitimleri",
      "Özelleştirilmiş Çözümler",
    ],
    gradient: "from-orange-500 to-red-500",
    popular: false,
  },
];

const valueProps = [
  {
    icon: Zap,
    title: "Hızlı Sonuçlar",
    description: "Optimize edilmiş stratejiler ile hızlı sonuçlar alın",
  },
  {
    icon: Target,
    title: "Hedef Odaklı",
    description: "İş hedeflerinize uygun SEO stratejileri",
  },
  {
    icon: TrendingUp,
    title: "Sürekli Büyüme",
    description: "Uzun vadeli büyüme ve sürdürülebilir sonuçlar",
  },
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "Kanıtlanmış metodoloji ve şeffaf raporlama",
  },
];

export default function SEOConsultingPrices() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SEO Danışmanlık Fiyatları
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Bütçenize uygun SEO çözümleri ile dijital varlığınızı güçlendirin. 
              Şeffaf fiyatlandırma ve esnek paketler ile ihtiyaçlarınıza uygun çözümü bulun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`glass-strong rounded-2xl p-8 relative ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold text-white">
                    En Popüler
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period !== "özel" && (
                      <span className="text-gray-400 text-lg">/{plan.period}</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/iletisim"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Paketi Seç
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Neden Beni Seçmelisiniz?
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-strong p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                  <p className="text-gray-400 text-sm">{prop.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8 text-center"
          >
            <p className="text-gray-300 text-lg mb-4">
              <strong className="text-white">Not:</strong> Fiyatlar işletmenizin büyüklüğü, 
              sektör ve özel ihtiyaçlarınıza göre değişiklik gösterebilir.
            </p>
            <p className="text-gray-400">
              Size özel bir teklif almak için benimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Semantic SEO Pricing Guide Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SEO Danışmanlığı ve Fiyatlandırma Rehberi
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Arama motoru optimizasyonu yatırımlarınızı planlarken bilmeniz gereken tüm detaylar, maliyet kalemleri ve en çok merak edilen konular.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                icon: Sliders,
                title: "SEO Fiyatları Neye Göre Değişir?",
                content: (
                  <>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      SEO fiyatlandırması sabit bir hizmet bedeli değildir. Web sitenizin hedeflerine ve mevcut durumuna göre özelleştirilir. Fiyatı belirleyen temel unsurlar şunlardır:
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm pl-4 list-disc marker:text-blue-400">
                      <li><strong>Sitenin Mevcut Durumu:</strong> Teknik hataları fazla olan, yavaş çalışan veya taranma sorunları yaşayan sitelerin optimizasyonu daha yoğun bir ilk çalışma gerektirir.</li>
                      <li><strong>Hedef Anahtar Kelimelerin Rekabet Hacmi:</strong> Sektörünüzdeki rekabet düzeyi arttıkça, üst sıralara çıkmak için gereken stratejik içerik ve link inşası yatırımı da artar.</li>
                      <li><strong>Rakip Analizi:</strong> Rakiplerinizin SEO bütçeleri ve web sitesi otoriteleri, yapılması gereken çalışmanın büyüklüğünü belirler.</li>
                      <li><strong>İçerik İhtiyacı:</strong> Semantik SEO ilkelerine uygun, yüksek kaliteli ve düzenli içerik üretimi SEO başarısının anahtarıdır.</li>
                    </ul>
                  </>
                ),
                gradient: "from-blue-500/10 to-cyan-500/10",
                border: "hover:border-blue-500/30",
                iconColor: "text-blue-400",
              },
              {
                icon: Scale,
                title: "SEO Fiyatları: Ajans vs Freelance",
                content: (
                  <>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      SEO hizmeti alırken kurumsal bir ajansla veya alanında uzman bir freelance danışmanla çalışmak arasında hem süreç hem de maliyet açısından kritik farklar vardır:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <h4 className="font-semibold text-white mb-2 text-sm text-purple-400">SEO Ajansları</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          Yüksek genel giderleri (ofis, yönetim vb.) nedeniyle fiyatları daha yüksektir. İletişim süreçleri bürokratiktir ve projeniz genellikle aynı anda birçok projeye bakan junior uzmanlara emanet edilir.
                        </p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <h4 className="font-semibold text-white mb-2 text-sm text-pink-400">Freelance SEO Danışmanı</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          Doğrudan benimle, yani alanında uzman bir danışmanla birebir iletişim kurarsınız. Esnek ve hızlı hareket edebilirim; sitenizdeki teknik güncellemelere veya arama motoru algoritma değişikliklerine anında müdahale edebilirim.
                        </p>
                      </div>
                    </div>
                  </>
                ),
                gradient: "from-purple-500/10 to-pink-500/10",
                border: "hover:border-purple-500/30",
                iconColor: "text-purple-400",
              },
              {
                icon: Gem,
                title: "Freelance SEO Fiyatlarının Avantajı Nelerdir?",
                content: (
                  <>
                    <p className="text-gray-300 leading-relaxed">
                      Uzman bir freelance SEO danışmanı olarak çalışmam, bütçenizi maksimum verimle kullanmanızı sağlar. Ajansların sahip olduğu devasa yönetim ve operasyon maliyetlerim olmadığı için, <strong>ajans kalitesindeki üst düzey hizmeti çok daha optimize ve şeffaf fiyatlarla</strong> doğrudan projenize sunarım. Sınırlı sayıda butik projeyle çalıştığım için sitenize terzi usulü çözümler üretir, yapay başarı raporları yerine doğrudan cironuza veya organik trafiğinize yansıyacak gerçek metriklere odaklanırım.
                    </p>
                  </>
                ),
                gradient: "from-pink-500/10 to-orange-500/10",
                border: "hover:border-pink-500/30",
                iconColor: "text-pink-400",
              },
              {
                icon: Building2,
                title: "SEO Fiyatları Sektörden Sektöre Değişir mi?",
                content: (
                  <>
                    <p className="text-gray-300 leading-relaxed">
                      Evet, kesinlikle değişir. Örneğin; yerel bazda hizmet veren butik bir klinik ile ulusal çapta milyonlarca ürünü olan bir e-ticaret devinin SEO gereksinimleri tamamen farklıdır. E-ticaret, finans, gayrimenkul veya sağlık gibi arama motoru rekabetinin ve tıklama başı maliyetlerin (CPC) zirvede olduğu sektörlerde kalıcı sıralamalar elde etmek, daha agresif stratejiler ve daha gelişmiş bütçeler gerektirir. Sektörünüzün dinamiklerini analiz ederek bütçenizi en doğru hedeflere kanalize ederim.
                    </p>
                  </>
                ),
                gradient: "from-orange-500/10 to-red-500/10",
                border: "hover:border-orange-500/30",
                iconColor: "text-orange-400",
              },
              {
                icon: Calendar,
                title: "Aylık ve Yıllık SEO Fiyatları",
                content: (
                  <>
                    <p className="text-gray-300 leading-relaxed">
                      SEO, tek seferlik bir işlem değil, sürekli büyüme getiren yaşayan bir süreçtir. 
                      <strong> Aylık SEO danışmanlığı</strong> sitenizin sürekli güncel kalmasını, teknik hataların anında çözülmesini ve yeni trendlere göre optimize edilmiş içerik üretiminin kesintisiz sürmesini sağlar. 
                      <strong> Yıllık planlamalar</strong> ise arama sonuçlarındaki otoritenizi kalıcı hale getirmek ve bütçenizi mevsimsel arama hacmi dalgalanmalarına göre en verimli şekilde yönetmek için en doğru stratejidir. Uzun vadeli iş birlikleri, sürdürülebilir başarıyı beraberinde getirir.
                    </p>
                  </>
                ),
                gradient: "from-cyan-500/10 to-blue-500/10",
                border: "hover:border-cyan-500/30",
                iconColor: "text-cyan-400",
              },
            ].map((section, idx) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`glass-strong rounded-2xl p-6 md:p-8 border border-white/5 transition-all duration-300 bg-gradient-to-r ${section.gradient} ${section.border}`}
                >
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                    <div className={`p-3 bg-white/5 rounded-xl border border-white/10 ${section.iconColor} flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                      <div className="text-gray-300 text-sm leading-relaxed">{section.content}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Audit Section */}
      <SEOAuditSection />

      <RelatedPages />

      {/* Contact Form */}
      <ContactForm
        title="Size Özel Teklif Alın"
        description="İhtiyaçlarınıza uygun SEO paketini belirlemek için benimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}

