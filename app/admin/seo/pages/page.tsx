import { Metadata } from "next";
import PageSEOList from "@/components/admin/seo/PageSEOList";

export const metadata: Metadata = {
  title: "Page SEO Management",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PageSEOPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Page SEO Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage SEO settings for all pages including meta tags, OG images, and canonical URLs
        </p>
      </div>

      <PageSEOList />
    </div>
  );
}



