import mongoose from "mongoose";

export const connectDb = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log("Database is connected");
  } catch (error) {
    console.log("DB-ERR", error);
  }
};
