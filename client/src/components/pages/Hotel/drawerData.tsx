"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}₮`;
}

const DrawerData = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <ul className="menu p-3 w-[340px] 2xl:w-full min-h-full bg-base-200 lg:bg-zinc-100 lg:rounded-xl text-base-content">
      <div className="flex flex-col mt-5">
        <div>
          <h3 className="font-extrabold text-2xl mb-3">Nomad Tour</h3>
        </div>
        <img className="my-2" src="map.jpg" alt="" />
        <div className=" shadow-2xl mt-6 rounded-2xl border border-slate-400 p-3">
          <h1 className="font-bold text-xl my-2 ">Price & Rank</h1>
          <div className="p-3">
            <h1 className="font-bold text-lg">Rank</h1>
            <div className="flex justify-around mt-4">
              <button className="rating rating-sm border border-slate-700 rounded-lg w-16 flex justify-center items-center gap-1 ">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400 "
                />
                <h1 className="text-xl ">{2}</h1>
              </button>
              <button className="rating rating-sm border border-slate-700 rounded-lg w-16 flex justify-center items-center gap-1 ">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400 "
                />
                <h1 className="text-xl ">{3}</h1>
              </button>
              <button className="rating rating-sm border border-slate-700 rounded-lg w-16 flex justify-center items-center gap-1 ">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400 "
                />
                <h1 className="text-xl ">{4}</h1>
              </button>
              <button className="rating rating-sm border border-slate-700 rounded-lg w-16 flex justify-center items-center gap-1 ">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400 "
                />
                <h1 className="text-xl ">{5}</h1>
              </button>
            </div>
            <div className="border-b border-slate-800 w-full mt-4"></div>
            <h1 className="font-bold text-lg my-4">Assessment</h1>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </div>
        </div>
      </div>
    </ul>
  );
};

export default DrawerData;
