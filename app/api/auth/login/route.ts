// import connectToDatabase from "@/database/db";
// import User from "@/models/user";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import qs from "querystring";
// import { NextRequest, NextResponse } from "next/server";

// // Define the POST function to handle admin login
// export const POST = async (req: NextRequest) => {
//   try {
//     // Ensure JWT_SECRET/ is defined
//     const JWT_SECRET = process.env.JWT_SECRET || "77733";
//     if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");

//     // Connect to the database
//     await connectToDatabase();

//     const contentType = req.headers.get("content-type");
//     let data;
//     if (contentType?.includes("application/json")) {
//       data = await req.json();
//     } else if (contentType?.includes("application/x-www-form-urlencoded")) {
//       const text = await req.text();
//       data = qs.parse(text); // Parse form data
//     } else if (contentType?.includes("multipart/form-data")) {
//     } else {
//       return new Response("Unsupported content type", { status: 400 });
//     }

//     //  const body = await req.json();
//     //   console.log("Received body:", body);

//     const { email, password } = data;

//     // Parse form data
//     // const formData = await req.formData();
//     // const email = formData.get("email") as string;
//     // const password = formData.get("password") as string;

//     if (!email || !password) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Find admin by email in the database
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ error: "Admin not found" }, { status: 404 });
//     }
//     // const newPassword = await password.toString();

//     // Compare provided password with hashed password in the database
//     const validPassword = await bcrypt.compare(
//       password.toString(),
//       user.password
//     );
//     if (!validPassword) {
//       return NextResponse.json(
//         { error: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     // Generate a JWT token for authentication
//     // const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
//     const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     // Return response with token and admin details (excluding password)
//     return NextResponse.json({
//       message: "Login successful",
//       token,
//       user: { ...user.toObject(), password: undefined },
//     });
//   } catch (error) {
//     // Handle errors and return appropriate response
//     const errorMessage =
//       error instanceof Error ? error.message : "An unknown error occurred";
//     return NextResponse.json({ error: errorMessage }, { status: 500 });
//   }
// };


import connectToDatabase from "@/database/db";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import qs from "querystring";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined");

    await connectToDatabase();

    const contentType = req.headers.get("content-type");
    let data;
    if (contentType?.includes("application/json")) {
      data = await req.json();
    } else if (contentType?.includes("application/x-www-form-urlencoded")) {
      const text = await req.text();
      data = qs.parse(text);
    } else {
      return new Response("Unsupported content type", { status: 400 });
    }

    const { email, password } = data;
    if (!email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const validPassword = await bcrypt.compare(password.toString(), user.password);
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
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};

// Note: This code is for a Next.js API route that handles user login.
// It connects to a MongoDB database, verifies user credentials, and returns a JWT token upon successful login.
