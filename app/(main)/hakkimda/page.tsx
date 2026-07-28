import { Metadata } from "next";
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
import SocialMediaEmbed from "@/components/SocialMediaEmbed";

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
};

export default function About() {
  return (
    <>
      <PersonSchema />
      <AboutHero />
      <AboutContent />
      <ToolsSection />
      <GEOAIToolsSection />
      <BrandsSection />
      <WhyWorkWithMe />
      <StatsSection />
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Beni Takip Edin</h2>
          </div>
          <SocialMediaEmbed />
        </div>
      </section>
      <SEOAuditSection />
      <RelatedPages />
      <ContactForm
        title="Birlikte Çalışalım"
        description="Benimle çalışmak ister misiniz? Aşağıdaki formu doldurun ve arama sıralamalarınızı nasıl iyileştirebileceğimizi konuşalım."
        showTitle={true}
      />
    </>
  );
}

