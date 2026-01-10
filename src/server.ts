import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoute from "./routes/user.routes";

import connectDB from "./config/connectDB";
import cors from "cors"

dotenv.config();

const app = express();
app.use(cors());

/* ===============================
   Global Middleware
================================ */
app.use(express.json());

/* ===============================
   Connect DB
================================ */
connectDB();

/* ===============================
   Test Route
================================ */
app.get("/", (_req, res) => {
  res.send("server running well");
});



/* ===============================
   Routes
================================ */
app.use("/api/auth", authRoutes);
app.use("/api", userRoute);



/* ===============================
   Server Start
================================ */
app.listen(process.env.PORT, () => {
  console.log("server running on", process.env.PORT);
});
