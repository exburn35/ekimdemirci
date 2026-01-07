import { Metadata } from "next";
import SEOOverview from "@/components/admin/seo/SEOOverview";

export const metadata: Metadata = {
  title: "SEO Management",
  description: "Manage SEO settings and optimization",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SEOPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          SEO Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your site&apos;s SEO settings, robots.txt, sitemap, and page-level SEO
        </p>
      </div>

      <SEOOverview />
    </div>
  );
}


