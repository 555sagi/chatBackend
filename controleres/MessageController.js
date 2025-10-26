// controllers/messageController.js
import Message from "../models/MessageModel.js";

export const saveMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message content is required" });
    }

    const newMessage = new Message({ message });
    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("❌ Error saving message:", error.message);
    res.status(500).json({ error: "Server error while saving message" });
  }
};

export const getLastMessages = async (req, res) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 }) // newest first
      .limit(10);              // limit to last 10 messages

    // Optional: reverse to show oldest first
    const orderedMessages = messages.reverse();

    res.status(200).json({
      success: true,
      data: orderedMessages,
    });
  } catch (error) {
    console.error("❌ Error fetching messages:", error.message);
    res.status(500).json({ error: "Server error while fetching messages" });
  }
};