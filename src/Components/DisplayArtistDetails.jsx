import React from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { artists } from "../Constants";

const DisplayArtistDetails = () => {
  const { id } = useParams();
  console.log("artist id is :" + id);
  const details = artists[id];
  return (
    <>
      <div className="my-10 flex gap-3 sm:gap-8 flex-col sm:flex-row md:items-center">
        <div className="mx-auto sm:mx-0 w-56 h-64">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={details.image}
            alt="album-img"
          />
        </div>

        <div className="flex flex-col">
          {/* <p className="text-lg font-medium">Artist</p> */}
          <h2 className="text-5xl mb-3 font-bold text-center sm:text-start md:text-7xl">
            {details.name}
          </h2>
          <h4 className="text-center sm:text-start">{details.tagLine}</h4>
          <p className="mt-1 text-lg text-center sm:text-start">
            <img className="inline-block w-5" src={assets.spotify_logo} />
            <b className="ml-2">Spotify</b> • {details.likes} likes •{" "}
            <b>{details.totalSongs}+ Songs</b>
          </p>

          <div className="mt-4 flex justify-center sm:justify-start flex-wrap gap-2">
            {details.tags.map((tag) => (
              <p className="py-1 px-3 font-semibold rounded-lg bg-[#ffffff1a]">
                #{tag}
              </p>
            ))}
          </div>
          <div className="flex justify-center sm:justify-start gap-2">
            <button className="mt-4 w-fit py-2 px-4 bg-white text-black font-bold rounded-3xl">
              Follow
            </button>
            <button className="mt-4 w-fit py-2 px-4 bg-white text-black font-bold rounded-3xl">
              Like
            </button>
            <button className="mt-4 w-fit py-2 px-4 bg-white text-black font-bold rounded-3xl">
              Share profile
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <b className="">#Title</b>
        <b>Album</b>
        <img className="hidden sm:block m-auto w-4" src={assets.clock_icon} />
      </div>
      <hr />
      {details.songs.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <div className="flex items-center">
            <b className="text-[#a7a7a7] w-10">{index + 1}</b>
            {/* <img
              className="inline rounded-xl w-10 h-10 bg-slate-500 mr-2 text-center"
              src={item.image}
            /> */}
            <p className="text-white">{item.songName}</p>
          </div>

          <p className="text-[15px]">
            {item.movieName == "N/A" ? "--" : item.movieName}
          </p>
          <p className="hidden sm:block text-[15px] text-center">
            {item.duration}
          </p>
        </div>
      ))}
    </>
  );
};

export default DisplayArtistDetails;
