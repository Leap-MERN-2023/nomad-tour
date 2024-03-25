import { HeroSection, Country, HotelSection, NewsSection, TestSection } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <Country />
      <HotelSection/>
      <NewsSection/>
      <TestSection/>
    </main>
  );
}
