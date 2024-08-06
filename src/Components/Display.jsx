import React, { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DIsplayAlbum";
import DisplayArtistDetails from "./DisplayArtistDetails";
import { artists } from "../assets/Artist";
import AllArtistPage from "./AllArtistPage";
import Navbar from "./Navbar";
import SearchPage from "./SearchPage";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  // console.log(isAlbum);
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  // console.log("album id is " + albumId);
  const bgColor = albumsData[Number(albumId)]?.bgColor;

  const isArtistPage = location.pathname.includes("artist");
  const artistId = isArtistPage ? location.pathname.slice(-1) : "";
  const bgColorArtist = artists[Number(artistId)]?.bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else if (isArtistPage) {
      displayRef.current.style.background = `linear-gradient(${bgColorArtist}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-1 sm:m-2 px-2 sm:px-6 lg:pt-0 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/artist/:id" element={<DisplayArtistDetails />} />
        <Route path="/viewArtists" element={<AllArtistPage />} />
      </Routes>
    </div>
  );
};

export default Display;
