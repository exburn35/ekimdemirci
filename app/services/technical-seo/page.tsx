import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Technical SEO",
  description: "Comprehensive technical SEO audits and optimizations. Site speed, crawlability, indexability, and core web vitals to ensure search engines can efficiently access and understand your site.",
  openGraph: {
    title: "Technical SEO Services | Ekim Demirci",
    description: "Expert technical SEO optimization for maximum search engine visibility.",
  },
};

export default function TechnicalSEO() {
  return (
    <ServicePageLayout
      title="Technical SEO"
      subtitle="Foundation & Infrastructure"
      description="Technical SEO is the foundation of all successful SEO campaigns. We ensure search engines can efficiently crawl, index, and understand your website through comprehensive audits, optimizations, and monitoring of critical technical elements."
      icon="Settings"
      gradient="from-purple-500 to-pink-500"
      features={[
        "Site Speed Optimization",
        "Core Web Vitals",
        "Mobile-First Indexing",
        "Schema Markup",
        "XML Sitemaps",
        "Robots.txt Optimization",
        "Canonical Tags",
        "HTTPS & Security",
        "Crawlability Audits",
        "Indexation Analysis",
      ]}
      benefits={[
        {
          title: "Improved Crawlability",
          description: "Ensure search engines can efficiently discover and index all your important pages. We fix crawl errors, optimize site structure, and remove barriers that prevent search engines from accessing your content.",
        },
        {
          title: "Faster Page Load Times",
          description: "Speed is a critical ranking factor. We optimize images, minify code, leverage browser caching, and implement CDN solutions to dramatically improve your site's loading speed.",
        },
        {
          title: "Better User Experience",
          description: "Technical SEO improvements directly enhance user experience. Faster sites, better mobile performance, and improved accessibility lead to lower bounce rates and higher engagement.",
        },
        {
          title: "Competitive Advantage",
          description: "Many websites neglect technical SEO. By addressing technical issues, you gain a significant advantage over competitors and set a strong foundation for long-term SEO success.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Comprehensive Technical Audit",
          description: "We perform deep technical audits using industry-leading tools, identifying issues with site speed, mobile usability, crawlability, indexation, and core web vitals.",
        },
        {
          step: "2",
          title: "Priority Issue Resolution",
          description: "We prioritize and fix critical technical issues that are preventing your site from ranking well, starting with the most impactful problems first.",
        },
        {
          step: "3",
          title: "Performance Optimization",
          description: "We optimize your site's technical infrastructure, including server configuration, code optimization, image compression, and caching strategies to maximize performance.",
        },
        {
          step: "4",
          title: "Ongoing Monitoring",
          description: "We set up continuous monitoring to catch technical issues early, track core web vitals, and ensure your site maintains optimal technical health.",
        },
      ]}
    />
  );
}

