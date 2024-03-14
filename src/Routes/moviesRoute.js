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

router.post("/", authentication, createMovie);

router.put("/:id", authentication, updateMovie);

router.delete("/:id", authentication, deleteMovie);

router.get("/:id", authentication, getMovieByID);

router.get("/", authentication, getAllMovies);

module.exports = router;
