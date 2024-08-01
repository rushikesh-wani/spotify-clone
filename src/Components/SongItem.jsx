import React, { useContext } from "react";
import { PlayerContext } from "../Context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithID } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithID(id)}
      className="p-2 px-3 rounded-xl cursor-pointer hover:bg-[#ffffff1a]"
    >
      <img
        className="rounded-xl"
        loading="lazy"
        decoding="async"
        src={image}
        alt="img"
      />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
