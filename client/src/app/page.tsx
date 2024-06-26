import React from "react";
import {
  Country,
  HeroSection,
  HotelSection,
  NewsSection,
  TestSection,
} from "../components";
import Footer from "../components/Footer";
import { EmailSection } from "../components/emailSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <HotelSection />
      <Country />
      <NewsSection />
      <TestSection />
    </main>
  );
}
