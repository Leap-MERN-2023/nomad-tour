import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AirPortProvider from "@/context/airportProvider";

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
      <AirPortProvider>
      <body className={inter.className}>{children}</body>
      </AirPortProvider>
    </html>
  );
}
