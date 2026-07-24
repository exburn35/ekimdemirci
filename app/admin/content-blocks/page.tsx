import { Metadata } from "next";
import ContentBlocksList from "@/components/admin/content/ContentBlocksList";

export const metadata: Metadata = {
  title: "Content Blocks",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContentBlocksPage() {
  return <ContentBlocksList />;
}

