import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Chat = () => {
  
  return (
    <>
    <div className="border-2 border-white rounded-lg my-5 p-3 flex justify-between items-center">
      <FaEnvelope className="h-8 w-8" />
      <h3>Critique your running form 🏃</h3>
      <button className="bg-white font-semibold px-4 py-1 text-black rounded-lg">
        Request Me
      </button>
    </div>
    </>

  );
};

export default Chat;
