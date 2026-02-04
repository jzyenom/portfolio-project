import connectToDatabase from "@/database/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import qs from "querystring";
import { NextRequest, NextResponse } from "next/server";

type LoginPayload = {
  email: string;
  password: string;
};

const normalizeString = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

const readLoginPayload = async (
  req: NextRequest
): Promise<LoginPayload | null> => {
  const contentType = req.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await req.json()) as Partial<LoginPayload>;
    if (typeof body.email === "string" && typeof body.password === "string") {
      return { email: body.email, password: body.password };
    }
    return null;
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const text = await req.text();
    const parsed = qs.parse(text);
    const email = normalizeString(parsed.email as string | string[] | undefined);
    const password = normalizeString(
      parsed.password as string | string[] | undefined
    );
    if (typeof email === "string" && typeof password === "string") {
      return { email, password };
    }
    return null;
  }

  return null;
};

export const POST = async (req: NextRequest) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");

    await connectToDatabase();

    const payload = await readLoginPayload(req);
    if (!payload) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { email, password } = payload;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json({
      message: "Login successful",
      token,
      user: { ...user.toObject(), password: undefined },
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
