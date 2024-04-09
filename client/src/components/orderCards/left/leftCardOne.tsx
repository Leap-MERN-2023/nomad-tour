import React from "react";
import Tourist from "./Tourist";
import UserCard from "./UserCard";
import Oppurtunity from "./oppurtunity";

const leftCardOne = () => {
  return (
    <div className=" p-6 flex flex-col gap-3">
      <Tourist />
      <UserCard />
      <Oppurtunity />
    </div>
  );
};

export default leftCardOne;
