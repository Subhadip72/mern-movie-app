const FavMovie = require("../models/FavoriteMovies");

const getFavMovies = async (req, res) => {
  const movies = await FavMovie.find({ createdBy: req.user.userid });
  res.status(200).json({ movies });
};

const createMovie = async (req, res) => {
  req.body.createdBy = req.user.userid;
  const movie = await FavMovie.create(req.body);
  res.status(200).json({ movie });
};

const deleteMovie = async (req, res) => {
  const {
    user: { userid },
    params: { id: movieId },
  } = req;
  const movie = await FavMovie.findByIdAndRemove({
    _id: movieId,
    createdBy: userid,
  });
  if (!movie) {
    throw new Error(`No movie with id ${movieId} found`);
  }
  res.status(200).send("movie deleted!");
};

module.exports = { createMovie, getFavMovies, deleteMovie };
