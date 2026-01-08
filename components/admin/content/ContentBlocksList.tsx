"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface ContentBlock {
  id: string;
  name: string;
  slug: string;
  type: string;
  location?: string;
  published: boolean;
  updatedAt: string;
}

export default function ContentBlocksList() {
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBlocks();
  }, []);

  const loadBlocks = async () => {
    try {
      const response = await fetch("/api/admin/content-blocks");
      if (response.ok) {
        const data = await response.json();
        setBlocks(data);
      }
    } catch (error) {
      console.error("Error loading blocks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this content block?")) return;

    try {
      const response = await fetch(`/api/admin/content-blocks/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await loadBlocks();
      }
    } catch (error) {
      console.error("Error deleting block:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Content Blocks
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage reusable content blocks for your website
          </p>
        </div>
        <Link
          href="/admin/content-blocks/new"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Block
        </Link>
      </div>

      {/* Blocks Grid */}
      {blocks.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <Layers className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No content blocks yet. Create your first block!
          </p>
          <Link
            href="/admin/content-blocks/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Create Block
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {block.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {block.slug}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    block.published
                      ? "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {block.published ? "Published" : "Draft"}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Type:</span>
                  <span className="capitalize">{block.type}</span>
                </div>
                {block.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Location:</span>
                    <span className="capitalize">{block.location}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href={`/admin/content-blocks/${block.id}`}
                  className="flex-1 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(block.id)}
                  className="px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

