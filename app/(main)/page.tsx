import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import CaseStudyTeaser from "@/components/CaseStudyTeaser";
import SEOAuditSection from "@/components/SEOAuditSection";
import HomeFAQ from "@/components/HomeFAQ";
import ContactForm from "@/components/ContactForm";
import PersonSchema from "@/components/schemas/PersonSchema";
import { getAllBlogPosts } from "@/lib/blog";
import LatestPostsSlider from "@/components/blog/LatestPostsSlider";

export const metadata = {
  title: "SEO ve GEO Danışmanı Ekim Demirci",
  description: "Ben Ekim Demirci, markanızın Google sıralamalarında zirveye ulaşmasını sağlayan, veri ve yapay zeka odaklı modern SEO danışmanlığı hizmetleri sunuyorum.",
};

export default function Home() {
  const allPosts = getAllBlogPosts();
  const latestPosts = allPosts.slice(0, 9);

  return (
    <>
      <PersonSchema />
      <Hero />
      <TrustBar />
      <Services />
      <CaseStudyTeaser />
      <SEOAuditSection />
      <HomeFAQ />
      <LatestPostsSlider posts={latestPosts} />
      <ContactForm
        title="İşinizi Büyütmeye Hazır Mısınız?"
        description="Arama sıralamalarınızı nasıl yükseltebileceğimizi ve web sitenize daha fazla organik trafik nasıl çekebileceğimizi görüşmek için hemen benimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}

