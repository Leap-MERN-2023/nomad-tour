"use client";
import React from "react";
import Tabs from "@/components/heroSection/Tabs";
import Hotel from "@/components/pages/Hotel";

const Page = () => {
  return (
    <div className="relative bg-white">
      <div className="w-full flex justify-center items-center relative z-10 sm:px-16 px-6 pt-32">
        <Tabs />
      </div>
      <Hotel />
    </div>
  );
};

export default Page;
