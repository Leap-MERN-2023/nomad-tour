"use client";
import React from "react";
import HotelCard from "../hotelcard";
import SectionWrapper from "@/hoc/SectionCenterer";

type Props = {};

const hotelSection = (props: Props) => {
  return (
    <div className="bg-[#f7f7f7] sm:px-16 px-6 w-full flex flex-col items-center">
      <section className=" items-center max-w-7xl">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide">
            TOP HOTEL NOW
          </h1>
        </div>
        <div className="flex my-12 flex-wrap gap-12">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-ghost font-bold py-4">
            See All <img src="right.png" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(hotelSection, "hotels");
