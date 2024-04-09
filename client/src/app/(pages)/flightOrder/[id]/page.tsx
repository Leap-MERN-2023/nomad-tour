import React from "react";
import LeftCardOne from "@/components/orderCards/left/leftCardOne";
import RightCardOne from "@/components/orderCards/right/rightCardOne";

const Order = ({ params }: { params: { id: string } }) => {
  return (
    <div className=" bg-gray-200  lg:flex lg:justify-center pt-16">
      <LeftCardOne />
      <RightCardOne id={params.id} />
    </div>
  );
};

export default Order;
