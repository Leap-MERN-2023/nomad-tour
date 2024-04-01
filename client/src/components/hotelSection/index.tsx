"use client";
import React, { useContext } from "react";
import HotelCard from "../hotelcard";
import { HotelContext } from "@/context/hotelProvider";
import { IHotel } from "../../types";
import SectionWrapper from "@/hoc/SectionCenterer";

type Props = {};

const hotelSection = (props: Props) => {
  const { hotels }: any = useContext(HotelContext);
  return (
    <section className="mt-12 w-[56%] flex flex-col justify-center items-center mx-auto">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-extrabold">TOP HOTEL NOW</h1>
      </div>
      <div className="flex my-12 flex-wrap gap-12">
        {hotels?.map((hotel: any) => (
          <HotelCard hotel={hotel} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-ghost font-bold py-4">
          See All <img src="right.png" />
        </button>
      </div>
    </section>
  );
};

export default SectionWrapper(hotelSection, "hotels");
