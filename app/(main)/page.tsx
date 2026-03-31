import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import SEOAuditSection from "@/components/SEOAuditSection";
import ContactForm from "@/components/ContactForm";
import PersonSchema from "@/components/schemas/PersonSchema";

export const metadata = {
  title: "Anasayfa",
  description: "İşletmelerin arama sıralamalarında üst sıralara çıkmasına ve veri odaklı stratejilerle organik büyüme elde etmesine yardımcı olan Uzman SEO Uzmanı.",
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
      <ContactForm
        title="İşinizi Büyütmeye Hazır Mısınız?"
        description="Arama sıralamalarınızı nasıl iyileştirebileceğimizi ve web sitenize daha fazla organik trafik nasıl çekebileceğimizi görüşmek için iletişime geçin."
        showTitle={true}
      />
    </>
  );
}

