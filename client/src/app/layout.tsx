import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AirPortProvider from "../context/airportProvider";
import CountryProvider from "../context/CountryProvider";
import HotelProvider from "../context/hotelProvider";
import { UserContext, UserProvider } from "../context/UserProvider";
import FlightProvider from "../context/flightProvider";
import Navbar from "../components/heroSection/navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TicketProvider from "../context/ticketProvider";
import { EmailProvider } from "../context/email";
import swal from "sweetalert";
import AirlineProvider from "@/context/AirlineProvider";
import FlightOrderProvider from "@/context/FlightOrderProvider";

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
              <AirPortProvider>
                <AirlineProvider>
                  <FlightProvider>
                    <EmailProvider>
                      <TicketProvider>
                        <FlightOrderProvider>
                          <Navbar />
                          {children}
                          <Footer />
                        </FlightOrderProvider>
                      </TicketProvider>
                      <ToastContainer />
                    </EmailProvider>
                  </FlightProvider>
                </AirlineProvider>
              </AirPortProvider>
            </HotelProvider>
          </CountryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
