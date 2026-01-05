"use client";

import { useState, useEffect } from "react";
import { Save, X, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";

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

interface PageSEOEditorProps {
  page: PageSEO;
  onSave: (page: PageSEO) => void;
  onCancel: () => void;
}

export default function PageSEOEditor({ page, onSave, onCancel }: PageSEOEditorProps) {
  const [formData, setFormData] = useState<PageSEO>(page);
  const [seoScore, setSeoScore] = useState(page.seoScore);
  const [issues, setIssues] = useState<string[]>([]);

  useEffect(() => {
    calculateSEOScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const calculateSEOScore = () => {
    const newIssues: string[] = [];
    let score = 100;

    // Check meta title
    if (!formData.metaTitle || formData.metaTitle.length === 0) {
      newIssues.push("Missing meta title");
      score -= 20;
    } else if (formData.metaTitle.length < 30) {
      newIssues.push("Meta title too short (recommended: 30-60 characters)");
      score -= 10;
    } else if (formData.metaTitle.length > 60) {
      newIssues.push("Meta title too long (recommended: 30-60 characters)");
      score -= 5;
    }

    // Check meta description
    if (!formData.metaDescription || formData.metaDescription.length === 0) {
      newIssues.push("Missing meta description");
      score -= 20;
    } else if (formData.metaDescription.length < 120) {
      newIssues.push("Meta description too short (recommended: 120-160 characters)");
      score -= 10;
    } else if (formData.metaDescription.length > 160) {
      newIssues.push("Meta description too long (recommended: 120-160 characters)");
      score -= 5;
    }

    // Check OG image
    if (!formData.ogImage || formData.ogImage.length === 0) {
      newIssues.push("Missing OG image");
      score -= 15;
    }

    // Check canonical URL
    if (!formData.canonicalUrl || formData.canonicalUrl.length === 0) {
      newIssues.push("Missing canonical URL");
      score -= 10;
    }

    setIssues(newIssues);
    setSeoScore(Math.max(0, score));
  };

  const handleSave = () => {
    onSave({ ...formData, seoScore, issues });
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit SEO: {formData.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {formData.path}
            </p>
          </div>
          <button
            onClick={onCancel}
            className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* SEO Score */}
        <div className={`p-4 rounded-lg ${getScoreBg(seoScore)}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                SEO Score
              </p>
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-6 h-6 ${getScoreColor(seoScore)}`} />
                <span className={`text-3xl font-bold ${getScoreColor(seoScore)}`}>
                  {seoScore}%
                </span>
              </div>
            </div>
            {seoScore >= 90 && (
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            )}
          </div>
        </div>

        {/* Issues */}
        {issues.length > 0 && (
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <div className="flex items-start gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <h3 className="text-sm font-semibold text-yellow-800 dark:text-yellow-300">
                Issues to Fix
              </h3>
            </div>
            <ul className="space-y-1 ml-7">
              {issues.map((issue, index) => (
                <li
                  key={index}
                  className="text-sm text-yellow-800 dark:text-yellow-300"
                >
                  • {issue}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Meta Title *
            </label>
            <input
              type="text"
              value={formData.metaTitle}
              onChange={(e) =>
                setFormData({ ...formData, metaTitle: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Page title for search engines (30-60 characters)"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {formData.metaTitle.length} / 60 characters
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Meta Description *
            </label>
            <textarea
              value={formData.metaDescription}
              onChange={(e) =>
                setFormData({ ...formData, metaDescription: e.target.value })
              }
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Page description for search engines (120-160 characters)"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {formData.metaDescription.length} / 160 characters
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              OG Image URL
            </label>
            <input
              type="url"
              value={formData.ogImage}
              onChange={(e) =>
                setFormData({ ...formData, ogImage: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://ekimdemirci.com/og-image.jpg"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Recommended size: 1200x630px
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Canonical URL
            </label>
            <input
              type="url"
              value={formData.canonicalUrl}
              onChange={(e) =>
                setFormData({ ...formData, canonicalUrl: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://ekimdemirci.com/page"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              The canonical URL for this page
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

