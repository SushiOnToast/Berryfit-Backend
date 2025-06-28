import express from "express";
import "dotenv/config";
// import authRoutes from './routes/authRoutes.js';
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json());

// routes
// app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.info("Server running on port " + PORT);
  console.info("listening on http://localhost:" + PORT);
  connectDB()
});
