import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";

import { HotelContext } from "@/context/hotelProvider";

interface Country {
  country: string;
  images: string[];
  name: string;
  description: string;
}

const Explore = ({ country }: { country: Country }) => {
  const { hotels } = useContext(HotelContext);
  const backgroundStyle = {
    backgroundImage: `url(${country?.images[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundOpacity: 0.5,
    width: "100vw",
    height: "100vh",
  };
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  };

  return (
    <div className=" text-white" style={backgroundStyle}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-[#00000080] 2xl:p-48 p-16">
        <div
          className="font-black text-[40px] 2xl:font-extrabold  
        w-10/12 sm:text-7xl md:text-7xl lg:text-[100px] 
        xl:text-[140px] 2xl:text-[180px]"
        >
          Explore {country.name}
        </div>
        <div className="border-b-2 border-white w-full 2xl:mt-20" />
        <div className="flex 2xl:text-3xl w-full flex-wrap">
          <div className="md:flex-1 flex-col justify-center items-center sm:justify-normal sm:items-start gap-5 text-xl mt-4 xl:mt-8 2xl:font-bold 2xl:text-2xl w-full">
            <div className="">{country.description}</div>
            <button className="flex justify-evenly items-center w-24 mt-8  bg-slate-50  text-black border-2 rounded-xl md:hidden p-1 xl:p-2 hover:bg-slate-300 text-sm xl:flex text-center xl:w-28 xl:text-sm">
              See all
              <h1>
                <FaArrowRight />
              </h1>
            </button>
          </div>
          <div className=" md:flex-1 w-full md:flex md:justify-center md:space-x-10 mt-10 bg-transparent xl:space-x-4 2xl:space-x-5">
            {Array.isArray(country.images) &&
              country.images.slice(1, 4).map((image: string, index: number) => (
                <div className="w-full h-[350px] bg-black mb-10 overflow-hidden rounded-lg  md:w-1/4 ">
                  <img
                    key={index}
                    className="w-full h-full"
                    src={image}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
