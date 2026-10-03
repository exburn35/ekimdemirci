"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Target, TrendingUp, Shield, Sliders, Scale, Gem, Building2, Calendar } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import GEOPricingSection from "@/components/GEOPricingSection";
import FAQ from "@/components/FAQ";

// Fiyatlandırma paket verileri
const pricingPlans = [
  {
    name: "Başlangıç",
    price: "₺20.000",
    period: "aylık",
    description: "Küçük işletmeler ve yeni başlayanlar için",
    profile: "En fazla 50 sayfalık yerel odaklı butik web siteleri için idealdir",
    features: [
      "Detaylı site analizi",
      "Anahtar kelime araştırması ve tespiti",
      "Site içi optimizasyon çalışmaları",
      "Teknik hataların giderilmesi",
      "Aylık performans raporu",
      "E posta desteği",
    ],
    popular: false,
  },
  {
    name: "Profesyonel",
    price: "₺30.000",
    period: "aylık",
    description: "Büyüyen işletmeler için kapsamlı çözüm",
    profile: "150 sayfaya kadar olan büyüyen e ticaret siteleri ile orta ölçekli ekipler için uygundur",
    features: [
      "Kapsamlı site analizi",
      "Geniş kapsamlı anahtar kelime çalışması",
      "Site içi ve site dışı optimizasyon",
      "Teknik hataların düzenli giderilmesi",
      "İçerik stratejisi planlaması",
      "Aylık otorite artırıcı çalışmalar",
      "Aylık performans raporu ve toplantı",
      "Haftalık ilerleme değerlendirmesi",
      "Öncelikli destek",
    ],
    popular: true,
  },
  {
    name: "Kapsamlı",
    price: "₺40.000",
    period: "aylık",
    description: "Büyük kuruluşlar için özelleştirilmiş çözüm",
    profile: "Çok geniş ürün yelpazesine sahip büyük web siteleri ile yüksek rekabetçi sektörler için uygundur",
    features: [
      "Özel SEO stratejisi",
      "Genişletilmiş anahtar kelime çalışması",
      "Tüm SEO hizmet paketi",
      "Özel içerik planlaması",
      "Gelişmiş otorite artırma çalışmaları",
      "Detaylı rakip analizi",
      "Haftalık detaylı raporlama",
      "Kesintisiz destek",
      "Özel SEO eğitimleri",
      "Markaya özel çözümler",
    ],
    popular: false,
  },
];

// Neden biz verileri
const valueProps = [
  {
    icon: TrendingUp,
    title: "Kanıtlanmış Başarı",
    description: "Ortalama organik trafik artışı yüzde 120 seviyesindedir",
  },
  {
    icon: Target,
    title: "Sektörel Tecrübe",
    description: "Bugüne kadar 40 üzerinde farklı sektörde başarı elde ettim",
  },
  {
    icon: Zap,
    title: "Hızlı Aksiyon",
    description: "İlk 3 ay içerisinde hedeflenen kelimelerin yüzde 70 kadarı ilk sayfaya gelir",
  },
  {
    icon: Shield,
    title: "Şeffaf İzleme",
    description: "Her ay düzenli olarak sıralama gelişimini ve organik ciro artışlarını paylaşıyorum",
  },
];

// Fiyat kriterleri verileri
const criteriaList = [
  {
    icon: Sliders,
    title: "Web Sitenizin Mevcut Teknik Durumu",
    description: "Teknik altyapısı zayıf olan veya ciddi indeksleme sorunları yaşayan web siteleri başlangıçta daha yoğun bir teknik çalışma gerektirir. Altyapının iyileştirilmesi sürecin ilk adımıdır.",
  },
  {
    icon: Target,
    title: "Hedeflenen Anahtar Kelimelerin Rekabet Seviyesi",
    description: "Sektördeki rekabet oranı arttıkça arama sonuçlarında üst sıralara çıkmak daha karmaşık stratejiler gerektirir. Bu durum çalışma yoğunluğunu ve dolayısıyla bütçeyi doğrudan etkiler.",
  },
  {
    icon: Scale,
    title: "Rakip Web Sitelerinin Analizi",
    description: "Sektördeki rakiplerinizin mevcut otorite seviyeleri ve dijital pazarlama bütçeleri hedeflerimize ulaşmak için atmamız gereken adımların büyüklüğünü belirler.",
  },
  {
    icon: Gem,
    title: "İçerik İhtiyacı ve Sıklığı",
    description: "Arama motorlarının en çok önem verdiği konulardan biri düzenli ve özgün içerik girişidir. Sitenin büyüklüğüne göre üretilmesi gereken içerik hacmi bütçeyi şekillendirir.",
  },
];

