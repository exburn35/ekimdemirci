import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Stethoscope, ShieldCheck, UserCheck, HeartPulse, Award, FileText } from "lucide-react";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";

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
      question: "Sağlık ve Klinik SEO Danışmanlığı nedir?",
      answer: "Sağlık ve klinik SEO danışmanlığı; özel poliklinikler, doktorlar, diş hekimleri ve hastanelerin Google'ın YMYL (Your Money Your Life) ve E-E-A-T kriterlerine uygun şekilde hastalar tarafından arama sonuçlarında güvenilir bir sağlık otoritesi olarak bulunmasını sağlayan uzmanlık sürecidir."
    },
    {
      question: "YMYL ve E-E-A-T kriterleri medikal SEO'yu nasıl etkiler?",
      answer: "Google, sağlık konularındaki içeriklerin mutlaka uzman hekimler tarafından onaylandığını ve şeffaf referanslara dayandığını doğrulamak ister. E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) sinyalleri kurulmadığında siteler sıralama kaybı yaşar."
    },
    {
      question: "Diş klinikleri ve doktorlar için yerel harita optimizasyonu (Local SEO) neden şarttır?",
      answer: "Hastaların %80'den fazlası yakınlarındaki diş kliniği veya uzman doktor aramalarını Google Maps üzerinden yapar. Doğru MedicalBusiness ve Physician şeması ile haritalarda ilk 3 sıra hedeflenir."
    },
    {
      question: "Sağlık SEO çalışmalarında mevzuata ve reklama uygunluk nasıl sağlanır?",
      answer: "Sağlık Bakanlığı ve TTB mevzuatına uygun, aldatıcı olmayan, bilimsel ve tedavi vaadinde bulunmayan tamamen bilgilendirici içerik mimarisi kurulur."
    }
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
        benefits={[
          {
            title: "Hasta Güveni & Otorite",
            description: "Google ve hastalar gözünde kliniğinizi tıp uzmanlığı doğrulanmış saygın bir otorite haline getiriyorum."
          },
          {
            title: "Haritada Zirve Konumlanma",
            description: "Bölgesel aramada (örneğin 'implant diş kliniği', 'dermatolog') Google Maps paketinde üst sırada yer almanızı sağlıyorum."
          },
          {
            title: "Yüksek Dönüşümlü Randevu Trafiği",
            description: "Doğrudan tedavi araştırması yapan nitelikli hastaları kliniğinize çekerek organik randevu dönüşümlerini artırıyorum."
          },
          {
            title: "Sağlık Mevzuatına Tam Uyum",
            description: "Reklam yasağı ve sağlık mevzuatı sınırları dahilinde etik ve sürdürülebilir büyüme stratejisi uyguluyorum."
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
            description: "Arama botlarına kliniğin çalışma saatlerini, uzmanlık alanlarını ve doktor kadrosunu anlatan JSON-LD kodlamasını kurguluyorum."
          },
          {
            step: "3",
            title: "Tedavi Odaklı Semantik İçerik Mimarısi",
            description: "İmplant, zirkonyum, estetik ve cerrahi tedaviler gibi alanlarda hastaların merak ettiği sorulara yanıt veren semantik rehberler oluşturuyorum."
          },
          {
            step: "4",
            title: "Yerel Harita & Otorite Ağının İnşası",
            description: "Google İşletme Profili optimizasyonu ve medikal dizin alıntıları (citation) ile kliniğinizin yerel konumlanmasını güçlendiriyorum."
          }
        ]}
      >
        {/* Definition & Evidence Section */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Sağlık ve Klinik SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Sağlık ve Klinik SEO Danışmanlığı; medikal sektördeki polikliniklerin, diş hekimlerinin ve doktorların arama motorlarında hastalar tarafından kolayca bulunmasını sağlayan uzmanlık çalışmasıdır. Kliniğiniz için <a href="/seo-hizmetleri/teknik-seo" className="text-teal-400 underline font-semibold">Teknik SEO</a> ve <a href="/seo-hizmetleri/sayfa-ici-seo" className="text-teal-400 underline font-semibold">Sayfa İçi SEO</a> uyumlu tıp içerik mimarisi kurgulayarak Google YMYL standartlarında güvenilir bir konumlanma sağlıyorum.
              </p>

              {/* Special Integrated Section for Dentistry & Clinics */}
              <div className="my-8 p-6 rounded-2xl bg-teal-950/20 border border-teal-500/30">
                <h3 className="text-xl font-bold text-teal-300 mb-3">
                  Özel Odak: Diş Klinikleri ve Ağız Sağlığı Poliklinikleri SEO Yönetimi
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Diş hekimliği ve ağız sağlığı sektörü, lokal arama rekabetinin en yüksek olduğu medikal alanlardan biridir. Implant tedavisi, zirkonyum kaplama, şeffaf plak (invisalign) ve gülüş tasarımı gibi yüksek değerli hizmetlerde hastalar kliniğin yorumlarını, hekim tecrübesini ve vaka öncesi/sonrası süreçlerini inceler.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-teal-200">
                  <li className="flex items-center gap-2">&bull; Diş klinikleri için yerel harita (Local Pack) dominantlığı</li>
                  <li className="flex items-center gap-2">&bull; Hasta bilgilendirme ve tedavi süreci rehberleri</li>
                  <li className="flex items-center gap-2">&bull; Hekim diplomaları ve uzmanlık alanı doğrulama şemaları</li>
                  <li className="flex items-center gap-2">&bull; Çok dilli sağlık turizmi SEO stratejileri</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-[#111836] border border-emerald-500/20 rounded-2xl">
                  <div className="text-xs text-emerald-400 font-mono font-semibold mb-1">PROJE KODU: Proje S-1</div>
                  <div className="text-3xl font-extrabold text-emerald-400 mb-2">+%310 Hasta Trafiği</div>
                  <p className="text-xs text-gray-400">8 aylık medikal E-E-A-T ve YMYL optimizasyonu sonucu hastane ve klinik organik randevu artışı. (Kaynak: Ekim Demirci Vaka Çalışması 2025)</p>
                </div>
                <div className="p-5 bg-[#111836] border border-emerald-500/20 rounded-2xl">
                  <div className="text-xs text-emerald-400 font-mono font-semibold mb-1">HARİTA KONUMU</div>
                  <div className="text-3xl font-extrabold text-white mb-2">Haritada İLK 3</div>
                  <p className="text-xs text-gray-400">Bölgesel diş kliniği ve uzman doktor aramalarında Google Maps üzerinde ilk sıralar.</p>
                </div>
                <div className="p-5 bg-[#111836] border border-emerald-500/20 rounded-2xl">
                  <div className="text-xs text-emerald-400 font-mono font-semibold mb-1">YMYL UYUMU</div>
                  <div className="text-3xl font-extrabold text-teal-400 mb-2">%100 Güvenlik</div>
                  <p className="text-xs text-gray-400">Google Kalite Yönergesi (Raters Guideline) ve sağlık mevzuatına tam uyumlu yapısı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Blog Posts Link Section */}
        <div className="border-t border-white/5">
          <RelatedBlogPosts category="Sağlık SEO" currentPostId="dis-klinigi-seo-nedir-dis-hekimleri-icin-neden-onemlidir" />
        </div>
      </ServicePageLayout>
    </>
  );
}
