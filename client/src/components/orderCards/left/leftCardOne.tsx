import React from "react";
import Tourist from "./Tourist";
import UserCard from "./UserCard";
import Oppurtunity from "./oppurtunity";

const leftCardOne = ({ formik }: any) => {
  return (
    <div className=" p-6 flex flex-col gap-3">
      <Tourist formik={formik} />
      <UserCard formik={formik} />
      <Oppurtunity />
    </div>
  );
};

export default leftCardOne;
