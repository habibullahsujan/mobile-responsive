import React from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({ card }) => {
  return (
    <div className="flex overflow-hidden border-2 border-white text-white rounded-lg shadow-lg my-4 ">
      <div className="w-1/3 bg-cover">
        <img className="h-full w-full" src={card?.image} alt="" />
      </div>
      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold">{card?.name}</h1>
        <p className="mt-2 text-sm">{card?.title}</p>
        <div className="flex justify-between mt-3 item-center">
          <button className="px-8 py-3 rounded-lg flex items-center gap-2 text-xs font-bold bg-white text-black uppercase transition-colors duration-300 transform focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
            <FaHeart />
            {card?.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
