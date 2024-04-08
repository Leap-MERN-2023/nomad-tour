import React from "react";
import FilterTimes from "./FilterTimes";
import FilterAirlines from "./FilterAirlines";

type Props = {};

const FlightFilter = (props: Props) => {
  return (
    <div className="hidden xl:block mt-8 w-1/3 mb-10 border-[1px] rounded-xl p-5">
      <h1 className="text-2xl text-black">Filter</h1>
      <FilterTimes />
      <FilterAirlines />
    </div>
  );
};

export default FlightFilter;
