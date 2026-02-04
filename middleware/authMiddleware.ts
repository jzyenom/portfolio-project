
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

type JwtPayload = { id: string; role: string };

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not defined");
  return secret;
};

export const verifyToken = (token: string): JwtPayload => {
  if (!token) throw new Error("Token missing");

  try {
    return jwt.verify(token, getJwtSecret()) as JwtPayload;
  } catch {
    throw new Error("Invalid token");
  }
};

export const getAuthPayload = (req: Request) => {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  try {
    return verifyToken(token);
  } catch {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 403 });
  }
};

export const requireAdmin = (req: Request) => {
  const decoded = getAuthPayload(req);
  if (decoded instanceof NextResponse) return decoded;

  if (decoded.role !== "admin") {
    return NextResponse.json({ error: "Forbidden - Admins only" }, { status: 403 });
  }

  return decoded;
};
