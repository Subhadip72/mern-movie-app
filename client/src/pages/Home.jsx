import React from "react";
import {
  MovieSlider,
  MovieTypes,
  TrendingMovies,
  TopRatedMovies,
  PopularSeries,
  TopRatedSeries,
} from "../components";
import {
  useGetTrendingMoviesQuery,
  useGetPopularMoviesQuery,
  useGetPopularTvSeriesQuery,
  useGetTopRatedMoviesQuery,
  useGetTopRatedTvSeriesQuery,
} from "../features/services";

const Home = () => {
  const { data: trendingMovies } = useGetTrendingMoviesQuery();
  const { data: popularMovies } = useGetPopularMoviesQuery();
  const { data: tvSeries } = useGetPopularTvSeriesQuery();
  const { data: topRatedMovies } = useGetTopRatedMoviesQuery();
  const { data: topRatedTvSeries } = useGetTopRatedTvSeriesQuery();

  return (
    <main>
      <MovieSlider data={trendingMovies} />
      <TrendingMovies movies={popularMovies} title="MOVIES" />
      <PopularSeries tvSeries={tvSeries} title="SERIES" />
      <TopRatedMovies movies={topRatedMovies} title="TOP RATED MOVIES" />
      <TopRatedSeries tvSeries={topRatedTvSeries} title="TOP RATED SERIES" />
    </main>
  );
};

export default Home;
