import { Metadata } from "next";
import SEOOverview from "@/components/admin/seo/SEOOverview";

export const metadata: Metadata = {
  title: "SEO Yönetimi",
  description: "SEO ayarlarını ve optimizasyonunu yönetin",
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
          SEO Yönetimi
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Sitenin SEO ayarlarını, robots.txt dosyasını, site haritasını ve sayfa düzeyi SEO&apos;yu yönetin
        </p>
      </div>

      <SEOOverview />
    </div>
  );
}