// Sektörel Senaryolar
const scenarios = [
  {
    title: "Yerel Hizmet Sektörü",
    description: "Yerel bir diş kliniği veya güzellik merkezi için bölgesel rekabet hedeflenir. Bu durumlarda başlangıç düzeyindeki bütçeler hedeflere ulaşmak için çoğunlukla yeterli olmaktadır.",
    badge: "Düşük Rekabet",
  },
  {
    title: "Ulusal E Ticaret Portalları",
    description: "Binlerce ürünün yer aldığı geniş kategorili bir e ticaret sitesinde teknik SEO ve otomasyon ön plana çıkar. Bu tür projelerde kapsamlı veya profesyonel paketlerin seçilmesi gerekir.",
    badge: "Orta / Yüksek Rekabet",
  },
  {
    title: "Yüksek Rekabetli Finans ve Sağlık Sektörleri",
    description: "Tıklama başı maliyetlerin son derece yüksek olduğu sektörlerde kalıcı sıralamalar elde etmek uzun soluklu ve üst düzey bir çalışma planı gerektirir.",
    badge: "Çok Yüksek Rekabet",
  },
];

// Karşılaştırma tablosu satırları
const criteriaRows = [
  {
    kriter: "İletişim modeli",
    freelance: "Doğrudan uzman ile birebir ve hızlı iletişim kurulur",
    ajans: "Müşteri temsilcisi aracılığıyla süreçler ilerler",
  },
  {
    kriter: "Müdahale hızı",
    freelance: "Algoritma güncellemelerinde aynı gün aksiyon alınır",
    ajans: "İç onay süreçleri sebebiyle aksiyonlar zaman alabilir",
  },
  {
    kriter: "Odaklanma seviyesi",
    freelance: "Sınırlı sayıda butik projeyle derinlemesine çalışılır",
    ajans: "Çok sayıda proje aynı anda yürütülür",
  },
  {
    kriter: "Maliyet yapısı",
    freelance: "Yüksek genel giderler yansıtılmadığı için bütçe dostudur",
    ajans: "Ofis ve yönetim giderleri fiyatlara yansıtılır",
  },
];

// Sıkça sorulan sorular listesi
const faqList = [
  {
    question: "Sonuç almam ne kadar sürer?",
    answer: "Yapılan optimizasyonların etkisi genellikle ilk 3 ay içerisinde görülmeye başlar. Kalıcı ve güçlü sonuçlar elde etmek için en az 6 ay boyunca düzenli çalışma yapılması önem taşır.",
  },
  {
    question: "Sözleşme süresi var mı?",
    answer: "Herhangi bir minimum çalışma süresi zorunluluğu bulunmamaktadır. Karşılıkli memnuniyet esasına dayanarak aylık periyotlar halinde çalışmaya devam edebilirsiniz.",
  },
  {
    question: "Hangi raporlama araçlarını kullanıyorsun?",
    answer: "Performans takibi için Google Search Console ve Google Analytics verilerini kullanıyorum. Ayrıca gelişmiş sektörel analiz araçlarıyla da çalışmaları destekliyorum.",
  },
  {
    question: "Paket ortasında yükseltme yapabilir miyim?",
    answer: "İşletmenizin büyüme hızına veya değişen ihtiyaçlarına göre dilediğiniz zaman paketler arasında geçiş yapabilirsiniz.",
  },
];

