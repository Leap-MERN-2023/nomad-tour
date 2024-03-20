import React from "react";
import Navbar from "./navbar";
import Carousel from "./Carousel";
import Tabs from "./Tabs";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full relative">
      <Navbar />
      <Carousel />
      <div className="w-full flex justify-center items-center sm:px-16 px-6 absolute top-[500px] z-30">
        <Tabs />
      </div>
    </section>
  );
};

export default HeroSection;
