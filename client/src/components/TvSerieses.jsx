import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../utils/constants";

const Films = ({ data }) => {
  return (
    <section className="w-[90vw] mx-auto mb-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:w-[80vw] lg:grid-cols-5">
      {data?.results?.map((movie) => {
        const {
          id,
          poster_path,
          backdrop_path,
          original_name,
          first_air_date,
          vote_average,
        } = movie;
        return (
          <Link to={`/tvSeries/${id}`} key={id} className="relative">
            <img
              src={`${imgUrl}${poster_path}` || `${imgUrl}${backdrop_path}`}
              alt="movie-img"
            />
            <div className="absolute bottom-0 bg-black opacity-80 w-full h-[5rem] flex flex-col">
              <p className="text-white">{vote_average}</p>
              <p className="text-white">{first_air_date.slice(0, 4)}</p>
              <p className="text-white">
                {original_name}
                ...
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Films;
