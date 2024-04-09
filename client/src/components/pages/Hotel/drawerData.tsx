"use client";
import React, { useContext, useState } from "react";
import { GoogleMaps } from "@/components/GoogleMaps";
import { IHotel } from "@/types";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

// const filterHotels = (minPrice, maxPrice, rating) => {};

const DrawerData = ({
  searchedHotel,
  setSearchedHotel,
  getSearchedHotels,
  selectedCountry,
}: any) => {
  console.log("FFF", searchedHotel);

  //Price Range
  const hotelPrice = () => {
    return searchedHotel.map((hotel: IHotel) => {
      return hotel?.price;
    });
  };

  const price = hotelPrice();

  const initialMinPrice = Math.min(...price);
  const initialMaxPrice = Math.max(...price);

  const [value, setValue] = React.useState<number[]>([
    initialMinPrice,
    initialMaxPrice,
  ]);

  const [changeValue, setChangeValue] = useState();
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    if (Array.isArray(newValue)) {
      const filteredHotel = searchedHotel.filter(
        (hotel: any) =>
          hotel?.price >= newValue[0] && hotel?.price <= newValue[1]
      );
      setChangeValue(filteredHotel);
    } else {
      setSearchedHotel(changeValue);
    }
  };
  //Price Range end

  const handleButtonClick = (rating: number) => {
    const filteredHotel = searchedHotel?.filter(
      (hotel: any) => hotel?.stars === rating
    );
    if (filteredHotel?.length > 0) {
      setSearchedHotel(filteredHotel);
    } else {
      getSearchedHotels(selectedCountry);
    }
  };

  return (
    <ul className="menu p-3 w-[340px] 2xl:w-full min-h-full bg-base-200 lg:bg-zinc-100 lg:rounded-xl text-base-content">
      <div className="flex flex-col mt-5">
        <div>
          <h3 className="font-extrabold text-2xl mb-3">Nomad Tour</h3>
        </div>
        <GoogleMaps lat={47.92123} lng={106.918556} />
        <div className=" shadow-2xl rounded-2xl border mt-6 border-slate-400 p-3">
          <h1 className="font-bold text-2xl my-2 ">Price & Rank</h1>
          <div className="p-1 flex flex-col gap-1 ">
            <h1 className="font-bold text-xl">Rank</h1>
            <div className="flex justify-around mt-4">
              {[0 | 1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className={`rating rating-sm border border-slate-700 rounded-lg w-12 flex justify-center items-center gap-1 ${searchedHotel?.map(
                    (hotel: any) =>
                      hotel.stars === rating ? "bg-yellow-500" : ""
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
            <div className="flex flex-col">
              <div className="border-b border-slate-800 w-full mt-4"></div>
              <h1 className="font-bold text-xl my-4">Price Range</h1>
              <div className="text-2xl flex justify-between items-center">
                <h1>${initialMinPrice}</h1>
                <FaArrowRightArrowLeft style={{ height: 20 }} />
                <h1>${initialMaxPrice}</h1>
              </div>
              <Box sx={{ width: 260 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  getAriaValueText={(value) => value.toString()}
                  min={initialMinPrice}
                  max={initialMaxPrice}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default DrawerData;
