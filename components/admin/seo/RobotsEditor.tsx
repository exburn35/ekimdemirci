"use client";

import { useState } from "react";
import { Save, Download, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

const defaultRobots = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://ekimdemirci.com/sitemap.xml`;

export default function RobotsEditor() {
  const [content, setContent] = useState(defaultRobots);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus("idle");

    try {
      // TODO: Implement server action to save robots.txt
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSaveStatus("success");
    } catch (error) {
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "robots.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const validateRobots = () => {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!content.includes("User-agent:")) {
      warnings.push("No User-agent directive found");
    }

    if (!content.includes("Sitemap:")) {
      warnings.push("No Sitemap directive found");
    }

    return { errors, warnings };
  };

  const { errors, warnings } = validateRobots();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Robots.txt Content
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Edit your robots.txt file. Changes will be saved to the server.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
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
        {(errors.length > 0 || warnings.length > 0) && (
          <div className="mb-4 space-y-2">
            {errors.map((error, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
              >
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
              </div>
            ))}
            {warnings.map((warning, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
              >
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  {warning}
                </p>
              </div>
            ))}
          </div>
        )}

        {saveStatus === "success" && (
          <div className="mb-4 flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <p className="text-sm text-green-800 dark:text-green-300">
              Robots.txt saved successfully!
            </p>
          </div>
        )}

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-96 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Enter robots.txt content..."
        />

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p className="font-medium mb-2">Preview URL:</p>
          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
            https://ekimdemirci.com/robots.txt
          </code>
        </div>
      </div>
    </div>
  );
}

