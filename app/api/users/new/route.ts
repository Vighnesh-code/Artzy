import connectMongoDB from "@/app/lib/mongodbConnection";
import { User } from "@/models/UserModel";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const { username, email, password } = await request.json();
    await connectMongoDB();
    await User.create({ username, email, password });
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create a User" },
      { status: 500 }
    );
  }
};
