"use client";

import { FileText, Edit, Search, Plus } from "lucide-react";

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return `${Math.floor(diffInSeconds / 2592000)} months ago`;
}

const activities = [
  {
    type: "page",
    action: "created",
    title: "About Us Page",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000),
    icon: Plus,
  },
  {
    type: "seo",
    action: "updated",
    title: "SEO Settings",
    time: new Date(Date.now() - 5 * 60 * 60 * 1000),
    icon: Search,
  },
  {
    type: "page",
    action: "edited",
    title: "Home Page",
    time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    icon: Edit,
  },
  {
    type: "page",
    action: "created",
    title: "Services Page",
    time: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    icon: FileText,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{activity.title}</span>{" "}
                  <span className="text-gray-600 dark:text-gray-400">
                    was {activity.action}
                  </span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {getTimeAgo(activity.time)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

