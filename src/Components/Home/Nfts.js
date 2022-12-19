import React from "react";
import Card from './Card'

const Nfts = () => {
  const nfts = [
    {
      name: "J Johnson Jr on the moon",
      cardNo: 1,
      title: "Buy a collectible 1 of 1 NFT designed by me!",
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      button: "Buy for $777",
    },
    {
      name: "J Johnson Jr's Dream",
      cardNo: 2,
      title: "Buy a collectible 1 of 1 NFT designed by me!",
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      button: "Buy for $777",
    },
    {
      name: "Nike ZoomX Invincible Run Flyknit",
      cardNo: 3,
      title: "New Nike running Shoes 💨",
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
      button: "Buy for $180",
    },
  ];
  return <div>
    <h3 className="text-center text-bold font-lg my-5">NFT,s</h3>
    {
        nfts.map(nft=><Card card={nft} key={nft.cardNo}/>)
    }
  </div>;
};

export default Nfts;
