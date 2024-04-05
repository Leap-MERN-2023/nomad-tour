import React from "react";

type Props = {};

const FlightFilter = (props: Props) => {
  return (
    <div className="hidden xl:block mt-8 w-1/3 h-screen border-[1px] rounded-xl p-5">
      <h1 className="text-2xl text-black">Filter</h1>
      <div>
        <h2>Departure times</h2>
        <div className="flex justify-between mt-5">
          <div className="flex gap-2">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>00:00 12:00</p>
          </div>
          <p>morning</p>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-2">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>12:00 18:00</p>
          </div>
          <p>afternoon</p>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex gap-2">
            <input type="checkbox" defaultChecked className="checkbox" />
            <p>18:00 00:00</p>
          </div>
          <p>evening</p>
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
