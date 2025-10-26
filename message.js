import express from "express";
import connectDB from "./Connection.js";
import messageRoute from "./routes/MessageRoute.js"
import cors from "cors";
const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173" // React dev server
}));

app.listen(3000, async () => {
  await connectDB();
  app.use("/api",messageRoute)
  console.log("🚀 Server started at port 3000");
});
