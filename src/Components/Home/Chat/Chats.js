import React from "react";
import SingleChat from "./SingleChat";

const Chats = () => {
  const data = [
    {
      id: 1,
      name: "Link On Pilar",
      title: "Have your link on my Pillar page. I have 15k+ visits",
      price: "$500",
    },
    {
      id: 2,
      name: "Follow Back",
      title: "I'll follow you back on ig",
      price: "$222",
    },
  ];
  return <div>
    {
        data.map(dt=><SingleChat dt={dt} key={dt?.id}/>)
    }
  </div>;
};

export default Chats;
