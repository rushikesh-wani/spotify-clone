import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";

const DIsplayAlbum = () => {
  const { id } = useParams();
  console.log(id);
  const albumData = albumsData[id];
  console.log(albumData);

  const { playWithID } = useContext(PlayerContext);
  return (
    <>
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded-xl"
          src={albumData.image}
          alt="album-img"
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-5" src={assets.spotify_logo} />
            <b className="ml-2">Spotify</b> • 11.2k likes • <b>50 Songs</b> •
            <span className=""> About 2hr 30 min</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className=" m-auto w-4" src={assets.clock_icon} />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithID(item.id)}
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white truncate">
            <b className="mr-2 sm:mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img
              className="hidden sm:inline rounded-lg w-10 mr-5 text-center"
              src={item.image}
            />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 Days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DIsplayAlbum;
