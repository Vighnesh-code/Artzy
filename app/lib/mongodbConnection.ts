import mongoose from "mongoose";

const MONGODB_URI: string | undefined = process.env.MONGO_URI!;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "Artzy",
    });
    console.log("Connected to MongoDB Successfully!");
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};

export default connectMongoDB;
