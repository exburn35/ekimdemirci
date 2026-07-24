"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Save, Image as ImageIcon, Palette, Navigation, FileText } from "lucide-react";
import { motion } from "framer-motion";
import NavigationEditor from "./NavigationEditor";

interface SiteSetting {
  key: string;
  value: string;
  type: string;
  category: string;
  label?: string;
}

export default function AppearanceSettings() {
  const searchParams = useSearchParams();
  const [settings, setSettings] = useState<Record<string, SiteSetting>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "navigation" | "footer" | "theme">(
    (searchParams.get("tab") as any) || "general"
  );

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
        alert("Ayarlar başarıyla kaydedildi!");
      } else {
        alert("Ayarlar kaydedilemedi");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Ayarlar kaydedilirken bir hata oluştu");
    } finally {
      setIsSaving(false);
    }
  };

  const getSetting = (key: string, defaultValue: string = "") => {
    return settings[key]?.value || defaultValue;
  };

  const tabs = [
    { id: "general", label: "Genel", icon: FileText },
    { id: "navigation", label: "Navigasyon", icon: Navigation },
    { id: "footer", label: "Alt Bilgi (Footer)", icon: FileText },
    { id: "theme", label: "Tema", icon: Palette },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Görünüm
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Web sitenizin görünümünü ve ayarlarını özelleştirin
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
              Kaydediliyor...
            </>
          ) : (
            <>
              <Save className="w-5 h-5" />
              Değişiklikleri Kaydet
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
              Genel Ayarlar
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Site Başlığı
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
                Site Açıklaması
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
                  <div className="relative w-16 h-16 rounded overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <Image
                    src={getSetting("site_logo")}
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                )}
                <label className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  {getSetting("site_logo") ? "Logoyu Değiştir" : "Logo Yükle"}
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

        {activeTab === "navigation" && <NavigationEditor />}

        {activeTab === "footer" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Alt Bilgi (Footer) Ayarları
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Telif Hakkı Metni
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
              Tema Ayarları
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ana Renk
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

