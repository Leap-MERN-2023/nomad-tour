import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";

type Props = {};

const Banner = (props: Props) => {
  const bannerItems = [
    {
      title: "Competitive Prices",
      text: "We will suggest cheapest trips, flights and hotels price in market. You can travel cheap and fun",
      icon: <AiOutlineDollarCircle color="#008EC4" size="50px" />,
    },
    {
      title: "Secure Booking",
      text: "We will suggest cheapest trips, flights and hotels price in market. You can travel cheap and fun",
      icon: <MdOutlineVerifiedUser color="#008EC4" size="50px" />,
    },
    {
      title: "Plan Travel Easily",
      text: "We will suggest cheapest trips, flights and hotels price in market. You can travel cheap and fun",
      icon: <FaRegMap color="#008EC4" size="50px" />,
    },
  ];
  return (
    <div className="mt-28  sm:px-16 px-6 w-full max-w-7xl mx-auto text-center">
      <h1 className="text-3xl text-black font-bold tracking-wide">
        WHY CHOOSE US?
      </h1>
      <div className="mt-10 flex flex-wrap justify-around gap-6">
        {bannerItems.map((item) => (
          <div className="w-64">
            <div className="w-20 h-20 mx-auto bg-blue-100 rounded-xl flex justify-center items-center">
              {item.icon}
            </div>
            <div className="mt-10 text-center ">
              <h2 className="text-black text-xl font-bold">{item.title}</h2>
              <p className="mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
