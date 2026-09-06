import { readFile, stat } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const VIDEO_CANDIDATES = [
  "public/videos/hero-upscaled.mp4",
  "upscaled-video.mp4",
];

const MIN_VIDEO_BYTES = 100_000;

export async function GET() {
  for (const relative of VIDEO_CANDIDATES) {
    try {
      const filePath = path.join(/* turbopackIgnore: true */ process.cwd(), relative);
      const fileStat = await stat(filePath);
      if (fileStat.size < MIN_VIDEO_BYTES) continue;

      const buffer = await readFile(filePath);
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "video/mp4",
          "Cache-Control": "public, max-age=31536000, immutable",
          "Content-Length": String(fileStat.size),
        },
      });
    } catch {
      continue;
    }
  }

  return NextResponse.json({ error: "Hero video not found" }, { status: 404 });
}
