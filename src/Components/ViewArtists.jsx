import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const ViewArtists = ({ id, image, name }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/artist/${id}`)}
      className="relative min-w-[180px] p-2 px-3 rounded-xl cursor-pointer"
    >
      <img
        className="w-36 h-36 rounded-full"
        loading="lazy"
        decoding="async"
        src={image}
        alt="img"
      />
      <p className="font-medium font-montserrat mt-2 mb-1 text-center">
        {name}
      </p>
      <div className="absolute bottom-14 right-7 w-10 h-10 flex justify-center items-center bg-green-600 rounded-full">
        <img className="w-5" src={assets.play_icon} />
      </div>
    </div>
  );
};

export default ViewArtists;
