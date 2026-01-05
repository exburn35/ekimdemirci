import { Metadata } from "next";
import RobotsEditor from "@/components/admin/seo/RobotsEditor";

export const metadata: Metadata = {
  title: "Robots.txt Editor",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RobotsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Robots.txt Editor
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your robots.txt file to control search engine crawling
        </p>
      </div>

      <RobotsEditor />
    </div>
  );
}

