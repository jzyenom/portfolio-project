import Skill from "@/models/skill";
import connectToDatabase from "@/database/db";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/middleware/authMiddleware";

export async function POST(req: Request) {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  await connectToDatabase();
  const data = await req.json();
  const skill = await Skill.create(data);
  return new Response(JSON.stringify(skill), { status: 201 });
}

export async function GET() {
  await connectToDatabase();
  const skills = await Skill.find().sort("-createdAt");
  return new Response(JSON.stringify(skills), { status: 200 });
}
