const movieService = require("../Services/movieService");

const createMovie = async (req, res) => {
  try {
    const movieData = req.body;

    const movie = await movieService.createMovie(movieData);

    res.status(201).json({
      movie,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const updatedData = req.body;
    const movieId = req.params.id;

    await movieService.getMovieByID(movieId);

    const movie = await movieService.updateMovie(updatedData, movieId);

    res.status(202).json({
      movie,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;

    await movieService.getMovieByID(movieId);

    await movieService.deleteMovie(movieId);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMovieByID = async (req, res) => {
  try {
    const movieId = req.params.id;

    const movie = await movieService.getMovieByID(movieId);

    res.status(200).json({
      movie,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const genre = req.query.genre ? req.query.genre : "";
    const director = req.query.director ? req.query.director : "";
    const releaseYear = req.query.releaseYear ? req.query.releaseYear : "";

    const movies = await movieService.getAllMovies(
      genre,
      director,
      releaseYear
    );
    
    res.status(200).json({
      success: true,
      length: movies.length,
      movies,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieByID,
  getAllMovies,
};
