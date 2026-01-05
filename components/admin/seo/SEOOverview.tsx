"use client";

import Link from "next/link";
import { FileCode, Network, FileText, CheckCircle2, AlertCircle } from "lucide-react";

const seoCards = [
  {
    title: "Robots.txt",
    description: "Manage search engine crawling rules",
    href: "/admin/seo/robots",
    icon: FileCode,
    status: "configured",
  },
  {
    title: "Sitemap",
    description: "Manage XML sitemap configuration",
    href: "/admin/seo/sitemap",
    icon: Network,
    status: "configured",
  },
  {
    title: "Page SEO",
    description: "Manage SEO settings for all pages",
    href: "/admin/seo/pages",
    icon: FileText,
    status: "needs-review",
  },
];

export default function SEOOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {seoCards.map((card) => {
        const Icon = card.icon;
        return (
          <Link
            key={card.title}
            href={card.href}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              {card.status === "configured" ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-500" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {card.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

