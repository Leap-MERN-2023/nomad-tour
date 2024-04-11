"use client";
import React, { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import DrawerData from "./drawerData";

export const HotelModal = ({
  searchedHotel,
  setSearchedHotel,
  getSearchedHotels,
  selectedCountry,
}: any) => {
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="w-full border flex justify-center items-center gap-5 border-gray-200 rounded-md mt-5 p-2 font-bold"
        >
          <IoFilterOutline style={{ height: 25, width: 25 }} />
          Filter
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <DrawerData
          searchedHotel={searchedHotel}
          setSearchedHotel={setSearchedHotel}
          getSearchedHotels={getSearchedHotels}
          selectedCountry={selectedCountry}
        />
      </div>
    </div>
  );
};
