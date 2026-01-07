import { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesCTA from "@/components/ServicesCTA";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "SEO Services",
  description: "Comprehensive SEO services including AI SEO, Technical SEO, On-Page SEO, and Off-Page SEO. Expert strategies to boost your search rankings and organic traffic.",
  openGraph: {
    title: "SEO Services | Ekim Demirci",
    description: "Comprehensive SEO services to boost your search rankings and organic traffic.",
  },
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <SEOAuditSection />
      <ContactForm
        title="Get Started Today"
        description="Ready to improve your search rankings? Fill out the form below and let's discuss how we can help your business grow."
        showTitle={true}
      />
      <ServicesCTA />
    </>
  );
}

