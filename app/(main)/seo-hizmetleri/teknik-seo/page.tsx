import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Teknik SEO Danışmanlığı | Ekim Demirci",
  description: "Core Web Vitals, tarama bütçesi (crawl budget), JSON-LD şema kodlaması ve sunucu altyapı iyileştirmeleri içeren uzman Teknik SEO danışmanlığı.",
  alternates: {
    canonical: "/seo-hizmetleri/teknik-seo",
  },
  openGraph: {
    title: "Teknik SEO Danışmanlığı | Ekim Demirci",
    description: "Arama motoru botlarının sitenizi engelsiz taraması ve indekslemesi için teknik SEO çözümleri.",
  },
};

export default function TechnicalSEO() {
  const faqItems = [
    {
      question: "Teknik SEO nedir ve neden kritik öneme sahiptir?",
      answer: "Teknik SEO, web sitelerinin arama motoru botları (Googlebot) tarafından sorunsuz taranması, anlaşılması ve indekslenmesi için kod, sunucu, sayfa hızı ve şema düzeyinde yapılan altyapı optimizasyonudur. İçeriğiniz ne kadar kaliteli olursa olsun, teknik altyapı bozuksa sıralama almak imkansızdır."
    },
    {
      question: "Core Web Vitals (LCP, INP, CLS) metrikleri sıralamayı nasıl etkiler?",
      answer: "Core Web Vitals, Google'ın resmi sayfa deneyimi sıralama sinyalidir. LCP (Yükleme Süresi) 2.5s altında, INP (Tıklama Tepki Süresi) 200ms altında ve CLS (Görsel Kayma) 0.1 altında olan siteler arama sonuçlarında doğrudan ödüllendirilir."
    },
    {
      question: "Crawl Budget (Tarama Bütçesi) optimizasyonu hangi siteler için şarttır?",
      answer: "Özellikle binlerce kategorisi ve filtre URL'si bulunan e-ticaret siteleri ile geniş içerikli portal ve medya siteleri için şarttır. Gereksiz parametrelerin noindex/canonical ile taranmasını engelleyerek Googlebot'un sadece dönüşüm sağlayan sayfaları keşfetmesini sağlıyorum."
    },
    {
      question: "JSON-LD Yapılandırılmış Veri (Schema Markup) ne kazandırır?",
      answer: "Google'a sayfa içeriğinin tam anlamını (Organization, Product, Article, FAQ, MedicalWebPage) doğrudan anlatır. SERP sonuçlarında fiyat, yıldız puanı, stok ve SSS gibi zengin ögelerin (Rich Snippets) çıkmasını sağlayarak tıklama oranını (CTR) yükseltir."
    }
  ];

  return (
    <ServicePageLayout
      title="Teknik SEO Danışmanlığı"
      subtitle="Altyapı & Performans Mühendisliği"
      description="Googlebot ve yapay zeka tarayıcılarının web sitenizi sıfır engelle taraması, hızlı indekslemesi ve yüksek Core Web Vitals skorları elde etmesi için uçtan uca teknik optimizasyon."
      icon="Settings"
      gradient="from-purple-600 via-pink-600 to-rose-600"
      definition={{
        question: "Teknik SEO Nedir?",
        answer: "Teknik SEO, bir web sitesinin arama motorları ve yapay zeka botları tarafından engelsiz bir şekilde taranabilmesini, taranan sayfaların dizine (index) doğru şekilde eklenmesini ve sayfa yükleme deneyiminin (Core Web Vitals) mükemmelleştirilmesini sağlayan altyapı ve kod optimizasyonu sürecidir.",
        paragraph: "Teknik SEO olmadan yayınlanan harika içerikler, temeli olmayan bir binaya benzer. Sitedeki 404 hataları, yönlendirme döngüleri, yavaş sunucu yanıt süreleri (TTFB) veya yanlış canonical kullanımı, Google'ın sitenize ayırdığı tarama bütçesini (crawl budget) israf eder ve organik sıralama kaybına yol açar."
      }}
      scope={[
        {
          title: "Core Web Vitals & Sayfa Hızı Mimarisi",
          description: "LCP (En Büyük Görsel Öğesi), INP (Etkileşim Tepkisi) ve CLS (Görsel Kayma) değerlerini yeşil bölgeye (90+ puan) getirecek JS/CSS küçültme, WebP dönüştürme ve sunucu önbellekleme uygulamaları."
        },
        {
          title: "Crawl Budget & Tarama Mimarisi",
          description: "Screaming Frog ve Log dosyası analizi (Log File Analysis) ile Googlebot hareketlerini inceliyor, filtre ve parametre çöplüklerini temizleyerek tarama bütçenizi en değerli sayfalara yönlendiriyorum."
        },
        {
          title: "JSON-LD Şema & Zengin Sonuç (Rich Snippets)",
          description: "Organization, Product, FAQPage, Article ve LocalBusiness gibi JSON-LD formatında semantik yapılandırılmış veri kodlarını entegre ederek SERP tıklama oranlarınızı (CTR) yükseltiyorum."
        },
        {
          title: "İndeksleme & Canonical Stratejisi",
          description: "Çifte içerik (duplicate content) krizlerini önlemek için doğru canonical yönlendirmelerini, noindex/nofollow kurallarını ve robots.txt / sitemap.xml hiyerarşisini kurguluyorum."
        },
        {
          title: "Mobil-İlk (Mobile-First) İndeksleme",
          description: "Mobil cihaz ekranlarında piksel kaymalarını, gizli içerik erişim engellerini ve dokunma alanı hatalarını gidererek mobil sıralama gücünü artırıyorum."
        },
        {
          title: "HTTPS, SSL & Sunucu Güvenliği",
          description: "Sunucu yanıt sürelerini (TTFB) düşürecek HTTP/3 entegrasyonu, güvenlik başlıkları (HSTS) ve SSL doğrulama adımlarını eksiksiz yürütüyorum."
        }
      ]}
      process={[
        {
          step: "1",
          title: "Derinlemesine Altyapı Audit'i",
          description: "Screaming Frog, Lighthosue ve Log File analizörleri ile web sitenizin tüm teknik hatalarını, yönlendirme zincirlerini ve kırık linklerini listeliyorum."
        },
        {
          step: "2",
          title: "Öncelikli Geliştirici Yol Haritası",
          description: "Yazılım ekibinizin veya yazılımcınızın doğrudan uygulayabileceği net, prioriteli ve kod örnekli teknik aksiyon listesini hazırlıyorum."
        },
        {
          step: "3",
          title: "Kodlama & Şema Uygulaması",
          description: "JSON-LD şemalarının, robots.txt kurallarının ve Core Web Vitals iyileştirmelerinin canlı ortamda bizzat uygulamasını ve testini yapıyorum."
        },
        {
          step: "4",
          title: "Google Search Console Doğrulaması",
          description: "Düzeltilen teknik hataları Google Search Console ve PageSpeed Insights panelleri üzerinden doğrulayıp indeksleme süreçlerini hızlandırıyorum."
        }
      ]}
      targetAudience={[
        {
          audience: "Yüksek Trafikli E-Ticaret Siteleri",
          benefit: "Binlerce filtre URL'sinin tarama bütçesini tüketmesini önleme ve sepete ekleme hızını artırma."
        },
        {
          audience: "Haber & İçerik Portalları",
          benefit: "Anlık son dakika haberlerinin saniyeler içinde taranıp Google Discover ve News'e girmesini sağlama."
        },
        {
          audience: "Özel Yazılım Kullanan Şirketler",
          benefit: "React, Next.js, Vue gibi modern JavaScript altyapılarında Server-Side Rendering (SSR) indeksleme sorunlarını çözme."
        },
        {
          audience: "Yavaş Yüklenen Web Siteleri",
          benefit: "Yüksek hemen çıkma oranlarını (bounce rate) sayfa hızını 2 katına çıkararak ve CLS kaymalarını sıfırlayarak düşürme."
        }
      ]}
      evidence={[
        {
          projectCode: "PROJE T-1",
          metric: "98/100 Mobile Speed",
          detail: "Teknik SEO optimizasyonu sonrası mobil PageSpeed skorunda ve Core Web Vitals metriklerinde yakalanan zirve.",
          source: "Kaynak: Google PageSpeed Insights 2025"
        },
        {
          projectCode: "İNDEKS BAŞARISI",
          metric: "%100 İndeks Oranı",
          detail: "Tarama bütçesi (crawl budget) düzenlemesi sonrası taranan 50.000+ sayfanın dizine eklenme oranı.",
          source: "Kaynak: Google Search Console İndeks Raporu"
        },
        {
          projectCode: "CTR ARTİŞİ",
          metric: "+%38 Tıklama Oranı",
          detail: "JSON-LD Rich Snippet şemaları eklendikten sonra arama sonuçlarında yakalanan CTR artışı.",
          source: "Kaynak: Ekim Demirci Vaka Çalışmaları"
        }
      ]}
      faqItems={faqItems}
      blogCategory="teknik-seo"
    />
  );
}
