"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
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
  getSearchedHotels: (countryId: string) => void;
  getHotel: (hotel: string) => void;
  hotel: IHotel[];
  allHotel: IHotel[];
  searchedHotel: IHotel[];
  // getHotels: () => void;
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const HotelProvider = ({ children }: PropsWithChildren) => {
  const [hotel, setHotel] = useState<IHotel[]>([]);
  const [allHotel, setAllHotel] = useState<IHotel[]>([]);
  const [searchedHotel, setSearchedHotel] = useState<IHotel[]>([]);
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

  // searched hotels of country
  const getSearchedHotels = async (selectedCountry: string) => {
    try {
      console.log("SelectedCountryID_Get", selectedCountry);
      const {
        data: { findHotel },
      } = await axios.get(
        "http://localhost:8008/hotels/search/" + selectedCountry
      );
      setSearchedHotel(findHotel);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  //Get hotel

  const getHotel = async (hotelId: string) => {
    console.log("HotelId", hotelId);
    try {
      const {
        data: { hotel },
      } = await axios.get(`http://localhost:8008/hotels/${hotelId}`);
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
      value={{ getSearchedHotels, getHotel, hotel, searchedHotel, allHotel }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
