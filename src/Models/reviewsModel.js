const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movies",
    },
    rating: {
      type: Number,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

const reviewsModel = mongoose.model("Reviews", reviewsSchema);

module.exports = reviewsModel;
