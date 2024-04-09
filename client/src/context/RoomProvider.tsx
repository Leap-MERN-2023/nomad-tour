"use client"
import React, {PropsWithChildren, useState, createContext} from "react";
import axios from "axios";
import { MdDescription } from "react-icons/md";

interface IRoom{
  name: string,
  description: string,
  images: string
  price: number
}

interface IRoomContext{
  rooms: IRoom[]
  getRoomByHotelId: (hotelId: string) => void
}

export const RoomContext = createContext<IRoomContext>({} as IRoomContext);

const RoomProvider = async({children}: PropsWithChildren) => {
  const [rooms, setRooms] = useState<IRoom[]>([])


  const getRoomByHotelId= async(hotelId: string) => {
    try {
      const {data: {findRooms}} = await axios.get("http://localhost:8008/room/id/" + hotelId)
      console.log(findRooms)
      setRooms(findRooms)
    } catch (error) {
      console.log("Err", error)
    }
  }
  return <RoomContext.Provider value={{rooms, getRoomByHotelId}}>
{children}
  </RoomContext.Provider>
};

export default RoomProvider;
