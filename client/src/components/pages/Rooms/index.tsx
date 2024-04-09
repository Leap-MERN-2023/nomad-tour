"use client";
import React, {useContext} from "react";
import Carousel from "./carousel";
import RoomInfo from "./roomInfo";

import { RoomContext } from "@/context/RoomProvider";
import { IRoom } from "@/types";

const Room = () => {
  const {rooms} = useContext(RoomContext)
  return (
    <section className="w-full relative bg-white pb-10 ">
      <Carousel />
      <div className="mt-10">
       {rooms?.map((room, i) =>  <RoomInfo key={i} room={room}/>)}
        </div>
    </section>
  );
};

export default Room;
