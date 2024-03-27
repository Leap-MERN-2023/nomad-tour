import React from "react";
import Navbar from "./navbar";
import Carousel from "./Carousel";
import Tabs from "./Tabs";
import Banner from "./Banner";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full relative bg-white ">
      <Carousel />
      <div className="w-full flex justify-center items-center relative z-10 sm:px-16 px-6 -mt-[350px] sm:-mt-52">
        <Tabs />
      </div>
      <Banner />
    </section>
  );
};

export default HeroSection;
