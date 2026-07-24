import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import FAQSchema from "@/components/schemas/FAQSchema";
import { Building2, Layers, Briefcase, FileCheck, Award, Target } from "lucide-react";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";

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
      question: "Kurumsal ve B2B SEO Danışmanlığı nedir?",
      answer: "B2B (Business to Business) ve Kurumsal SEO danışmanlığı; şirketlere, üreticilere, yazılım ve sanayi markalarına hizmet sunan firmaların satın alma karar vericilerine (C-Level yöneticiler, satın alma müdürleri) organik aramalarda ulaşmasını sağlayan stratejik SEO çalışmasıdır."
    },
    {
      question: "B2B SEO'nun B2C (bireysel tüketici) SEO'sundan farkı nedir?",
      answer: "B2C'de hızlı satın alma ve yüksek arama hacmi ön plandayken, B2B'de arama hacimleri düşüktür ancak her bir organik talep (lead) çok yüksek maddi değere sahiptir. İçerikler karar vericilerin teknik sorularını yanıtlamalıdır."
    },
    {
      question: "B2B şirketlerinde içerik stratejisi nasıl kurgulanır?",
      answer: "Kullanım senaryoları (use cases), beyaz bültenler (whitepapers), vaka analizleri (case studies) ve ürün şartnamelerini içeren semantik içerik haritaları kurgulanır."
    },
    {
      question: "B2B SEO çalışmaları teklif ve talep formlarına nasıl yansır?",
      answer: "Yüksek niyetli 'B2B hizmet adı + firmaları / tedarikçileri' aramalarında üst sıralara çıkarak doğrudan nitelikli kurumsal teklif talepleri (RFQs) toplanır."
    }
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
        benefits={[
          {
            title: "Nitelikli B2B Teklif Talepleri (RFQ)",
            description: "Arama hacmi düşük olsa da yıllık milyonluk anlaşmalar yapabilecek kurumsal karar vericileri doğrudan sitenize çekiyorum."
          },
          {
            title: "Uzun Karar Süreçlerinde Görünürlük",
            description: "Araştırma yapan C-Level yöneticilerin bilgi edinme sürecinde markanızı güvenilir bir sektör referansı olarak konumlandırıyorum."
          },
          {
            title: "Uluslararası Pazar Açılımı",
            description: "İhracat yapan veya global pazarı hedefleyen B2B şirketleri için çok dilli ve bölgesel kurumsal SEO stratejileri uyguluyorum."
          },
          {
            title: "Hantal Yapıların Aksine Hızlı Aksiyon",
            description: "Kurumsal süreçlerinizi yavaşlatmadan doğrudan uzmanlığımla butik ve çevik bir çalışma modeli sunuyorum."
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
      >
        {/* Definition & Evidence Section */}
        <section className="py-16 bg-[#0a0f25] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Kurumsal ve B2B SEO Danışmanlığı Nedir?
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Kurumsal ve B2B SEO Danışmanlığı, şirketler arası satış veya hizmet sunan firmaların dijitalde karar vericiler tarafından keşfedilmesini sağlayan stratejik süreçtir. <a href="/seo-hizmetleri/teknik-seo" className="text-indigo-400 underline font-semibold">Teknik SEO</a> altyapısı ve <a href="/seo-hizmetleri/sayfa-ici-seo" className="text-indigo-400 underline font-semibold">Sayfa İçi SEO</a> ile desteklenen çözümlerimiz sayesinde kitlesel trafik yerine yüksek sözleşme değerine sahip nitelikli kurumsal müşteri talepleri (RFQs) toplanır.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 bg-[#111836] border border-indigo-500/20 rounded-2xl">
                  <div className="text-xs text-indigo-400 font-mono font-semibold mb-1">PROJE KODU: Proje B-1</div>
                  <div className="text-3xl font-extrabold text-emerald-400 mb-2">+%420 B2B Lead</div>
                  <p className="text-xs text-gray-400">5 aylık B2B SaaS ve kurumsal yazılım SEO çalışması sonucu AI ve Google aramalarında alıntılanma artışı. (Kaynak: Ekim Demirci Vaka Çalışması 2025)</p>
                </div>
                <div className="p-5 bg-[#111836] border border-indigo-500/20 rounded-2xl">
                  <div className="text-xs text-indigo-400 font-mono font-semibold mb-1">DÖNÜŞÜM KALİTESİ</div>
                  <div className="text-3xl font-extrabold text-white mb-2">C-Level Uyum</div>
                  <p className="text-xs text-gray-400">Satın alma yöneticilerinin arama niyetine özel hazırlanmış yüksek ikna kabiliyetli içerik mimarisi.</p>
                </div>
                <div className="p-5 bg-[#111836] border border-indigo-500/20 rounded-2xl">
                  <div className="text-xs text-indigo-400 font-mono font-semibold mb-1">GLOBAL B2B</div>
                  <div className="text-3xl font-extrabold text-purple-400 mb-2">İhracat Odaklı</div>
                  <p className="text-xs text-gray-400">Uluslararası pazarlar için çok dilli semantik otorite ve B2B pazarlama altyapısı.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevant Blog Posts Link Section */}
        <div className="border-t border-white/5">
          <RelatedBlogPosts category="B2B SEO" currentPostId="turkiyenin-en-iyi-geo-ajanslari" />
        </div>
      </ServicePageLayout>
    </>
  );
}
