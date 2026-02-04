import Skill from "@/models/skill";
import connectToDatabase from "@/database/db";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/middleware/authMiddleware";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  await connectToDatabase();
  const data = await req.json();
  const updated = await Skill.findByIdAndUpdate(params.id, data, { new: true });
  return new Response(JSON.stringify(updated), { status: 200 });
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  await connectToDatabase();
  await Skill.findByIdAndDelete(params.id);
  return new Response(null, { status: 204 });
}
