"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Search,
  Settings,
  ChevronLeft,
  ChevronRight,
  FolderOpen,
  Image as ImageIcon,
  Palette,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Pages",
    href: "/admin/pages",
    icon: FolderOpen,
    children: [
      { title: "All Pages", href: "/admin/pages" },
      { title: "Page Builder", href: "/admin/pages/builder" },
    ],
  },
  {
    title: "Content Blocks",
    href: "/admin/content-blocks",
    icon: Layers,
  },
  {
    title: "Media Library",
    href: "/admin/media",
    icon: ImageIcon,
  },
  {
    title: "Appearance",
    href: "/admin/appearance",
    icon: Palette,
    children: [
      { title: "Theme Settings", href: "/admin/appearance" },
      { title: "Navigation", href: "/admin/appearance?tab=navigation" },
      { title: "Footer", href: "/admin/appearance?tab=footer" },
    ],
  },
  {
    title: "SEO",
    href: "/admin/seo",
    icon: Search,
    children: [
      { title: "SEO Overview", href: "/admin/seo" },
      { title: "Robots.txt", href: "/admin/seo/robots" },
      { title: "Sitemap", href: "/admin/seo/sitemap" },
      { title: "Page SEO", href: "/admin/seo/pages" },
    ],
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? "80px" : "280px" }}
      className="fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-4 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-50"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          )}
        </button>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openMenus.includes(item.title);
            const active = isActive(item.href);

            return (
              <div key={item.title}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.title)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                        active
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      )}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && (
                        <>
                          <span className="flex-1 text-left font-medium">
                            {item.title}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && !isCollapsed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 mt-1 space-y-1 overflow-hidden"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block px-3 py-2 rounded-lg text-sm transition-colors",
                                pathname === child.href
                                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                              )}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                      active
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    )}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && (
                      <span className="font-medium">{item.title}</span>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}

