"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogEditor from "@/components/admin/blog/BlogEditor";

export default function NewBlogPost() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (blogData: any) => {
    setIsSaving(true);
    try {
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (response.ok) {
        const post = await response.json();
        router.push(`/admin/blog/${post.id}`);
      } else {
        alert("Failed to create blog post");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Error creating blog post");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <BlogEditor
      onSave={handleSave}
      isSaving={isSaving}
      initialData={null}
    />
  );
}

