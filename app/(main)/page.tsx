import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import CentralResultsEvidence from "@/components/CentralResultsEvidence";
import SEOAuditSection from "@/components/SEOAuditSection";
import FAQ from "@/components/FAQ";
import { homeFaqs } from "@/data/homeFaqs";
import ContactForm from "@/components/ContactForm";
import PersonSchema from "@/components/schemas/PersonSchema";
import { getAllBlogPosts, type BlogPost } from "@/lib/blog";
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
    .filter((p): p is BlogPost => Boolean(p));

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
      <FAQ
        items={homeFaqs}
        badge="SSS (Sıkça Sorulan Sorular)"
        title={
          <>
            SEO Danışmanlığı{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Hakkında Merak Edilenler
            </span>
          </>
        }
        subtitle="Semantik SEO, yapay zeka odaklı görünürlük stratejileri ve SEO danışmanlığı süreçlerime dair aklınıza takılan tüm soruların doğrudan ve açık yanıtları."
        name="home-faq"
        defaultOpenIndex={0}
      />
      <LatestPostsSlider posts={homePosts} />
      <ContactForm
        title="İşinizi Büyütmeye Hazır Mısınız?"
        description="Arama sıralamalarınızı nasıl yükseltebileceğimizi ve web sitenize daha fazla organik trafik nasıl çekebileceğimizi görüşmek için hemen benimle iletişime geçin."
        showTitle={true}
      />
    </>
  );
}

