"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageBuilder from "@/components/admin/pages/PageBuilder";
import { Plus } from "lucide-react";

export default function NewPagePage() {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [pageData, setPageData] = useState({
    title: "",
    slug: "",
  });

  const handleSave = async (components: any[]) => {
    if (!pageData.title || !pageData.slug) {
      alert("Please fill in title and slug");
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
      {/* Page Info Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Page Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Page Title
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
              URL Slug
            </label>
            <input
              type="text"
              value={pageData.slug}
              onChange={(e) =>
                setPageData({ ...pageData, slug: e.target.value })
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

      {/* Page Builder */}
      <PageBuilder onSave={handleSave} />
    </div>
  );
}

