import React, { useState } from "react";
import { MovieSlider, TvSerieses } from "../components";
import {
  useGetPopularTvSeriesQuery,
  useGetTopRatedTvSeriesQuery,
  useGetTrendingTvSeriesQuery,
} from "../features/services";

const Movies = () => {
  const [popular, setPopular] = useState(true);
  const [category, setCategory] = useState("popular");
  const { data: trendingTvSeries } = useGetTrendingTvSeriesQuery();
  const { data: popularTvSeries } = useGetPopularTvSeriesQuery();
  const { data: topRatedTvSeries } = useGetTopRatedTvSeriesQuery();

  const handleClick = (e) => {
    e.preventDefault();
    setPopular(!popular);
    setCategory((oldCategory) => {
      let newCategory = `${oldCategory === "popular" ? "topRated" : "popular"}`;
      return newCategory;
    });
  };

  const newClassName = (type) => {
    if (type === category) {
      let className = "bg-red-600 p-2 rounded-sm duration-300";
      return className;
    }
  };

  return (
    <main>
      <MovieSlider data={trendingTvSeries} />
      <div className="text-white flex gap-6 justify-center my-5 items-center lg:w-[80vw] lg:mx-auto lg:justify-end mb-8">
        <button
          type="button"
          onClick={handleClick}
          className={newClassName("popular")}
        >
          POPULAR
        </button>
        <button
          type="button"
          onClick={handleClick}
          className={newClassName("topRated")}
        >
          TOP RATED
        </button>
      </div>
      {popular ? (
        <TvSerieses data={popularTvSeries} />
      ) : (
        <TvSerieses data={topRatedTvSeries} />
      )}
    </main>
  );
};

export default Movies;
