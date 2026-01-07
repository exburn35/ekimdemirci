"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageBuilder from "@/components/admin/pages/PageBuilder";
import type { PageComponent } from "@/components/admin/pages/PageBuilder";
import { Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PageBuilderPage() {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [pageData, setPageData] = useState({
    title: "",
    slug: "",
  });

  const handleSave = async (components: PageComponent[]) => {
    if (!pageData.title || !pageData.slug) {
      alert("Please fill in title and slug before saving");
      setShowForm(true);
      return;
    }

    if (components.length === 0) {
      alert("Please add at least one component to the page");
      return;
    }

    setIsCreating(true);
    try {
      const response = await fetch("/api/admin/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: pageData.title,
          slug: pageData.slug,
          content: components,
        }),
      });

      if (response.ok) {
        const page = await response.json();
        router.push(`/admin/pages/${page.id}`);
      } else {
        throw new Error("Failed to create page");
      }
    } catch (error) {
      console.error("Error creating page:", error);
      alert("Failed to create page. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/pages"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pages
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Page Builder
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Create a new page by adding components and configuring settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Page Settings
            </button>
          )}
          <button
            onClick={() => setShowForm(true)}
            disabled={isCreating}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Configure & Save
          </button>
        </div>
      </div>

      {/* Page Info Form */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Page Information
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Page Title *
              </label>
              <input
                type="text"
                value={pageData.title}
                onChange={(e) =>
                  setPageData({ ...pageData, title: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Enter page title..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                value={pageData.slug}
                onChange={(e) =>
                  setPageData({
                    ...pageData,
                    slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="page-url-slug"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Will be accessible at: /{pageData.slug || "..."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Page Builder */}
      <PageBuilder onSave={handleSave} />
    </div>
  );
}

