import React from "react";
import Navbar from "./navbar";
import Carousel from "./Carousel";
import Tabs from "./Tabs";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full relative ">
      <Navbar />
      <Carousel />
      <div className="flex justify-center">
        <Tabs />
      </div>
    </section>
  );
};

export default HeroSection;
