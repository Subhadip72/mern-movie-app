import React from "react";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const className = `${
    isSidebarOpen
      ? "fixed top-0 left-0 w-[85vw] min-h-screen bg-gray-950 lg:hidden translate-x-0 duration-300 ease-in-out z-50"
      : "fixed top-0 left-0 w-[85vw] min-h-screen bg-gray-950 lg:hidden -translate-x-full z-50"
  }`;

  return (
    <main className={className}>
      <div className="flex justify-between items-center mx-2 my-1">
        <h1 className="text-3xl text-white font-bold">
          Movie<span className="text-red-600">Flix</span>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white font-bold cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <article className="flex flex-col gap-5 mt-8 ml-8">
        <section className="text-white">
          <p className="mb-5 text-2xl">MENU</p>
          <ul className="text-xl list-none ml-6 flex flex-col gap-5">
            <Link
              to="/"
              className="flex gap-5 items-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              HOME
            </Link>
            <Link
              to="/movies"
              className="flex gap-5 items-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              MOVIES
            </Link>
            <Link
              to="/tvseries"
              className="flex gap-5 items-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
              TV SERIES
            </Link>
            <Link
              to="/search"
              className="flex gap-5 items-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              SEARCH
            </Link>
          </ul>
        </section>
        <section className="text-white">
          <p className="mb-5 text-2xl">PERSONAL</p>
          <ul className="text-xl list-none ml-6 flex flex-col gap-5">
            <Link
              to="/favourites"
              className="flex gap-5 items-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              FAVORITES
            </Link>
            <Link
              to="/reviews"
              className="flex gap-5 items-center"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              REVIEWS
            </Link>
          </ul>
        </section>
        <section className="text-white">
          <p className="mb-5 text-2xl">PROFILE</p>
          <Link
            to="/profile"
            className="ml-6 text-xl flex gap-5 items-center"
            onClick={() => dispatch(toggleSidebar())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            YOUR PROFILE
          </Link>
        </section>
      </article>
    </main>
  );
};

export default Sidebar;
