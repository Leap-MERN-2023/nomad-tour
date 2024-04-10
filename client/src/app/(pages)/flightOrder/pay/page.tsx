import React from "react";
import OrderInformation from "./orderInformation";
import PaymentSection from "./paymentSection";

type Props = {};

const FlightPayPage = (props: Props) => {
  return (
    <div className="pt-24 bg-gray-200 px-5 flex flex-col gap-10 h-[70vh]  md:flex-row md:items-center">
      <OrderInformation />
      <PaymentSection />
    </div>
  );
};

export default FlightPayPage;
