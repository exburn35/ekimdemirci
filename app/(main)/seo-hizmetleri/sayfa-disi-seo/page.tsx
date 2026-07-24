import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sayfa Dışı (Off-Page) SEO Danışmanlığı | Ekim Demirci",
  description: "Organik marka otoritesi inşası, dijital PR, doğal backlink profil yönetimi ve zararlı link temizliği içeren uzman Sayfa Dışı SEO danışmanlığı.",
  alternates: {
    canonical: "/seo-hizmetleri/sayfa-disi-seo",
  },
  openGraph: {
    title: "Sayfa Dışı (Off-Page) SEO Danışmanlığı | Ekim Demirci",
    description: "Markanızın sektördeki dijital otoritesini ve arama motoru güvenini artıran çözümler.",
  },
};

export default function OffPageSEO() {
  const faqItems = [
    {
      question: "Sayfa Dışı (Off-Page) SEO nedir ve neden gereklidir?",
      answer: "Sayfa Dışı SEO, web sitenizin dışında gerçekleşen ve Google'a sitenizin popüler, otoriter ve güvenilir olduğunu kanıtlayan çalışmalardır. Yüksek kaliteli backlink edinimi, dijital PR, marka anılmaları ve sosyal sinyaller bu kapsama girer."
    },
    {
      question: "Satın alınan toplu backlink paketleri siteme zarar verir mi?",
      answer: "Kesinlikle evet. Otomatik panellerden alınan kalitesiz ve spam backlinkler, Google'ın SpamBrain algoritması tarafından tespit edilerek manuel işlem (penalty) veya sıralamadan tamamen silinme ile sonuçlanır. Ben sadece doğal ve editoryal bağlantı stratejileri yürütüyorum."
    },
    {
      question: "Zararlı Backlink Temizliği (Disavow) nasıl yapılır?",
      answer: "Ahrefs ve Semrush analizleriyle sitenize yönlenen spam veya rakip saldırısı kaynaklı bağlantılar tespit edilir. Ardından hazırlanan Disavow dosyası Google Search Console üzerinden iletilerek sitenizin otoritesi koruma altına alınır."
    },
    {
      question: "Digital PR ve Marka Anılmaları (Unlinked Mentions) nedir?",
      answer: "Sektörel haber siteleri ve mecralarda markanızdan bağlantı verilmeksizin bahsedilmesi dahi Google ve yapay zeka botları (GEO) için güçlü bir Varlık (Entity) doğrulama sinyalidir. Bu anılmaları linke dönüştürmek en güvenli backlink yöntemidir."
    }
  ];

  return (
    <ServicePageLayout
      title="Sayfa Dışı (Off-Page) SEO Danışmanlığı"
      subtitle="Otorite Mimarısı & Dijital PR"
      description="Spam riski taşımayan, doğal editoryal backlink stratejileri, dijital PR ve marka bilinirliği çalışmalarıyla domain otoritenizi ve arama sıralamalarınızı zirveye taşıyorum."
      icon="Link2"
      gradient="from-orange-600 via-amber-600 to-red-600"
      definition={{
        question: "Sayfa Dışı (Off-Page) SEO Nedir?",
        answer: "Sayfa Dışı (Off-Page) SEO; web sitenizin arama motorları ve yapay zeka sistemleri gözündeki dijital güvenilirliğini (Trust), saygınlığını ve otoritesini (Authority) artırmak amacıyla site haricindeki mecralarda yürütülen bağlantı inşası, dijital PR ve marka algısı yönetimidir.",
        paragraph: "Arama motorları, bir sitenin değerini sadece kendi söylediklerine bakarak değil, diğer saygın sitelerin ona nasıl referans verdiğine bakarak ölçer. Doğru kurgulanan bir Off-Page SEO stratejisi, rekabetin çok yüksek olduğu sektörlerde birinci sayfadaki sıralama belirleyicidir."
      }}
      scope={[
        {
          title: "Doğal & Editoryal Backlink İnşası",
          description: "Toplu ve otomatik paketlerden uzak, tamamen sektörünüzle ilgili otoriter haber portalı ve bloglardan doğal bağlantı edinimi yürütüyorum."
        },
        {
          title: "Dijital PR & Sektörel Basın Bültenleri",
          description: "Markanızın yenilikçi vaka çalışmalarını ve sektör verilerini dijital basına taşıyarak organik haber alıntıları ve marka görünürlüğü sağlıyorum."
        },
        {
          title: "Zararlı Link Analizi & Disavow Temizliği",
          description: "Sitenize yönlenen negatif SEO saldırılarını ve kalitesiz bağlantıları düzenli tarayarak Google Search Console Disavow aracıyla etkisiz hale getiriyorum."
        },
        {
          title: "Bağlantısız Marka Anılmaları (Unlinked Mentions)",
          description: "İnternet genelinde markanızın adının geçtiği ancak link verilmemiş sayfaları tespit edip iletişime geçerek bu anılmaları kaliteli backlinke çeviriyorum."
        },
        {
          title: "Kırık Bağlantı İnşası (Broken Link Building)",
          description: "Sektörünüzdeki kırık linkleri tespit edip site sahiplerine kendi kaliteli içeriklerimizi önererek kazan-kazan modeliyle backlink topluyorum."
        },
        {
          title: "Çapa Metin (Anchor Text) Dengesi",
          description: "Aşırı optimize edilmiş anahtar kelime çapa metinlerinin yol açacağı algoritma cezalarını önlemek için marka adı ve genel URL ağırlıklı doğal çapa profilini koruyorum."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Backlink Profil & Risk Analizi",
          description: "Mevcut bağlantı haritanızı, Toxic Score değerlerinizi ve rakiplerinizin backlink kaynaklarını Ahrefs / Semrush ile inceliyorum."
        },
        {
          step: "2",
          title: "Spam Temizliği & Disavow",
          description: "Zararlı ve algoritmik ceza riski taşıyan linkleri Google Disavow aracıyla engelliyorum."
        },
        {
          step: "3",
          title: "Outreach & Editoryal İletişim",
          description: "Sektörel yayıncılar ve basın mensuplarıyla iletişim kurarak doğal içerik yayınları ve bağlamsal linkler ediniyorum."
        },
        {
          step: "4",
          title: "Otorite Artışı & Raporlama",
          description: "Domain Rating (DR / DA) artışını, kazanılan bağlantıların indekslenme durumunu ve organik sıralama yükselişlerini aylık raporluyorum."
        }
      ]}
      targetAudience={[
        {
          audience: "Yoğun Rekabetçi Sektörler",
          benefit: "On-Page çalışmaların doyuma ulaştığı zorlu sektörlerde rakiplerin önüne geçecek otorite sıçraması."
        },
        {
          audience: "Yeni Kurulan Web Siteleri",
          benefit: "Google sandbox engellerini aşmak için güvenilir ve temiz bir alan adı reputasyonu inşa etme."
        },
        {
          audience: "Marka Bilinirliğini Artırmak İsteyenler",
          benefit: "Dijital basında yer alarak hem organik trafik hem de güçlü müşteri güveni kazanma."
        },
        {
          audience: "Negatif SEO Saldırısına Uğrayanlar",
          benefit: "Rakip saldırısı kaynaklı spam link dalgalarını temizleyerek sıralama kayıplarını telafi etme."
        }
      ]}
      evidence={[
        {
          projectCode: "PROJE D-1",
          metric: "DR 18 -> DR 45",
          detail: "6 aylık editoryal link inşası ve dijital PR stratejisi sonrası yakalanan Domain Rating sıçraması.",
          source: "Kaynak: Ahrefs Domain Rating Analizi 2025"
        },
        {
          projectCode: "SPAM TEMİZLİĞİ",
          metric: "%0 Toxic Score",
          detail: "Hazırlanan Disavow dosyası sonrası sitenin zararlı bağlantı skorunun sıfırlanması.",
          source: "Kaynak: Semrush Backlink Audit Panel"
        },
        {
          projectCode: "DÖNÜŞÜM KATKISI",
          metric: "+%140 Yönlendirme Trafiği",
          detail: "Sektörel haber sitelerinden gelen doğrudan nitelikli ziyaretçi trafiğindeki artış.",
          source: "Kaynak: Google Analytics 4 Referrals"
        }
      ]}
      faqItems={faqItems}
      blogCategory="sayfa-disi-seo"
    />
  );
}
