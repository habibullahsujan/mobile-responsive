import React from "react";
import {
  FaCentos,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaYoutube,
  FaEnvelopeOpen,
  FaInstagram,
  FaComments,
  FaTwitter,
  FaDiscord,
  FaTiktok,
  FaLinkedinIn,
  FaSpotify,
  FaAppStoreIos,
  FaAngleDoubleUp,
} from "react-icons/fa";
import RacingPeople from "../RacingPeople";
import Business from "./Business";
import Cards from "./Cards";
import Chat from "./Chat";
import Chats from "./Chat/Chats";
import Form from "./Form";
import Modal from "./Modal/Modal";
import Music from "./Music";
import Nfts from "./Nfts";
import Youtube from "./Youtube";
import YoutubeMain from "./Youtube/YoutubeMain";
import YoutubeIframe from "./YoutubeIframe";

const Home = () => {
  return (
    <section className="lg:w-1/2 w-[85%] mx-auto mt-4">
      <div>
        <div className="flex justify-center flex-col items-center">
          <img
            className="w-28 h-28 rounded-full"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=22"
            alt=""
          />
          <h3 className="flex items-center gap-2">
            <span>J Johnson Jr</span>
            <FaCheckCircle className="text-blue-500" />
          </h3>
          <h3 className="flex items-center">
            <span>Created by different elements </span>
            <FaCentos className="text-blue-500" />
            Athlete and CEO
          </h3>
          <span className="flex items-center gap1">
            <FaMapMarkerAlt />
            Raleigh, NC
          </span>
          <div className="flex gap-2 flex-row flex-wrap lg:flex-nowrap my-5">
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaEnvelopeOpen />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaInstagram />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaComments />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaTwitter />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaYoutube />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaDiscord />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaTiktok />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaLinkedinIn />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaSpotify />
            </button>
            <button className="border-2 border-white p-4 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <FaAppStoreIos />
            </button>
          </div>
          <div className="my-5">
            <span className="text-xl font-semibold">Exclusive Content</span>
          </div>
          <div>
            <span>Get Access To All Following Content</span>
          </div>
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Youtube />
      </div>
      <div>
        <YoutubeIframe />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <RacingPeople />
        <Business />
      </div>
      <div>
        <Music />
      </div>
      <div>
        <Nfts />
      </div>
      <div>
        <Chat />
      </div>
      <div>
        <YoutubeMain />
      </div>
      <div>
        <Chats />
      </div>
      <div>
        <Modal />
      </div>
    </section>
  );
};

export default Home;
