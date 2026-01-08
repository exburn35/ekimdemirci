"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import BlogEditor from "@/components/admin/blog/BlogEditor";

export default function EditBlogPost() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [blogData, setBlogData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    try {
      const response = await fetch(`/api/admin/blog/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBlogData(data);
      }
    } catch (error) {
      console.error("Error loading blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (updatedData: any) => {
    setIsSaving(true);
    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        alert("Blog post saved successfully!");
        await loadBlog();
      } else {
        alert("Failed to save blog post");
      }
    } catch (error) {
      console.error("Error saving blog post:", error);
      alert("Error saving blog post");
    } finally {
      setIsSaving(false);
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
    <BlogEditor
      onSave={handleSave}
      isSaving={isSaving}
      initialData={blogData}
    />
  );
}

