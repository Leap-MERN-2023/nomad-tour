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
        w-10/12 sm:text-5xl md:text-6xl lg:text-[90px] 
        xl:text-[130px] 2xl:text-[150px]"
        >
          Explore {country.name}
        </div>
        <div className="border-b-2 border-white w-full 2xl:mt-20" />
        <div className="flex flex-col xl:flex-row 2xl:text-3xl w-full flex-wrap">
          <div className="md:flex-1 flex-col justify-center items-center sm:justify-normal sm:items-start gap-5 text-xl mt-4 xl:mt-8 2xl:text-2xl w-full">
            <div className="">{country.description}</div>
          </div>
          <div className=" md:flex-1 w-full md:flex xl:justify-end justify-center md:space-x-10 mt-10 bg-transparent xl:space-x-4 2xl:space-x-5">
            {Array.isArray(country.images) &&
              country.images.slice(1, 4).map((image: string, index: number) => (
                <div
                  key={index}
                  className={`${
                    index === 2 && "hidden md:block"
                  } w-full h-[350px] bg-black mb-10 overflow-hidden rounded-lg  md:w-1/4 `}
                >
                  <img
                    key={index}
                    className="w-full h-full object-cover"
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
