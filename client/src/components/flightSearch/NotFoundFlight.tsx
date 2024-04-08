import React from "react";
import { IoFilterOutline } from "react-icons/io5";

type Props = {};

const NotFoundFlight = (props: Props) => {
  return (
    <div className="xl:w-2/3 flex flex-col items-center">
      <button className="btn w-full mt-5 btn-outline xl:hidden">
        <IoFilterOutline /> Filter
      </button>
      <div className="flex justify-center items-center mt-20">
        <h3 className="text-4xl">
          Sorry, We don't have available flights right now
        </h3>
      </div>
    </div>
  );
};

export default NotFoundFlight;
