import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import { 
  Building2, 
  Layers, 
  Briefcase, 
  FileCheck, 
  Award, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Wrench, 
  DollarSign, 
  FileText,
  ShieldCheck,
  PackageCheck,
  BarChart3,
  Factory
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kurumsal ve B2B SEO Danışmanlığı | Ekim Demirci",
  description: "B2B markaları, sanayi kuruluşları ve kurumsal şirketler için uzun karar alma süreçlerine özel dönüşüm odaklı Kurumsal SEO danışmanlığı.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/kurumsal-b2b-seo",
  },
  openGraph: {
    title: "Kurumsal ve B2B SEO Danışmanlığı | Ekim Demirci",
    description: "B2B şirketleri ve kurumsal markalar için karar verici odaklı B2B SEO çözümleri.",
  },
};

export default function CorporateB2BSEOPage() {
  const faqItems = [
    {
      question: "B2B SEO ne kadar sürede sonuç verir?",
      answer: "B2B sektöründe arama hacimleri daha düşük ve karar alma süreçleri daha uzun olduğundan, ilk nitelikli teklif talepleri (RFQ) 3. ve 4. aylardan itibaren görünür hale gelir. Kalıcı pipeline ve kurumsal pazar hakimiyeti ise 8 ila 12 ay arasında elde edilir."
    },
    {
      question: "Düşük hacimli B2B anahtar kelimeler gerçekten işe yarar mı?",
      answer: "Evet, B2B'de hedef aylık 50 arama alan ama her bir arayanı milyonluk tedarik anlaşmasına yönlendiren yüksek niyetli C-Level ve satın alma müdürü aramalarıdır. Düşük hacimli ancak yüksek değerli sorgular B2B'nin en büyük büyüme motorudur."
    },
    {
      question: "Google Ads ile B2B SEO'yu birlikte mi yürütmeliyiz?",
      answer: "Kısa vadede anlık B2B lead kazanımı için Google Ads kullanılırken, uzun vadede teklif başına maliyeti düşürmek ve karar vericiler gözünde güven inşa etmek için SEO ile entegre yürütülmelidir."
    },
    {
      question: "Rakiplerimiz pazarda yıllardır güçlü sıralamalara sahipse ne yapılabilir?",
      answer: "Rakiplerin gözden kaçırdığı niş kullanım senaryoları (use cases), teknik beyaz bültenler (whitepapers) ve semantik uzun kuyruklu aramalar hedeflenerek pazar payı adım adım ele geçirilir."
    },
    {
      question: "Uluslararası B2B pazarında yabancı dilde arayan satın alma müdürlerine nasıl ulaşılır?",
      answer: "Hedef ülkelerin ticari terimlerine uygun çok dilli içerik mimarisi, hreflang etiketleri ve küresel B2B şema işaretlemeleri ile ihracat odaklı organik tüneller kurgulanır."
    },
    {
      question: "B2B SEO çalışmalarında başarı sadece trafikle mi ölçülür?",
      answer: "Hayır, B2B SEO'da başarı ham ziyaretçi sayısı ile değil; gelen teklif formlarının kalitesi (SQL), katalog indirmeleri ve potansiyel müşteri boru hattı (pipeline) değeri üzerinden ölçülür."
    }
  ];

  const b2bIndustries = [
    {
      title: "Sanayi & Makine Üreticileri",
      desc: "Endüstriyel ekipman, yedek parça ve özel imalat yapan fabrikalar için teknik şartname odaklı görünürlük."
    },
    {
      title: "Tedarikçi & Toptan Ticaret",
      desc: "Büyük ölçekli malzeme tedarikçileri ve distribütörler için kurumsal satın alma müdürlerine erişim."
    },
    {
      title: "SaaS & Kurumsal Yazılım",
      desc: "İş yazılımları, ERP/CRM sistemleri ve bulut çözümleri sunan firmalar için kullanım senaryosu içerikleri."
    },
    {
      title: "İhracat Odaklı Kurumlar",
      desc: "Yurt dışındaki ithalatçı ve bayilere ulaşmak isteyen uluslararası B2B markaları için çok dilli SEO."
    }
  ];

  const deliverables = [
    "Kurumsal B2B Karar Verici Niyet & Rekabet Analizi Raporu",
    "Organization, Corporation ve Brand JSON-LD Şema Kodları",
    "B2B Dönüşüm Tüneli (RFQ, Katalog İndirme & Şartname Mimarisi)",
    "Uluslararası B2B Çok Dilli Hreflang ve İçerik Haritası",
    "Aylık Nitelikli Lead (SQL) ve Pipeline Değeri Performans Raporu"
  ];

  const timelineSteps = [
    {
      period: "1. - 3. Ay",
      title: "Karar Verici Niyet & Şema Mimarısı",
      desc: "Satın alma müdürlerinin teknik aramaları analiz edilir, kurumsal şemalar ve teknik tarama altyapısı düzeltilir."
    },
    {
      period: "4. - 6. Ay",
      title: "B2B Lead Tüneli & Çözüm Sayfaları",
      desc: "Kullanım senaryoları ve beyaz bültenler hedeflenerek ilk nitelikli teklif talepleri (RFQ) toplanmaya başlar."
    },
    {
      period: "7. - 12. Ay",
      title: "Uluslararası Pazar & Sürdürülebilir Pipeline",
      desc: "Karar verici odaklı organik aramalarda ilk sıra yerleşimi tamamlanır, yıllık anlaşmalar sağlayan düzenli lead kanalı oturur."
    }
  ];

  const toolsList = [
    { name: "Google Search Console", role: "Kurumsal B2B Arama Niyeti Takibi" },
    { name: "Google Analytics 4", role: "B2B Lead & RFQ Dönüşüm Analizi" },
    { name: "Ahrefs", role: "Global B2B Rakip & Kelime Araştırması" },
    { name: "Semrush", role: "Pazar Hakimiyeti & İhracat SEO Analizi" },
    { name: "Screaming Frog", role: "Kurumsal Bilgi Mimarisi & Şema Denetimi" }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />

      <ServicePageLayout
        title="Kurumsal ve B2B SEO Danışmanlığı"
        subtitle="Sektörel SEO Çözümleri"
        description="B2B markaları, yazılım şirketleri, üreticiler ve kurumsal firmalar için satın alma karar vericilerini hedefleyen özel B2B SEO stratejileri. Nitelikli teklif taleplerinizi (RFQ) ve kurumsal müşteri ağınızı organik aramayla büyütün."
        icon="Settings"
        gradient="from-indigo-500 to-purple-600"
        features={[
          "Karar Verici Niyet Odaklı B2B Anahtar Kelime Stratejisi",
          "Düşük Hacimli - Yüksek Dönüşümlü Sorgu Optimizasyonu",
          "Whitepaper, Case Study & Ürün Şartname Mimarısı",
          "Organization & Brand Schema Kodlamaları",
          "Global & Uluslararası B2B Pazarları İçin SEO",
          "Kurumsal Müşteri Kazanım (Lead Generation) Optimizasyonu"
        ]}
        scope={[
          {
            title: "Karar Verici Niyet Odaklı Kelime Stratejisi",
            description: "Genel tüketici aramaları yerine C-Level yöneticilerin ve satın alma müdürlerinin doğrudan teklif istemeden önce yaptığı teknik aramaları hedefliyorum."
          },
          {
            title: "B2B Lead Generation & Dönüşüm Tüneli",
            description: "Sitenize gelen kurumsal ziyaretçileri RFQ (Teklif Talebi), katalog indirme veya demo randevusuna yönlendiren nitelikli dönüşüm mekanikleri kuruyorum."
          },
          {
            title: "Organization & Brand Şema Entegrasyonu",
            description: "Arama motoru botlarına şirketinizin kurumsal kimliğini, merkez adresini, bağlı kuruluşlarını ve marka otoritesini şema olarak kodluyorum."
          },
          {
            title: "Düşük Hacimli - Yüksek Değerli Sorgular",
            description: "Aylık arama sayısı az olsa da her biri yüksek ciro değeri taşıyan spesifik sanayi ve B2B ürün aramalarında zirveye çıkmanızı sağlıyorum."
          },
          {
            title: "İhracat & Global B2B SEO",
            description: "Yurt dışındaki ithalatçılara ulaşmak isteyen ihracatçı B2B şirketleri için çok dilli ve bölgesel arama stratejileri yürütüyorum."
          },
          {
            title: "Yapay Zeka Aramalarında Kurumsal Otorite",
            description: "Markanızı ve ürünlerinizi ChatGPT, Perplexity ve Google AI Overviews yanıtlarında sektörün lider B2B çözümü olarak konumlandırıyorum."
          }
        ]}
        process={[
          {
            step: "1",
            title: "Kurumsal B2B Rekabet & Karar Verici Analizi",
            description: "Hedef kitleniz olan satın alma müdürleri ve C-Level yöneticilerin hangi aramaları yaptığını derinlemesine analiz ediyorum."
          },
          {
            step: "2",
            title: "B2B Bilgi Mimarisi & Şema Yapılandırması",
            description: "Organization, Corporation ve Service şema işaretlemeleriyle şirketinizin kurumsal kimliğini arama botlarına kodluyorum."
          },
          {
            step: "3",
            title: "Semantik Çözüm & Kullanım Senaryosu İçerikleri",
            description: "Ürün ve hizmetlerinizin sanayi ve sektör sorunlarını nasıl çözdüğünü anlatan teknik ve ikna edici içerik haritaları kurguluyorum."
          },
          {
            step: "4",
            title: "B2B Lead Generation & Performans Ölçümü",
            description: "Teklif formları, katalog indirmeleri ve arama butonlarının dönüşüm süreçlerini düzenli olarak optimize ediyorum."
          }
        ]}
        targetAudience={[
          {
            audience: "Sanayi & İmalat Şirketleri",
            benefit: "Endüstriyel parça, hammadde ve özel üretim aramalarında doğrudan fabrika teklif talepleri."
          },
          {
            audience: "Kurumsal Yazılım & SaaS",
            benefit: "C-Level karar vericilerden demo ve ürün deneme talepleri toplama."
          },
          {
            audience: "Toptan Distribütör & İthalatçılar",
            benefit: "Bölgesel bayilik ve toptan tedarik aramalarında pazar liderliği."
          },
          {
            audience: "İhracat Yapan B2B Markaları",
            benefit: "Yabancı ülkelerdeki satın alma departmanlarına organik yolla ulaşım."
          }
        ]}
        faqItems={faqItems}
        blogCategory="Kurumsal SEO"
      >
        {/* HERO TRUST STRIP */}
        <section className="py-8 bg-[#0a0f25] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-indigo-400">8+ Yıl</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Kurumsal B2B SEO Deneyimi</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-purple-400">60+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">B2B & Sanayi Markası</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">%78</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Ort. Nitelikli RFQ Lead Artışı</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-blue-400">Ahrefs & GSC</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Enterprise Veri Standartları</div>
              </div>
            </div>
          </div>
        </section>

        {/* DEFINITION & TRANSPARENT EVIDENCE SECTION */}
        <section className="py-16 bg-[#0a0f25]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Kurumsal ve B2B SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                B2B (Business to Business) ve Kurumsal SEO danışmanlığı; şirketlere, üreticilere, yazılım ve sanayi markalarına hizmet sunan firmaların satın alma karar vericilerine (C-Level yöneticiler, satın alma müdürleri) organik aramalarda ulaşmasını sağlayan stratejik SEO çalışmasıdır. Şirketiniz için <Link href="/seo-hizmetleri/teknik-seo" className="text-indigo-400 underline font-semibold">Teknik SEO</Link> ve <Link href="/seo-hizmetleri/sayfa-ici-seo" className="text-indigo-400 underline font-semibold">Sayfa İçi SEO</Link> altyapısını kurgulayarak nitelikli teklif taleplerini (RFQ) artırırım.
              </p>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-indigo-400" />
                  Doğrulanmış Metodoloji ve Şeffaf Ölçüm Çerçevesi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-[#111836] border border-indigo-500/20 rounded-2xl">
                    <div className="text-xs text-indigo-400 font-mono font-semibold mb-1">ÖLÇÜMLENEBİLİR CANLI VERİ</div>
                    <div className="text-3xl font-extrabold text-emerald-400 mb-2">%78 RFQ Artışı</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      9 aylık B2B karar verici odaklı SEO sürecinde kurumsal teklif taleplerinde (RFQ) elde edilen net büyüme. (Kaynak: GA4 B2B Lead Takibi 2025)
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-indigo-500/20 rounded-2xl">
                    <div className="text-xs text-indigo-400 font-mono font-semibold mb-1">HEDEF KİTLE UYUMU</div>
                    <div className="text-3xl font-extrabold text-white mb-2">C-Level Erişimi</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Düşük hacimli ama yüksek bütçeli satın alma aramalarında teknik karar vericilere doğrudan ulaşma.
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-indigo-500/20 rounded-2xl">
                    <div className="text-xs text-indigo-400 font-mono font-semibold mb-1">PIPELINE VERİMLİLİĞİ</div>
                    <div className="text-3xl font-extrabold text-purple-400 mb-2">Yüksek Lead Kalitesi</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Organik kanaldan gelen teklif taleplerinin satış ekibince doğrulanma (SQL) oranında belirgin iyileşme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY B2B IS DIFFERENT SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-indigo-500/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-indigo-400" />
                B2B SEO Neden B2C SEO'dan Farklıdır?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                B2C pazarlamada hızlı satın alma ve yüksek arama hacimleri ön plandayken; B2B pazarlamada arama hacimleri düşüktür ancak her bir organik talep şirketiniz için yıllık büyük bütçeli anlaşmalar anlamına gelir. Karar alma süreci tek bir kişi değil, çok paydaşlı kurul (C-Level, Finans, Satın Alma, Teknik Ekip) tarafından yürütülür.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-indigo-300 mb-2">Uzun Satış Döngüsü</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Satın alma kararı haftalar veya aylar sürebilir. SEO stratejisi tüm araştırma aşamalarında markanızı gösterir.
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-purple-300 mb-2">Çok Paydaşlı Karar Birimi</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    İçerikler hem teknik mühendisin sorularını hem de finans yöneticisinin maliyet kaygılarını yanıtlar.
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-emerald-300 mb-2">Düşük Hacim - Yüksek Değer</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Aylık 30 defa aratılan spesifik bir sanayi ürünü anahtar kelimesi milyonluk tedarik anlaşması getirebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* B2B SECTOR VERTICALS SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                <Factory className="w-3.5 h-3.5" />
                Sektör Dikey Çözümleri
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                B2B Sektör Dikeyine Özel SEO Çözümleri
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {b2bIndustries.map((ind) => (
                <div key={ind.title} className="bg-[#111836] border border-white/10 p-6 rounded-2xl hover:border-indigo-500/30 transition-all">
                  <h3 className="text-xl font-bold text-indigo-300 mb-2">{ind.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B LEAD GENERATION MECHANICS SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-purple-500/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-purple-400" />
                RFQ, Katalog ve Şartname Odaklı B2B Dönüşüm Tüneli
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Organik ziyaretçileri kurumsal teklif talebine (RFQ) dönüştürmek için sitenizde somut dönüşüm tünelleri kuruyorum. Ürün teknik şartnameleri, indirilebilir PDF kataloglar, vaka incelemeleri (case studies) ve hızlı teklif alma formları ile lead dönüşümünü optimizasyona dahil ediyorum.
              </p>
            </div>
          </div>
        </section>

        {/* CORPORATE TRUST & NDA / SLA SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
                Kurumsal Güven, Gizlilik (NDA) ve Hizmet Seviyesi (SLA)
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Kurumsal markalarla çalışırken ticari sırların korunması ve şeffaf iletişim en temel ilkemdir. Tüm projelerde Gizlilik Sözleşmesi (NDA) ve belirlenmiş Hizmet Seviyesi Anlaşması (SLA) ilkeleri çerçevesinde kurumsal çalışma disiplini sürdürürüm.
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
                Kurumsal B2B SEO Danışmanlığı Teslimat Çıktıları
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                <Clock className="w-3.5 h-3.5" />
                Sonuç Zaman Çizelgesi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Kurumsal B2B SEO Süreç Haritası
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelineSteps.map((step) => (
                <div key={step.period} className="bg-[#111836] border border-indigo-500/20 p-8 rounded-2xl relative">
                  <div className="text-xs font-mono font-semibold text-indigo-400 mb-2">{step.period}</div>
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
                Kurumsal B2B SEO Analizinde Kullandığım Başlıca Araçlar
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

        {/* PRICING POSTURE & CALENDAR APPOINTMENT SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-3xl p-8 md:p-12 text-center">
              <DollarSign className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Şeffaf ve Şirketinize Özel B2B Teklif Yaklaşımı
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Kurumsal B2B SEO çalışmalarında sabit şablon paketler yerine şirketinizin ürün yapısı, hedef pazarları ve ihale/teklif hacimlerine uygun şeffaf danışmanlık bütçeleri hazırlarım. Dilerseniz doğrudan online randevu takvimi üzerinden strateji görüşmesi planlayabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/seo-danismanlik-fiyatlari"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                >
                  SEO Danışmanlık Fiyatlarını İnceleyin
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all"
                >
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  Randevu Randevusu Planlayın
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
}
