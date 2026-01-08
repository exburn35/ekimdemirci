"use client";

import { useState, useEffect } from "react";
import { Eye, DollarSign, Package, Users, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

interface DashboardStats {
  totalViews: number;
  totalProfit: number;
  totalProducts: number;
  totalUsers: number;
  viewsChange: number;
  profitChange: number;
  productsChange: number;
  usersChange: number;
}

export default function DashboardEnhanced() {
  const [stats, setStats] = useState<DashboardStats>({
    totalViews: 3500,
    totalProfit: 4200,
    totalProducts: 3500,
    totalUsers: 3500,
    viewsChange: 0.43,
    profitChange: 4.35,
    productsChange: 2.59,
    usersChange: -0.95,
  });

  useEffect(() => {
    // Fetch real stats from API
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => {
        // Use default stats if API fails
      });
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return `$${formatNumber(num)}`;
  };

  const statCards = [
    {
      title: "Total Views",
      value: formatNumber(stats.totalViews),
      change: stats.viewsChange,
      icon: Eye,
      color: "green",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Total Profit",
      value: formatCurrency(stats.totalProfit),
      change: stats.profitChange,
      icon: DollarSign,
      color: "orange",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      title: "Total Products",
      value: formatNumber(stats.totalProducts),
      change: stats.productsChange,
      icon: Package,
      color: "purple",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Total Users",
      value: formatNumber(stats.totalUsers),
      change: stats.usersChange,
      icon: Users,
      color: "blue",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        const isPositive = stat.change >= 0;
        
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {stat.value}
            </p>
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
              )}
              <p
                className={`text-sm font-medium ${
                  isPositive
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {Math.abs(stat.change).toFixed(2)}%
                {isPositive ? "↑" : "↓"}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

