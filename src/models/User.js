import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstLogin: { type: Boolean, default: true },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
