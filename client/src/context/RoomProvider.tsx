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
  _id: string;
  description: string;
  images: string[];
  price: {
    USD: number;
    MNT: number;
    CNY: number;
  };
  totalPrice: string;
}

interface IRoomContext {
  rooms: IRoom[];
  getRoomByHotelId: (hotelId: string) => void;
  getRoomById: (roomId: string) => void;
  selectedRoom: IRoom[];
  roomOrder: any;
  setRoomOrder: any;
}

export const RoomContext = createContext<IRoomContext>({} as IRoomContext);

const RoomProvider = ({ children }: PropsWithChildren) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<IRoom[]>([]);
  const [roomOrder, setRoomOrder] = useState();

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

  const getRoomById = async (roomId: string) => {
    console.log("RoomID", roomId);
    try {
      const {
        data: { findRoom },
      } = await axios.get(
        "https://nomad-tour-backend.vercel.app/room/selected/" + roomId
      );
      console.log("GetroomByID", findRoom);
      setSelectedRoom(findRoom);
    } catch (error) {
      console.log("AtRoomPrivider");
    }
  };

  useEffect(() => {
    getRoomByHotelId("hotelId");
  }, []);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        getRoomByHotelId,
        selectedRoom,
        getRoomById,
        roomOrder,
        setRoomOrder,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
