import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  useGetCastDetailsQuery,
  useGetPersonMediaQuery,
} from "../features/services";
import { imgUrl } from "../utils/constants";
import { PersonMedia } from "../components";
import altImg from "../assets/alt-img.jpg";

const CastDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCastDetailsQuery(id);
  const { data: personMedias } = useGetPersonMediaQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <section className="my-4 md:my-0 mx-5 md:flex gap-6 md:w-[90vw] md:mx-auto lg:w-[1200px] lg:mx-auto lg:items-center md:min-h-screen">
        <img
          src={`${imgUrl}${data?.profile_path}`}
          alt="person-img"
          className="w-[15rem] h-[300px] object-cover my-3 lg:w-[400px] lg:h-[500px]"
        />
        <article>
          <h2 className="text-white text-2xl capitalize font-bold lg:text-4xl">
            {data?.name}
            <span>
              {" "}
              ({data?.birthday ? data?.birthday?.slice(0, 4) : null})
            </span>
          </h2>
          <p className="text-white my-4 tracking-wider leading-6">
            {data?.biography}
          </p>
        </article>
      </section>
      <h1 className="w-[90vw] mx-auto text-white text-2xl font-bold mb-5">
        MEDIAS
      </h1>
      <PersonMedia data={personMedias} />
    </main>
  );
};

export default CastDetails;
