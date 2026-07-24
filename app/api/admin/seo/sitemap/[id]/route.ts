import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic'

// UPDATE sitemap entry
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { url, lastModified, changeFrequency, priority } = body;

    const entry = await prisma.sitemapEntry.update({
      where: { id: params.id },
      data: {
        url,
        lastModified: new Date(lastModified),
        changeFrequency,
        priority,
      },
    });

    return NextResponse.json(entry);
  } catch (error) {
    console.error("Error updating sitemap entry:", error);
    return NextResponse.json(
      { error: "Failed to update sitemap entry" },
      { status: 500 }
    );
  }
}

// DELETE sitemap entry
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.sitemapEntry.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting sitemap entry:", error);
    return NextResponse.json(
      { error: "Failed to delete sitemap entry" },
      { status: 500 }
    );
  }
}

