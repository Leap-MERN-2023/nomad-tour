"use client";
import React from "react";
import NewsCard from "../newsCard";
import Slider from "./slider";
import { url } from "inspector";

type Props = {};

const testSection = (props: Props) => {
  return (
    <section className=" w-[100%] flex flex-col items-center mx-auto relative ">
      <img src="umbrella.jpg" className="w-[100%] h-[100%] absolute" />
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      <div className="flex w-[56%] justify-center">
        <h1 className="font-extrabold z-10 p-12 text-white min-[280px]:xl sm:text-xl dm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Testimonials
        </h1>
      </div>
      <div className="w-[56%]">
        <Slider />
      </div>
    </section>
  );
};

export default testSection;
