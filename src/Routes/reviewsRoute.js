const express = require("express");

const authentication = require("../Middlewares/authentication");

const {
  createReview,
  updateReview,
  deleteReview,
  getReviewsByMovie,
  averageRatingByMovie,
} = require("../Controllers/reviewsController");

const router = express.Router();

//authenticated users to post a rating and review for a movie
router.post("/:id/reviews", authentication, createReview);

//users to update their review and rating for a specific movie
router.put("/:movieId/reviews/:reviewId", authentication, updateReview);

//users to delete their own review
router.delete("/:movieId/reviews/:reviewId", authentication, deleteReview);

//get all reviews for a particular movie
router.get("/:movieId/reviews", authentication, getReviewsByMovie);

//calculates and get the average rating for a movie
router.get("/:movieId/averageRating", authentication, averageRatingByMovie);

module.exports = router;
