import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  lessons: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
});

const user_courses = mongoose.model("Courses", coursesSchema);

export default user_courses;
