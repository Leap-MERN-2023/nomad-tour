import { HeroSection, Country, HotelCard } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Country />
      <HotelCard />
    </main>
  );
}
