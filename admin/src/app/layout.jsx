import { Sora as Font } from "next/font/google";
import "./globals.css";
import AirPortProvider from "@/context/airportProvider";
import AuthProvider from "@/context/authProvider";
import FlightProvider from "@/context/flightProvider";
import HotelProvider from "@/context/hotelProvider";
import CountryProvider from "@/context/countryProvider";
import { ChakraProvider } from '@chakra-ui/react';
import  AirlinesProvider  from "@/context/airlines";
import TicketProvider from "@/context/ticket";
const font = Font({ subsets: ["latin"] });

export const metadata = {
	title: "nomad-tour - travel web",
	description: "sic linea codice creatus est",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<CountryProvider>
				  <HotelProvider>
				    <FlightProvider>
				      <AuthProvider>
					  <ChakraProvider>
				        <AirPortProvider>
						 <AirlinesProvider>
							<TicketProvider>
				           {children}
						   </TicketProvider>
						 </AirlinesProvider>
				        </AirPortProvider>
						</ChakraProvider>
				      </AuthProvider>
				    </FlightProvider>
				  </HotelProvider>
				</CountryProvider>
			</body>
		</html>
	);
}