import React from "react";
import { FaHeart } from "react-icons/fa";

const BuyService = () => {
  const service = {
    name: "Weekly Training",
    cardNo: 4,
    title:
      "Get the inside view of what I did for training every week! FULL BREAKDOWN",
    image:
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
    button: "Buy For $4.99",
  };

  return (
    <div>
      <div className="flex overflow-hidden border-2 border-white text-white rounded-lg shadow-lg ">
        <div className="w-2/3 bg-cover">
          <img className="h-full" src={service?.image} alt="" />
        </div>
        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-2xl font-bold">{service?.name}</h1>
          <p className="mt-2 text-sm">{service?.title}</p>
          <div className="flex justify-between mt-3 item-center">
            <button className="px-8 py-3 rounded-lg flex items-center gap-2 text-xs font-bold bg-white text-black uppercase transition-colors duration-300 transform focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              <FaHeart />
              {service?.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyService;
