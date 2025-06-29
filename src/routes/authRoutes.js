import express from "express";
import userModel from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { uid, email } = req.body;
  try {
    let user = await userModel.findOne({ uid });
    if (!user) {
      user = await userModel.create({ uid, email });
    }
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;