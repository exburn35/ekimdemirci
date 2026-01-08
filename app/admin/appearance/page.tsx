import { Metadata } from "next";
import AppearanceSettings from "@/components/admin/appearance/AppearanceSettings";

export const metadata: Metadata = {
  title: "Appearance",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppearancePage() {
  return <AppearanceSettings />;
}

