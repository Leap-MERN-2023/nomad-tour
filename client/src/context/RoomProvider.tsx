"use client";
import React, {
  PropsWithChildren,
  useState,
  createContext,
  useEffect,
} from "react";
import axios from "axios";

interface IRoom {
  name: string;
  description: string;
  images: string[];
  price: {
    USD: number;
    MNT: number;
    CNY: number;
  };
}

interface IRoomContext {
  rooms: IRoom[];
  getRoomByHotelId: (hotelId: string) => void;
}

export const RoomContext = createContext<IRoomContext>({} as IRoomContext);

const RoomProvider = ({ children }: PropsWithChildren) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const getRoomByHotelId = async (hotelId: string) => {
    try {
      const {
        data: { findRooms },
      } = await axios.get(
        "https://nomad-tour-backend.vercel.app/room/id/" + hotelId
      );
      setRooms(findRooms);
    } catch (error) {
      console.log("Err", error);
    }
  };

  useEffect(() => {
    getRoomByHotelId("hotelId");
  }, []);

  return (
    <RoomContext.Provider value={{ rooms, getRoomByHotelId }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
