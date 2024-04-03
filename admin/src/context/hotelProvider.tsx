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
  getHotels: () => void;
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const HotelProvider = ({ children }: PropsWithChildren) => {
  const [hotels, setHotels] = useState<IHotel[]>([]);

  const getHotels = async () => {
    console.log("Working");
    try {
      const {
        data: { allHotels },
      } = await axios.get(
        "http://localhost:8008/hotel"
      );
      console.log("Hotel 1",allHotels);
      setHotels(allHotels);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  // useEffect(() => {
  //   getHotels();
  // }, []);

  return (
    <HotelContext.Provider value={{ hotels ,getHotels}}>{children}</HotelContext.Provider>
  );
};

export default HotelProvider;
