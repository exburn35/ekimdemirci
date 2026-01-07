"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2, RefreshCw, CheckCircle2, ExternalLink } from "lucide-react";

interface SitemapEntry {
  id: string;
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

const defaultEntries: SitemapEntry[] = [
  {
    id: "1",
    url: "https://ekimdemirci.com",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 1.0,
  },
  {
    id: "2",
    url: "https://ekimdemirci.com/about",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    id: "3",
    url: "https://ekimdemirci.com/services",
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: 0.9,
  },
];

export default function SitemapEditor() {
  const [entries, setEntries] = useState<SitemapEntry[]>(defaultEntries);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  // Load sitemap entries on mount
  useEffect(() => {
    const loadSitemap = async () => {
      try {
        const response = await fetch("/api/admin/seo/sitemap");
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setEntries(data.map((entry: any) => ({
              id: entry.id,
              url: entry.url,
              lastModified: entry.lastModified.split("T")[0],
              changeFrequency: entry.changeFrequency,
              priority: entry.priority,
            })));
          }
        }
      } catch (error) {
        console.error("Failed to load sitemap:", error);
      }
    };
    loadSitemap();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");

    try {
      const response = await fetch("/api/admin/seo/sitemap", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ entries }),
      });

      if (!response.ok) throw new Error("Failed to save");
      
      setSaveStatus("success");
    } catch (error) {
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleAdd = async () => {
    const newEntry: SitemapEntry = {
      id: Date.now().toString(),
      url: "",
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.5,
    };
    setEntries([...entries, newEntry]);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/seo/sitemap/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setEntries(entries.filter((entry) => entry.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete entry:", error);
    }
  };

  const handleUpdate = (id: string, field: keyof SitemapEntry, value: string | number) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sitemap URLs
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Manage URLs in your XML sitemap
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAdd}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add URL
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {saveStatus === "success" && (
            <div className="mb-4 flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              <p className="text-sm text-green-800 dark:text-green-300">
                Sitemap saved successfully!
              </p>
            </div>
          )}

          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      URL
                    </label>
                    <input
                      type="text"
                      value={entry.url}
                      onChange={(e) => handleUpdate(entry.id, "url", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://ekimdemirci.com/page"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Modified
                    </label>
                    <input
                      type="date"
                      value={entry.lastModified}
                      onChange={(e) => handleUpdate(entry.id, "lastModified", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Change Frequency
                    </label>
                    <select
                      value={entry.changeFrequency}
                      onChange={(e) =>
                        handleUpdate(entry.id, "changeFrequency", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="always">Always</option>
                      <option value="hourly">Hourly</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                      <option value="never">Never</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Priority (0.0 - 1.0)
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="1"
                      step="0.1"
                      value={entry.priority}
                      onChange={(e) =>
                        handleUpdate(entry.id, "priority", parseFloat(e.target.value))
                      }
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              Sitemap URL
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Your sitemap will be available at:
            </p>
          </div>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Sitemap
          </a>
        </div>
        <code className="mt-3 block px-3 py-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm text-gray-900 dark:text-gray-100">
          https://ekimdemirci.com/sitemap.xml
        </code>
      </div>
    </div>
  );
}


