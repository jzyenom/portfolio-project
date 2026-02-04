import mongoose, { Connection } from "mongoose";


const connectToDatabase = async (): Promise<Connection> => {
  try {
    const mongoUri: string =
      process.env.NODE_ENV === "production"
        ? process.env.MONGODB_URI_CLOUD || ""
        : process.env.MONGODB_URI_LOCAL ||
          "mongodb://localhost:27017/myportfolio";

    if (!mongoUri) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables."
      );
    }

    const { connection } = await mongoose.connect(mongoUri);

    if (connection.readyState >= 1) {
      console.log("Database Connected");
    }

    return connection;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

export default connectToDatabase;
