import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import { MapPin, Building, Star, Phone, Navigation } from "lucide-react";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";

export const metadata: Metadata = {
  title: "Yerel İşletme SEO Danışmanlığı | Ekim Demirci",
  description: "Bölgesel işletmeniz, hizmet merkeziniz ve şubeleriniz için Google Haritalar (GMB) ve konuma özel Local SEO danışmanlığı.",
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
      question: "Yerel İşletme SEO Danışmanlığı nedir?",
      answer: "Yerel İşletme SEO danışmanlığı, belirli bir şehirde veya bölgede fiziki dükkanı ya da hizmet alanı olan işletmelerin 'yakınımdaki', 'şehir adı + hizmet' aramalarında Google Haritalar (Local Pack) ve organik aramalarda üst sıralara taşınması çalışmasıdır."
    },
    {
      question: "Google İşletme Profili (GMB) neden önemlidir?",
      answer: "Google İşletme Profili, yerel müşteri aramalarında doğrudan telefon arama, yol tarifi alma ve web sitesi tıklamalarının %70'inden fazlasını sağlayan en kritik yerel harita kartıdır."
    },
    {
      question: "Yerel alıntı (Citation & NAP) ne demektir?",
      answer: "İşletmenizin Adı, Adresi ve Telefon Numarasının (Name, Address, Phone) internet üzerindeki rehber ve harita dizinlerinde birebir tutarlı şekilde yer almasıdır. Tutarlı NAP verisi Google'ın konumunuza güvenmesini sağlar."
    },
    {
      question: "Yerel SEO sonuçları ne kadar sürede görülür?",
      answer: "Google Haritalar profili optimizasyonu ve yerel şema işaretlemesi yapıldıktan sonra genellikle 2 ila 4 ay içinde fiziki ziyaret ve telefon aramalarında belirgin artış görülür."
    }
  ];

  return (
    <>
      <FAQSchema items={faqItems} />

      <ServicePageLayout
        title="Yerel İşletme SEO Danışmanlığı"
        subtitle="Sektörel SEO Çözümleri"
        description="Fiziki magaza, restoran, hukuk bürosu veya bölgesel hizmet veren işletmeniz için konuma özel Local SEO stratejileri. Google Haritalar (Maps Paketinde) ilk sıralara yerleşin ve bölgenizdeki müşterileri doğrudan işletmenize çekin."
        icon="Settings"
        gradient="from-blue-500 to-cyan-500"
        features={[
          "Google Haritalar (Local Pack) İleri Düzey Optimizasyonu",
          "Konum Odaklı (Geo-Targeted) Semantik Açılış Sayfaları",
          "LocalBusiness & PostalAddress Şema Kodlaması",
          "Yerel Dizinler & NAP (Ad, Adres, Telefon) Tutarlılığı",
          "Müşteri Değerlendirme & Yorum (Review) Yönetim Stratejisi",
          "Çok Şubeli İşletmeler İçin Şube SEO Mimarisi"
        ]}
        benefits={[
          {
            title: "Fiziki Müşteri Trafiği & Yol Tarifi",
            description: "Haritalarda ilk 3'e girerek potansiyel müşterilerinizin dükkanınızı veya merkezinizi doğrudan ziyaret etmesini sağlıyorum."
          },
          {
            title: "Doğrudan Telefon Aramaları",
            description: "Mobil aramalarda tıkla-ara (click-to-call) dönüşümlerini artırarak hizmet taleplerini katlıyorum."
          },
          {
            title: "Bölgesel Rekabet Üstünlüğü",
            description: "Kendi lokasyonunuzdaki rakiplerinizin harita ve arama hacimlerini ele geçirerek bölgesel pazar lideri olmanızı sağlıyorum."
          },
          {
            title: "Güvenilir Yerel İtibar",
            description: "Doğrulanmış konum verileri ve olumlu yorum sinyalleriyle işletmenizin yerel marka otoritesini inşa ediyorum."
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
      >
        {/* Definition & Evidence Section */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Yerel İşletme SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Yerel İşletme SEO Danışmanlığı, belirli bir coğrafi alanda faaliyet gösteren firmaların 'yakınımdaki en iyi...' veya 'şehir + hizmet' sorgularında öne çıkmasını sağlar. Süreçte <a href="/seo-hizmetleri/sayfa-disi-seo" className="text-cyan-400 underline font-semibold">Sayfa Dışı SEO</a> (yerel harita otoritesi & alıntılar) ve <a href="/seo-hizmetleri/teknik-seo" className="text-cyan-400 underline font-semibold">Teknik SEO</a> (LocalBusiness şema mimarisi) entegre edilerek işletmeniz bölgesel pazar lideri haline getirilir.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-[#111836] border border-blue-500/20 rounded-2xl">
                  <div className="text-xs text-blue-400 font-mono font-semibold mb-1">PROJE KODU: Proje Y-1</div>
                  <div className="text-3xl font-extrabold text-emerald-400 mb-2">+%180 Yerel Trafik</div>
                  <p className="text-xs text-gray-400">4 aylık harita ve lokasyon optimizasyonu sonucu elde edilen telefon araması ve yol tarifi artışı. (Kaynak: Ekim Demirci Vaka Çalışması 2025)</p>
                </div>
                <div className="p-5 bg-[#111836] border border-blue-500/20 rounded-2xl">
                  <div className="text-xs text-blue-400 font-mono font-semibold mb-1">LOCAL PACK</div>
                  <div className="text-3xl font-extrabold text-white mb-2">Haritada İLK 3</div>
                  <p className="text-xs text-gray-400">Hedef ilçedeki aramalarda Google Maps kutusunda üst sıralarda yer alma başarısı.</p>
                </div>
                <div className="p-5 bg-[#111836] border border-blue-500/20 rounded-2xl">
                  <div className="text-xs text-blue-400 font-mono font-semibold mb-1">NAP TUTARLILIĞI</div>
                  <div className="text-3xl font-extrabold text-cyan-400 mb-2">%100 Doğrulama</div>
                  <p className="text-xs text-gray-400">Adres, isim ve telefon verilerinin tüm arama mecralarında kusursuz eşleşmesi.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Blog Posts Link Section */}
        <div className="border-t border-white/5">
          <RelatedBlogPosts category="Yerel SEO" currentPostId="yerel-seo-nedir" />
        </div>
      </ServicePageLayout>
    </>
  );
}