export default function SEOPricingContent() {
  const shouldReduceMotion = useReducedMotion();

  // staggered animasyon tanımları
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  // kart ve bölümler için scroll reveal animasyonu
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 25 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: shouldReduceMotion ? 0 : 0.6 
      } 
    },
  };

  return (
    <>
      <Breadcrumb items={[{ name: "SEO Danışmanlık Fiyatları", href: "/seo-danismanlik-fiyatlari" }]} />
      {/* Hero Bölümü */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* Arka plan katmanı */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f25] via-[#0d153a] to-[#050814]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Işık halkaları */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                SEO Danışmanlık Fiyatları
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Bütçenize uygun SEO çözümleri ile dijital varlığınızı güçlendirin. 
              Şeffaf fiyatlandırma ve esnek paketler ile ihtiyaçlarınıza uygun çözümü bulun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fiyat Kartları Bölümü */}
      <section className="py-20 relative overflow-hidden bg-[#050814]">
        {/* Arka plan blur efekti */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-950/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* staggered reveal tetikleme */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                // hover mikro etkileşimi
                whileHover={shouldReduceMotion ? {} : { 
                  y: -10, 
                  boxShadow: "0 30px 60px -15px rgba(168, 85, 247, 0.2)",
                  borderColor: plan.popular ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.2)"
                }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 border bg-white/[0.02] backdrop-blur-md ${
                  plan.popular 
                    ? "border-purple-500/40 bg-gradient-to-b from-purple-950/10 via-white/[0.02] to-white/[0.02]" 
                    : "border-white/[0.08]"
                }`}
              >
                {/* Popüler Paket Glow/Pulse Etkisi */}
                {plan.popular && (
                  <>
                    <motion.div 
                      animate={{
                        boxShadow: [
                          "0 0 15px rgba(168, 85, 247, 0.15)",
                          "0 0 30px rgba(168, 85, 247, 0.3)",
                          "0 0 15px rgba(168, 85, 247, 0.15)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-3xl pointer-events-none border border-purple-500/30"
                    />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-bold tracking-wider text-white shadow-lg uppercase">
                      En Popüler
                    </div>
                  </>
                )}

                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-xs tracking-wide min-h-[40px] px-4 font-light">{plan.description}</p>
                    
                    {/* Fiyat */}
                    <div className="my-6">
                      <span className="text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                      <span className="text-gray-500 text-sm ml-2">/ {plan.period}</span>
                    </div>

                    {/* Hedef Profil Alt Metni */}
                    <p className="text-purple-300 text-xs py-2 px-4 bg-purple-500/10 rounded-xl border border-purple-500/20 inline-block max-w-full font-light">
                      {plan.profile}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/iletisim"
                  className={`w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group text-sm ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]"
                      : "bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/[0.08]"
                  }`}
                >
                  Teklif Alın
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GEO Pricing Section Injection */}
      <GEOPricingSection />

      {/* Neden Ekim Demirci? Değer Önerisi */}
      <section className="py-20 relative bg-[#0a0f25] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Neden Benimle Çalışmalısınız?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
              Yalnızca sıralama değil, ölçülebilir büyüme ve doğrudan ciro odaklı danışmanlık yaklaşımı
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.1, duration: 0.5 }}
                  className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fiyatlar Neye Göre Değişir? Kriterler Bölümü */}
      <section className="py-20 relative bg-[#050814] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                SEO Danışmanlık Fiyatları Neye Göre Belirlenir?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
              Her web sitesinin dinamikleri farklıdır. Projenin kapsamını ve gereken bütçeyi belirleyen ana kriterler şunlardır:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {criteriaList.map((crit, idx) => {
              const Icon = crit.icon;
              return (
                <motion.div
                  key={crit.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: shouldReduceMotion ? 0 : idx * 0.1, duration: 0.5 }}
                  className="bg-white/[0.02] border border-white/[0.06] p-8 rounded-2xl relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{crit.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{crit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sektörel Senaryolar ve Gerçekçi Bütçeler */}
      <section className="py-20 relative bg-[#0a0f25] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Sektörünüze Göre Bütçe Senaryoları
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
              Hangi sektörde faaliyet gösterdiğinize göre çalışma planı ve hedeflenen hacimler değişiklik gösterir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((scen, index) => (
              <motion.div
                key={scen.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.1, duration: 0.5 }}
                className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium rounded-full mb-4">
                    {scen.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{scen.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">{scen.description}</p>
                </div>
                <Link 
                  href="/sektorel-seo-hizmetleri"
                  className="text-purple-400 text-xs font-semibold hover:text-purple-300 inline-flex items-center gap-1 group mt-auto"
                >
                  Sektörel Detayları İncele
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance Danışman mı, Ajans mı? Karşılaştırma Bölümü */}
      <section className="py-20 relative bg-[#050814] border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Freelance SEO Uzmanı ile Ajans Karşılaştırması
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
              Bütçenizi değerlendirirken hizmet modelinin avantajlarını ve farklarını göz önünde bulundurun.
            </p>
          </motion.div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.01]">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="p-4 text-gray-300 font-semibold">Değerlendirme Kriteri</th>
                  <th className="p-4 text-purple-400 font-semibold">Freelance SEO (Ekim Demirci)</th>
                  <th className="p-4 text-gray-400 font-semibold">Klasik SEO Ajansları</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {criteriaRows.map((row) => (
                  <tr key={row.kriter} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 text-white font-medium">{row.kriter}</td>
                    <td className="p-4 text-gray-300 font-light">{row.freelance}</td>
                    <td className="p-4 text-gray-500 font-light">{row.ajans}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Çalışma Süreci Bölümü */}
      <section className="py-20 relative bg-[#0a0f25] border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Adım Adım Çalışma Süreci
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
              Danışmanlık boyunca uyguladığımız şeffaf ve metodolojik yaklaşım
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "İlk Analiz ve Audit",
                desc: "Web sitenizin teknik altyapısı, taranabilirlik sorunları ve mevcut görünürlüğü detaylıca taranır.",
              },
              {
                step: "02",
                title: "Strateji ve Yol Haritası",
                desc: "Hedef anahtar kelimeler ve rakip boşlukları doğrultusunda ilk 6 aylık optimizasyon planı oluşturulur.",
              },
              {
                step: "03",
                title: "Uygulama ve Optimizasyon",
                desc: "Sayfa içi SEO, teknik iyileştirmeler ve içerik direktifleri düzenli periyotlarla yayına alınır.",
              },
              {
                step: "04",
                title: "Takip ve Düzenli Raporlama",
                desc: "Sıralama kazanımları, organik dönüşümler ve yeni fırsatlar her ay şeffaf biçimde analiz edilir.",
              },
            ].map((st, i) => (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: shouldReduceMotion ? 0 : i * 0.1, duration: 0.5 }}
                className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl relative"
              >
                <div className="text-3xl font-extrabold text-purple-500/30 mb-3 font-mono">{st.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular Bölümü */}
      <section className="py-20 relative bg-[#050814] border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center tracking-tight">
              Sıkça Sorulan Sorular
            </h3>
            <FAQ
              items={faqList}
              renderSection={false}
              name="pricing-faq"
              defaultOpenIndex={0}
              includeSchema={true}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
