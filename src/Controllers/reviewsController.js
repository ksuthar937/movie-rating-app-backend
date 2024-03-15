const reviewService = require("../Services/reviewService");

const createReview = async (req, res) => {
  try {
    const userId = req.user;
    const movieId = req.params.id;
    const { rating, text } = req.body;

    const movieReview = await reviewService.createReview(
      userId,
      movieId,
      rating,
      text
    );

    res.status(201).json({ movieReview });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const userId = req.user;
    const movieId = req.params.movieId;
    const reviewId = req.params.reviewId;

    const { rating, text } = req.body;

    const updatedReview = await reviewService.updateReview(
      userId,
      movieId,
      reviewId,
      rating,
      text
    );

    if (!updatedReview) {
      throw new Error("Unauthorized user!");
    }

    res.status(201).json({ updatedReview });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const userId = req.user;
    const movieId = req.params.movieId;
    const reviewId = req.params.reviewId;

    const review = await reviewService.deleteReview(userId, movieId, reviewId);

    if (!review) {
      throw new Error("Unauthorized user!");
    }

    res.status(204).json({});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getReviewsByMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const reviews = await reviewService.getReviewsByMovie(movieId);

    res.status(200).json({
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const averageRatingByMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const ratings = await reviewService.averageRatingByMovie(movieId);

    res.status(200).json({
      averageRatings: ratings,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByMovie,
  averageRatingByMovie,
};
