import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { imgUrl } from "../utils/constants";
import altImg from "../assets/alt-img.jpg";

const baseUrl = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const TvSearch = () => {
  const [tvName, setTvName] = useState("");
  const [tv, setTv] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getSearchedTv = async (query) => {
    try {
      const resp = await axios(
        `${baseUrl}/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );
      setTv(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchedTv(tvName);
  }, [tvName]);

  return (
    <main className="w-[90vw] mx-auto lg:w-[1400px]">
      <form className="my-4 lg:flex justify-center">
        <input
          type="text"
          name="moviename"
          value={tvName}
          onChange={(e) => setTvName(e.target.value)}
          className="w-full lg:w-[700px] bg-transparent border border-green-900 rounded-md h-12 text-white text-base px-4 capitalize"
        />
      </form>
      <section className="grid grid-cols-2 gap-2 lg:grid-cols-4 my-10">
        {tv?.results?.map((item) => {
          const {
            id,
            original_name,
            poster_path,
            vote_average,
            first_air_date,
          } = item;
          return (
            <Link to={`/tvSeries/${id}`} key={id} className="relative">
              <img
                src={poster_path ? `${imgUrl}${poster_path}` : altImg}
                alt="movie-img"
              />
              <div className="text-white absolute bottom-0 w-full bg-black opacity-80">
                <p>{vote_average}</p>
                <p>{first_air_date.slice(0, 4)}</p>
                <p>
                  {original_name.length > 15
                    ? original_name.slice(0, 15)
                    : original_name}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default TvSearch;
