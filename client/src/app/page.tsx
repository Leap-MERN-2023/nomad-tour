import { HeroSection, Country, HotelCard } from "@/components";
import { EmailSection } from "@/components/emailSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <Country />
      <HotelCard />
      <EmailSection/>
    </main>
  );
}
