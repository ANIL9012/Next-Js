import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/models/User";
import { verifyToken } from "@/lib/auth";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/authdb",
  );
};

export async function GET(request) {
  try {
    await connectDB();

    const cookieHeader = request.headers.get("cookie");
    const token = cookieHeader
      ?.split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
