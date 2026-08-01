import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import { 
  ShoppingBag, 
  TrendingUp, 
  Search, 
  Shield, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Clock, 
  PackageCheck, 
  Wrench, 
  DollarSign, 
  Store,
  Tag,
  BarChart3
} from "lucide-react";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";

export const metadata: Metadata = {
  title: "E-Ticaret SEO Danışmanlığı | Ekim Demirci",
  description: "Online satışlarınızı ve organik cironuzu artırmak için ürün ve kategori şemaları, filtre optimizasyonu ve semantik içerik odaklı E-Ticaret SEO danışmanlığı.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/e-ticaret-seo",
  },
  openGraph: {
    title: "E-Ticaret SEO Danışmanlığı | Ekim Demirci",
    description: "E-ticaret siteleri için kurguladığım semantik şema ve dönüşüm odaklı SEO çözümleri.",
  },
};

export default function ECommerceSEOPage() {
  const faqItems = [
    {
      question: "E-ticaret SEO çalışmaları kaç ayda sonuç verir?",
      answer: "Altyapı sorunlarının çözülmesi ve kategori mimarisinin optimize edilmesinin ardından ilk organik sıralama sinyalleri 4 ila 8 hafta içinde görünür. Düzenli satış ve kalıcı ciro büyümesi ise 4. aydan itibaren belirginleşir."
    },
    {
      question: "Kategori sayfası mı yoksa ürün sayfası mı önce optimize edilmeli?",
      answer: "Arama hacminin büyük kısmı geniş niyetli kategori ve filtre sorgularında toplandığı için öncelik kategori mimarisidir. Yüksek dönüşüm potansiyeli taşıyan amiral gemisi ürünler ise paralel olarak şema ve içerik açısından zenginleştirilir."
    },
    {
      question: "Hangi e-ticaret altyapılarıyla çalışıyorsunuz?",
      answer: "Shopify, WooCommerce, Ticimax, İkas ve IdeaSoft başta olmak üzere özel yazılımlı tüm e-ticaret platformlarında teknik tarama engellerini kaldırıp semantik optimizasyon kurguluyorum."
    },
    {
      question: "Reklamsız organik satış ve ciro büyümesi gerçekten mümkün mü?",
      answer: "Doğru arama niyetine göre hedeflenmiş kategori sayfaları ve zenginleştirilmiş ürün kartları sayesinde, tıklama başına maliyet ödemeden doğrudan satın almaya hazır ziyaretçileri mağazanıza çekerek sürdürülebilir ciro kanalı oluşturuyorum."
    },
    {
      question: "Çok kombinasyonlu filtre ve stok dışı ürün sayfaları SEO tarafında nasıl yönetilir?",
      answer: "Arama hacmi olmayan filtre kombinasyonlarına noindex veya canonical kuralları uygulanarak indeks bütçesi korunur. Stokta tükenen ürünlerde ise yönlendirme veya benzer ürün önerme stratejisiyle sayfa otoritesi muhafaza edilir."
    },
    {
      question: "Product ve AggregateRating şeması e-ticaret mağazasına ne kazandırır?",
      answer: "Google arama sonuçlarında ürün fiyatı, stok durumu ve yıldız puanlarının görünmesini sağlayarak arama sonuçlarındaki görünürlüğünüzü zenginleştirir ve tıklama oranını (CTR) artırır."
    }
  ];

  const ecommercePlatforms = [
    {
      name: "Shopify",
      tag: "Global Ölçek",
      desc: "Liquid şablon yapısı, uluslararası SEO mimarisi ve uygulama ekosistemine özel indeksleme kontrolü kurguluyorum."
    },
    {
      name: "WooCommerce",
      tag: "Tam Esneklik",
      desc: "Veritabanı yükünü hafifleten sorgu optimizasyonları, gelişmiş taksonomi ve katmanlı şema entegrasyonu sağlıyorum."
    },
    {
      name: "Ticimax & IdeaSoft",
      tag: "Yerel Güç",
      desc: "Hazır altyapıların canonical, parametre ve blokaj sınırlamalarını aşan özel SEO teknikleri uyguluyorum."
    },
    {
      name: "İkas",
      tag: "Modern & Hızlı",
      desc: "Yüksek sayfa hız avantajını doğru semantik kategori kurgusu ve otomatik ürün şemalarıyla tamamlıyorum."
    }
  ];

  const deliverables = [
    "Detaylı E-Ticaret Teknik SEO & Tarama Bütçesi Raporu",
    "Kategori, Koleksiyon ve Filtre (Facet) Mimarisi Haritası",
    "Product, AggregateRating ve Offer JSON-LD Şema Kodları",
    "Arama Niyetine Uygun Semantik Kategori İçerik Rehberleri",
    "Aylık GA4 Dönüşüm ve Google Search Console Ciro Raporu"
  ];

  const timelineSteps = [
    {
      period: "1. - 2. Ay",
      title: "Teknik Altyapı & Şema Mimarısı",
      desc: "Filtre indeksleme problemleri çözülür, taranabilirlik engelleri kaldırılır ve ürün şemaları entegre edilir."
    },
    {
      period: "3. - 5. Ay",
      title: "Kategori & Semantik İçerik İyileştirmesi",
      desc: "Ana kategoriler ve yüksek hacimli alt filtreler hedeflenerek organik görünürlük artışı tetiklenir."
    },
    {
      period: "6. - 12. Ay",
      title: "Kalıcı Ciro Büyümesi & Pazar Liderliği",
      desc: "Satın alma niyetli sorgularda üst sıralar elde edilir, reklamsız sürdürülebilir satış kanalı inşa edilir."
    }
  ];

  const toolsList = [
    { name: "Google Search Console", role: "Organik Performans & İndeks Dağılımı" },
    { name: "Google Analytics 4", role: "E-Ticaret Dönüşüm & Ciro Takibi" },
    { name: "Semrush", role: "Rakip Kategori & Kelime Analizi" },
    { name: "Screaming Frog", role: "Derinlemesine Tarama & Şema Denetimi" },
    { name: "Sitebulb", role: "Görsel Mimarisi & Hiyerarşi Analizi" }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />

      <ServicePageLayout
        title="E-Ticaret SEO Danışmanlığı"
        subtitle="Sektörel SEO Çözümleri"
        description="Online mağazanızın ürün ve kategori sayfalarını Google ve yapay zeka arama motorlarında zirveye taşıyın. Semantik kategori mimarisi, ürün şema entegrasyonu ve dönüşüm odaklı içerik stratejisiyle organik satış cirolarınızı büyütüyorum."
        icon="Settings"
        gradient="from-purple-500 to-pink-500"
        features={[
          "Kategori & Koleksiyon Mimarısı Optimizasyonu",
          "Facet & Filtre İndeksleme Yönetimi",
          "Product & AggregateRating Rich Snippet Şemaları",
          "Core Web Vitals & E-Ticaret Hız İyileştirmesi",
          "Arama Niyetine Uygun Ürün İçerik Rehberleri",
          "Dönüşüm Oranı & Sepet Terk Optimizasyonu"
        ]}
        scope={[
          {
            title: "Kategori & Filtre (Facet) Mimarısı",
            description: "Binlerce filtreli ürün sayfasının arama motoru botlarını yormasını engelliyor, sadece yüksek arama hacmine sahip değerli kategorilerin taranmasını sağlıyorum."
          },
          {
            title: "Product & Offer Şema Entegrasyonu",
            description: "Ürün fiyatı, stok durumu ve kullanıcı değerlendirmelerini doğrudan arama sonuçlarına taşıyarak tıklama oranını yükseltiyorum."
          },
          {
            title: "Semantik İçerik Mimarısı",
            description: "Kategori altlarına ve ürün rehberlerine kullanıcıların satın alma öncesi sorduğu soruları yanıtlayan semantik metinler entegre ediyorum."
          },
          {
            title: "Teknik Performans & Tarama Bütçesi",
            description: "Site içi kırık bağlantıları, duplike sayfaları ve yavaş açılan görselleri temizleyerek taranabilir bir mağaza yapısı kuruyorum."
          },
          {
            title: "Yapay Zeka Aramalarında Önerilme",
            description: "Ürünlerinizi ChatGPT, Perplexity ve Google AI Overviews yanıtlarına doğrudan satın alma seçeneği olarak konumlandırıyorum."
          },
          {
            title: "Organik Ciro & Dönüşüm Takibi",
            description: "Yalnızca organik tıklamayı değil, e-ticaret sitenize gelen ziyaretçilerin satışa dönüşme oranını GA4 üzerinden düzenli raporluyorum."
          }
        ]}
        process={[
          {
            step: "1",
            title: "E-Ticaret Depo & Altyapı Denetimi",
            description: "Mevcut e-ticaret yazılımınızın teknik tarama engellerini, duplike URL yapılarını ve şema eksikliklerini tespit ediyorum."
          },
          {
            step: "2",
            title: "Kategori & Filtre Yapılandırması",
            description: "Kullanıcıların arama alışkanlıklarına göre katmanlı kategori ve filtre URL haritası kurguluyor, indeks karmaşasını engelliyorum."
          },
          {
            step: "3",
            title: "Ürün & Marka Şema Kodlaması",
            description: "JSON-LD formatında fiyat, para birimi, stok ve değerlendirme verilerini doğrudan arama botlarına sunacak yapıyı kuruyorum."
          },
          {
            step: "4",
            title: "Semantik İçerik & Ciro Optimizasyonu",
            description: "Ürün açıklamalarını ve kategori rehberlerini arama niyetine uygun semantik üçlülerle zenginleştirip dönüşüm oranlarını yükseltiyorum."
          }
        ]}
        targetAudience={[
          {
            audience: "Moda & Giyim Mağazaları",
            benefit: "Sezonluk koleksiyon aramalarında ve beden/renk filtrelerinde organik görünürlük artışı."
          },
          {
            audience: "Elektronik & Ev Eşyası",
            benefit: "Karşılaştırmalı ürün aramalarında Rich Snippet yıldızları ile öne geçme."
          },
          {
            audience: "Kozmetik & Kişisel Bakım",
            benefit: "Kullanım amacı ve içerik odaklı arama niyetlerinde kategori hakimiyeti."
          },
          {
            audience: "Niche B2C Üreticileri",
            benefit: "Doğrudan üreticiden tüketiciye (D2C) satışlarda reklamsız müşteri kazanımı."
          }
        ]}
        faqItems={faqItems}
        blogCategory="E-Ticaret SEO"
      >
        {/* HERO TRUST STRIP */}
        <section className="py-8 bg-[#0a0f25] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-purple-400">8+ Yıl</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Sektörel Uzmanlık</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-pink-400">120+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Tamamlanan SEO Projesi</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">%147</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Ort. Organik Tıklama Artışı</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-blue-400">GA4 & GSC</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Doğrulanmış Veri Altyapısı</div>
              </div>
            </div>
          </div>
        </section>

        {/* DEFINITION & METHODOLOGY EVIDENCE SECTION */}
        <section className="py-16 bg-[#0a0f25]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Definition Box */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                E-Ticaret SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                E-Ticaret SEO Danışmanlığı, online satış yapan markaların kategorilerini ve ürünlerini arama motorlarında doğru kitleyle buluşturan uçtan uca altyapı yönetimidir. Mağazanız için <Link href="/seo-hizmetleri/teknik-seo" className="text-purple-400 underline font-semibold">Teknik SEO</Link> ve <Link href="/seo-hizmetleri/sayfa-ici-seo" className="text-purple-400 underline font-semibold">Sayfa İçi SEO</Link> mimarisini kurarak geleneksel reklam bütçelerine bağımlılığı azaltır, kesintisiz bir organik ciro kanalı inşa ederim.
              </p>

              {/* Transparent Evidence Box */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  Doğrulanmış Metodoloji ve Şeffaf Ölçüm Çerçevesi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-[#111836] border border-purple-500/20 rounded-2xl">
                    <div className="text-xs text-purple-400 font-mono font-semibold mb-1">ÖLÇÜMLENEBİLİR CANLI VERİ</div>
                    <div className="text-3xl font-extrabold text-emerald-400 mb-2">%147 Tıklama Artışı</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      7 aylık e-ticaret kategori ve filtre optimizasyonu sürecinde elde edilen doğrulanmış organik tıklama büyümesi. (Kaynak: Google Search Console 2025)
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-purple-500/20 rounded-2xl">
                    <div className="text-xs text-purple-400 font-mono font-semibold mb-1">HEDEF KONUMLANMA</div>
                    <div className="text-3xl font-extrabold text-white mb-2">İlk 3 Sıra</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Yüksek satın alma niyetli anahtar kelime sorgularında sürdürülebilir arama sonucu görünürlüğü.
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-purple-500/20 rounded-2xl">
                    <div className="text-xs text-purple-400 font-mono font-semibold mb-1">ZENGİN SONUÇ ETKİSİ</div>
                    <div className="text-3xl font-extrabold text-purple-400 mb-2">+%34 CTR Katkısı</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Product, Offer ve AggregateRating Rich Snippet kodlamaları sonrası arama tıklama oranındaki net artış.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-COMMERCE PLATFORMS SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-400 uppercase tracking-widest mb-3">
                <Store className="w-3.5 h-3.5" />
                Altyapı Özelinde Çözümler
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Farklı E-Ticaret Altyapılarında SEO Yönetimi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecommercePlatforms.map((platform) => (
                <div key={platform.name} className="bg-[#111836] border border-white/10 p-6 rounded-2xl hover:border-pink-500/30 transition-all">
                  <div className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-2.5 py-1 rounded-md inline-block mb-3">
                    {platform.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{platform.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY VS PRODUCT SEARCH INTENT SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-purple-500/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Tag className="w-8 h-8 text-purple-400" />
                Kategori Sorgusu ve Ürün Sorgusu Arama Niyeti Farkı
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-purple-300 mb-3">Kategori Sorguları (Geniş Arama Niyeti)</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Kullanıcı henüz tam model kararı vermemiş, çeşitliliği kıyaslamak ister (Örn: "deri erkek ayakkabı"). Bu sayfalarda doğru filtreleme, zengin kategori alt metni ve katmanlı taksonomi ile trafik çekilir.
                  </p>
                  <div className="text-xs text-purple-400 font-mono font-semibold">Hedef: Yüksek Hacim & Karşılaştırma Trafiği</div>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-pink-300 mb-3">Ürün Sorguları (Satın Alma Niyeti)</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Kullanıcı alacağı ürünü belirlemiş, fiyat ve stok bilgisi arar (Örn: "X marka 42 numara siyah deri bot"). Bu sayfalarda Product şeması, stok güncellemesi ve hızlı ödeme aksiyonları ön plandadır.
                  </p>
                  <div className="text-xs text-pink-400 font-mono font-semibold">Hedef: Yüksek Dönüşüm Oranı & Sepet Tamamlama</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES LIST SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
                <PackageCheck className="w-3.5 h-3.5" />
                Somut Çıktılar
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Danışmanlık Sürecinde Elde Edeceğiniz Çıktılar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, idx) => (
                <div key={idx} className="bg-[#111836] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200 font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE ROADMAP SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                <Clock className="w-3.5 h-3.5" />
                Sonuç Zaman Çizelgesi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                E-Ticaret SEO Süreç Haritası
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelineSteps.map((step) => (
                <div key={step.period} className="bg-[#111836] border border-blue-500/20 p-8 rounded-2xl relative">
                  <div className="text-xs font-mono font-semibold text-blue-400 mb-2">{step.period}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS STRIP SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
                <Wrench className="w-3.5 h-3.5" />
                Yazılım & Araç Parkı
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                E-Ticaret SEO Analizinde Kullandığım Başlıca Araçlar
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {toolsList.map((tool) => (
                <div key={tool.name} className="bg-[#111836] border border-white/10 p-5 rounded-xl text-center">
                  <div className="font-bold text-white text-base mb-1">{tool.name}</div>
                  <div className="text-xs text-gray-400">{tool.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING POSTURE SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center">
              <DollarSign className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Şeffaf ve İhtiyaca Özel Teklif Yaklaşımı
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                E-ticaret SEO çalışmalarında sabit şablon paketler yerine mağazanızın ürün sayısı, altyapısı ve hedeflerine uygun şeffaf danışmanlık bütçeleri kurguluyorum. Gizli maliyetler olmadan taahhütsüz ilk değerlendirme görüşmesi yapıyoruz.
              </p>
              <Link
                href="/seo-danismanlik-fiyatlari"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                SEO Danışmanlık Fiyatlarını İnceleyin
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
}
