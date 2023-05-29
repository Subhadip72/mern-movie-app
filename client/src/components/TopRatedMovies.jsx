import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { Link } from "react-router-dom";
import { imgUrl } from "../utils/constants";

const MovieTypes = ({ movies, title }) => {
  return (
    <section className="w-[95vw] mx-auto mt-10 mb-[100px]">
      <h1 className="text-white text-3xl font-bold ml-3 mb-6 lg:text-center">
        POPULAR {title}
      </h1>
      <Swiper
        slidesPerView={2}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {movies?.results?.map((movie) => {
          const {
            id,
            poster_path,
            backdrop_path,
            original_title,
            original_name,
            overview,
            vote_average,
            genre_ids,
            release_date,
          } = movie;
          return (
            <SwiperSlide key={id}>
              <Link to={`/movies/${id}`} className="relative">
                <img
                  src={`${imgUrl}${poster_path}`}
                  alt="movie-img"
                  className="h-[350px] w-full md:h-[400px] object-cover"
                />
                <div className="absolute top-[75%] left-0 p-2">
                  <div>
                    <p className="text-white ">{vote_average}</p>
                    <p className="text-white ">{release_date}</p>
                    <p className="text-white font-bold ">
                      {original_title || original_name}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default MovieTypes;
