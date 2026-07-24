import { Metadata } from "next";
import PageList from "@/components/admin/pages/PageList";

export const metadata: Metadata = {
  title: "Sayfalar",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PagesPage() {
  return <PageList />;
}


