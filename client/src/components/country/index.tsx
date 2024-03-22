"use client";

import React, { useContext, useEffect } from "react";

import explore from "./explore";
import additionImage from "./additionImage";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CountryContext } from "@/context/CountryProvider";
import { Autoplay } from "swiper/modules";

import { gsap } from "gsap";



const Country = () => {
  const { countries } = useContext(CountryContext);
  return (
    <Swiper
      className="CountrySwipper"
      spaceBetween={0}
      slidesPerView={1}
      modules={[Autoplay]}
      loop={true}
      cssMode={true}
      autoplay={{ delay: 5000 }}
    >
      {countries.map((country) => (
        <div className="relative">
          <SwiperSlide>
            <img
              className="w-full h-screen  object-cover"
              src={country?.images[0]}
              alt=""
            />
            <div className="absolute top-48 md:flex md:w-full md:top-[330px] md:text-6xl text-4xl text-white font-extrabold left-16 border-white border-b-2 w-2/3 gap-2">
              Explore
              <h1>{country.name}</h1>
            </div>
            <div className="absolute  top-72 md:top-[420px] text-white left-16  w-2/3 h-44 md:w-1/4  overflow-hidden p-2 rounded-lg items-center shadow-2xl  md:py-3  md:h-64">
              {country.description}
            </div>
            <div className="hidden">
              <img src={country?.images[1]} alt="" />
              <img src={country?.images[2]} alt="" />
              <img src={country?.images[3]} alt="" />
            </div>
            <button className=" absolute border rounded-sm hover:outline shadow-lg bottom-80  sm:bottom-20 md:bottom-72 p-2 h-10 ml-16 text-white">See all..</button>

          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Country;
