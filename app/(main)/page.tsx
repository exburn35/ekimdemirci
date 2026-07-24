import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import CentralResultsEvidence from "@/components/CentralResultsEvidence";
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

  // Pinned posts for query fan-out sub-intents:
  const pinnedSlugs = [
    "seo-nedir",
    "generative-engine-optimization-geo-nedir",
    "seo-uzmani-kimdir",
    "turkiyenin-en-iyi-15-seo-ajansi"
  ];

  const pinnedPosts = pinnedSlugs
    .map(slug => allPosts.find(p => p.slug === slug || p.id === slug))
    .filter(Boolean);

  const remainingPosts = allPosts.filter(p => !pinnedSlugs.includes(p.slug) && !pinnedSlugs.includes(p.id));
  
  // Combine pinned posts with latest remaining posts up to 9 total
  const homePosts = [...pinnedPosts, ...remainingPosts].slice(0, 9);

  return (
    <>
      <PersonSchema />
      <Hero />
      <TrustBar />
      <Services />
      <CentralResultsEvidence />
      <SEOAuditSection />
      <HomeFAQ />
      <LatestPostsSlider posts={homePosts} />
      <ContactForm
        title="İşinizi Büyütmeye Hazır Mısınız?"
        description="Arama sıralamalarınızı nasıl yükseltebileceğimizi ve web sitenize daha fazla organik trafik nasıl çekebileceğimizi görüşmek için hemen benimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}

