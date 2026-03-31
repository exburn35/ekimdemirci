import { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesCTA from "@/components/ServicesCTA";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "SEO Hizmetleri",
  description: "Yapay Zeka SEO, Teknik SEO, Site İçi SEO ve Site Dışı SEO dahil kapsamlı SEO hizmetleri. Arama sıralamalarınızı ve organik trafiğinizi artırmak için uzman stratejiler.",
  openGraph: {
    title: "SEO Hizmetleri | Ekim Demirci",
    description: "Arama sıralamalarınızı ve organik trafiğinizi artırmak için kapsamlı SEO hizmetleri.",
  },
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <SEOAuditSection />
      <ContactForm
        title="Hemen Başlayın"
        description="Arama sıralamalarınızı iyileştirmeye hazır mısınız? Aşağıdaki formu doldurun ve işinizi büyütmeye nasıl yardımcı olabileceğimizi konuşalım."
        showTitle={true}
      />
      <ServicesCTA />
    </>
  );
}

