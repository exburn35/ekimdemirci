import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Get stats from database
    const [totalPages, totalMedia, totalUsers] = await Promise.all([
      prisma.page.count({ where: { published: true } }),
      prisma.media.count(),
      prisma.user.count(),
    ]);

    // Calculate changes (mock for now, in production use historical data)
    return NextResponse.json({
      totalViews: 3500,
      totalProfit: 4200,
      totalProducts: totalPages,
      totalUsers: totalUsers,
      viewsChange: 0.43,
      profitChange: 4.35,
      productsChange: 2.59,
      usersChange: -0.95,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      {
        totalViews: 3500,
        totalProfit: 4200,
        totalProducts: 3500,
        totalUsers: 3500,
        viewsChange: 0.43,
        profitChange: 4.35,
        productsChange: 2.59,
        usersChange: -0.95,
      },
      { status: 200 }
    );
  }
}

