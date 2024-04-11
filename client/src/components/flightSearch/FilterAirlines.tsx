import { useAirlineContext } from "@/context/AirlineProvider";
import { IAirline } from "@/types";
import React, { useEffect } from "react";

type Props = {};

const FilterAirlines = (props: Props) => {
  const { airlines, getAirlines } = useAirlineContext();
  useEffect(() => {
    getAirlines();
  }, []);
  return (
    <div className="mt-10 text-sm border-t-2">
      <h2 className="text-lg">Airlines</h2>
      <div className="flex flex-wrap gap-3 mt-4">
        {airlines?.map((airline: IAirline) => (
          <div
            key={airline._id}
            className="p-1 border-[1px] rounded-lg hover:bg-zinc-100 cursor-pointer"
          >
            {airline.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterAirlines;
