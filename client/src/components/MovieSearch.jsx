import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { imgUrl } from "../utils/constants";
import altImg from "../assets/alt-img.jpg";

const baseUrl = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const MovieSearch = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getSearchedMovie = async (query) => {
    try {
      const resp = await axios(
        `${baseUrl}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );
      setMovies(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchedMovie(movieName);
  }, [movieName]);

  return (
    <main className="w-[90vw] mx-auto lg:w-[1400px]">
      <form className="my-4 lg:flex justify-center">
        <input
          type="text"
          name="moviename"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          className="w-full lg:w-[700px] bg-transparent border border-green-900 rounded-md h-12 text-white text-base px-4 capitalize"
        />
      </form>
      <section className="grid grid-cols-2 gap-2 lg:grid-cols-4 my-10">
        {movies?.results?.map((item) => {
          const {
            id,
            original_title,
            poster_path,
            vote_average,
            release_date,
          } = item;
          return (
            <Link to={`/movies/${id}`} key={id} className="relative">
              <img
                src={poster_path ? `${imgUrl}${poster_path}` : altImg}
                alt="movie-img"
              />
              <div className="text-white absolute bottom-0 w-full bg-black opacity-80">
                <p>{vote_average}</p>
                <p>{release_date.slice(0, 4)}</p>
                <p>
                  {original_title.length > 15
                    ? original_title.slice(0, 15)
                    : original_title}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default MovieSearch;
