import React from "react";
import { artists } from "../assets/Artist";
import ViewArtists from "./ViewArtists";

const AllArtistPage = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="font-bold text-2xl">All artists</h1>
        <div className="my-5 grid grid-flow-row grid-cols-2 md:grid-cols-6 place-items-center">
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
    </>
  );
};

export default AllArtistPage;
