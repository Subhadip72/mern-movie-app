import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { imgUrl } from "../utils/constants";

const Backdrops = ({ movieImg, tvImg }) => {
  return (
    <section className="w-[90vw] mx-auto my-12 lg:w-[1170px]">
      <h1 className="text-white text-3xl font-bold mb-5">BACKDROPS</h1>
      <Swiper pagination={true} modules={[Pagination]}>
        {tvImg
          ? tvImg?.backdrops?.slice(0, 10).map((img, index) => {
              const { file_path } = img;
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`${imgUrl}${file_path}`}
                    alt="backdrop"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              );
            })
          : movieImg?.backdrops?.slice(0, 10).map((img, index) => {
              const { file_path } = img;
              return (
                <SwiperSlide key={index}>
                  <img
                    src={`${imgUrl}${file_path}`}
                    alt="backdrop"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </section>
  );
};

export default Backdrops;
