import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    mobileNumber: String,
    email: String,
    tableNumber: Number,

    ratings: {
      food: { type: Number, min: 0, max: 5 },
      service: { type: Number, min: 0, max: 5 },
      ambience: { type: Number, min: 0, max: 5 },
      cleanliness: { type: Number, min: 0, max: 5 },
      overall: { type: Number, min: 0, max: 5 },
    },

    feedback: String,

    recommend: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);