import React from "react";

type Props = {};

const FilterTimes = (props: Props) => {
  return (
    <div className="mt-10 text-sm border-t-2">
      <h2 className="text-lg">Departure times</h2>
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
  );
};

export default FilterTimes;
