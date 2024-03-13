const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
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
