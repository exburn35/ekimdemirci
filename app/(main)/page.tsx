import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Home",
  description: "Expert SEO Specialist helping businesses achieve top search rankings and drive organic growth through data-driven strategies.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CaseStudyTeaser />
      <SEOAuditSection />
      <ContactForm
        title="Ready to Grow Your Business?"
        description="Get in touch to discuss how we can help improve your search rankings and drive more organic traffic to your website."
        showTitle={true}
      />
    </>
  );
}

