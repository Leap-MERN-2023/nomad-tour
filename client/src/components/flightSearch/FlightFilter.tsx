import React from "react";

type Props = {};

const FlightFilter = (props: Props) => {
  return (
    <div className="hidden xl:block mt-8 w-1/3">
      <h1 className="text-2xl text-black">Filter</h1>
      <div>
        <h2>Departure times</h2>
        <div>
          <input type="checkbox" checked={true} className="checkbox" />
          <div className="flex justify-between">
            <p>00:00 12:00</p>
            <p>morning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
