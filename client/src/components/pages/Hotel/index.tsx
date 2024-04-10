"use client";
import React, { useContext, useState } from "react";
import { HotelContext } from "@/context/hotelProvider";
import { CountryContext } from "@/context/CountryProvider";
import { SearchHotelCard } from "@/components/hotelcard/SerchHotelCard";

import { HotelModal } from "./drawer";
import DrawerData from "./drawerData";

const Hotel = () => {
  const {
    searchedHotel,
    setSearchedHotel,
    getSearchedHotels,
    ratingRoom,
    getRoomByRating,
  } = useContext(HotelContext);
  const { selectedCountry } = useContext(CountryContext);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    console.log("Closing modal");
    setOpenModal(false);
  };

  return (
    <div className="w-11/12  flex flex-col gap-5 mt-10 justify-between mx-auto max-w-7xl 2xl:w-9/12 mb-10">
      <div className=" lg:hidden">
        <HotelModal
          searchedHotel={searchedHotel}
          setSearchedHotel={setSearchedHotel}
          getSearchedHotels={getSearchedHotels}
          selectedCountry={selectedCountry}
        />
      </div>
      <div className="flex justify-between gap-3">
        <div className="hidden lg:flex lg:border-[1px] lg:rounded-xl ">
          <DrawerData
            ratingRoom={ratingRoom}
            getRoomByRating={getRoomByRating}
            searchedHotel={searchedHotel}
            setSearchedHotel={setSearchedHotel}
            getSearchedHotels={getSearchedHotels}
            selectedCountry={selectedCountry}
          />
        </div>

        <div className="flex flex-col w-full lg:w-7/12  gap-5 xl:w-8/12 2xl:w-8/12  ">
          {searchedHotel?.map((e, i) => (
            <SearchHotelCard key={i} hotels={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
