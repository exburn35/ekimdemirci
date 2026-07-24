import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { unlink } from "fs/promises";
import { join } from "path";

export const dynamic = "force-dynamic";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const media = await prisma.media.findUnique({
      where: { id: params.id },
    });

    if (!media) {
      return NextResponse.json(
        { error: "Media not found" },
        { status: 404 }
      );
    }

    // Delete file from filesystem
    try {
      const filepath = join(process.cwd(), "public", media.url);
      await unlink(filepath);
    } catch (error) {
      console.error("Error deleting file:", error);
      // Continue with database deletion even if file deletion fails
    }

    // Delete from database
    await prisma.media.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting media:", error);
    return NextResponse.json(
      { error: "Failed to delete media" },
      { status: 500 }
    );
  }
}

