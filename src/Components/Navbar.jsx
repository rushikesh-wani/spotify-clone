import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full pt-4 flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <Link
            to={"/search"}
            className="md:hidden px-4 py-1 bg-[#2d2d2d] w-44 text-gray-400 outline-none rounded-3xl"
          >
            Search for song...
          </Link>
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="hidden md:block bg-black text-white text-[15px] px-4 py-1 rounded-2xl cursor-pointer">
            Install App
          </p>
          <p className="bg-purple-600 text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
            R
          </p>
        </div>
      </div>
      <div className="sticky top-0 backdrop-filter backdrop-blur-sm py-3 z-50 flex item-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-[#2d2d2d]/70 px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
        <p className="bg-[#2d2d2d]/70 px-4 py-1 rounded-2xl cursor-pointer">
          Podcast
        </p>
      </div>
    </>
  );
};

export default Navbar;
