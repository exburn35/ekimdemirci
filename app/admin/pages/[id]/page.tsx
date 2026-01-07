"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PageBuilder from "@/components/admin/pages/PageBuilder";
import type { PageComponent } from "@/components/admin/pages/PageBuilder";

export default function EditPagePage() {
  const params = useParams();
  const pageId = params.id as string;
  const [initialComponents, setInitialComponents] = useState<PageComponent[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPage();
  }, [pageId]);

  const loadPage = async () => {
    try {
      const response = await fetch(`/api/admin/pages/${pageId}`);
      if (response.ok) {
        const page = await response.json();
        const components =
          typeof page.content === "object" && Array.isArray(page.content)
            ? (page.content as PageComponent[])
            : [];
        setInitialComponents(components);
      } else {
        setError("Page not found");
      }
    } catch (error) {
      console.error("Error loading page:", error);
      setError("Failed to load page");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (components: PageComponent[]) => {
    try {
      const response = await fetch(`/api/admin/pages/${pageId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: components,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save page");
      }
    } catch (error) {
      console.error("Error saving page:", error);
      throw error;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-600 dark:text-gray-400">Loading page...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <PageBuilder
      pageId={pageId}
      initialComponents={initialComponents}
      onSave={handleSave}
    />
  );
}

