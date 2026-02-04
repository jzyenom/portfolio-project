import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";
import connectToDatabase from "@/database/db";
import ProjectModel from "@/models/project"; // updated name
import { NextResponse } from "next/server";
import { requireAdmin } from "@/middleware/authMiddleware";

export async function POST(req: Request) {
  try {
    const auth = requireAdmin(req);
    if (auth instanceof NextResponse) return auth;

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const clientName = formData.get("clientName") as string;
    const projectType = formData.get("projectType") as string;
    const projectDate = formData.get("projectDate") as string;
    const label = formData.get("label") as string;

    if (!file || !clientName || !projectType || !projectDate || !label) {
      return new Response(JSON.stringify({ message: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public/uploads");
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const filePath = path.join(uploadDir, filename);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    await writeFile(filePath, buffer);
    const fileUrl = `/uploads/${filename}`;

    await connectToDatabase();

    await ProjectModel.create({
      fileUrl,
      clientName,
      projectType,
      projectDate: new Date(projectDate),
      label,
    });

    return new Response(JSON.stringify({ fileUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(
      JSON.stringify({ message: "Upload failed", error: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
