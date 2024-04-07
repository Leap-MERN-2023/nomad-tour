"use client";
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { carouselImages, countryCarouselImages } from "@/constants";
import { CountryContext } from "@/context/CountryProvider";

type Props = {};

const Carousel = (props: Props) => {
  const { selectedCountry } = useContext(CountryContext);
  return (
    <div className="w-full">
      {countryCarouselImages.map((country) => (
        <div key={country.id}>
          {selectedCountry === country.id && (
            <img
              className="w-full h-[700px] object-cover"
              src={country.imageSrc}
              alt=""
            />
          )}
        </div>
      ))}
      {selectedCountry === undefined && (
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          cssMode={true}
          autoplay={{ delay: 5000 }}
        >
          {carouselImages.map((img) => (
            <SwiperSlide key={img.src}>
              <img
                className="w-full h-[700px] object-cover"
                src={img.src}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
