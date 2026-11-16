import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import RelatedPages from "@/components/RelatedPages";
import ToolsSection from "@/components/ToolsSection";
import GEOAIToolsSection from "@/components/GEOAIToolsSection";
import BrandsSection from "@/components/BrandsSection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import StatsSection from "@/components/StatsSection";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";
import PersonSchema from "@/components/schemas/PersonSchema";
import FollowSection from "@/components/about/FollowSection";

export const metadata: Metadata = {
  title: "Hakkımda",
  description: "Markaların potansiyeline ulaşmasına yardımcı olan, 5+ yıllık deneyime sahip Uzman SEO Uzmanı ve Danışmanı Ekim Demirci hakkında bilgi edinin.",
  alternates: {
    canonical: "/hakkimda",
  },
  openGraph: {
    title: "Hakkımda | Ekim Demirci",
    description: "Markaların potansiyeline ulaşmasına yardımcı olan, 5+ yıllık deneyime sahip Uzman SEO Uzmanı ve Danışmanı Ekim Demirci hakkında bilgi edinin.",
  },
  twitter: {
    title: "Hakkımda | Ekim Demirci",
    description: "Markaların potansiyeline ulaşmasına yardımcı olan, 5+ yıllık deneyime sahip Uzman SEO Uzmanı ve Danışmanı Ekim Demirci hakkında bilgi edinin.",
  },
};

export default function About() {
  return (
    <>
      <Breadcrumb items={[{ name: "Hakkımda", href: "/hakkimda" }]} />
      <PersonSchema />
      <AboutHero />
      <AboutContent />
      <ToolsSection />
      <GEOAIToolsSection />
      <BrandsSection />
      <WhyWorkWithMe />
      <StatsSection />
      <FollowSection />
      <SEOAuditSection />
      <RelatedPages />
      <ContactForm
        title="Birlikte Çalışalım"
        description="Benimle çalışmak ister misiniz? Aşağıdaki formu doldurun ve arama sıralamalarınızı nasıl iyileştirebileceğimi konuşalım."
        showTitle={true}
      />
    </>
  );
}

