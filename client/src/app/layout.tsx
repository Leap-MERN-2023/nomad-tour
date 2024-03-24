import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AirPortProvider from "@/context/airportProvider";
import CountryProvider from "@/context/CountryProvider";
import HotelProvider from "@/context/hotelProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomad Tour: Travel booking, Homes, Hotels, Flights and more",
  description: "Travel booking, Homes, Hotels, Flights and more",
  keywords: "travel, easy travel, flight, cheap travel, hotel, home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CountryProvider>
          <HotelProvider>
            <AirPortProvider>{children}</AirPortProvider>
          </HotelProvider>
        </CountryProvider>
      </body>
    </html>
  );
}
