import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 h-[5rem] flex items-center">
      <div className="w-[90vw] mx-auto flex justify-between items-center lg:flex-col gap-1">
        <h1 className="text-white font-bold text-2xl">
          MOVIE<span className="text-red-600">FLIX</span>
        </h1>
        <p className="text-white text-sm">&copy; all rights reserved @2023</p>
      </div>
    </footer>
  );
};

export default Footer;
