"use client";

import { FileText, Search, Eye, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Toplam Sayfa",
    value: "12",
    change: "bu ay +2",
    icon: FileText,
    color: "blue",
  },
  {
    title: "SEO Skoru",
    value: "87%",
    change: "bu ay +5%",
    icon: Search,
    color: "green",
  },
  {
    title: "Toplam Görüntülenme",
    value: "24.5K",
    change: "bu ay +12%",
    icon: Eye,
    color: "purple",
  },
  {
    title: "Büyüme Oranı",
    value: "18%",
    change: "bu ay +3%",
    icon: TrendingUp,
    color: "orange",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const colorClasses = {
          blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
          green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
          purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
          orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
        };

        return (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[stat.color as keyof typeof colorClasses]}`}
              >
                <Icon className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {stat.value}
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              {stat.change}
            </p>
          </div>
        );
      })}
    </div>
  );
}



