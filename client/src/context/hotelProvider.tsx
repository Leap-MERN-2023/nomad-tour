"use client";

import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface IHotel {
  name: string;
  desc: string;
  star: number;
}

interface IHotelContext {
  allHotel: IHotel[];
  searchedHotels: IHotel[];
  getSearchedHotels: (countryId: string) => void;
  getHotel: (hotel: string) => void;
  hotel: IHotel[];
  // getHotels: () => void;
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const HotelProvider = ({ children }: PropsWithChildren) => {
  const [allHotel, setAllHotel] = useState<IHotel[]>([]);
  const [searchedHotels, setSearchedHotels] = useState<IHotel[]>([]);
  const [hotel, setHotel] = useState<IHotel[]>([]);
  const [ref, setRef] = useState(false);

  //Get All hotel with high rank
  const getAllHotel = async () => {
    console.log("Working");
    try {
      const {
        data: { allHotel },
      } = await axios.get("http://localhost:8008/hotels");
      console.log("Hotels", allHotel);
      setAllHotel(allHotel);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  //Get hotels of country searched
  const getSearchedHotels = async (countryId: string) => {
    try {
      const {
        data: { filteredHotels },
      } = await axios.get(
        "http://localhost:8008/hotels/" + "65f9aca67a1a0f2424ab74c6"
      );
      console.log("Hotels", filteredHotels);
      setSearchedHotels(filteredHotels);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  //Get hotel

  const getHotel = async (hotelId: string) => {
    try {
      const {
        data: { hotel },
      } = await axios.get("http://localhost:8008/hotels/" + hotelId);
      console.log("HOTEl", hotel);
      setHotel(hotel);
    } catch (error) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getAllHotel();
  }, [!ref]);

  return (
    <HotelContext.Provider
      value={{ allHotel, searchedHotels, getSearchedHotels, getHotel, hotel }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
