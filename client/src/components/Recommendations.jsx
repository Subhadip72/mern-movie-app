import React from "react";
import {
  useGetSimilarMoviesQuery,
  useGetSimilarTvSeriesQuery,
} from "../features/services";
import { Link } from "react-router-dom";
import { imgUrl } from "../utils/constants";
import altImg from "../assets/alt-img.jpg";

const Recommendations = ({ movieId, tvId }) => {
  const { data: similarFilms } = useGetSimilarMoviesQuery(movieId);
  const { data: similarSeries } = useGetSimilarTvSeriesQuery(tvId);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main className="my-12 w-[90vw] mx-auto">
      <h1 className="text-white text-2xl font-bold mb-8">YOU MAY ALSO LIKE</h1>
      <section className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:w-[80vw] lg:mx-auto lg:grid-cols-5">
        {similarFilms &&
          similarFilms?.results?.map((movie) => {
            const {
              id,
              poster_path,
              original_title,
              release_date,
              vote_average,
            } = movie;
            return (
              <Link
                to={`/movies/${id}`}
                key={id}
                className="relative"
                onClick={handleClick}
              >
                <img
                  src={poster_path ? `${imgUrl}${poster_path}` : altImg}
                  alt="movie-img"
                />
                <div className="absolute bottom-0 bg-black opacity-80 w-full h-[5rem] flex flex-col">
                  <p className="text-white">{vote_average}</p>
                  <p className="text-white">{release_date || null}</p>
                  <p className="text-white">
                    {original_title?.length > 20
                      ? original_title?.slice(0, 20)
                      : original_title}
                    ...
                  </p>
                </div>
              </Link>
            );
          })}
        {similarSeries &&
          similarSeries?.results?.map((series) => {
            const {
              id,
              poster_path,
              original_name,
              first_air_date,
              vote_average,
            } = series;
            return (
              <Link
                to={`/tvSeries/${id}`}
                key={id}
                className="relative"
                onClick={handleClick}
              >
                <img
                  src={poster_path ? `${imgUrl}${poster_path}` : altImg}
                  alt="movie-img"
                />
                <div className="absolute bottom-0 bg-black opacity-80 w-full h-[5rem] flex flex-col">
                  <p className="text-white">{vote_average}</p>
                  <p className="text-white">{first_air_date || null}</p>
                  <p className="text-white">
                    {original_name?.length > 20
                      ? original_name?.slice(0, 20)
                      : original_name}
                    ...
                  </p>
                </div>
              </Link>
            );
          })}
      </section>
    </main>
  );
};

export default Recommendations;
