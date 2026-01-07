"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Edit, Search, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import PageSEOEditor from "./PageSEOEditor";

interface PageSEO {
  id: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  canonicalUrl: string;
  seoScore: number;
  issues: string[];
}

const mockPages: PageSEO[] = [
  {
    id: "1",
    path: "/",
    title: "Home",
    metaTitle: "Ekim Demirci | SEO Specialist",
    metaDescription: "Expert SEO Specialist helping businesses achieve top search rankings",
    ogImage: "/og-home.jpg",
    canonicalUrl: "https://ekimdemirci.com",
    seoScore: 92,
    issues: [],
  },
  {
    id: "2",
    path: "/about",
    title: "About",
    metaTitle: "About | Ekim Demirci",
    metaDescription: "Learn about Ekim Demirci, an experienced SEO Specialist",
    ogImage: "",
    canonicalUrl: "https://ekimdemirci.com/about",
    seoScore: 78,
    issues: ["Missing OG Image", "Meta description too short"],
  },
  {
    id: "3",
    path: "/services",
    title: "Services",
    metaTitle: "SEO Services",
    metaDescription: "Comprehensive SEO services",
    ogImage: "",
    canonicalUrl: "",
    seoScore: 65,
    issues: ["Missing OG Image", "Missing canonical URL", "Meta description too short"],
  },
];

export default function PageSEOList() {
  const [selectedPage, setSelectedPage] = useState<PageSEO | null>(null);
  const [pages, setPages] = useState<PageSEO[]>(mockPages);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPages = async () => {
      try {
        const response = await fetch("/api/admin/seo/pages");
        if (response.ok) {
          const data = await response.json();
          setPages(
            data.map((page: any) => ({
              id: page.id,
              path: page.slug,
              title: page.title,
              metaTitle: page.metaTitle || "",
              metaDescription: page.metaDescription || "",
              ogImage: page.ogImage || "",
              canonicalUrl: page.canonicalUrl || "",
              seoScore: calculateScore(page),
              issues: getIssues(page),
            }))
          );
        }
      } catch (error) {
        console.error("Failed to load pages:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPages();
  }, []);

  const calculateScore = (page: any): number => {
    let score = 100;
    if (!page.metaTitle) score -= 20;
    if (!page.metaDescription) score -= 20;
    if (!page.ogImage) score -= 15;
    if (!page.canonicalUrl) score -= 10;
    return Math.max(0, score);
  };

  const getIssues = (page: any): string[] => {
    const issues: string[] = [];
    if (!page.metaTitle) issues.push("Missing meta title");
    if (!page.metaDescription) issues.push("Missing meta description");
    if (!page.ogImage) issues.push("Missing OG image");
    if (!page.canonicalUrl) issues.push("Missing canonical URL");
    return issues;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 dark:text-green-400";
    if (score >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-50 dark:bg-green-900/20";
    if (score >= 70) return "bg-yellow-50 dark:bg-yellow-900/20";
    return "bg-red-50 dark:bg-red-900/20";
  };

  if (selectedPage) {
    return (
      <PageSEOEditor
        page={selectedPage}
        onSave={(updatedPage) => {
          setPages(pages.map((p) => (p.id === updatedPage.id ? updatedPage : p)));
          setSelectedPage(null);
        }}
        onCancel={() => setSelectedPage(null)}
      />
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Page SEO Overview
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Manage SEO settings for all pages
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Average Score: {Math.round(pages.reduce((acc, p) => acc + p.seoScore, 0) / pages.length)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {pages.map((page) => (
          <div
            key={page.id}
            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {page.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded">
                    {page.path}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Meta Title:{" "}
                    </span>
                    <span className="text-sm text-gray-900 dark:text-white">
                      {page.metaTitle || "Not set"}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Meta Description:{" "}
                    </span>
                    <span className="text-sm text-gray-900 dark:text-white">
                      {page.metaDescription || "Not set"}
                    </span>
                  </div>
                </div>

                {page.issues.length > 0 && (
                  <div className="flex items-start gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {page.issues.map((issue, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium text-yellow-800 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 rounded"
                        >
                          {issue}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 ml-6">
                <div
                  className={`px-4 py-2 rounded-lg ${getScoreBg(page.seoScore)}`}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className={`w-5 h-5 ${getScoreColor(page.seoScore)}`} />
                    <span className={`text-lg font-bold ${getScoreColor(page.seoScore)}`}>
                      {page.seoScore}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">SEO Score</p>
                </div>

                <button
                  onClick={() => setSelectedPage(page)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit SEO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


