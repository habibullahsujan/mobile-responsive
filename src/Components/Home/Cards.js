import React from "react";
import BuyService from "./BuyService";
import Card from "./Card";

const Cards = () => {
  const cardInfo = [
    {
      name: "Weekly Training",
      cardNo: 1,
      title:
        "Get the inside view of what I did for training every week! FULL BREAKDOWN",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
        button:'Subscribe To Unlock'
    },
    {
      name: "Weekly Meals",
      cardNo: 2,
      title: "Each week I will document what I eat in an organised fashion",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
        button:'Subscribe To Unlock'
    },
    {
      name: "Daily Quote",
      cardNo: 3,
      title: "A quote that will empower you to achieve your dreams!",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
        button:'Subscribe To Unlock'
    },
  
  ];
  return (
    <div className="grid grid-cols-1 gap-2">
     {
      cardInfo.map(card=> <Card card={card} key={card.cardNo}/>)
     }
     <BuyService/>
    </div>
  );
};

export default Cards;
