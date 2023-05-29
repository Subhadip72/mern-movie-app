import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_KEY;
const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () => `/movie/popular?api_key=${api_key}&language=en-US&page=1`,
    }),
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${api_key}&language=en-US`,
    }),
    getTrendingMovies: builder.query({
      query: () => `/trending/all/day?api_key=${api_key}`,
    }),
    getTrendingTvSeries: builder.query({
      query: () => `/trending/tv/day?language=en-US`,
    }),
    getPopularTvSeries: builder.query({
      query: () => `/tv/popular?api_key=${api_key}&language=en-US&page=1`,
    }),
    getTopRatedMovies: builder.query({
      query: () => `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    }),
    getTopRatedTvSeries: builder.query({
      query: () => `/tv/top_rated?api_key=${api_key}&language=en-US&page=1`,
    }),
    getMovieDetails: builder.query({
      query: (id) => `/movie/${id}?api_key=${api_key}&language=en-US`,
    }),
    getTvSeriesDetails: builder.query({
      query: (id) => `/tv/${id}?api_key=${api_key}&language=en-US`,
    }),
    getMovieVideos: builder.query({
      query: (id) => `/movie/${id}/videos?api_key=${api_key}&language=en-US`,
    }),
    getTvSeriesVideos: builder.query({
      query: (id) => `/tv/${id}/videos?api_key=${api_key}&language=en-US`,
    }),
    getMovieCredits: builder.query({
      query: (id) => `/movie/${id}/credits?api_key=${api_key}&language=en-US`,
    }),
    getTvSeriesCredits: builder.query({
      query: (id) => `/tv/${id}/credits?api_key=${api_key}&language=en-US`,
    }),
    getMovieImages: builder.query({
      query: (id) => `/movie/${id}/images?api_key=${api_key}`,
    }),
    getTvSeriesImages: builder.query({
      query: (id) => `/tv/${id}/images?api_key=${api_key}`,
    }),
    getCastDetails: builder.query({
      query: (id) => `/person/${id}?language=en-US`,
    }),
    getPersonMedia: builder.query({
      query: (id) => `/person/${id}/movie_credits?language=en-US`,
    }),
    getSimilarMovies: builder.query({
      query: (id) => `/movie/${id}/recommendations?language=en-US&page=1`,
    }),
    getSimilarTvSeries: builder.query({
      query: (id) => `/tv/${id}/recommendations?language=en-US&page=1`,
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetGenresQuery,
  useGetTrendingMoviesQuery,
  useGetTrendingTvSeriesQuery,
  useGetPopularTvSeriesQuery,
  useGetTopRatedMoviesQuery,
  useGetTopRatedTvSeriesQuery,
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
  useGetTvSeriesVideosQuery,
  useGetMovieCreditsQuery,
  useGetTvSeriesDetailsQuery,
  useGetTvSeriesCreditsQuery,
  useGetMovieImagesQuery,
  useGetTvSeriesImagesQuery,
  useGetCastDetailsQuery,
  useGetPersonMediaQuery,
  useGetSimilarMoviesQuery,
  useGetSimilarTvSeriesQuery,
} = tmdbApi;
