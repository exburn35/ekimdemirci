import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import SEOAuditSection from "@/components/SEOAuditSection";
import HomeFAQ from "@/components/HomeFAQ";
import ContactForm from "@/components/ContactForm";
import PersonSchema from "@/components/schemas/PersonSchema";

export const metadata = {
  title: "Ekim Demirci - SEO Uzmanı ve SEO Danışmanlığı",
  description: "Ben Ekim Demirci, markanızın Google sıralamalarında zirveye ulaşmasını sağlayan, veri ve yapay zeka odaklı modern SEO danışmanlığı hizmetleri sunuyorum.",
};

export default function Home() {
  return (
    <>
      <PersonSchema />
      <Hero />
      <TrustBar />
      <Services />
      <CaseStudyTeaser />
      <SEOAuditSection />
      <HomeFAQ />
      <ContactForm
        title="İşinizi Büyütmeye Hazır Mısınız?"
        description="Arama sıralamalarınızı nasıl yükseltebileceğimizi ve web sitenize daha fazla organik trafik nasıl çekebileceğimizi görüşmek için hemen benimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}

