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
  stars: number;
}

interface IHotelContext {
  getSearchedHotels: (countryId: string) => void;
  getHotel: (hotel: string) => void;
  hotel: IHotel[];
  allHotel: IHotel[];
  searchedHotel: IHotel[];
  ratingRoom: IHotel[];
  setSearchedHotel: (hotels: IHotel[]) => void;
  getRoomByRating: (selectedCountry: string, rating: string) => void;
  // getHotels: () => void;
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const HotelProvider = ({ children }: PropsWithChildren) => {
  const [hotel, setHotel] = useState<IHotel[]>([]);
  const [allHotel, setAllHotel] = useState<IHotel[]>([]);
  const [searchedHotel, setSearchedHotel] = useState<IHotel[]>([]);
  const [ratingRoom, setRatingRoom] = useState<IHotel[]>([]);
  const [ref, setRef] = useState(false);

  //Get All hotel with high rank
  const getAllHotel = async () => {
    try {
      const {
        data: { allHotel },
      } = await axios.get("http://localhost:8008/hotels");
      setAllHotel(allHotel.slice(0, 6));
    } catch (error: any) {
      console.log("ERR", error);
    }
  };

  // searched hotels of country
  const getSearchedHotels = async (selectedCountry: string) => {
    try {
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

  const getRoomByRating = async (selectedCountry: string, rating: string) => {
    try {
      const {
        data: { ratingRoom },
      } = await axios.post(
        "http://localhost:8008/room/country/" + selectedCountry,
        { rating }
      );
      setSearchedHotel(ratingRoom);
    } catch (error) {
      console.log("Err", error);
    }
  };

  //Get hotel

  const getHotel = async (hotelId: string) => {
    try {
      const {
        data: { hotel },
      } = await axios.get(`http://localhost:8008/hotels/${hotelId}`);
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
      value={{
        getSearchedHotels,
        getHotel,
        hotel,
        searchedHotel,
        allHotel,
        setSearchedHotel,
        ratingRoom,
        getRoomByRating,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
