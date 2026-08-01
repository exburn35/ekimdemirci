import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import { 
  MapPin, 
  Building, 
  Star, 
  Phone, 
  Navigation, 
  CheckCircle2, 
  ArrowRight, 
  Store, 
  Layers, 
  Clock, 
  Wrench, 
  DollarSign, 
  AlertTriangle,
  PackageCheck,
  BarChart3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Yerel İşletme SEO Danışmanlığı | Ekim Demirci",
  description: "Bölgesel işletmeniz, hizmet merkeziniz ve çoklu şubeleriniz için Google Haritalar (GMB), NAP tutarlılığı ve konuma özel Local SEO danışmanlığı.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/yerel-isletme-seo",
  },
  openGraph: {
    title: "Yerel İşletme SEO Danışmanlığı | Ekim Demirci",
    description: "Yerel işletmeler ve bölgesel hizmet sunan markalar için harita ve lokal arama görünürlüğü.",
  },
};

export default function LocalBusinessSEOPage() {
  const faqItems = [
    {
      question: "Google Haritalar'da (Local Pack) ilk 3 sıraya nasıl girilir?",
      answer: "Doğrulanmış Google İşletme Profili, tutarlı NAP (Ad, Adres, Telefon) verileri, LocalBusiness şema işaretlemesi ve düzenli müşteri yorumları optimizasyonu ile haritalarda üst konuma çıkılır."
    },
    {
      question: "Müşteri yorumları ve yıldız puanları sıralamayı gerçekten etkiler mi?",
      answer: "Evet, Google Haritalar algoritmaları yorum sayısını, yorum tazeliğini ve yanıtlanma oranını doğrudan konum otorite sinyali olarak değerlendirir."
    },
    {
      question: "NAP tutarlılığı nedir ve neden önemlidir?",
      answer: "NAP (Name, Address, Phone) işletmenizin adı, adresi ve telefon numarasının web siteniz ile dijital dizinlerde birebir aynı yazılmasıdır. Tutarlı NAP verisi arama botlarının adresinize güvenmesini sağlar."
    },
    {
      question: "Birden fazla şubem var, her şube için ayrı sayfa veya harita kaydı mı gerekir?",
      answer: "Her fiziki şube için ayrı bir Google İşletme Profili ve web sitenizde o lokasyona özel taranabilir benzersiz bir açılış sayfası kurgulanmalıdır."
    },
    {
      question: "İlçe ve şehir odaklı yerel sayfalarda kopya içerik riski nasıl engellenir?",
      answer: "Aynı metni sadece ilçe adını değiştirerek kopyalamak yerine, o lokasyona özel yerel referanslar, hizmet detayları ve harita entegrasyonu içeren benzersiz sayfalar inşa edilir."
    },
    {
      question: "Yerel SEO çalışmalarının telefon araması ve yol tarifine etkisi ne zaman görülür?",
      answer: "Google İşletme Profili ve şema optimizasyonu tamamlandıktan sonra 2 ila 4 ay içerisinde haritadan gelen telefon araması ve yol tarifi taleplerinde belirgin artış başlar."
    }
  ];

  const localSectors = [
    {
      title: "Klinikler & Diş Hekimleri",
      desc: "İlçe ve şehir bazlı 'en yakın diş kliniği' aramalarında harita ilk 3 sıra görünürlüğü."
    },
    {
      title: "Hukuk Büroları & Avukatlar",
      desc: "Bölgesel hukuki danışmanlık ve uzmanlık alanı aramalarında organik güvenilirlik."
    },
    {
      title: "Restoranlar & Kafe İşletmeleri",
      desc: "Anlık konum aramalarında yol tarifi alma ve rezervasyon aramalarında harita dominasyonu."
    },
    {
      title: "Özel Hizmet & Butik Mağazalar",
      desc: "Fiziki dükkanı olan güzellik merkezleri, nakliyat ve lokal teknik servisler için müşteri çekimi."
    }
  ];

  const deliverables = [
    "İleri Düzey Google İşletme Profili (GMB) Denetim & İyileştirme Raporu",
    "LocalBusiness, PostalAddress ve GeoCoordinates JSON-LD Şema Kodları",
    "Yerel Dizin (Citation) & NAP Tutarlılık Doğrulama Tablosu",
    "Benzersiz İlçe/Şehir Açılış Sayfaları İçerik Haritası",
    "Aylık Harita Tıklama, Yol Tarifi ve Telefon Arama Performance Raporu"
  ];

  const timelineSteps = [
    {
      period: "1. - 2. Ay",
      title: "Profil & NAP Veri Temizliği",
      desc: "Google İşletme Profili güncellenir, hatalı harita konumları ve duplike adres kayıtları düzeltilir."
    },
    {
      period: "3. - 4. Ay",
      title: "Local Pack & Şema Entegrasyonu",
      desc: "LocalBusiness şeması kodlanır, bölgesel kelimelerde Haritalar ilk 3 sıra görünürlüğü elde edilir."
    },
    {
      period: "5. - 12. Ay",
      title: "Bölgesel Pazar Liderliği",
      desc: "İlçe sayfaları ve yorum akışı ile bölgenizdeki fiziki müşteri trafiği ve telefon aramaları kalıcı hale getirilir."
    }
  ];

  const toolsList = [
    { name: "Google Search Console", role: "Yerel Arama Sorguları & Tıklamalar" },
    { name: "Google Analytics 4", role: "Konum Odaklı Ziyaretçi Analizi" },
    { name: "BrightLocal", role: "Harita Sıralama & Citation Takibi" },
    { name: "Semrush", role: "Yerel Kelime & Rakip Harita Analizi" },
    { name: "Screaming Frog", role: "Lokasyon Sayfaları Şema Denetimi" }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />

      <ServicePageLayout
        title="Yerel İşletme SEO Danışmanlığı"
        subtitle="Sektörel SEO Çözümleri"
        description="Fiziki mağaza, restoran, hukuk bürosu veya bölgesel hizmet veren işletmeniz için konuma özel Local SEO stratejileri. Google Haritalar paketinde ilk sıralara yerleşin ve bölgenizdeki müşterileri doğrudan işletmenize çekin."
        icon="Settings"
        gradient="from-blue-500 to-cyan-500"
        features={[
          "Google Haritalar (Local Pack) İleri Düzey Optimizasyonu",
          "Konum Odaklı (Geo-Targeted) Semantik Açılış Sayfaları",
          "LocalBusiness & PostalAddress Şema Kodlaması",
          "Yerel Dizinler & NAP (Ad, Adres, Telefon) Tutarlılığı",
          "Müşteri Değerlendirme & Yorum Yönetim Stratejisi",
          "Çok Şubeli İşletmeler İçin Şube SEO Mimarisi"
        ]}
        scope={[
          {
            title: "Google Haritalar (Local Pack) Dominasyonu",
            description: "Google İşletme Profilinizi optimize ederek bölgenizdeki harita aramalarında ilk 3 sırada yer almanızı ve telefon aramaları toplamanızı sağlıyorum."
          },
          {
            title: "NAP (Adres & Telefon) Tutarlılığı",
            description: "İşletmenizin adı, adresi ve telefon numarasının tüm dijital dizinlerde ve haritalarda birebir uyumlu olmasını sağlayarak Google güven puanını yükseltiyorum."
          },
          {
            title: "LocalBusiness Şema Kodlaması",
            description: "Arama botlarına çalışma saatlerinizi, konum koordinatlarınızı ve hizmet alanlarınızı anlatan JSON-LD kodlamasını kuruyorum."
          },
          {
            title: "Çok Şubeli İşletme SEO Mimarisi",
            description: "Birden fazla lokasyonu olan markalar için karmaşayı engelleyen, her şubeye özel benzersiz açılış sayfaları ve harita entegrasyonu hazırlıyorum."
          },
          {
            title: "Müşteri Değerlendirme Stratejisi",
            description: "Gerçek müşterilerinizden organik yorum toplama ve yorumlara kurumsal dille yanıt verme süreçlerini planlayarak yerel itibar inşa ediyorum."
          },
          {
            title: "Yapay Zeka Aramalarında Yerel Önerilme",
            description: "İşletmenizi ChatGPT, Perplexity ve Google AI Overviews yanıtlarında 'bölgedeki en iyi hizmet noktası' olarak konumlandırıyorum."
          }
        ]}
        process={[
          {
            step: "1",
            title: "Google İşletme Profili & Konum Denetimi",
            description: "GMB profilinizin kural ihlallerini, eksik kategorilerini ve adres doğrulama sinyallerini denetliyorum."
          },
          {
            step: "2",
            title: "LocalBusiness Şema & Sayfa Yapısı",
            description: "Web sitenize işletme çalışma saatlerini, enlem/boylam koordinatlarını ve iletişim verilerini şema olarak kodluyorum."
          },
          {
            step: "3",
            title: "Şehir & İlçe Bazlı Semantik İçerik",
            description: "Hizmet verdiğiniz hedef ilçeler için arama niyetine özel lokasyon sayfaları kurguluyorum."
          },
          {
            step: "4",
            title: "NAP Alıntı & Yorum İtibar Yönetimi",
            description: "Yerel dizinlerde adres tutarlılığını kurup müşteri yorumlarının arama motorlarınca okunmasını sağlıyorum."
          }
        ]}
        targetAudience={[
          {
            audience: "Bölgesel Hizmet Sunanlar",
            benefit: "Tesisatçı, nakliyat ve teknik servis gibi konuma duyarlı aramalarda telefon araması artışı."
          },
          {
            audience: "Fiziki Mağaza & Restoranlar",
            benefit: "Google Haritalar üzerinden doğrudan yol tarifi alan fiziki müşteri hacmi."
          },
          {
            audience: "Hukuk & Danışmanlık Büroları",
            benefit: "Şehir odaklı kurumsal aramalarda profesyonel marka otoritesi."
          },
          {
            audience: "Özel Poliklinik & Butik Merkezler",
            benefit: "Yakındaki hastaları kliniğe çekmeye odaklı harita içi konumlanma."
          }
        ]}
        faqItems={faqItems}
        blogCategory="Yerel SEO"
      >
        {/* HERO TRUST STRIP */}
        <section className="py-8 bg-[#0a0f25] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-blue-400">8+ Yıl</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Yerel SEO Deneyimi</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-cyan-400">150+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Harita & Konum Projesi</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">%134</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Ort. Yol Tarifi & Arama Artışı</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-purple-400">Local Pack</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Google Maps İlk 3 Sıra</div>
              </div>
            </div>
          </div>
        </section>

        {/* DEFINITION & TRANSPARENT EVIDENCE SECTION */}
        <section className="py-16 bg-[#0a0f25]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Yerel İşletme SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Yerel İşletme SEO danışmanlığı, belirli bir şehirde veya bölgede fiziki dükkanı ya da hizmet alanı olan işletmelerin "yakınımdaki", "şehir adı + hizmet" aramalarında Google Haritalar (Local Pack) ve organik aramalarda üst sıralara taşınması çalışmasıdır. Web siteniz için <Link href="/seo-hizmetleri/teknik-seo" className="text-blue-400 underline font-semibold">Teknik SEO</Link> ve <Link href="/seo-hizmetleri/sayfa-ici-seo" className="text-blue-400 underline font-semibold">Sayfa İçi SEO</Link> altyapısını kurarak telefon aramaları ve yol tarifi dönüşümlerini katlıyorum.
              </p>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  Doğrulanmış Metodoloji ve Şeffaf Ölçüm Çerçevesi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-[#111836] border border-cyan-500/20 rounded-2xl">
                    <div className="text-xs text-cyan-400 font-mono font-semibold mb-1">ÖLÇÜMLENEBİLİR CANLI VERİ</div>
                    <div className="text-3xl font-extrabold text-emerald-400 mb-2">%134 Arama Artışı</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      4 aylık yerel SEO ve harita optimizasyonunda işletme telefon aramalarında elde edilen net büyüme. (Kaynak: Google Business Profile 2025)
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-cyan-500/20 rounded-2xl">
                    <div className="text-xs text-cyan-400 font-mono font-semibold mb-1">HARİTA KONUMLANMASI</div>
                    <div className="text-3xl font-extrabold text-white mb-2">Local Pack 1. Sıra</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Hedef ilçelerde "yakındaki hizmet" sorgularında Haritalar ilk 3 sıra paketinde kalıcı yer edinme.
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-cyan-500/20 rounded-2xl">
                    <div className="text-xs text-cyan-400 font-mono font-semibold mb-1">NAP VERİ DOĞRULUĞU</div>
                    <div className="text-3xl font-extrabold text-cyan-400 mb-2">Tam Tutarlılık</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Adres, telefon ve unvan bilgilerinin tüm dijital dizinlerde birebir doğrulanarak Google güven puanı inşası.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET SECTORS CARDS SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                <Store className="w-3.5 h-3.5" />
                Kimler İçin Uygun?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Yerel SEO Hizmetinden Faydalanan Sektörler
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {localSectors.map((sec) => (
                <div key={sec.title} className="bg-[#111836] border border-white/10 p-6 rounded-2xl hover:border-blue-500/30 transition-all">
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">{sec.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEW MANAGEMENT SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-cyan-500/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-amber-400" />
                Müşteri Yorumları ve Yıldız Puanı Yönetim Stratejisi
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Harita sıralamalarında yalnızca konum yakınlığı değil, müşteri yorumlarının kalitesi ve yanıtlanma hızı da etkilidir. Gerçek müşterilerden organik yorum alma teşvik kurguları hazırlıyor, olumsuz yorumları ise Google politikasını zedelemeden kurumsal dille yönetiyorum.
              </p>
            </div>
          </div>
        </section>

        {/* MULTI-BRANCH MANAGEMENT SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Building className="w-8 h-8 text-blue-400" />
                Çok Şubeli İşletmeler İçin Şube SEO Mimarisi
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Birden fazla ilçede veya şehirde şubesi olan markalar için her şubenin kendi harita profilini ve web sitesindeki özel şube sayfasını (örneğin `/kadikoy-subesi`) hiyerarşik yapıda kurguluyorum. Şubelerin birbiriyle rekabet etmesini engelleyen net konum sinyalleri kuruyorum.
              </p>
            </div>
          </div>
        </section>

        {/* CITY/DISTRICT STRATEGY WITH DUPLICATE WARNING SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-amber-500/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-amber-400" />
                Şehir ve İlçe Sayfalarında Kopya İçerik Engelleyici İlke
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Aynı metni sadece ilçe adını değiştirerek (Kadıköy SEO, Beşiktaş SEO vb.) yüzlerce sayfaya çoğaltmak Google tarafından doğrudan spammedilir. Kurguladığım lokasyon sayfalarında her bölgeye özel hizmet kapsamı, gerçek projeler ve benzersiz harita modülleri kullanarak organik sıralama gücü elde ederim.
              </p>
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
                Yerel SEO Danışmanlığı Teslimat Çıktıları
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
                <Clock className="w-3.5 h-3.5" />
                Sonuç Zaman Çizelgesi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Yerel SEO Süreç Haritası
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelineSteps.map((step) => (
                <div key={step.period} className="bg-[#111836] border border-cyan-500/20 p-8 rounded-2xl relative">
                  <div className="text-xs font-mono font-semibold text-cyan-400 mb-2">{step.period}</div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                <Wrench className="w-3.5 h-3.5" />
                Yazılım & Araç Parkı
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Yerel SEO Analizinde Kullandığım Başlıca Araçlar
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
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-3xl p-8 md:p-12 text-center">
              <DollarSign className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Şeffaf ve Şube Sayınıza Özel Teklif Yaklaşımı
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Yerel SEO çalışmalarında tek tip paket satışı yerine işletmenizin konum sayısı, rekabet seviyesi ve hedeflerine uygun şeffaf teklifler hazırlarım. Taahhütsüz ilk değerlendirme randevusu oluşturabilirsiniz.
              </p>
              <Link
                href="/seo-danismanlik-fiyatlari"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
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
