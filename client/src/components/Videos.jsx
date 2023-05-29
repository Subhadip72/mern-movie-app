import React from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { videoUrl } from "../utils/constants";

const Videos = ({ data, tvVideos }) => {
  return (
    <section className="w-[90vw] mx-auto my-12 lg:w-[1170px]">
      <h1 className="text-white text-2xl font-bold mb-5">VIDEOS</h1>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {tvVideos
          ? tvVideos?.results?.map((video) => {
              const { id, key } = video;
              return (
                <SwiperSlide key={id}>
                  <article className="w-full h-[250px] lg:h-[650px]">
                    <ReactPlayer
                      url={`${videoUrl}${key}`}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </article>
                </SwiperSlide>
              );
            })
          : data?.results?.map((video) => {
              const { id, key } = video;
              return (
                <SwiperSlide key={id}>
                  <article className="w-full h-[250px] lg:h-[650px]">
                    <ReactPlayer
                      url={`${videoUrl}${key}`}
                      controls
                      width="100%"
                      height="100%"
                    />
                  </article>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </section>
  );
};

export default Videos;

// data?.results?.map((video) => {
//   const { id, key } = video;
//   return (
//     <SwiperSlide key={id}>
//       <article className="w-full h-[250px] lg:h-[650px]">
//         <ReactPlayer
//           url={`${videoUrl}${key}`}
//           controls
//           width="100%"
//           height="100%"
//         />
//       </article>
//     </SwiperSlide>
//   );
// });
