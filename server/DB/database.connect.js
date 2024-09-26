import mongoose from "mongoose";
import { MONGODB_URL, DATABASE_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      `${MONGODB_URL}\${DATABASE_NAME}`
    );
    // console.log(`🗄️  Connected to: ${MONGODB_URL}`);
    console.info(`⚙️  MongoDB connected, DB HOST: ${connection.host}`);
  } catch (error) {
    console.error("⚠️  Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectDB;
