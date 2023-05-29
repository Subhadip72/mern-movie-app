import React from "react";
import { Link } from "react-router-dom";
import { imgUrl } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import altImg from "../assets/alt-img.jpg";

const Cast = ({ data }) => {
  return (
    <section className="w-[90vw] mx-auto my-8">
      <h1 className="text-white font-bold text-2xl mb-5">CAST</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {data?.cast?.map((actor) => {
          const { id, name, profile_path } = actor;
          return (
            <SwiperSlide key={id}>
              <Link to={`/cast/${id}`} className="relative">
                <img
                  src={profile_path ? `${imgUrl}${profile_path}` : altImg}
                  alt="actor-img"
                  className="h-[300px] lg:w-[300px] lg:h-[400px] object-cover"
                />
                <div className="absolute bottom-0 bg-black opacity-80 w-full h-12 flex justify-center items-center">
                  <p className="text-white font-bold md:text-xl">{name}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Cast;
