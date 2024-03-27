"use client";

import React, { useContext, useEffect } from "react";

import Explore from "./explore";
import additionImage from "./additionImage";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CountryContext } from "@/context/CountryProvider";
import { Autoplay } from "swiper/modules";

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
      {countries?.map((country) => (
        <SwiperSlide key={country.name}>
          <Explore country={country as any} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Country;
