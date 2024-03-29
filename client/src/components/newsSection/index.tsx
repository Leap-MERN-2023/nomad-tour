"use client";
import React from "react";
import Slider from "./slider";

type Props = {};

const newsSection = (props: Props) => {
  return (
    <div className="bg-[#f7f7f7]">
      <section className="py-12 w-[56%] flex flex-col items-center mx-auto">
        <div className="flex my-12 w-full justify-center">
          <h1 className="flex font-extrabold min-[280px]:text-xl md:text-xl  lg:text-3xl xl:text-5xl 2xl:text-5xl">
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

export default newsSection;
