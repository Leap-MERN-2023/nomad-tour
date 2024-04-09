"use client";
import React from "react";
import Tourist from "./Tourist";
import UserCard from "./UserCard";
import Oppurtunity from "./oppurtunity";

const leftCardOne = () => {
  return (
    <div className=" p-6 flex flex-col gap-3" >
    <p className="font-bold text-xl mt-20 text-black">Adult</p>
    <Tourist/>
    <UserCard/>
   <Oppurtunity/>
  </div>
  );
};

export default leftCardOne;
