import React from "react";
import Navbar from "./navbar";
import Carousel from "./Carousel";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full">
      <Navbar />
      <Carousel />
    </section>
  );
};

export default HeroSection;
