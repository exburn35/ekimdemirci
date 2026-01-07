import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET single page
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const page = await prisma.page.findUnique({
      where: { id: params.id },
    });

    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json(
      { error: "Failed to fetch page" },
      { status: 500 }
    );
  }
}

// UPDATE page
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { title, content, metaTitle, metaDescription, ogImage, canonicalUrl, published } = body;

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (content !== undefined) updateData.content = content;
    if (metaTitle !== undefined) updateData.metaTitle = metaTitle;
    if (metaDescription !== undefined) updateData.metaDescription = metaDescription;
    if (ogImage !== undefined) updateData.ogImage = ogImage;
    if (canonicalUrl !== undefined) updateData.canonicalUrl = canonicalUrl;
    if (published !== undefined) updateData.published = published;

    const page = await prisma.page.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json(page);
  } catch (error) {
    console.error("Error updating page:", error);
    return NextResponse.json(
      { error: "Failed to update page" },
      { status: 500 }
    );
  }
}

// DELETE page
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.page.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting page:", error);
    return NextResponse.json(
      { error: "Failed to delete page" },
      { status: 500 }
    );
  }
}

