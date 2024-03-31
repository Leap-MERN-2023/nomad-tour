"use client";
import React from "react";
import Slider from "./slider";
import SectionWrapper from "@/hoc/SectionCenterer";

type Props = {};

const newsSection = (props: Props) => {
  return (
    <div className="bg-[#f7f7f7] sm:px-16 px-6 w-full">
      <section className="flex flex-col items-center mx-auto max-w-7xl">
        <div className="flex my-12 w-full justify-center">
          <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide">
            Feature News
          </h1>
        </div>
        <div className="w-full">
          <Slider />
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(newsSection, "news");
