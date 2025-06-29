import express from "express";
import authRoutes from "..src//routes/authRoutes.js";
import { connectDB } from "../src/lib/db.js";
import serverless from "serverless-http";

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

export const handler = serverless(app);
