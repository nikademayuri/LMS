import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ["student", "instructor"],
    default: "student",
  },
  points: {
    type: Number,
    default: 0,
  },
  badges: [
    {
      type: String,
    },
  ],
});

const user = mongoose.model("User", userSchema);

export default user;
