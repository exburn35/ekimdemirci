import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sayfa İçi (On-Page) SEO Danışmanlığı | Ekim Demirci",
  description: "Arama niyetine (Search Intent) tam uyumlu semantik içerik kurgusu, iç linkleme ağı, H1-H6 hiyerarşisi ve meta optimizasyonu sunan Sayfa İçi SEO danışmanlığı.",
  alternates: {
    canonical: "/seo-hizmetleri/sayfa-ici-seo",
  },
  openGraph: {
    title: "Sayfa İçi (On-Page) SEO Danışmanlığı | Ekim Demirci",
    description: "İçeriklerinizi hem Google botları hem de kullanıcılar için dönüşüm odaklı optimize edin.",
  },
};

export default function OnPageSEO() {
  const faqItems = [
    {
      question: "Sayfa İçi (On-Page) SEO nedir?",
      answer: "Sayfa İçi SEO, web sitenizdeki sayfaların başlık etiketleri (Title/Meta Description), H1-H6 başlık düzeni, anahtar kelime kümelemesi, semantik içerik bağlamı ve iç bağlantı (internal link) mimarisinin hem arama motorlarına hem kullanıcılara uyarlanması sürecidir."
    },
    {
      question: "Arama Niyeti (Search Intent) On-Page SEO'da neden en kritik adımdır?",
      answer: "Google bir sorguda kullanıcıların bilgi mi aradığını (Informational), ürün mü satın almak istediğini (Transactional) yoksa marka mı aradığını (Navigational) analiz eder. Sayfa içeriğiniz bu niyetle birebir eşleşmezse en yüksek kelime yoğunluğuna sahip olsanız dahi sıralama alamazsınız."
    },
    {
      question: "İç Bağlantı (Internal Link) yapısı sıralamayı nasıl yükseltir?",
      answer: "Doğru kurgulanmış bir iç bağlantı ağı, güçlü sayfalarınızdaki otoritenin (Link Juice) yeni veya zayıf sayfalarınıza akmasını sağlar. Ayrıca Googlebot'a konular arasındaki anlamsal ilişkileri ve Konusal Otoriteyi (Topical Authority) kanıtlar."
    },
    {
      question: "Semantik Üçlü (Entity-Attribute-Value) kullanımı nedir?",
      answer: "İçerik içinde sadece anahtar kelimeyi geçirmek yerine, o konuyla ilgili nesneleri, özellikleri ve değerleri bir arada sunmaktır (Örn: 'Akıllı Telefon -> Batarya Kapasitesi -> 5000 mAh'). Bu kurgu içeriğin Google ve yapay zeka tarafından doğrudan kavranmasını sağlar."
    }
  ];

  return (
    <ServicePageLayout
      title="Sayfa İçi (On-Page) SEO Danışmanlığı"
      subtitle="Semantik İçerik & Niyet Optimizasyonu"
      description="Arama niyetini %100 karşılayan semantik içerik mimarisi, güçlü iç bağlantı ağları ve dönüşüm odaklı sayfa tasarımları ile organik trafiğinizi ciroya dönüştürün."
      icon="FileText"
      gradient="from-emerald-600 via-teal-600 to-cyan-600"
      definition={{
        question: "Sayfa İçi (On-Page) SEO Nedir?",
        answer: "Sayfa İçi (On-Page) SEO; web sitenizdeki her bir sayfanın arama niyetine (Search Intent), semantik kelime bağlamına ve kullanıcı deneyimine tam uyumlu hale getirilmesi için başlıklar, metinler, görseller ve iç bağlantılar üzerinde yapılan optimizasyon çalışmasıdır.",
        paragraph: "Sadece anahtar kelimeleri tekrarlamak geride kaldı. Modern On-Page SEO; Google'ın Natural Language Processing (NLP) algoritmalarını ve Helpful Content sistemini ikna edecek derinlikte, özgün, E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) standartlarında içerik yapısı inşa etmeyi gerektirir."
      }}
      scope={[
        {
          title: "Arama Niyeti (Search Intent) Eşleşmesi",
          description: "Hedef kitlenin arama yaparkenki gerçek beklentisini (bilgi edinme, fiyat kıyaslama, doğrudan satın alma) analiz edip sayfa yapısını bu niyete göre kurguluyorum."
        },
        {
          title: "Semantik Üçlüler & Konusal Otorite",
          description: "İçeriklerinizi tekil kelimeler yerine semantik varlık ağlarıyla (Entity-Attribute-Value) zenginleştirerek Google gözünde konunun mutlak otoritesi haline getiriyorum."
        },
        {
          title: "Stratejik İç Bağlantı (Internal Link) Mimarisi",
          description: "Sayfalar arasında otorite akışını ve tarama derinliğini sağlayan 'Hub & Spoke' ve 'Topic Cluster' modelinde iç link ağları kurguluyorum."
        },
        {
          title: "CTR Odaklı Meta Title & Description",
          description: "Arama sonuçlarında (SERP) rakiplerinizin arasından sıyrılıp yüksek tıklama oranı (CTR) çeken ikna edici başlık ve açıklama metinleri yazıyorum."
        },
        {
          title: "Hiyerarşik Başlık Düzeni (H1-H6)",
          description: "İçeriğin okunabilirliğini ve botlar tarafından taranabilirliğini artıran mantıksal H1, H2, H3 alt başlık yapısını oluşturuyorum."
        },
        {
          title: "Görsel SEO & Alt Metin Optimizasyonu",
          description: "Görsellerin dosya isimlerini, alt textlerini ve WebP/AVIF formatlarını optimize ederek Google Görseller'den ek organik trafik çekiyorum."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Sayfa Bazlı Semantik Audit",
          description: "Mevcut sayfalarınızın içerik kalitesini, arama niyeti sapmalarını ve anahtar kelime yamyamlaşması risklerini tespit ediyorum."
        },
        {
          step: "2",
          title: "İçerik Haritası & Kümeleme",
          description: "Topic Cluster (Konu Kümesi) modeliyle ana pillar sayfaları ve onları besleyen alt blog rehberlerini planlıyorum."
        },
        {
          step: "3",
          title: "Metin & Etiket Güncellemesi",
          description: "Sayfa başlıklarını, H1-H6 etiketlerini, metin içi semantik kavramları ve iç linkleri doğrudan içerik üzerinde uyguluyorum."
        },
        {
          step: "4",
          title: "Dönüşüm & Kalıcılık Takibi",
          description: "Güncellenen sayfaların oturum sürelerini, sayfa terk oranlarını ve hedef sıralama yükselişlerini analitik araçlarıyla izliyorum."
        }
      ]}
      targetAudience={[
        {
          audience: "İçerik ve Blog Üreten Yayıncılar",
          benefit: "Yayınlanan rehberlerin yamyamlaşmadan Google'da ilk sayfada üst sıralarda konumlanması."
        },
        {
          audience: "E-Ticaret Kategori Yöneticileri",
          benefit: "Kategori sayfalarının satın alma niyetli aramalarda organik satış dönüşümünün artması."
        },
        {
          audience: "Hizmet ve Danışmanlık Siteleri",
          benefit: "Hizmet detay sayfalarının potansiyel müşterileri ikna edecek zengin içerik yapısına kavuşması."
        },
        {
          audience: "Yüksek Trafik Kaybı Yaşayan Siteler",
          benefit: "Google algoritmalarında gerileyen eski içeriklerin semantik dokunuşlarla yeniden canlandırılması."
        }
      ]}
      evidence={[
        {
          projectCode: "PROJE İ-1",
          metric: "+%180 Organik Oturum",
          detail: "Semantik içerik revizyonu ve Topic Cluster linkleme ağı sonrası elde edilen trafik yükselişi.",
          source: "Kaynak: Ekim Demirci Vaka Çalışmaları 2025"
        },
        {
          projectCode: "CTR İYİLEŞMESİ",
          metric: "%4.2 -> %8.9 CTR",
          detail: "Arama niyetine uyarlanan Meta Title ve başlık etiketlerinin SERP tıklama oranına etkisi.",
          source: "Kaynak: Google Search Console Analizi"
        },
        {
          projectCode: "SAYFADA KALMA",
          metric: "3dk 45sn Ortalama",
          detail: "Zenginleştirilmiş sayfa mimarisi ile ziyaretçilerin sitede geçirdiği süredeki artış.",
          source: "Kaynak: Google Analytics 4 Verisi"
        }
      ]}
      faqItems={faqItems}
      blogCategory="sayfa-ici-seo"
    />
  );
}
