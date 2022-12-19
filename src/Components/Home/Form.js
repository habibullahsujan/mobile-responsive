import React from "react";

const Form = () => {
  return (
    <div className="border-2 border-white rounded-lg my-5 p-3">
      <form action="">
        <div className="text-center">
          <span className="block text-lg">Join the squad</span>
          <span className="text-sm">Know when I drop merch & speed vlogs</span>
        </div>
        <div>
          <input
            type="email"
            name="email"
            id=""
            className="border border-gray-500 block w-full rounded-lg py-2 px-2 bg-black"
            placeholder="Email"
          />
          <input
            type="number"
            name="phone"
            id=""
            className="border border-gray-500 block w-full rounded-lg py-2 px-2 bg-black my-3"
            placeholder="Phone #"
          />
          <div className="flex justify-center items-center gap-2">
            <div className="flex gap-2 items-center">
              <input id="" type="radio" className="w-4 h-4 border-gray-300" />
              <label htmlFor="">I'm A Fan</label>
            </div>
            <div className="flex gap-2 items-center">
              <input id="" type="radio" className="w-4 h-4 border-gray-300" />
              <label htmlFor="">I'm A Brand</label>
            </div>
            <div className="flex gap-2 items-center">
              <input id="" type="radio" className="w-4 h-4 border-gray-300" />
              <label htmlFor="">I'm A Creator</label>
            </div>
          </div>
          <div className="flex justify-center my-5">
            <button
              type="submit"
              className="text-center border border-white px-5 py-2 rounded-lg bg-white text-black"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
