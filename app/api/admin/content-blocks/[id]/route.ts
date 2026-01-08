import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const block = await prisma.contentBlock.findUnique({
      where: { id: params.id },
    });

    if (!block) {
      return NextResponse.json(
        { error: "Content block not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(block);
  } catch (error) {
    console.error("Error fetching content block:", error);
    return NextResponse.json(
      { error: "Failed to fetch content block" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, slug, content, type, location, published } = body;

    const block = await prisma.contentBlock.update({
      where: { id: params.id },
      data: {
        name,
        slug,
        content: content || {},
        type,
        location,
        published,
      },
    });

    return NextResponse.json(block);
  } catch (error) {
    console.error("Error updating content block:", error);
    return NextResponse.json(
      { error: "Failed to update content block" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.contentBlock.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting content block:", error);
    return NextResponse.json(
      { error: "Failed to delete content block" },
      { status: 500 }
    );
  }
}

