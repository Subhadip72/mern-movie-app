const express = require("express");
const {
  createMovie,
  getFavMovies,
  deleteMovie,
} = require("../controllers/movieRoutes");

const router = express.Router();

router.get("/getMovies", getFavMovies);

router.post("/addToFav", createMovie);

router.delete("/deleteMovie/:id", deleteMovie);

module.exports = router;
