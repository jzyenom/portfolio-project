import { NextResponse } from "next/server";
import connectToDatabase from "@/database/db";
import Portfolio from "@/models/portfolio";
import { requireAdmin } from "@/middleware/authMiddleware";
import { portfolioContentSchema } from "@/lib/validators/portfolio";
import { defaultPortfolioContent } from "@/lib/portfolioData";

export async function GET() {
  try {
    await connectToDatabase();
    const doc = await Portfolio.findOne().sort({ updatedAt: -1 }).lean();
    if (!doc) {
      return NextResponse.json(defaultPortfolioContent, { status: 200 });
    }
    return NextResponse.json(doc, { status: 200 });
  } catch (error) {
    console.error("Portfolio fetch error:", error);
    return NextResponse.json(
      { error: "Failed to load portfolio content" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  try {
    const body = await req.json();
    const parsed = portfolioContentSchema.parse(body);

    await connectToDatabase();

    const updated = await Portfolio.findOneAndUpdate(
      {},
      { $set: parsed },
      { new: true, upsert: true }
    ).lean();

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Portfolio update error:", error);
    return NextResponse.json(
      { error: "Failed to update portfolio content" },
      { status: 400 }
    );
  }
}
