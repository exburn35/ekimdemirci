import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import Link from "next/link";
import { 
  Stethoscope, 
  ShieldCheck, 
  UserCheck, 
  HeartPulse, 
  Award, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Globe2, 
  Star, 
  Clock, 
  Wrench, 
  DollarSign,
  Scale,
  Building,
  BarChart3,
  PackageCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sağlık ve Klinik SEO Danışmanlığı | Ekim Demirci",
  description: "Doktorlar, hastaneler ve diş klinikleri için YMYL, E-E-A-T ve MedicalWebPage şeması uyumlu Sağlık ve Klinik SEO danışmanlığı hizmetleri.",
  alternates: {
    canonical: "/sektorel-seo-hizmetleri/saglik-ve-klinik-seo",
  },
  openGraph: {
    title: "Sağlık ve Klinik SEO Danışmanlığı | Ekim Demirci",
    description: "Medikal sektör ve klinikler için Google YMYL ve E-E-A-T standartlarında SEO uzmanlığı.",
  },
};

export default function HealthAndClinicSEOPage() {
  const faqItems = [
    {
      question: "Sağlık mevzuatına aykırı içerik üretmeden SEO nasıl yapılır?",
      answer: "Sağlık Bakanlığı ve Türk Tabipleri Birliği (TTB) mevzuatına tam uyumlu olarak, tedavi vaadi içermeyen, reklam dilinden uzak, sadece hastaları bilgilendirmeye yönelik bilimsel içerik mimarisi kurgulanır."
    },
    {
      question: "Hekim biyografisi ve akademik geçmiş Google sıralamasını nasıl etkiler?",
      answer: "Google'ın YMYL (Your Money Your Life) ve E-E-A-T kriterleri uyarınca sağlık içeriklerinin uzman hekim onayından geçtiğini ve hekimin tıbbi diplomaya, sertifikalara sahip olduğunu doğrulamak doğrudan sıralama başarısını belirler."
    },
    {
      question: "Diş kliniği veya muayenehane için Google Haritalar'da nasıl üst sıraya çıkılır?",
      answer: "MedicalBusiness ve Physician şema entegrasyonu, tutarlı NAP (İşletme Adı, Adres, Telefon) alıntıları ve organik hasta değerlendirmeleri ile Google Maps yerel paketinde (Local Pack) ilk 3 sıra hedeflenir."
    },
    {
      question: "Sağlık turizmi hastaları için çok dilli SEO çalışmaları nasıl işler?",
      answer: "İngilizce, Almanca, Arapça ve Rusça dillerinde hedef ülkelerin arama niyetine özel hreflang yapısı, lokasyon odaklı tıbbi rehberler ve uluslararası hasta dönüşüm tünelleri kurulur."
    },
    {
      question: "YMYL ve E-E-A-T güncellemelerinden etkilenen sağlık siteleri nasıl kurtarılır?",
      answer: "Yetersiz hekim profilleri zenginleştirilir, kaynaksız sağlık iddiaları bilimsel literatür atıflarıyla güncellenir ve tıbbi şeffaflık sinyalleri yeniden kurgulanarak sıralama kayıpları telefi edilir."
    },
    {
      question: "Hastaların online değerlendirmeleri ve yorumları SEO sıralamasını etkiler mi?",
      answer: "Google Haritalar ve dizinlerde yer alan hasta yorumları yerel otorite sinyalidir. Etik yollarla toplanan ve düzenli yanıtlanan değerlendirmeler yerel hasta görünürlüğünü doğrudan artırır."
    }
  ];

  const medicalBranches = [
    {
      title: "Diş Hekimliği & İmplant",
      desc: "İmplant, zirkonyum, gülüş tasarımı ve ortodonti aramalarında yerel harita ve semantik içerik hakimiyeti."
    },
    {
      title: "Estetik & Plastik Cerrahi",
      desc: "Burun estetiği, saç ekimi ve vücut şekillendirme aramalarında yüksek niyetli hasta dönüşüm kurgusu."
    },
    {
      title: "Dermatoloji & Medikal Estetik",
      desc: "Lazer tedavileri, cilt gençleştirme ve dermatolojik rahatsızlık bilgilendirmelerinde E-E-A-T otoritesi."
    },
    {
      title: "Genel Sağlık & Poliklinikler",
      desc: "Çok branşlı hastaneler ve tıp merkezleri için bölüm hiyerarşisine özel MedicalWebPage mimarısı."
    }
  ];

  const deliverables = [
    "Medikal YMYL & E-E-A-T Güvenilirlik Denetim Raporu",
    "MedicalWebPage, Physician ve MedicalBusiness JSON-LD Kodları",
    "Hekim Biyografisi ve Tıbbi Danışman Şablon Mimarısı",
    "Sağlık Turizmi Çok Dilli Hreflang ve İçerik Haritası",
    "Aylık GA4 Hasta Randevu Dönüşüm ve Harita Raporu"
  ];

  const timelineSteps = [
    {
      period: "1. - 3. Ay",
      title: "YMYL Temizliği & Hekim Profilleme",
      desc: "Tıbbi makaleler bilimsel kaynaklarla zenginleştirilir, hekim biyografileri ve şema kodlamaları tamamlanır."
    },
    {
      period: "4. - 6. Ay",
      title: "Harita & Tedavi Sayfası İyileştirmesi",
      desc: "Local Business şemaları ve bölgesel arama sayfaları ile ilk hasta randevu sinyalleri artış gösterir."
    },
    {
      period: "7. - 12. Ay",
      title: "Uluslararası Otorite & Sağlık Turizmi",
      desc: "Çok dilli içerik mimarısı ile yurt dışı hasta aramalarında sürdürülebilir organik büyüme elde edilir."
    }
  ];

  const toolsList = [
    { name: "Google Search Console", role: "Tıbbi Arama Hacmi & Sıralamalar" },
    { name: "Google Analytics 4", role: "Hasta Randevu Dönüşüm Takibi" },
    { name: "Semrush", role: "Medikal Rakip & Kelime Analizi" },
    { name: "Screaming Frog", role: "E-E-A-T & Şema Mimarisi Denetimi" },
    { name: "BrightLocal", role: "Yerel Harita & İtibar Yönetimi" }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />

      <ServicePageLayout
        title="Sağlık ve Klinik SEO Danışmanlığı"
        subtitle="Sektörel SEO Çözümleri"
        description="Özel klinikler, diş hekimleri, hastaneler ve uzman doktorlar için Google YMYL & E-E-A-T standartlarında medikal SEO danışmanlığı. Doğru hasta kitlesine ulaşın, harita ve arama sonuçlarında güvenilir bir sağlık markası inşa edin."
        icon="Brain"
        gradient="from-emerald-500 to-teal-500"
        features={[
          "YMYL & E-E-A-T Medikal Kalite Optimizasyonu",
          "MedicalWebPage & Physician Şema Yapılandırması",
          "Diş Klinikleri & Poliklinikler İçin Özel Bölüm",
          "Google Maps & Yerel Hasta Arama Görünürlüğü",
          "Hekim Onaylı Bilgilendirici İçerik Mimarisi",
          "Mevzuata Uyumlu Etik SEO Süreçleri"
        ]}
        scope={[
          {
            title: "YMYL & E-E-A-T Medikal Otorite",
            description: "Google'ın YMYL algoritmalarına uygun olarak hekim diplomalarını, tıbbi uzmanlık sertifikalarını ve bilimsel atıfları ön plana çıkarıyorum."
          },
          {
            title: "MedicalWebPage & Physician Şeması",
            description: "Arama motoru botlarına kliniğin çalışma saatlerini, doktor kadrosunu ve tıbbi branşlarını anlatan şema yapılandırması kurguluyorum."
          },
          {
            title: "Hasta Değerlendirme & İtibar Yönetimi",
            description: "Google Maps ve sağlık dizinlerindeki değerlendirmeleri yöneterek potansiyel hastaların kliniğinize olan güvenini pekiştiriyorum."
          },
          {
            title: "Sağlık Turizmi & Çok Dilli SEO",
            description: "İngilizce, Almanca ve Arapça dillerinde yurt dışından hasta çekmeye yönelik hreflang mimarisi ve bölgesel stratejiler uyguluyorum."
          },
          {
            title: "Tedavi Odaklı Semantik İçerik Mimarısı",
            description: "İmplant, estetik ve cerrahi alanlarda hastaların merak ettiği konuları yanıtlayan, mevzuata uygun bilgilendirici içerikler hazırlıyorum."
          },
          {
            title: "Yapay Zeka Aramalarında Hekim Otoritesi",
            description: "Klinik ve doktorlarınızı ChatGPT, Perplexity ve Google AI Overviews yanıtlarında güvenilir medikal bilgi kaynağı olarak konumlandırıyorum."
          }
        ]}
        process={[
          {
            step: "1",
            title: "YMYL ve Medikal E-E-A-T Analizi",
            description: "Sitenizdeki hekim biyografilerini, sertifikaları, tıbbi içeriklerin bilimsel referanslarını ve şeffaflık sinyallerini denetliyorum."
          },
          {
            step: "2",
            title: "MedicalBusiness & Physician Şema Kodlaması",
            description: "Arama botlarına kliniğin çalışma saatlerini, uzmanlık alanlarını ve doktor kadrosunu anlatan JSON-LD kodlamasını kuruyorum."
          },
          {
            step: "3",
            title: "Tedavi Odaklı Semantik İçerik Mimarısı",
            description: "İmplant, zirkonyum, estetik ve cerrahi tedaviler gibi alanlarda hastaların merak ettiği sorulara yanıt veren semantik rehberler oluşturuyorum."
          },
          {
            step: "4",
            title: "Yerel Harita & Otorite Ağının İnşası",
            description: "Google İşletme Profili optimizasyonu ve medikal dizin alıntıları ile kliniğinizin yerel konumlanmasını güçlendiriyorum."
          }
        ]}
        targetAudience={[
          {
            audience: "Diş Klinikleri & Ağız Sağlığı",
            benefit: "İmplant, zirkonyum ve ortodonti aramalarında harita ve organik ilk sayfa hakimiyeti."
          },
          {
            audience: "Estetik Cerrahi & Saç Ekimi",
            benefit: "Sağlık turizmi odaklı uluslararası hasta kazanımı ve yüksek nitelikli randevu trafiği."
          },
          {
            audience: "Uzman Doktor Muayenehaneleri",
            benefit: "Kişisel uzmanlık branşında doktor adıyla arayan hastalar için yüksek otorite."
          },
          {
            audience: "Özel Hastaneler & Tıp Merkezleri",
            benefit: "Çoklu bölüm hiyerarşisinde düzenli organ ve branş aramalarında geniş görünürlük."
          }
        ]}
        faqItems={faqItems}
        blogCategory="Sağlık SEO"
      >
        {/* HERO TRUST STRIP */}
        <section className="py-8 bg-[#0a0f25] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-400">8+ Yıl</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Medikal SEO Deneyimi</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-teal-400">40+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Sağlık Projesi & Klinik</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-blue-400">YMYL & E-E-A-T</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Google Medikal Kalite Standardı</div>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-2xl md:text-3xl font-extrabold text-amber-400">TTB & KVKK</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">Mevzuata Etik Uyum</div>
              </div>
            </div>
          </div>
        </section>

        {/* DEFINITION & TRANSPARENT EVIDENCE SECTION */}
        <section className="py-16 bg-[#0a0f25]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Sağlık ve Klinik SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Sağlık ve klinik SEO danışmanlığı; özel poliklinikler, doktorlar, diş hekimleri ve hastanelerin Google'ın YMYL (Your Money Your Life) ve E-E-A-T kriterlerine uygun şekilde hastalar tarafından arama sonuçlarında güvenilir bir sağlık otoritesi olarak bulunmasını sağlayan uzmanlık sürecidir. Mağazanız veya kliniğiniz için <Link href="/seo-hizmetleri/teknik-seo" className="text-emerald-400 underline font-semibold">Teknik SEO</Link> ve <Link href="/seo-hizmetleri/sayfa-ici-seo" className="text-emerald-400 underline font-semibold">Sayfa İçi SEO</Link> kurarak etik çerçevede sürekli hasta randevu trafiği oluşturuyorum.
              </p>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-emerald-400" />
                  Doğrulanmış Metodoloji ve Şeffaf Ölçüm Çerçevesi
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 bg-[#111836] border border-emerald-500/20 rounded-2xl">
                    <div className="text-xs text-emerald-400 font-mono font-semibold mb-1">ÖLÇÜMLENEBİLİR CANLI VERİ</div>
                    <div className="text-3xl font-extrabold text-emerald-300 mb-2">%112 Randevu Artışı</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      8 aylık E-E-A-T ve harita optimizasyonu sürecinde poliklinik sitesinde elde edilen doğrulanmış hasta randevu büyümesi. (Kaynak: GA4 Medikal Etkinlik Takibi 2025)
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-emerald-500/20 rounded-2xl">
                    <div className="text-xs text-emerald-400 font-mono font-semibold mb-1">LOCAL PACK KONUMU</div>
                    <div className="text-3xl font-extrabold text-white mb-2">Haritada İlk 3</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Bölgesel diş kliniği ve uzman aramalarında Google Maps paketinde üst sırada yer alma.
                    </p>
                  </div>
                  <div className="p-5 bg-[#111836] border border-emerald-500/20 rounded-2xl">
                    <div className="text-xs text-emerald-400 font-mono font-semibold mb-1">YMYL GÜVENLİK PUANI</div>
                    <div className="text-3xl font-extrabold text-teal-400 mb-2">%100 Uyum</div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Hekim biyografisi, yayınlanan tıbbi makale bilimsel atıfları ve etik kurallarla Google kalite standartlarına tam uyum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHYSICIAN AUTHOR & E-E-A-T MODEL SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-emerald-500/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-emerald-400" />
                Hekim Yazarlık ve Tıbbi E-E-A-T Model İnşası
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                Google, sağlık makalelerinin kimin tarafından yazıldığını ve hangi tıbbi uzman tarafından gözden geçirildiğini doğrulamak ister. Sitenize kurduğum E-E-A-T mimarısı şunları kapsar:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-emerald-300 mb-2">Hekim Biyografi Kutusu</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tıp fakültesi diploması, uzmanlık alanı, çalıştığı kurumlar ve üye olduğu derneklerin doğrulanmış bağlantıları yer alır.
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-teal-300 mb-2">Tıbbi İnceleyen (Medical Reviewer)</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    İçeriğin uzman hekim tarafından kontrol edildiğini gösteren "Tıbbi Gözden Geçiren" rozeti ve şema işaretlemesi eklenir.
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-lg font-bold text-blue-300 mb-2">Bilimsel Literatür Atıfları</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tıbbi makalelerin altına PubMed, PubMed Central ve resmi sağlık dergilerine referans bağlantıları kurgulanır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HEALTH REGULATION & LEGISLATION COMPLIANCE SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-amber-400" />
                Sağlık Mevzuatı, TTB Kılavuzları ve KVKK Uyum Mimarısı
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Sağlık sektöründe dijital görünürlük elde ederken etik ve hukuki kurallara uymak esastır. Sağlık Bakanlığı, Türk Tabipleri Birliği (TTB) ve Ağız Diş Sağlığı yönetmeliklerine aykırı aldatıcı reklam dili kullanmadan, tamamen bilgilendirme odaklı SEO stratejisi yürütüyorum.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">Tedavi Vaadinden Uzak İçerik</h3>
                    <p className="text-gray-300 text-sm">Kesin iyileşme vaatleri yerine prosedür, iyileşme süreci ve bilimsel bilgilendirme ön planda tutulur.</p>
                  </div>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">KVKK & Hasta Gizliliği</h3>
                    <p className="text-gray-300 text-sm">Hasta öncesi/sonrası fotoğraflarında ve formlarda KVKK açık rıza onay süreçleri gözetilir.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEDICAL BRANCH CARDS SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
                <Building className="w-3.5 h-3.5" />
                Uzmanlık Branşları
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Tıbbi Branşlara Özel SEO Uzmanlığı
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {medicalBranches.map((branch) => (
                <div key={branch.title} className="bg-[#111836] border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-all">
                  <h3 className="text-xl font-bold text-emerald-300 mb-2">{branch.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{branch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PATIENT REVIEW MANAGEMENT SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-emerald-500/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-amber-400" />
                Hasta Değerlendirme ve Yorum İtibar Yönetimi
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Hastaların %85'i klinik veya hekim seçmeden önce Google Haritalar üzerindeki yorumları inceler. Etik kurallar çerçevesinde hasta yorumlarının toplanması, olumsuz geri bildirimlerin kurumsal dille yanıtlanması ve yüksek puan sinyallerinin arama motorlarınca okunmasını sağlıyorum.
              </p>
            </div>
          </div>
        </section>

        {/* HEALTH TOURISM & MULTILINGUAL SEO SECTION */}
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111836] border border-teal-500/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe2 className="w-8 h-8 text-teal-400" />
                Sağlık Turizmi ve Çok Dilli SEO (EN / DE / AR / RU)
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Uluslararası hasta çekmek isteyen klinikler ve hastaneler için hedef ülkelerdeki (İngiltere, Almanya, Körfez Ülkeleri) arama niyetine özel çok dilli SEO stratejileri uyguluyorum. Doğru hreflang etiketleri, uluslararası arama motoru optimizasyonu ve yerel hedef kitleye uygun tedavi içerikleri ile global hasta ağınızı büyütüyorum.
              </p>
            </div>
          </div>
        </section>

        {/* DELIVERABLES LIST SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
                <PackageCheck className="w-3.5 h-3.5" />
                Somut Çıktılar
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Sağlık SEO Çalışmasında Teslim Edilen Çıktılar
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
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3">
                <Clock className="w-3.5 h-3.5" />
                Sonuç Zaman Çizelgesi
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Sağlık ve Klinik SEO Süreç Haritası
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelineSteps.map((step) => (
                <div key={step.period} className="bg-[#111836] border border-teal-500/20 p-8 rounded-2xl relative">
                  <div className="text-xs font-mono font-semibold text-teal-400 mb-2">{step.period}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS STRIP SECTION */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
                <Wrench className="w-3.5 h-3.5" />
                Yazılım & Araç Parkı
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Sağlık SEO Analizinde Kullandığım Başlıca Araçlar
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
        <section className="py-16 bg-[#060a1d] border-t border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center">
              <DollarSign className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Şeffaf ve Klinik Ölçeğinize Özel Teklif Modeli
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Kliniğinizin branşına, hekim kadrosuna ve hedeflediğiniz pazarlara (yerel veya sağlık turizmi) göre şeffaf danışmanlık bütçeleri kurguluyorum. Gizli maliyet olmadan ilk değerlendirme toplantısı planlayabilirsiniz.
              </p>
              <Link
                href="/seo-danismanlik-fiyatlari"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
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
