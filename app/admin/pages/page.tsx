import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pages",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Pages
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your website pages
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Pages management coming soon...
        </p>
      </div>
    </div>
  );
}


