import React, { useState } from "react";
import { FaArrowAltCircleDown, FaMusic, FaSpotify } from "react-icons/fa";
import YoutubeIframe from "./YoutubeIframe";

const Music = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <h3 className="text-center font-semibold text-lg my-5">Music</h3>
      <div className="border-2 border-white rounded-lg p-1 pb-20">
        <div className="flex justify-between items-center my-4">
          <FaSpotify />
          <span>Working Blog With Batman</span>
          <button onClick={() => setOpen(!open)}>
            <FaArrowAltCircleDown />
          </button>
        </div>
        {open && (
          <div>
            <iframe
            className="w-full h-48"
              title="song-play"
           
              src="https://open.spotify.com/embed/playlist/5a2OuIJ1kEttA8X3PaewlI?utm_source=oembed"
              allowfullscreen
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
            ></iframe>
          </div>
        )}
      </div>
      <div className="border-2 border-white rounded-lg p-1 my-5 text-center flex items-center gap-52">
        <FaMusic/>
        <div>
        <h2 className="text-lg">Stream My Song</h2>
        <span className="text-sm">Available everywhere</span>
        </div>
      </div>
      <YoutubeIframe/>
    </>
  );
};

export default Music;
