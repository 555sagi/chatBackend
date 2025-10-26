// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://sagikumar338_db_user:Ashok338@cluster0.rumdyxz.mongodb.net/myDatabase?retryWrites=true&w=majority";


    await mongoose.connect(uri, {
      
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // stop the server if DB connection fails
  }
};

export default connectDB;

