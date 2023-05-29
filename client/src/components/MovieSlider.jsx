import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { useGetGenresQuery } from "../features/services";
import { Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import { imgUrl } from "../utils/constants";

const MovieSlider = ({ data }) => {
  const { data: genreData, isError } = useGetGenresQuery();

  return (
    <section className="w-full h-[85vh] md:h-[100vh] md:bg-black">
      <Swiper
        className="w-full h-full"
        autoplay={{
          delay: 4000,
        }}
        modules={[Autoplay]}
      >
        {data?.results?.map((movie) => {
          const {
            id,
            poster_path,
            original_title,
            original_name,
            overview,
            vote_average,
            genre_ids,
          } = movie;
          return (
            <SwiperSlide key={id}>
              <article className="relative md:hidden">
                <img
                  src={`${imgUrl}${poster_path}`}
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute h-full w-full top-0 mt-[100px] text-white font-bold capitalize px-6">
                  <h1 className="text-4xl mb-6">
                    {original_title || original_name}
                  </h1>
                  <p className="text-base text-white mb-3">
                    Rating: <span>{vote_average}</span>
                  </p>
                  <div className="flex gap-2 my-3">
                    {genre_ids.slice(0, 2).map((genreId, index) => {
                      const genre = genreData?.genres?.find(
                        (item) => item.id === genreId
                      );
                      return (
                        <p
                          key={index}
                          className="text-xl text-white bg-red-600 rounded-3xl p-2"
                        >
                          {genre?.name}
                        </p>
                      );
                    })}
                  </div>
                  <p className="text-white capitalize text-xl">
                    {overview.length > 50 ? overview.slice(0, 80) : overview}...
                  </p>
                  <div className="mt-8">
                    <Link
                      to={original_name ? `/tvSeries/${id}` : `/movies/${id}`}
                      className="text-white text-xl bg-red-600 px-4 py-1 rounded-md flex gap-2 items-center w-[200px]"
                    >
                      <BsFillPlayFill />
                      WATCH NOW
                    </Link>
                  </div>
                </div>
              </article>
              <article className="hidden md:flex items-center justify-center gap-5 xl:max-w-[1200px] mx-auto h-full md:max-w-[90vw]">
                <div>
                  <h1 className="text-[50px] font-bold text-white mb-6">
                    {original_title || original_name}
                  </h1>
                  <p className="text-base text-white mb-3">
                    Rating: <span>{vote_average}</span>
                  </p>
                  <div className="flex gap-2 my-3">
                    {genre_ids.slice(0, 2).map((genreId, index) => {
                      const genre = genreData?.genres?.find(
                        (item) => item.id === genreId
                      );
                      return (
                        <p
                          key={index}
                          className="text-xl text-white bg-red-600 rounded-3xl p-2"
                        >
                          {genre?.name}
                        </p>
                      );
                    })}
                  </div>
                  <p className="text-white capitalize text-xl">{overview}</p>
                  <div className="mt-8">
                    <Link
                      to={original_name ? `/tvSeries/${id}` : `/movies/${id}`}
                      className="text-white text-xl bg-red-600 px-4 py-1 rounded-md flex gap-2 items-center w-[200px]"
                    >
                      <BsFillPlayFill />
                      WATCH NOW
                    </Link>
                  </div>
                </div>
                <img
                  src={`${imgUrl}${poster_path}`}
                  alt=""
                  className="w-[500px] h-[600px] object-cover"
                />
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MovieSlider;
