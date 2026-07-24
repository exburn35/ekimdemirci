import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const item = await prisma.navigationItem.findUnique({
      where: { id: params.id },
    });

    if (!item) {
      return NextResponse.json(
        { error: "Navigation item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(item);
  } catch (error) {
    console.error("Error fetching navigation item:", error);
    return NextResponse.json(
      { error: "Failed to fetch navigation item" },
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
    const { label, href, icon, order, parentId, target, menuType, published } = body;

    const item = await prisma.navigationItem.update({
      where: { id: params.id },
      data: {
        label,
        href,
        icon,
        order,
        parentId: parentId || null,
        target,
        menuType,
        published,
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error("Error updating navigation item:", error);
    return NextResponse.json(
      { error: "Failed to update navigation item" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.navigationItem.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting navigation item:", error);
    return NextResponse.json(
      { error: "Failed to delete navigation item" },
      { status: 500 }
    );
  }
}

