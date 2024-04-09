"use client";
import React from "react";
import Carousel from "./carousel";
// import RoomInfo from "./roomInfo";

const Room = () => {
  return (
    <section className="w-full relative bg-white pb-10 ">
      <Carousel />
      <div className="mt-10">{/* <RoomInfo /> */}</div>
    </section>
  );
};

export default Room;
