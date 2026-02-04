import Skill from "@/models/skill";
import connectToDatabase from "@/database/db";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/middleware/authMiddleware";
import mongoose from "mongoose";

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  const { id } = await context.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid skill ID" }, { status: 400 });
  }

  await connectToDatabase();
  const data = await req.json();
  const updated = await Skill.findByIdAndUpdate(id, data, { new: true });
  if (!updated) {
    return NextResponse.json({ error: "Skill not found" }, { status: 404 });
  }
  return NextResponse.json(updated, { status: 200 });
}
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  const { id } = await context.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid skill ID" }, { status: 400 });
  }

  await connectToDatabase();
  const deleted = await Skill.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ error: "Skill not found" }, { status: 404 });
  }
  return new Response(null, { status: 204 });
}
