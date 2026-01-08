import { Metadata } from "next";
import BlogList from "@/components/admin/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog Posts",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogPage() {
  return <BlogList />;
}

