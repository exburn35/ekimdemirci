import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";
import ToolsSection from "@/components/ToolsSection";
import BrandsSection from "@/components/BrandsSection";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import StatsSection from "@/components/StatsSection";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ekim Demirci, an experienced SEO Specialist and Consultant with 5+ years of expertise helping brands achieve top search rankings and organic growth.",
  openGraph: {
    title: "About | Ekim Demirci",
    description: "Learn about Ekim Demirci, an experienced SEO Specialist and Consultant with 5+ years of expertise helping brands achieve top search rankings.",
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <ToolsSection />
      <BrandsSection />
      <WhyWorkWithMe />
      <StatsSection />
      <SEOAuditSection />
      <ContactForm
        title="Let's Work Together"
        description="Interested in working with me? Fill out the form below and let's discuss how I can help improve your search rankings."
        showTitle={true}
      />
    </>
  );
}

