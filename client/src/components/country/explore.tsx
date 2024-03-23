import React from "react";

const Explore = ({ country }: any) => {
  return (
    <div className="">
      <img
        className="w-full h-screen  object-cover"
        src={country?.images[0]}
        alt=""
      />
      <div className="absolute top-48 text-2xl text-white font-extrabold left-14 border-white border-b-2 w-2/3 gap-3 md:flex md:w-full md:top-[330px] md:text-7xl 2xl:left-60 2xl:text-9xl 2xl:top-40">
        Explore {country.name}
      </div>
      <div className="absolute top-64 left-14 right-5 flex flex-row  md:top-[430px] 2xl:left-60">
        <div className="text-white w-2/3 h-44 overflow-hidden p-2 rounded-lg items-center shadow-2xl md:py-1  md:h-60 md:w-1/4 md:top-[480px] 2xl:h-80 2xl:py-10 2xl:text-xl 2xl:font-mono">
          {country.description}
        </div>
        <div className="hidden md:flex md:space-x-4 md:ml-4 2xl:w-2/3   ">
          {Array.isArray(country.images) &&
            country.images
              .slice(1, 4)
              .map((image: any, index: any) => (
                <img
                  key={index}
                  className="w-1/3 h-60 rounded-md 2xl:h-80"
                  src={image}
                  alt=""
                />
              ))}
        </div>
      </div>

      <button className="absolute border rounded-lg hover:outline shadow-lg bottom-64 md:bottom-[400px] md:hidden p-2 h-10 ml-16 text-white 2xl:hidden ">
        See all..
      </button>
    </div>
  );
};

export default Explore;
