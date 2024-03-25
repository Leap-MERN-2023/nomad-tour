import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AirPortProvider from "@/context/airportProvider";
import CountryProvider from "@/context/CountryProvider";
import HotelProvider from "@/context/hotelProvider";
import { UserContext, UserProvider } from "@/context/UserProvider";

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
        <UserProvider>
          <CountryProvider>
            <HotelProvider>
              <AirPortProvider>{children}</AirPortProvider>
            </HotelProvider>
          </CountryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
