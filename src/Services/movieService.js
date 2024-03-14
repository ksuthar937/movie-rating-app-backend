const moviesModel = require("../Models/moviesModel");

const createMovie = async (movieData) => {
  try {
    const movie = await moviesModel.create(movieData);
    return movie;
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (updatedData, movieId) => {
  try {
    const movie = await moviesModel.findOneAndUpdate(
      { _id: movieId },
      { $set: updatedData },
      { new: true }
    );
    return movie;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (movieId) => {
  try {
    const movie = await moviesModel.findByIdAndDelete(movieId);
    return movie;
  } catch (error) {
    throw error;
  }
};

const getMovieByID = async (movieId) => {
  try {
    const movie = await moviesModel.findOne({ _id: movieId });
    if (!movie) {
      throw new Error("Movies doesn't found!");
    }
    return movie;
  } catch (error) {
    throw error;
  }
};

const getAllMovies = async (genre, director, releaseYear) => {
  try {
    const query = {};
    if (genre) query.genre = genre;
    if (director) query.director = director;
    if (releaseYear) query.releaseYear = releaseYear;

    const movies = await moviesModel.find(query);

    if (movies.length === 0) {
      throw new Error("No Movies");
    }

    return movies;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieByID,
  getAllMovies,
};
