import { Metadata } from "next";
import SitemapEditor from "@/components/admin/seo/SitemapEditor";

export const metadata: Metadata = {
  title: "Sitemap Manager",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SitemapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Sitemap Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your XML sitemap configuration and URLs
        </p>
      </div>

      <SitemapEditor />
    </div>
  );
}

