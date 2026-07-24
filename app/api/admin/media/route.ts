import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

export const dynamic = "force-dynamic";

// Helper to check authentication
async function checkAuth(request: NextRequest) {
  // In production, implement proper session/auth check
  // For now, we'll allow if the request comes from admin
  return true;
}

export async function GET() {
  try {
    const media = await prisma.media.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(media);
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json(
        { error: "No files provided" },
        { status: 400 }
      );
    }

    const uploadDir = join(process.cwd(), "public", "uploads");
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const uploadedFiles = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const timestamp = Date.now();
      const filename = `${timestamp}-${file.name}`;
      const filepath = join(uploadDir, filename);

      await writeFile(filepath, buffer);

      const url = `/uploads/${filename}`;

      const mediaItem = await prisma.media.create({
        data: {
          filename,
          originalName: file.name,
          mimeType: file.type,
          size: file.size,
          url,
        },
      });

      uploadedFiles.push(mediaItem);
    }

    return NextResponse.json(uploadedFiles);
  } catch (error) {
    console.error("Error uploading media:", error);
    return NextResponse.json(
      { error: "Failed to upload media" },
      { status: 500 }
    );
  }
}

