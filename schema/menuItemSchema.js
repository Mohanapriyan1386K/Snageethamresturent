import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    category: {
      type: [String],
      required: true,
      enum: [
        "starters",
        "soups",
        "breakfast",
        "south_indian",
        "north_indian",
        "rice",
        "biryani",
        "noodles",
        "pasta",
        "snacks",
        "beverages",
        "desserts",
        "meals",
      ],
    },
    isVeg: {
      type: Boolean,
      default: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    isPopular: {
      type: Boolean,
      default: false,
    },

    preparationTime: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Menu", menuItemSchema);
