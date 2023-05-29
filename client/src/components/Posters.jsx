import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import { imgUrl } from "../utils/constants";

const Posters = ({ data }) => {
  return (
    <section className="w-[90vw] mx-auto my-8">
      <h1 className="text-white text-3xl font-bold mb-5">POSTERS</h1>
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
          992: {
            slidesPerView: 6,
          },
        }}
      >
        {data?.posters?.slice(0, 20).map((img, index) => {
          const { file_path } = img;
          return (
            <SwiperSlide key={index}>
              <img src={`${imgUrl}${file_path}`} alt="item-poster" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Posters;
