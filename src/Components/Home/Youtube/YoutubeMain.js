import React from "react";
import YoutubeComponent from "./YoutubeComponent";

const YoutubeMain = () => {
  const data = [
    {
      id: 1,
      name: "Workout Vlog #2",
      link: "https://www.youtube.com/watch?v=kFpk7Ho7QEw",
    },
    {
      id: 2,
      name: "Youtube",
      link: "https://www.youtube.com/watch?v=kQPBfyHxK1k",
    },
  ];
  return <div>
  {
    data.map(dt=><YoutubeComponent dt={dt}/>)
  }
  </div>;
};

export default YoutubeMain;
