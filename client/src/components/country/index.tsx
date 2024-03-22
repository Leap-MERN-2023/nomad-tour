"use client";

import React, { useContext } from "react";

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
            <div className="absolute top-40 text-4xl text-white font-extrabold left-16 border-white border-b-2 w-2/3 gap-2">
              Explore
              <h1>{country.name}'</h1>
            </div>
            <div className="absolute  top-64 text-white left-16  w-2/3 h-44 overflow-hidden p-2 rounded-lg items-center shadow-2xl ">
              {country.description}
            </div>
            <div className="hidden">
              <img src={country?.images[1]} alt="" />
              <img src={country?.images[2]} alt="" />
              <img src={country?.images[3]} alt="" />
            </div>
            <button className="btn btn-outline btn-accent">Accent</button>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Country;
