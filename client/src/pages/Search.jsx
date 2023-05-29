import React, { useState } from "react";
import { MovieSearch, TvSearch, PersonSearch } from "../components";

const Search = () => {
  const [option, setOption] = useState("movie");

  const newClassName = (type) => {
    if (type === option) {
      let className =
        "bg-red-600 p-2 rounded-sm duration-300 text-white text-base px-3 py-2";
      return className;
    }
  };

  return (
    <main>
      <div className="text-white w-[70vw] mx-auto flex justify-between my-5 lg:w-[400px]">
        <button
          type="button"
          className={newClassName("movie")}
          onClick={() => setOption("movie")}
        >
          MOVIE
        </button>
        <button
          type="button"
          className={newClassName("tv")}
          onClick={() => setOption("tv")}
        >
          TV
        </button>
        <button
          type="button"
          className={newClassName("person")}
          onClick={() => setOption("person")}
        >
          PERSON
        </button>
      </div>
      {option === "movie" && <MovieSearch />}
      {option === "tv" && <TvSearch />}
      {option === "person" && <PersonSearch />}
    </main>
  );
};

export default Search;
