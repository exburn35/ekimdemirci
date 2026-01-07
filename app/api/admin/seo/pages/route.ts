import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all pages with SEO data
export async function GET() {
  try {
    // Skip database queries during build
    if (!process.env.DATABASE_URL) {
      return NextResponse.json([]);
    }

    const pages = await prisma.page.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        metaTitle: true,
        metaDescription: true,
        ogImage: true,
        canonicalUrl: true,
        updatedAt: true,
      },
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json(pages);
  } catch (error) {
    console.error("Error fetching pages SEO:", error);
    // Return empty array on error to prevent build failures
    return NextResponse.json([]);
  }
}

