import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import { imgUrl } from "../utils/constants";
import altImg from "../assets/alt-img.jpg";
import { AiFillDelete } from "react-icons/ai";
import { deleteMovie } from "../features/movies/movieSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favMovies } = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [favMovies]);

  return (
    <main className="w-[85vw] mx-auto lg:w-[1200px] min-h-screen">
      <h1 className="text-white font-bold text-2xl my-10">
        YOUR FAVORITES ({favMovies?.movies?.length})
      </h1>
      <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 my-5">
        {favMovies?.movies?.map((movie) => {
          const {
            movieId,
            movieName,
            movieRating,
            movieImg,
            tvSeriesName,
            _id,
          } = movie;
          return (
            <article key={movieId} className="relative">
              <Link
                to={
                  tvSeriesName ? `/tvSeries/${movieId}` : `/movies/${movieId}`
                }
              >
                <img
                  src={movieImg ? `${imgUrl}${movieImg}` : altImg}
                  alt="movie-poster"
                />
              </Link>
              <div className="absolute bottom-0 bg-black opacity-80 w-full px-2 py-1">
                <p className="text-white">{movieRating}</p>
                <div className="flex justify-between items-center">
                  <p className="text-white">
                    {tvSeriesName ? tvSeriesName : movieName}
                  </p>
                  <button
                    type="button"
                    className="bg-red-600 p-1 rounded-sm text-white"
                    onClick={() => dispatch(deleteMovie(_id))}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Favorites;
