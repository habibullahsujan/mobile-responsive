import React from "react";
import { FaYoutube } from "react-icons/fa";

const Youtube = () => {
  return (
    <div>
      <div className="flex items-center justify-around px-6 border-2 py-3 border-white rounded-lg my-5">
        <FaYoutube className="h-12 w-12" />
        <div>
          <h3 className="text-lg">Speed Training Playlist</h3>
          <h5 className="text-sm">Get faster for any sport with this speed tips.</h5>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
