import { Sora as Font } from "next/font/google";
import "@/styles/globals.css";
import SideBar from "@/components/sidebar/sidebar";

const font = Font({ subsets: ["latin"] });

export const metadata = {
	title: "Tripit - Free Dashboard UI",
	description: "sic linea codice creatus est",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}