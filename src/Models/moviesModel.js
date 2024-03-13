const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    director: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
      require: true,
    },
    releaseYear: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },

  {
    timestamps: true,
  }
);

const moviesModel = mongoose.model("Movies", moviesSchema);

module.exports = moviesModel;
