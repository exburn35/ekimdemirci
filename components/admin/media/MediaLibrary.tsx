"use client";

import { useState, useEffect } from "react";
import { Upload, Image as ImageIcon, File, Search, Trash2, Eye, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MediaItem {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  alt?: string;
  title?: string;
  createdAt: string;
}

export default function MediaLibrary() {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | "images" | "documents">("all");

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const response = await fetch("/api/admin/media");
      if (response.ok) {
        const data = await response.json();
        setMedia(data);
      }
    } catch (error) {
      console.error("Error loading media:", error);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await loadMedia();
      } else {
        alert("Failed to upload files");
      }
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Error uploading files");
    } finally {
      setIsUploading(false);
      // Reset input
      e.target.value = "";
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return;

    try {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await loadMedia();
        if (selectedMedia?.id === id) {
          setSelectedMedia(null);
        }
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const isImage = (mimeType: string) => mimeType.startsWith("image/");

  const filteredMedia = media.filter((item) => {
    const matchesSearch =
      item.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.alt?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter =
      filter === "all" ||
      (filter === "images" && isImage(item.mimeType)) ||
      (filter === "documents" && !isImage(item.mimeType));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Media Library
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your images, documents, and other media files
          </p>
        </div>
        <label className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload Files
          <input
            type="file"
            multiple
            onChange={handleUpload}
            disabled={isUploading}
            className="hidden"
            accept="image/*,application/pdf,.doc,.docx"
          />
        </label>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search media..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("images")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === "images"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Images
          </button>
          <button
            onClick={() => setFilter("documents")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === "documents"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            Documents
          </button>
        </div>
      </div>

      {/* Upload Progress */}
      {isUploading && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-blue-600 dark:text-blue-400">Uploading files...</span>
          </div>
        </div>
      )}

      {/* Media Grid */}
      {filteredMedia.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            {searchQuery ? "No media found matching your search" : "No media files yet. Upload your first file!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredMedia.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              {isImage(item.mimeType) ? (
                <div className="aspect-square relative bg-gray-100 dark:bg-gray-900">
                  <img
                    src={item.url}
                    alt={item.alt || item.originalName}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <File className="w-12 h-12 text-gray-400" />
                </div>
              )}
              
              <div className="p-2">
                <p className="text-xs font-medium text-gray-900 dark:text-white truncate" title={item.originalName}>
                  {item.originalName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {formatFileSize(item.size)}
                </p>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMedia(item);
                  }}
                  className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Eye className="w-4 h-4 text-gray-900" />
                </button>
                <a
                  href={item.url}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-4 h-4 text-gray-900" />
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                  className="p-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Media Detail Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between z-10">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedMedia.originalName}
                </h2>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <div className="p-6">
                {isImage(selectedMedia.mimeType) ? (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.alt || selectedMedia.originalName}
                    className="w-full rounded-lg mb-4"
                  />
                ) : (
                  <div className="flex items-center justify-center h-64 bg-gray-100 dark:bg-gray-900 rounded-lg mb-4">
                    <File className="w-24 h-24 text-gray-400" />
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      File URL
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={selectedMedia.url}
                        readOnly
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(selectedMedia.url);
                          alert("URL copied to clipboard!");
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        File Size
                      </label>
                      <p className="text-gray-900 dark:text-white">
                        {formatFileSize(selectedMedia.size)}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        MIME Type
                      </label>
                      <p className="text-gray-900 dark:text-white">
                        {selectedMedia.mimeType}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={selectedMedia.url}
                      download
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                    >
                      Download
                    </a>
                    <button
                      onClick={() => handleDelete(selectedMedia.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

