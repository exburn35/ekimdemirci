import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'

// GET all sitemap entries
export async function GET() {
  try {
    // Skip database queries during build
    if (!process.env.DATABASE_URL) {
      return NextResponse.json([]);
    }

    const entries = await prisma.sitemapEntry.findMany({
      orderBy: { priority: "desc" },
    });
    return NextResponse.json(entries);
  } catch (error) {
    console.error("Error fetching sitemap entries:", error);
    // Return empty array on error to prevent build failures
    return NextResponse.json([]);
  }
}

// CREATE sitemap entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, lastModified, changeFrequency, priority } = body;

    const entry = await prisma.sitemapEntry.create({
      data: {
        url,
        lastModified: new Date(lastModified),
        changeFrequency,
        priority: priority || 0.5,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    console.error("Error creating sitemap entry:", error);
    return NextResponse.json(
      { error: "Failed to create sitemap entry" },
      { status: 500 }
    );
  }
}

// UPDATE multiple sitemap entries (bulk update)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { entries } = body;

    // Delete all existing entries
    await prisma.sitemapEntry.deleteMany();

    // Create new entries
    const createdEntries = await prisma.sitemapEntry.createMany({
      data: entries.map((entry: any) => ({
        url: entry.url,
        lastModified: new Date(entry.lastModified),
        changeFrequency: entry.changeFrequency,
        priority: entry.priority || 0.5,
      })),
    });

    return NextResponse.json({ success: true, count: createdEntries.count });
  } catch (error) {
    console.error("Error updating sitemap entries:", error);
    return NextResponse.json(
      { error: "Failed to update sitemap entries" },
      { status: 500 }
    );
  }
}

