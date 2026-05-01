import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false, // Don't return password by default
    },
  },
  {
    timestamps: true,
  }
);

// Check if model exists before defining to prevent multiple definitions
const User = models.User || model("User", UserSchema);

export default User;
