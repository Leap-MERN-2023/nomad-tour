"use client";
import React, { useContext } from "react";
import HotelCard from "../hotelcard";
import { HotelContext } from "@/context/hotelProvider";
import { IHotel } from "../../types";
import SectionWrapper from "@/hoc/SectionCenterer";

type Props = {};

const hotelSection = (props: Props) => {
  const { allHotel }: any = useContext(HotelContext);
  return (
    <section className="py-10 w-full flex flex-col justify-center items-center bg-white">
      <div className="max-w-7xl flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide">
            TOP HOTEL NOW
          </h1>
        </div>
        <div className="flex my-12 flex-wrap gap-12">
          {allHotel?.map((hotel: any) => (
            <HotelCard hotels={hotel} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="btn btn-ghost font-bold py-4">
            See All <img src="right.png" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(hotelSection, "hotels");
