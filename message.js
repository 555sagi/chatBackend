import express from "express";
import connectDB from "./Connection.js";
import messageRoute from "./routes/MessageRoute.js"
import cors from "cors";

const app = express();

// CORS must come first
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// Connect to database
connectDB();

// Routes must be OUTSIDE app.listen
app.use("/api", messageRoute);

// Only listen in development (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log("🚀 Server started at port 3000");
  });
}

// Export for Vercel
export default app;