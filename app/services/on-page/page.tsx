import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "On-Page SEO",
  description: "Optimize every element on your pages for maximum search visibility. Meta tags, headings, content structure, and internal linking strategies.",
  openGraph: {
    title: "On-Page SEO Services | Ekim Demirci",
    description: "Comprehensive on-page optimization for better search rankings.",
  },
};

export default function OnPageSEO() {
  return (
    <ServicePageLayout
      title="On-Page SEO"
      subtitle="Content & Optimization"
      description="On-page SEO involves optimizing every element on your website pages to improve search rankings and user experience. From meta tags to content structure, we ensure every page is perfectly optimized for both search engines and users."
      icon="FileText"
      gradient="from-green-500 to-emerald-500"
      features={[
        "Meta Tags Optimization",
        "Title Tag Optimization",
        "Header Tag Structure (H1-H6)",
        "Content Optimization",
        "Internal Linking Strategy",
        "Image Alt Text",
        "URL Structure",
        "Content Quality Enhancement",
        "Keyword Placement",
        "User Intent Optimization",
      ]}
      benefits={[
        {
          title: "Higher Search Rankings",
          description: "Properly optimized on-page elements send clear signals to search engines about your content's relevance and quality, leading to improved rankings for your target keywords.",
        },
        {
          title: "Better Click-Through Rates",
          description: "Optimized title tags and meta descriptions that accurately represent your content and include compelling calls-to-action can significantly improve your click-through rates from search results.",
        },
        {
          title: "Improved User Experience",
          description: "Well-structured content with proper headings, internal links, and clear organization makes it easier for users to find information and navigate your site, reducing bounce rates.",
        },
        {
          title: "Long-Term Value",
          description: "Quality on-page optimization creates a strong foundation that continues to deliver value over time, even as search algorithms evolve.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Page-by-Page Analysis",
          description: "We analyze each page of your website, identifying optimization opportunities in meta tags, content structure, keyword usage, and internal linking.",
        },
        {
          step: "2",
          title: "Content Optimization",
          description: "We optimize your content to match user intent, improve keyword relevance, enhance readability, and ensure it provides genuine value to your audience.",
        },
        {
          step: "3",
          title: "Technical Elements",
          description: "We optimize all on-page technical elements including title tags, meta descriptions, header tags, image alt text, and URL structures.",
        },
        {
          step: "4",
          title: "Internal Linking Strategy",
          description: "We develop and implement a strategic internal linking structure that distributes page authority, improves crawlability, and enhances user navigation.",
        },
      ]}
    />
  );
}

