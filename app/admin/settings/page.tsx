import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayarlar",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Ayarlar
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Site ayarlarınızı ve tercihlerinizi yapılandırın
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
        <p className="text-gray-600 dark:text-gray-400">
          Ayarlar paneli yakında eklenecek...
        </p>
      </div>
    </div>
  );
}



