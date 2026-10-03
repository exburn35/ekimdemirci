import { Metadata } from "next";
import SEOPricingContent from "@/components/pricing/SEOPricingContent";
import SEOAuditSection from "@/components/SEOAuditSection";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import RelatedPages from "@/components/RelatedPages";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "SEO Danışmanlık Fiyatları 2026 | Ekim Demirci",
  description: "Şeffaf SEO danışmanlık fiyatları ve paketleri. Küçük işletmelerden kurumsal markalara kadar bütçenize uygun profesyonel SEO fiyatlandırma modelleri.",
  alternates: {
    canonical: "/seo-danismanlik-fiyatlari",
  },
};

export default function SEOConsultingPricesPage() {
  return (
    <>
      <SEOPricingContent />

      {/* SEO Audit Bölümü */}
      <SEOAuditSection />

      {/* İlgili Blog Yazıları Slider */}
      <RelatedBlogPosts />

      {/* İlgili Sayfalar */}
      <RelatedPages />

      {/* İletişim Formu */}
      <ContactForm
        title="Size Özel Teklif Alın"
        description="İhtiyaçlarınıza uygun SEO paketini belirlemek için benimle iletişime geçin."
        showTitle={true}
      />

      {/* Service ve FAQ Schema Entegrasyonu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Danışmanlığı",
            "serviceType": "SEO Danışmanlığı",
            "provider": {
              "@type": "Person",
              "name": "Ekim Demirci",
              "url": "https://ekimdemirci.com"
            },
            "areaServed": "TR",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "TRY",
              "lowPrice": "20000",
              "highPrice": "40000",
              "offerCount": "3"
            }
          })
        }}
      />
    </>
  );
}
