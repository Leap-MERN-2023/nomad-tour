import React from "react";
import Navbar from "./navbar";
import Carousel from "./Carousel";
import Tabs from "./Tabs";
import Banner from "./Banner";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section id="home" className="w-full relative bg-white pb-32 ">
      <Carousel />
<<<<<<< Updated upstream
      <div className="w-full flex justify-center items-center relative z-10 sm:px-16 px-6 -mt-[350px] sm:-mt-52">
=======
      <div className="w-full flex justify-center items-center sm:px-16 px-6 absolute top-[500px] z-30">
>>>>>>> Stashed changes
        <Tabs />
      </div>
      <Banner />
    </section>
  );
};

export default HeroSection;
