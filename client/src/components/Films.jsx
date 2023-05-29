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
          original_title,
          release_date,
          vote_average,
        } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className="relative">
            <img
              src={`${imgUrl}${poster_path}` || `${imgUrl}${backdrop_path}`}
              alt="movie-img"
            />
            <div className="absolute bottom-0 bg-black opacity-80 w-full h-[5rem] flex flex-col">
              <p className="text-white">{vote_average}</p>
              <p className="text-white">{release_date || null}</p>
              <p className="text-white">
                {original_title.length > 20
                  ? original_title.slice(0, 20)
                  : original_title}
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
