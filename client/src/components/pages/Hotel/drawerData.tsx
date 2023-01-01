"use client";
import React, { useContext, useState } from "react";
import GoogleMaps from "@/components/GoogleMaps";
import { IHotel } from "@/types";
import Slider from "react-slider";

function valuetext(value: number) {
  return `${value}$`;
}

const DrawerData = ({
  searchedHotel,
  setSearchedHotel,
  getSearchedHotels,
  selectedCountry,
}: any) => {
  console.log("FFF", searchedHotel);

  const hotelPrice = () => {
    return searchedHotel.map((hotel: IHotel) => {
      return hotel?.price;
    });
  };

  const price = hotelPrice();
  console.log("price", price);

  const minPrice = Math.min(...price) || 0;
  const maxPrice = Math.max(...price) || 100;
  console.log("HotelPriceMin,", minPrice);
  console.log("HotelPriceMaxx,", maxPrice);

  const [value, setValue] = useState<number[]>([minPrice, maxPrice]);

  const handleButtonClick = (rating: number) => {
    console.log("Rating", rating);
    console.log("Hotell", searchedHotel);
    const filteredHotel = searchedHotel?.filter(
      (hotel: any) => hotel?.stars === rating
    );
    console.log("FilteredHotels", filteredHotel);
    if (filteredHotel?.length >= 0) {
      setSearchedHotel(filteredHotel);
    } else {
      getSearchedHotels(selectedCountry);
      setSearchedHotel(filteredHotel);
    }
  };

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const filteredHotelByPrice = searchedHotel.filter(
    (hotel: any) => hotel?.price >= value[0] && hotel?.price <= value[1]
  );

  return (
    <ul className="menu p-3 w-[340px] 2xl:w-full min-h-full bg-base-200 lg:bg-zinc-100 lg:rounded-xl text-base-content">
      <div className="flex flex-col mt-5">
        <div>
          <h3 className="font-extrabold text-2xl mb-3">Nomad Tour</h3>
        </div>
        <GoogleMaps />
        <div className=" shadow-2xl mt-6 rounded-2xl border border-slate-400 p-3">
          <h1 className="font-bold text-xl my-2 ">Price & Rank</h1>
          <div className="p-3">
            <h1 className="font-bold text-lg">Rank</h1>
            <div className="flex justify-around mt-4">
              {[0 | 1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className={`rating rating-sm border border-slate-700 rounded-lg w-12 flex justify-center items-center gap-1 ${searchedHotel?.map(
                    (hotel: any) =>
                      hotel.stars === rating ? "bg-yellow-400" : ""
                  )}`}
                  onClick={() => handleButtonClick(rating)}
                >
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-orange-400 "
                  />
                  <h1 className="text-xl ">{rating}</h1>
                </button>
              ))}
            </div>
            <div className="border-b border-slate-800 w-full mt-4"></div>
            <h1 className="font-bold text-lg my-4">Price Range</h1>
            <div className="text-2xl flex justify-between">
              <h1>${minPrice}</h1>
              <h1>${maxPrice}</h1>
            </div>

            <Slider
              className={"slider"}
              value={value}
              onChange={handleChange}
              min={minPrice}
              max={maxPrice}
            />
          </div>
        </div>
      </div>
    </ul>
  );
};

export default DrawerData;
