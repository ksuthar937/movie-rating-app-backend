const express = require("express");

const router = express.Router();

const authentication = require("../Middlewares/authentication");

const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieByID,
  getAllMovies,
} = require("../Controllers/moviesController");

//add a new movie
router.post("/", authentication, createMovie);

//update an existing movie's details by its ID
router.put("/:id", authentication, updateMovie);

//delete a movie by its ID
router.delete("/:id", authentication, deleteMovie);

//get details of a specific movie
router.get("/:id", authentication, getMovieByID);

//get all movies
router.get("/", authentication, getAllMovies);

module.exports = router;
