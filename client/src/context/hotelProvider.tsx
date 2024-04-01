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
  hotels: IHotel[];
  searchedHotel: IHotel[];
  // getHotels: () => void;
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const HotelProvider = ({ children }: PropsWithChildren) => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [searchedHotel, setSearchedHotels] = useState<IHotel[]>([]);
  const [ref, setRef] = useState(false);

  const getHotels = async () => {
    console.log("Working");
    try {
      const {
        data: { filteredHotels },
      } = await axios.get(
        "http://localhost:8008/hotel/" + "65f9aca67a1a0f2424ab74c6"
      );
      console.log("Hotels", filteredHotels);
      setHotels(filteredHotels);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };
  const getSearchedHotels = async (country: string) => {
    try {
      const {
        data: { filteredHotels },
      } = await axios.get("http://localhost:8008/hotel/" + country);
      console.log("Hotels", filteredHotels);
      setSearchedHotels(filteredHotels);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getHotels();
  }, [!ref]);

  return (
    <HotelContext.Provider value={{ hotels, searchedHotel }}>
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
