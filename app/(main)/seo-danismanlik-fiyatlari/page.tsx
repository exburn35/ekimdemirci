import { Metadata } from "next";
import PricingPage from "@/components/pricing/PricingPage";
import SEOAuditSection from "@/components/SEOAuditSection";
import RelatedBlogPosts from "@/components/RelatedBlogPosts";
import RelatedPages from "@/components/RelatedPages";
import ContactForm from "@/components/ContactForm";

const title = "SEO Fiyatları ve GEO Fiyatları 2026";
const description =
  "Güncel SEO fiyatları ve GEO fiyatları: aylık ₺20.000'den başlayan SEO danışmanlık paketleri, yapay zeka görünürlüğü için GEO paketleri ve indirimli SEO + GEO paketleri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/seo-danismanlik-fiyatlari",
  },
  openGraph: {
    title: `${title} | Ekim Demirci`,
    description,
  },
  twitter: {
    title: `${title} | Ekim Demirci`,
    description,
  },
};

export default function SEOConsultingPricesPage() {
  return (
    <>
      <PricingPage />
      <SEOAuditSection />
      <RelatedBlogPosts />
      <RelatedPages />
      <ContactForm
        title="Size özel teklif alın"
        description="Sitenizden ve hedefinizden kısaca bahsedin; size uygun paketi ve fiyatı kendim yazayım."
        showTitle={true}
      />
    </>
  );
}
