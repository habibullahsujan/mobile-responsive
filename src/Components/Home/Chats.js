import React from "react";
import Chat from "./Chat";

const Chats = () => {
  const data = [
    { id: 1, name: "Critique your running form 🏃", price: "$10", title: "" },
    {
      id: 2,
      name: "Link On Pillar",
      price: "$500",
      title: "Have your link on my Pillar page. I have 15k+ visits",
    },
    {
      id: 3,
      name: "Follow Back",
      price: "$222",
      title: "I'll follow you back on ig",
    },
   
  ];
  return <div>
    {
        data.map(dt=><Chat dt={dt}/>)
    }
  </div>;
};

export default Chats;
