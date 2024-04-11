"use client";
import { paypal, qpay } from "@/assets";
import { myAlertFire } from "@/utils/myAlert";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const PaymentSection = (props: Props) => {
  const router = useRouter();
  return (
    <div className="text-zinc-700 md:w-1/2">
      <h1 className="font-semibold ">Payment methods</h1>
      <div className="p-5 shadow-xl rounded-xl bg-white">
        <figure className="flex justify-between items-center mb-3 border-[1px] p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10" src={qpay.src} alt="" />
            <p>Qpay</p>
          </div>
          <input
            type="radio"
            className="checked:bg-slate-200 accent-white w-6 h-6"
          />
        </figure>
        <figure className="flex justify-between items-center mb-3 border-[1px] p-3 rounded-xl">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10" src={paypal.src} alt="" />
            <p>Paypal</p>
          </div>
          <input
            type="radio"
            className="checked:bg-slate-200 accent-white w-6 h-6"
          />
        </figure>
      </div>
      <button
        onClick={() => {
          myAlertFire("Payment success your ticket sent your email", "success");
          router.push("/");
        }}
        className="btn w-full bg-blue-400 border-0 text-white text-xl my-5 hover:bg-blue-500"
      >
        Pay
      </button>
    </div>
  );
};

export default PaymentSection;
