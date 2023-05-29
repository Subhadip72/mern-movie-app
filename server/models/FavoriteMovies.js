const { Schema, model, default: mongoose } = require("mongoose");

const FavoriteMovieSchema = new Schema(
  {
    movieName: String,
    tvSeriesName: String,
    movieRating: Number,
    movieId: Number,
    movieImg: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: ["please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = model("Favourites", FavoriteMovieSchema);
