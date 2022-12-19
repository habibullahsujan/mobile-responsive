import React, { useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa";
import Modal from "../Modal/Modal";

const SingleChat = ({ dt }) => {
  const [modal, setModal]=useState(false)
  return (
    <>
      <div className="border-2 border-white rounded-lg my-5 p-3 flex justify-between items-center">
        <FaEnvelopeOpen className="h-8 w-8" />
        <div>
          <h3 className="block">{dt?.name}</h3>
          <small className="block text-xs">{dt?.title}</small>
          <small className="block text-xs">{dt?.price}</small>
        </div>
        <button onClick={()=>setModal(!modal)} className="bg-white font-semibold px-4 py-1 text-black rounded-lg">
          Request Me
        </button>
      </div>
      {
        modal && <Modal/>
      }
    </>
  );
};

export default SingleChat;
