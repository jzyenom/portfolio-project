import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/middleware/authMiddleware";

export const GET = async (req: NextRequest) => {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  // Proceed with logic
  return NextResponse.json({ message: "Admin data here" });
};
