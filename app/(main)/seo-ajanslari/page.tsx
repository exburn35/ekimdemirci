import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SeoAjanslariClient, { AgencyData } from "./SeoAjanslariClient";
import agencyRawData from "@/data/seo-ajanslari.json";

export const metadata: Metadata = {
  title: "Türkiye'deki SEO Ajansları (136 Ajans, 18 İl) - 2026 Dizini | Ekim Demirci",
  description:
    "Türkiye genelinde 18 ilden 136 SEO ajansının güncel dizini. Şehir bazlı filtreleyin, ajansları karşılaştırın ve doğru SEO ajansını seçme rehberini inceleyin.",
  alternates: {
    canonical: "https://ekimdemirci.com/seo-ajanslari",
  },
  openGraph: {
    title: "Türkiye'deki SEO Ajansları (136 Ajans, 18 İl) - 2026 Dizini | Ekim Demirci",
    description:
      "Türkiye genelinde 18 ilden 136 SEO ajansının güncel dizini. Şehir bazlı filtreleyin, ajansları karşılaştırın ve doğru SEO ajansını seçme rehberini inceleyin.",
    url: "https://ekimdemirci.com/seo-ajanslari",
    type: "website",
    locale: "tr_TR",
    siteName: "Ekim Demirci",
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkiye'deki SEO Ajansları (136 Ajans, 18 İl) - 2026 Dizini | Ekim Demirci",
    description:
      "Türkiye genelinde 18 ilden 136 SEO ajansının güncel dizini. Şehir bazlı filtreleyin, ajansları karşılaştırın ve doğru SEO ajansını seçme rehberini inceleyin.",
  },
};

const agencyFaqs = [
  {
    question: "Türkiye'nin en iyi SEO ajansı hangisi?",
    answer:
      "Herkes için geçerli tek bir \"en iyi\" SEO ajansı yoktur. Bir e-ticaret sitesi için güçlü olan ajans, yerel bir klinik ya da uluslararası bir B2B şirketi için doğru seçim olmayabilir. Bu nedenle bu dizinde sıralama yapılmaz; ajansı sektör deneyimi, ekip yetkinliği ve çalışma modeline göre seçmenizi öneririm.",
  },
  {
    question: "SEO ajansı ile çalışınca sonuçlar ne zaman görülür?",
    answer:
      "Teknik düzeltmelerin etkisi birkaç hafta içinde görülebilir. İçerik ve otorite çalışmalarının organik trafiğe belirgin yansıması ise genellikle 4–6 ay sürer. Süre; sitenin geçmişine, rekabete ve uygulama hızına göre değişir.",
  },
  {
    question: "SEO ajansı ilk sıra garantisi verebilir mi?",
    answer:
      "Hayır. Arama motorlarının sıralama algoritmalarını hiçbir ajans kontrol edemez. Sıralama garantisi veren bir teklif, bir uyarı işareti olarak değerlendirilmelidir.",
  },
  {
    question: "SEO ajansıyla en az ne kadar süre çalışılmalı?",
    answer:
      "SEO'nun etkisi zamanla biriktiği için çoğu ajans 6–12 aylık çalışma önerir. Sözleşme imzalamadan önce asgari süreyi, fesih şartlarını ve süre sonunda size kalacak varlıkları yazılı olarak netleştirin.",
  },
  {
    question: "Bu listedeki ajanslar nasıl seçildi?",
    answer:
      "Dizine; Türkiye'de faaliyet gösteren, aktif bir web sitesi olan ve sitesinde SEO hizmetini açıkça sunan ajanslar alındı. Her ajansın web sitesi tek tek kontrol edildi. Listeye girmek ücretli değildir ve sıralama yapılmaz.",
  },
  {
    question: "Listede olmayan bir ajans nasıl eklenebilir?",
    answer:
      "Sayfadaki \"Dizine Ekleme ve Güncelleme\" formunu doldurarak eklenme talebinde bulunabilirsiniz. Koşulları karşılayan ajanslar bir sonraki güncellemede listeye eklenir.",
  },
];

export default function SeoAjanslariPage() {
  const agencyData = agencyRawData as AgencyData;

  // JSON-LD ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Türkiye'deki SEO Ajansları",
    "description": "Türkiye genelinde 18 ilden 136 SEO ajansının güncel dizini.",
    "numberOfItems": agencyData.count,
    "itemListElement": agencyData.agencies.map((agency, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Organization",
        "name": agency.name,
        "url": agency.website,
        "description": agency.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": agency.city,
          "addressCountry": "TR",
        },
      },
    })),
  };

  // JSON-LD FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": agencyFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Breadcrumb with schema */}
      <Breadcrumb items={[{ name: "SEO Ajansları", href: "/seo-ajanslari" }]} />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Main interactive directory & guide content */}
      <SeoAjanslariClient agencyData={agencyData} faqs={agencyFaqs} />
    </>
  );
}
