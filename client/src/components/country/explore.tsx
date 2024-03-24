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
    width: "100vw",
    height: "100vh",
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-5 2xl:gap-10   text-white "
      style={backgroundStyle}
    >
      <div className="font-black text-[40px] 2xl:font-extrabold  w-10/12 sm:text-7xl md:text-7xl lg:text-[100px] xl:text-[140px] 2xl:text-[210px]">
        Explore {country.name}
      </div>
      <p className="border-b-4 border-white w-10/12 2xl:mt-20" />
      <div className="flex flex-col gap-5 justify-center xl:flex-row xl:w-full xl:justify-between 2xl:text-3xl">
        <div className="flex flex-col w-10/12 xl:text-md mx-auto gap-5 xl:w-1/2  xl:ml-28 2xl:w-4/12 bg-transparent 2xl:ml-0  xl:mt-8 xl:pt-5 2xl:font-bold 2xl:text-2xl">
          <div className="xl:w-2/3  ">
            {country.description} 
          </div>
          <button className="flex justify-evenly items-center w-24  bg-slate-50  text-black border-2 rounded-xl md:hidden p-1 xl:p-2 hover:bg-slate-300 text-sm xl:flex text-center xl:w-28 xl:text-sm">
            See all
            <h1>
              <FaArrowRight />
            </h1>
          </button>
        </div>
        <div className="hidden md:flex md:justify-center md:space-x-10 mt-10 bg-transparent xl:space-x-4 2xl:space-x-5">
          {Array.isArray(country.images) &&
            country.images
              .slice(1, 4)
              .map((image: string, index: number) => (
                <img
                  key={index}
                  className="w-1/4 h-60 rounded-md 2xl:w-3/12 2xl:h-72 xl:w-3/12 "
                  src={image}
                  alt=""
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
