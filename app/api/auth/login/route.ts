import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { loginSchema } from "@/utils/validation";
import { comparePassword, generateToken } from "@/utils/auth-helpers";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    // 1. Validate input
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    // 2. Find user and include password for comparison
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 3. Verify password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 4. Generate JWT
    const token = generateToken(user._id.toString());

    // 5. Set cookie (optional but recommended for secure auth)
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: { id: user._id, username: user.username, email: user.email },
        token,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error: any) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
