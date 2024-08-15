// main-file
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import { connectDB } from "./db/connection.js";

import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //middleware for parsing req.body the form data coming from the react application

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
