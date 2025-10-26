// routes/messageRoutes.js
import express from "express";
import { saveMessage,getLastMessages } from "../controleres/MessageController.js";

const router = express.Router();

// POST /api/message
router.post("/message", saveMessage);
router.get("/getMessage", getLastMessages);
export default router;
