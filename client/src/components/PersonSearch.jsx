import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { imgUrl } from "../utils/constants";
import altImg from "../assets/alt-img.jpg";

const baseUrl = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const PersonSearch = () => {
  const [personName, setPersonName] = useState("");
  const [people, setPeople] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getSearchedPerson = async (query) => {
    try {
      const resp = await axios(
        `${baseUrl}/search/person?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );
      setPeople(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchedPerson(personName);
  }, [personName]);

  return (
    <main className="w-[90vw] mx-auto lg:w-[1400px]">
      <form className="my-4 lg:flex justify-center">
        <input
          type="text"
          name="moviename"
          value={personName}
          onChange={(e) => setPersonName(e.target.value)}
          className="w-full lg:w-[700px] bg-transparent border border-green-900 rounded-md h-12 text-white text-base px-4 capitalize"
        />
      </form>
      <section className="grid grid-cols-2 gap-2 lg:grid-cols-4 my-10">
        {people?.results?.map((item) => {
          const { id, original_name, profile_path } = item;
          return (
            <Link to={`/cast/${id}`} key={id} className="relative">
              <img
                src={profile_path ? `${imgUrl}${profile_path}` : altImg}
                alt="person-img"
              />
              <div className="text-white absolute bottom-0 w-full h-10 flex justify-center items-center bg-black opacity-80 font-bold">
                <p>{original_name}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default PersonSearch;
