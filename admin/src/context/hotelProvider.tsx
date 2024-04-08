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
  handleHotelForm: (e:any) => void;
  deleteHotel: (e:any) => void;
  addImage: (images:string) => void;
}

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

const HotelProvider = ({ children }: PropsWithChildren) => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [newHotel, setNewHotel] = useState({
    name:"",
    description: "",
    price: "",
    rating:"",
    images:[],
  })

  const getHotels = async () => {
    try {
      const {data} = await axios.get(
        "http://localhost:8008/hotels"
      );
      setHotels(data.allHotel);
      // console.log("Hotel 1",data.allHotel);
    } catch (error: any) {
      console.log("ERR", error);
    }
  };
  const createHotel = async () => {
    try {
      const data = await axios.post(
        "http://localhost:8008/hotels",
        newHotel
      );
      console.log("newHotel",newHotel)
    } catch (error: any) {
      console.log("create hotel error", error);
    }
  };
  const handleHotelForm = (e: ChangeEvent<HTMLInputElement>) => {
    setNewHotel({ ...newHotel, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };
  const deleteHotel = async (hotelId : any) => {
    try {
      const data = await axios.delete(`http://localhost:8008/hotel/${hotelId}`, {
      })
      console.log("delete hotel",data)
    } catch (error) {
      console.log("delete error", error)
    }
  };
  const addImage = (imgUrl: string) => {
    setNewHotel((oldHotel : any) => ({...oldHotel, images: [...oldHotel.images , imgUrl]}))
  }

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <HotelContext.Provider value={{ hotels ,getHotels,createHotel,handleHotelForm,deleteHotel,addImage}}>{children}</HotelContext.Provider>
  );
};

export default HotelProvider;
