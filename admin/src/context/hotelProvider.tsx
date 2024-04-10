"use client";

import React, {
  ChangeEvent,
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
  createHotel: () => void;
  handleHotelForm: (e: any) => void;
  deleteHotel: (e: any) => void;
  addImage: (images: string) => void;
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const HotelProvider = ({ children }: PropsWithChildren) => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setrefresh] = useState(false);
  const [newHotel, setNewHotel] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    images: [],
  });

  const getHotels = async () => {
    try {
      const { data } = await axios.get(
        "https://nomad-tour-backend.vercel.app/hotels"
      );
      setHotels(data.allHotel);
      // console.log("Hotel 1",data.allHotel);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };
  const createHotel = async () => {
    try {
      setLoading(true);
      const data = await axios.post(
        "https://nomad-tour-backend.vercel.app/hotels",
        newHotel
      );
      setrefresh(!refresh);
      console.log("newHotel", newHotel);
    } catch (error: any) {
      console.log("create hotel error", error);
    } finally {
      setLoading(false);
    }
  };
  const handleHotelForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewHotel({ ...newHotel, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const deleteHotel = async (hotelId: any) => {
    try {
      setLoading(true);
      const data = await axios.delete(
        `https://nomad-tour-backend.vercel.app/hotels/${hotelId}`,
        {}
      );
      console.log("delete hotel", data);
      setrefresh(!refresh);
    } catch (error) {
      console.log("delete error", error);
    } finally {
      setLoading(false);
    }
  };
  const addImage = (imgUrl: string) => {
    setNewHotel((oldHotel: any) => ({
      ...oldHotel,
      images: [...oldHotel.images, imgUrl],
    }));
  };

  useEffect(() => {
    getHotels();
  }, [refresh]);

  return (
    <HotelContext.Provider
      value={{
        hotels,
        getHotels,
        createHotel,
        handleHotelForm,
        deleteHotel,
        addImage,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
