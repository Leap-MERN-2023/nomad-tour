import { HeroSection } from "@/components";
import Image from "next/image";
import Country from "@/components/country";

export default function Home() {
  return (
    <main className="w-screen">
      <HeroSection />
      <Country />
    </main>
  );
}
