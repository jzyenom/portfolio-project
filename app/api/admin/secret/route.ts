import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/middleware/authMiddleware";

export const GET = async (req: NextRequest) => {
  const auth = requireAdmin(req);
  if (auth instanceof NextResponse) return auth;

  return NextResponse.json({
    message: "Welcome, Admin! ðŸŽ‰ This is secret data.",
  });
};
