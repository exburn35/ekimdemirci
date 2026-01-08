"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/admin/content/RichTextEditor";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewContentBlock() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("html");
  const [location, setLocation] = useState("");
  const [published, setPublished] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (!name || !slug) {
      alert("Please fill in name and slug");
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch("/api/admin/content-blocks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          slug,
          content: { html: content },
          type,
          location: location || null,
          published,
        }),
      });

      if (response.ok) {
        const block = await response.json();
        router.push(`/admin/content-blocks/${block.id}`);
      } else {
        alert("Failed to create content block");
      }
    } catch (error) {
      console.error("Error creating block:", error);
      alert("Error creating content block");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/admin/content-blocks"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Content Blocks
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            New Content Block
          </h1>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isSaving ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Save Block
            </>
          )}
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Content Editor */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Content
            </h2>
            <RichTextEditor
              content={content}
              onChange={setContent}
              placeholder="Enter your content here..."
            />
          </div>
        </div>

        <div className="space-y-6">
          {/* Block Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Block Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Block Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="My Content Block"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) =>
                    setSlug(
                      e.target.value
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")
                    )
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="my-content-block"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                >
                  <option value="html">HTML</option>
                  <option value="component">Component</option>
                  <option value="section">Section</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location (optional)
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                >
                  <option value="">None</option>
                  <option value="header">Header</option>
                  <option value="footer">Footer</option>
                  <option value="sidebar">Sidebar</option>
                  <option value="homepage">Homepage</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="published"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="published"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Published
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

