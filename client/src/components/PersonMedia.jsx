import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../utils/constants";
import altImg from "../assets/alt-img.jpg";

const PersonMedia = ({ data }) => {
  return (
    <section className="mx-5 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:w-[90vw] lg:w-[85vw] md:mx-auto lg:mx-auto xl:grid-cols-5 my-12">
      {data?.cast?.map((film) => {
        const {
          id,
          original_title,
          poster_path,
          vote_average,
          title,
          release_date,
        } = film;
        return (
          <Link to={`/movies/${id}`} key={id} className="relative">
            <img
              src={poster_path ? `${imgUrl}${poster_path}` : altImg}
              alt="poster"
            />
            <div className="absolute bottom-0 bg-black opacity-80 w-full h-[5rem] flex flex-col overflow-hidden">
              <p className="text-white">{vote_average}</p>
              <p className="text-white">{release_date.slice(0, 4)}</p>
              <p className="text-white">
                {original_title.length > 30
                  ? original_title.slice(0, 15)
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

export default PersonMedia;
