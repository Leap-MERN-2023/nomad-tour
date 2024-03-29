import {
  HeroSection,
  Country,
  HotelSection,
  NewsSection,
  TestSection,
} from "@/components";
import Footer from "@/components/Footer";
import { EmailSection } from "@/components/emailSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <Country />
      <HotelSection />
      <NewsSection />
      <TestSection />
      <EmailSection />
      <Footer />
    </main>
  );
}
