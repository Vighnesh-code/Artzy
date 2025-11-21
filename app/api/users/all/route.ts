import connectMongoDB from "@/app/lib/mongodbConnection";
import { User } from "@/models/UserModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectMongoDB();
    const allUsers = await User.find({});
    return NextResponse.json({ allUsers });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to get all the users", error: error.message },
      { status: 500 }
    );
  }
};
