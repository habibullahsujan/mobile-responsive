import React, { useState } from "react";
import { FaArrowAltCircleDown, FaYoutube } from "react-icons/fa";

const YoutubeIframe = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-2 border-white rounded-lg p-1">
      <div className="flex justify-between items-center my-4">
        <FaYoutube />
        <span>Working Blog With Batman</span>
        <button onClick={()=>setOpen(!open)}>
          <FaArrowAltCircleDown />
        </button>
      </div>
      {open && (
        <iframe
          id="ytplayer"
          type="text/html"
          className="h-80 w-full"
          title="ok"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=https://www.youtube.com/watch?v=wSfOEW-JJsI&list=PLM2ccN457sxRuVSqTHINmtkkwiJq1txwW&index=6"
        ></iframe>
      )}
    </div>
  );
};

export default YoutubeIframe;
