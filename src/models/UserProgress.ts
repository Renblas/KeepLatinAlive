import mongoose from 'mongoose';

const UserProgressSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // Clerk user ID
  completedLessons: [{ type: String }], // array of lesson slugs
  quizScores: [
    {
      lessonSlug: String,
      score: Number,
      total: Number,
      date: { type: Date, default: Date.now },
    },
  ],
  lastVisitedLesson: String, // slug of last lesson they were on
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.UserProgress || 
  mongoose.model('UserProgress', UserProgressSchema);