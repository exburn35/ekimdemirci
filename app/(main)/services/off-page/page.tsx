import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Off-Page SEO",
  description: "Build authority and credibility through strategic link building, brand mentions, and relationship building. Quality backlinks that drive rankings.",
  openGraph: {
    title: "Off-Page SEO Services | Ekim Demirci",
    description: "Strategic link building and authority building for better rankings.",
  },
};

export default function OffPageSEO() {
  return (
    <ServicePageLayout
      title="Off-Page SEO"
      subtitle="Authority & Link Building"
      description="Off-page SEO focuses on building your website's authority and credibility through external signals. We develop strategic link building campaigns, cultivate brand mentions, and build relationships that establish your site as an authoritative source in your industry."
      icon="Link2"
      gradient="from-orange-500 to-red-500"
      features={[
        "Strategic Link Building",
        "Guest Posting",
        "Broken Link Building",
        "Resource Page Outreach",
        "Brand Mention Building",
        "Influencer Partnerships",
        "PR & Media Relations",
        "Directory Submissions",
        "Social Signals",
        "Local Citations",
      ]}
      benefits={[
        {
          title: "Increased Domain Authority",
          description: "High-quality backlinks from authoritative websites signal to search engines that your content is valuable and trustworthy, directly improving your domain authority and search rankings.",
        },
        {
          title: "Referral Traffic",
          description: "Quality backlinks don't just improve rankings—they also drive direct referral traffic from the linking sites, expanding your audience and potential customer base.",
        },
        {
          title: "Brand Visibility",
          description: "Strategic off-page SEO increases your brand's visibility across the web, building brand awareness and establishing your business as a thought leader in your industry.",
        },
        {
          title: "Competitive Edge",
          description: "A strong off-page SEO strategy with quality backlinks gives you a significant competitive advantage, especially in competitive industries where on-page optimization alone isn't enough.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Link Profile Analysis",
          description: "We analyze your current backlink profile, identifying strengths, weaknesses, and opportunities. We also analyze competitor link profiles to discover potential link opportunities.",
        },
        {
          step: "2",
          title: "Outreach Strategy Development",
          description: "We develop a customized outreach strategy based on your industry, target audience, and business goals, identifying the best link opportunities and developing personalized outreach campaigns.",
        },
        {
          step: "3",
          title: "Link Acquisition",
          description: "We execute strategic link building campaigns through various methods including guest posting, resource page outreach, broken link building, and relationship building with industry influencers.",
        },
        {
          step: "4",
          title: "Monitoring & Maintenance",
          description: "We continuously monitor your backlink profile, track link quality, disavow toxic links, and maintain relationships to ensure sustainable, long-term link growth.",
        },
      ]}
    />
  );
}

