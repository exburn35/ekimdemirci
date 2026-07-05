"use client";

import { useState } from "react";
// scroll reveal ve motion animasyonları için kancalar
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Target, TrendingUp, Shield, Sliders, Scale, Gem, Building2, Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";
import SEOAuditSection from "@/components/SEOAuditSection";
import RelatedPages from "@/components/RelatedPages";
import ContactForm from "@/components/ContactForm";

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

// SSS Akordeon Elemanı Bileşeni
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-b border-white/10 py-4 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-semibold text-base md:text-lg text-white hover:text-purple-300 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {/* rotasyon mikro etkileşimi */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="text-gray-400 flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-300 text-sm leading-relaxed mt-2 px-2 pb-2 font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SEOConsultingPrices() {
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
                        <span className="text-gray-300 text-sm font-light leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buton Animasyonu */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  className="mt-auto"
                >
                  <Link
                    href="/iletisim"
                    className={`block w-full text-center px-6 py-4 rounded-2xl font-semibold tracking-wide transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.4)]"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    Paketi Seç
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Neden Beni Seçmelisiniz Bölümü */}
      <section className="py-24 bg-gradient-to-b from-[#050814] to-[#0a0f25] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
              Neden Beni Seçmelisiniz?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
              Veri odaklı yaklaşım ve kanıtlanmış büyüme stratejileri ile markanızı geleceğe taşıyın.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {valueProps.map((prop) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -5, borderColor: "rgba(168, 85, 247, 0.3)", backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="bg-white/[0.01] border border-white/[0.06] p-6 rounded-2xl text-center backdrop-blur-md transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-purple-500/20">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{prop.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Önemli Bilgi Bölümü */}
      <section className="py-16 bg-[#0a0f25] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-950/10 via-white/[0.02] to-pink-950/10 border border-white/[0.08] rounded-3xl p-8 text-center backdrop-blur-md"
          >
            <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed font-light">
              <strong className="text-white font-semibold">Önemli Bilgi</strong> Fiyatlar işletmenizin büyüklüğü ve özel ihtiyaçlarınıza göre değişiklik gösterebilir.
            </p>
            <p className="text-purple-300/80 text-sm font-light">
              Size özel bir teklif almak için benimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detaylı Fiyatlandırma Rehberi ve Sektör Senaryoları */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f25] to-[#050814] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
              SEO Fiyatları Hangi Kriterlere Göre Değişir?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
              SEO fiyatları sabit bir kalıba sığdırılamaz. Her projenin ihtiyaçları ve sektörel zorlukları farklılık göstermektedir. Fiyatlandırma sürecinde belirleyici olan temel kriterleri aşağıda bulabilirsiniz.
            </p>
          </motion.div>

          {/* Kriterler Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          >
            {criteriaList.map((crit) => {
              const Icon = crit.icon;
              return (
                <motion.div
                  key={crit.title}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: "rgba(168, 85, 247, 0.25)" }}
                  className="bg-white/[0.01] border border-white/[0.06] rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/5 rounded-xl border border-purple-500/10 text-purple-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-2">{crit.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed font-light">{crit.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Sektörel Senaryolar ve Bütçe İhtiyaçları */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center tracking-tight">
              Sektörel Senaryolar ve Bütçe İhtiyaçları
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scenarios.map((sc, idx) => (
                <motion.div
                  key={sc.title}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  className="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300 mb-3">{sc.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-light mb-4">{sc.description}</p>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold border-t border-white/5 pt-3">
                    {sc.badge}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ajans ve Freelance Karşılaştırması Tablosu */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center tracking-tight">
              Ajans ve Freelance Karşılaştırması
            </h3>
            
            <div className="overflow-x-auto w-full rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-md">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Kriter</th>
                    <th className="p-4 text-xs font-semibold text-purple-400 uppercase tracking-wider bg-purple-500/5">Freelance SEO Uzmanı (Ekim Demirci)</th>
                    <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Klasik SEO Ajansları</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {criteriaRows.map((row) => (
                    <tr key={row.kriter} className="hover:bg-white/[0.01] transition-colors">
                      <td className="p-4 text-xs font-medium text-white">{row.kriter}</td>
                      <td className="p-4 text-xs text-gray-300 bg-purple-500/5">{row.freelance}</td>
                      <td className="p-4 text-xs text-gray-400">{row.ajans}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Sıkça Sorulan Sorular */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center tracking-tight">
              Sıkça Sorulan Sorular
            </h3>
            <div className="bg-white/[0.01] border border-white/[0.06] rounded-3xl p-6 md:p-8 backdrop-blur-md">
              {faqList.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* SEO Audit Bölümü */}
      <SEOAuditSection />

      {/* İlgili Sayfalar */}
      <RelatedPages />

      {/* İletişim Formu */}
      <ContactForm
        title="Size Özel Teklif Alın"
        description="İhtiyaçlarınıza uygun SEO paketini belirlemek için benimle iletişime geçin."
        showTitle={true}
      />

      {/* Service ve FAQ Schema Entegrasyonu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Danışmanlığı",
            "serviceType": "SEO Danışmanlığı",
            "provider": {
              "@type": "Person",
              "name": "Ekim Demirci",
              "url": "https://ekimdemirci.com"
            },
            "areaServed": "TR",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "TRY",
              "lowPrice": "20000",
              "highPrice": "40000",
              "offerCount": "3"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqList.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}
