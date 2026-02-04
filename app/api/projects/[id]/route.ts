import connectToDatabase from "@/database/db";
import ProjectModel from "@/models/project";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";
import { requireAdmin } from "@/middleware/authMiddleware";

// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import connectToDatabase from "@/lib/db";
// import ProjectModel from "@/models/project"; // double check this path

// type Context = {
//   params: {
//     id: string;
//   };
// };

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  // Now you can safely use `id`

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid project ID" }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const project = await ProjectModel.findById(id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  const { id } = await context.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid project ID" }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const deletedProject = await ProjectModel.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Project deleted successfully", deletedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const auth = requireAdmin(req);
    if (auth instanceof NextResponse) return auth;

    const { id } = await context.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid project ID" }, { status: 400 });
    }

    const formData = await req.formData();
    const file = formData.get("file");
    const clientName = formData.get("clientName");
    const projectType = formData.get("projectType");
    const projectDate = formData.get("projectDate");
    const label = formData.get("label");

    if (
      typeof clientName !== "string" ||
      typeof projectType !== "string" ||
      typeof projectDate !== "string" ||
      typeof label !== "string"
    ) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await connectToDatabase();

    let fileUrl;

    if (file instanceof File && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/uploads");
      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const filePath = path.join(uploadDir, filename);

      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      await writeFile(filePath, buffer);
      fileUrl = `/uploads/${filename}`;
    }

    const updated = await ProjectModel.findByIdAndUpdate(
      id,
      {
        clientName,
        projectType,
        projectDate: new Date(projectDate),
        label,
        ...(fileUrl ? { fileUrl } : {}),
      },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Edit error:", error);
    return NextResponse.json(
      { message: "Edit failed", error: String(error) },
      { status: 500 }
    );
  }
}
