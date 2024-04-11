import React from "react";
import OrderInfo from "@/components/pages/PayRoom/OrderInfo";
import PayPath from "@/components/pages/PayRoom/PayPath";

type Props = {};

const FlightPayPage = (props: Props) => {
  return (
    <div className="pt-24 bg-gray-200 px-5 flex flex-col gap-10 h-[70vh]  md:flex-row md:items-center">
      <OrderInfo />
      <PayPath />
    </div>
  );
};

export default FlightPayPage;
