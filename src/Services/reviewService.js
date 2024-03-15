const reviewsModel = require("../Models/reviewsModel");
const movieService = require("./movieService");

const createReview = async (userId, movieId, rating, text) => {
  try {
    const movie = await movieService.getMovieByID(movieId);
    if (!movie) {
      return;
    }

    const movieReview = await reviewsModel.create({
      user: userId,
      movie: movieId,
      rating: rating,
      text: text,
    });
    return movieReview;
  } catch (error) {
    throw error;
  }
};

const updateReview = async (userId, movieId, reviewId, rating, text) => {
  try {
    const movie = await movieService.getMovieByID(movieId);
    if (!movie) {
      return;
    }

    const findReview = await reviewsModel.findById(reviewId);

    if (!findReview) {
      throw new Error("Review doesn't exist!");
    }

    const movieReview = await reviewsModel.findOneAndUpdate(
      { _id: reviewId, movie: movieId, user: userId },
      { $set: { rating, text } },
      { new: true }
    );
    return movieReview;
  } catch (error) {
    throw error;
  }
};

const deleteReview = async (userId, movieId, reviewId) => {
  try {
    const movie = await movieService.getMovieByID(movieId);
    if (!movie) {
      return;
    }

    const findReview = await reviewsModel.findById(reviewId);

    if (!findReview) {
      throw new Error("Review doesn't exist!");
    }

    const movieReview = await reviewsModel.findOneAndDelete({
      _id: reviewId,
      movie: movieId,
      user: userId,
    });
    return movieReview;
  } catch (error) {
    throw error;
  }
};

const getReviewsByMovie = async (movieId) => {
  try {
    const reviews = await reviewsModel.find({ movie: movieId });
    return reviews;
  } catch (error) {
    throw error;
  }
};

const averageRatingByMovie = async (movieId) => {
  try {
    const reviews = await reviewsModel.find({ movie: movieId });

    const totalRating = reviews.reduce((acc, val) => val.rating + acc, 0);

    const averageRating = totalRating / reviews.length;

    return Number(averageRating.toFixed(1));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByMovie,
  averageRatingByMovie,
};
