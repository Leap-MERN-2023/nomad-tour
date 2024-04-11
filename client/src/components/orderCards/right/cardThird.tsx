"use client";
import { useFlightOrder } from "@/context/FlightOrderProvider";
import { ITicket } from "@/types";
import { priceCalculator } from "@/utils/priceCalc";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CardThird = ({
  orderTicket,
  formik,
}: {
  orderTicket: ITicket | undefined;
  formik: any;
}) => {
  const router = useRouter();
  const { setFlightForm, flightForm } = useFlightOrder();
  useEffect(() => {
    if (orderTicket) {
      setFlightForm({
        ...flightForm,
        totalPrice: priceCalculator(
          orderTicket.flight.departureDate,
          orderTicket.price.USD
        ),
      });
    }
  }, [orderTicket]);
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-xl lg:w-[500px] lg:ml-5">
        <div className="p-4">
          <p className="text-black">Cost</p>
          <p className="text-black font-medium">
            {orderTicket ? orderTicket.price.USD : ""}$
          </p>
        </div>
        <hr className="h-1"></hr>
        <div className="p-4">
          <p className="text-black">Total</p>
          <p className="text-black font-medium">
            {orderTicket
              ? priceCalculator(
                  orderTicket.flight.departureDate,
                  orderTicket.price.USD
                )
              : ""}
            $ Includes taxes and surcharges
          </p>
        </div>
      </div>
      <button
        type="submit"
        // onClick={() => {
        //   createFlightOrder(), router.push("/flightOrder/pay");
        // }}
        onClick={() => {
          formik.handleSubmit();
        }}
        className="bg-[#0281B0] text-white w-full rounded-xl p-2 lg:w-[500px] lg:ml-5"
      >
        Order
      </button>
    </div>
  );
};

export default CardThird;
