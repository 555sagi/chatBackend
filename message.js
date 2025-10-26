import express from "express";
import connectDB from "./Connection.js";
import messageRoute from "./routes/MessageRoute.js"
import cors from "cors";
const app = express();
app.use(express.json());

app.use(cors({
  origin: "*",  // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.listen(3000, async () => {
  await connectDB();
  app.use("/api",messageRoute)
  console.log("🚀 Server started at port 3000");
});
