import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);

export default mongoose.model("Message", messageSchema);
