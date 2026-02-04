import connectToDatabase from "@/database/db";
import { NextResponse } from "next/server";
import Project from "@/models/project";
import { requireAdmin } from "@/middleware/authMiddleware";

import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const auth = requireAdmin(req);
    if (auth instanceof NextResponse) return auth;

    const formData = await req.formData();
    const file = formData.get("file");
    const clientName = formData.get("clientName");
    const projectType = formData.get("projectType");
    const projectDate = formData.get("projectDate");
    const label = formData.get("label");

    if (
      !(file instanceof File) ||
      typeof clientName !== "string" ||
      typeof projectType !== "string" ||
      typeof projectDate !== "string" ||
      typeof label !== "string"
    ) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
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

    await Project.create({
      fileUrl,
      clientName,
      projectType,
      projectDate: new Date(projectDate),
      label,
    });

    return NextResponse.json({ fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: "Upload failed", error: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    // const projects = await Project.find().sort({ createdAt: -1 });
    const projects = await Project.find();
    return NextResponse.json(
      {
        message: "projects loaded successfully",
        data: projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Loading projects error:", error);
    return NextResponse.json(
      { message: "Failed to load projects" },
      { status: 500 }
    );
  }
}
