

import connectToDatabase from "@/database/db";
import User, { IUser } from "@/models/user";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const body = await req.json();
    console.log("Received body:", body);

    const { name, email, password, role }: IUser = body;

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newPassword = password.toString();

    if (newPassword.trim().length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ error: "User exists" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    const userObject = newUser.toObject();
    delete userObject.password;

    console.log("New user created:", userObject); // ✅ Safe to log

    return NextResponse.json({
      message: "User registered successfully",
      data: userObject,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Server error", details: error },
      { status: 500 }
    );
  }
}
