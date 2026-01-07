import { Metadata } from "next";
import DashboardStats from "@/components/admin/DashboardStats";
import RecentActivity from "@/components/admin/RecentActivity";
import QuickActions from "@/components/admin/QuickActions";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing website content and SEO",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome to your admin panel
        </p>
      </div>

      <DashboardStats />
      <QuickActions />
      <RecentActivity />
    </div>
  );
}


