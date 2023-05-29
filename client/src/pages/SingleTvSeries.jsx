import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import {
  useGetTvSeriesDetailsQuery,
  useGetTvSeriesCreditsQuery,
  useGetTvSeriesVideosQuery,
  useGetTvSeriesImagesQuery,
} from "../features/services";
import { imgUrl } from "../utils/constants";
import {
  Backdrops,
  Casts,
  Videos,
  Posters,
  Reviews,
  Recommendations,
} from "../components";
import {
  addToFavorites,
  deleteMovie,
  getAllMovies,
} from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleMovie = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const { data: tvSeriesDetails, isLoading } = useGetTvSeriesDetailsQuery(id);

  const { data: tvVideos } = useGetTvSeriesVideosQuery(id);

  const { data: tvCredits } = useGetTvSeriesCreditsQuery(id);

  const { data: tvImg } = useGetTvSeriesImagesQuery(id);

  const { favMovies } = useSelector((store) => store.movies);

  const favorite = favMovies?.movies?.find(
    (item) => item.tvSeriesName === tvSeriesDetails?.original_name
  );

  const btnClassName =
    favorite || isFavorite ? "text-2xl text-pink-600 duration-300" : "text-2xl";

  const handleClick = () => {
    videoRef.current.scrollIntoView({ behaviour: "smooth" });
  };

  useEffect(() => {
    dispatch(getAllMovies());
  }, [isFavorite]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(favorite?.tvSeriesName);
  return (
    <main>
      {isLoading && (
        <section className=" w-full min-h-screen flex justify-center items-center">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      )}
      <section className="relative -z-10 w-full lg:hidden">
        {tvSeriesDetails?.backdrop_path && (
          <img
            src={`${imgUrl}${tvSeriesDetails?.backdrop_path}`}
            alt="movie-picture"
            className="opacity-40 w-full h-[60%] object-contain"
          />
        )}
      </section>
      <article
        className={
          tvSeriesDetails?.backdrop_path
            ? "-mt-[10rem] w-[90vw] mx-auto z-50 lg:mt-0 lg:flex gap-10 lg:w-[1200px] lg:min-h-screen items-center"
            : "mt-[3rem] w-[90vw] mx-auto z-50 lg:mt-0 lg:flex gap-10 lg:w-[1200px] lg:min-h-screen items-center"
        }
      >
        <img
          src={`${imgUrl}${tvSeriesDetails?.poster_path}`}
          alt="movie-poster"
          className="w-[75%] h-[380px] mx-auto mb-10 lg:mb-0 lg:w-500px lg:h-[550px] object-contain"
        />
        <div className="flex flex-col gap-12">
          <h1 className="text-white text-3xl font-bold lg:text-4xl">
            {tvSeriesDetails?.original_name}
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-white">{tvSeriesDetails?.vote_average}</p>
            {tvSeriesDetails?.genres?.slice(0, 2).map((genre) => {
              const { id, name } = genre;
              return (
                <p key={id} className="text-white bg-red-600 p-2 rounded-3xl">
                  {name}
                </p>
              );
            })}
          </div>
          <p className="text-white lg:text-xl">{tvSeriesDetails?.overview}</p>
          <div className="text-white flex gap-10 items-center">
            <button
              type="button"
              className={btnClassName}
              onClick={() => {
                if (favorite?.tvSeriesName === tvSeriesDetails?.original_name) {
                  dispatch(deleteMovie(favorite?._id));
                  setIsFavorite(false);
                } else {
                  dispatch(
                    addToFavorites({
                      tvSeriesName: tvSeriesDetails?.original_name,
                      movieRating: tvSeriesDetails?.vote_average,
                      movieId: tvSeriesDetails?.id,
                      movieImg: tvSeriesDetails?.poster_path,
                    })
                  );
                  setIsFavorite(!isFavorite);
                }
              }}
            >
              <AiFillHeart />
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 uppercase bg-red-600 px-3 py-2 rounded"
              onClick={handleClick}
            >
              <BsFillPlayFill />
              watch now
            </button>
          </div>
        </div>
      </article>
      <Casts data={tvCredits} />
      <section ref={videoRef}>
        <Videos data={tvVideos} />
      </section>
      <Backdrops tvImg={tvImg} />
      <Posters data={tvImg} />
      <Reviews tvSeriesDetails={tvSeriesDetails && tvSeriesDetails} />
      <Recommendations tvId={id} />
    </main>
  );
};

export default SingleMovie;
