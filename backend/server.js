import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import { connectDB } from "./db/connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
