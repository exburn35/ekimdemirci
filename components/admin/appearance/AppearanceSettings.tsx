"use client";

import { useState, useEffect } from "react";
import { Save, Image as ImageIcon, Palette, Navigation, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface SiteSetting {
  key: string;
  value: string;
  type: string;
  category: string;
  label?: string;
}

export default function AppearanceSettings() {
  const [settings, setSettings] = useState<Record<string, SiteSetting>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "navigation" | "footer" | "theme">("general");

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const response = await fetch("/api/admin/settings");
      if (response.ok) {
        const data = await response.json();
        const settingsMap: Record<string, SiteSetting> = {};
        data.forEach((setting: SiteSetting) => {
          settingsMap[setting.key] = setting;
        });
        setSettings(settingsMap);
      }
    } catch (error) {
      console.error("Error loading settings:", error);
    }
  };

  const updateSetting = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        key,
        value,
        type: prev[key]?.type || "text",
        category: prev[key]?.category || "general",
      },
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.values(settings)),
      });

      if (response.ok) {
        alert("Settings saved successfully!");
      } else {
        alert("Failed to save settings");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Error saving settings");
    } finally {
      setIsSaving(false);
    }
  };

  const getSetting = (key: string, defaultValue: string = "") => {
    return settings[key]?.value || defaultValue;
  };

  const tabs = [
    { id: "general", label: "General", icon: FileText },
    { id: "navigation", label: "Navigation", icon: Navigation },
    { id: "footer", label: "Footer", icon: FileText },
    { id: "theme", label: "Theme", icon: Palette },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Appearance
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Customize your website&apos;s appearance and settings
          </p>
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
              Save Changes
            </>
          )}
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 font-semibold"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        {activeTab === "general" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              General Settings
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Site Title
              </label>
              <input
                type="text"
                value={getSetting("site_title", "Ekim Demirci")}
                onChange={(e) => updateSetting("site_title", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Site Description
              </label>
              <textarea
                value={getSetting("site_description", "")}
                onChange={(e) => updateSetting("site_description", e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Site Logo
              </label>
              <div className="flex items-center gap-4">
                {getSetting("site_logo") && (
                  <img
                    src={getSetting("site_logo")}
                    alt="Site Logo"
                    className="w-32 h-32 object-contain border border-gray-300 dark:border-gray-600 rounded-lg"
                  />
                )}
                <label className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  {getSetting("site_logo") ? "Change Logo" : "Upload Logo"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const formData = new FormData();
                      formData.append("files", file);

                      try {
                        const response = await fetch("/api/admin/media", {
                          method: "POST",
                          body: formData,
                        });

                        if (response.ok) {
                          const data = await response.json();
                          updateSetting("site_logo", data[0].url);
                        }
                      } catch (error) {
                        console.error("Error uploading logo:", error);
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === "navigation" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Navigation Menu
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Navigation menu management will be available here. You can add, edit, and reorder menu items.
            </p>
            {/* Navigation editor will be implemented */}
          </div>
        )}

        {activeTab === "footer" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Footer Settings
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Footer Copyright Text
              </label>
              <input
                type="text"
                value={getSetting("footer_copyright", "")}
                onChange={(e) => updateSetting("footer_copyright", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        )}

        {activeTab === "theme" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Theme Settings
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Primary Color
              </label>
              <input
                type="color"
                value={getSetting("primary_color", "#3b82f6")}
                onChange={(e) => updateSetting("primary_color", e.target.value)}
                className="w-20 h-10 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

