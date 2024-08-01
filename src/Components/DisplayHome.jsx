import React from "react";
import AlbumItem from "./AlbumItem";
import { albumsData, assets, songsData } from "../assets/assets";
import SongItem from "./SongItem";
import { artists } from "../assets/Artist";
import ViewArtists from "./ViewArtists";
import { useNavigate } from "react-router-dom";
const DisplayHome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h1 className="my-5 font-bold text-2xl">Top artists</h1>
          <div onClick={() => navigate(`/viewArtists`)}>
            <img
              className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
              src={assets.arrow_icon}
              alt=""
            />
          </div>
        </div>

        <div className="flex overflow-auto">
          {artists.map((item, index) => (
            <ViewArtists
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {" "}
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits!</h1>
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-6 place-items-center">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Only for you!</h1>
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-6 place-items-center">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
