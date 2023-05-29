import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineRateReview, MdLogout } from "react-icons/md";
import { logoutUser } from "../features/user/userSlice";
import { Sidebar } from "../components";
import { toggleSidebar } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  const [userinfo, setUserinfo] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [pageName, setPageName] = useState("HOME");

  const className =
    "text-white text-xl font-bold bg-red-600 px-2 py-1 rounded-md";

  return (
    <>
      <nav className="py-3 bg-black">
        <header className="flex justify-between items-center w-[90vw] mx-auto md:w-[95vw]">
          <div className="flex gap-6 items-center">
            <button
              className=" lg:hidden cursor-pointer"
              onClick={() => dispatch(toggleSidebar())}
            >
              <GiHamburgerMenu className="w-8 h-8 font-bold text-white" />
            </button>
            <h1 className="text-3xl text-white font-bold">
              Movie<span className="text-red-600">Flix</span>
            </h1>
            <ul className="hidden lg:flex gap-6">
              {navLinks.map((item, index) => {
                const { page, link } = item;
                return (
                  <li key={index}>
                    <Link
                      to={link}
                      className="text-white text-xl font-bold hover:bg-red-600 duration-300 px-2 py-1 rounded-md"
                      onClick={() => setPageName(page)}
                    >
                      {page}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="text-2xl text-white flex gap-1 items-center"
              onClick={() => {
                setUserinfo(!userinfo);
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              <p className="pb-1">{user.firstName}</p>
              {isDropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>
            {userinfo && (
              <div className="absolute right-3 z-50 rounded-sm lg:right-8 bg-gray-700 duration-300 ease-in">
                <article className="flex flex-col gap-4 p-4 text-white">
                  <Link
                    to="/favourites"
                    className="flex gap-4 items-center text-xl"
                    onClick={() => setUserinfo(!userinfo)}
                  >
                    <AiOutlineHeart />
                    <span>FAVORITES</span>
                  </Link>

                  <Link
                    to="/reviews"
                    className="flex gap-4 items-center text-xl"
                    onClick={() => setUserinfo(!userinfo)}
                  >
                    <MdOutlineRateReview />
                    <span>REVIEWS</span>
                  </Link>

                  <Link
                    to="/profile"
                    className="flex gap-4 items-center text-xl"
                    onClick={() => setUserinfo(!userinfo)}
                  >
                    <AiOutlineUser />
                    <span>PROFILE</span>
                  </Link>

                  <button
                    className="flex gap-4 items-center text-xl"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <MdLogout className="text-white" />
                    <span>LOG OUT</span>
                  </button>
                </article>
              </div>
            )}
          </div>
        </header>
      </nav>
      <Sidebar />
    </>
  );
};

export default Navbar;
