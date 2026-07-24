import { Metadata } from "next";
import MediaLibrary from "@/components/admin/media/MediaLibrary";

export const metadata: Metadata = {
  title: "Media Library",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MediaPage() {
  return <MediaLibrary />;
}

