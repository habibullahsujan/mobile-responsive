import React, { useState } from 'react';
import { FaArrowAltCircleDown, FaYoutube } from 'react-icons/fa';

const YoutubeComponent = ({dt}) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="border-2 border-white rounded-lg p-1 my-5">
        <div className="flex justify-between items-center my-4">
          <FaYoutube />
          <span>{dt?.name}</span>
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
            src={`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=${dt?.link}&list=PLM2ccN457sxRuVSqTHINmtkkwiJq1txwW&index=6`}
          ></iframe>
        )}
      </div>
    );
};

export default YoutubeComponent;