import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
  },
  pointsReward: {
    type: Number,
    default: 10,
  },
});

const published_lessons = mongoose.model("Lesson", lessonSchema);

export default published_lessons;
