"use client";

import Link from "next/link";
import { Plus, FileText, Search, Settings } from "lucide-react";

const actions = [
  {
    title: "Create New Page",
    description: "Build a new page using the visual editor",
    href: "/admin/pages/builder",
    icon: Plus,
    color: "blue",
  },
  {
    title: "Manage SEO",
    description: "Update robots.txt and sitemap",
    href: "/admin/seo",
    icon: Search,
    color: "green",
  },
  {
    title: "View All Pages",
    description: "Browse and edit existing pages",
    href: "/admin/pages",
    icon: FileText,
    color: "purple",
  },
  {
    title: "Settings",
    description: "Configure site settings",
    href: "/admin/settings",
    icon: Settings,
    color: "orange",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Quick Actions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          const colorClasses = {
            blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
            green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
            purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
            orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
          };

          return (
            <Link
              key={action.title}
              href={action.href}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-md group"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${colorClasses[action.color as keyof typeof colorClasses]}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {action.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

