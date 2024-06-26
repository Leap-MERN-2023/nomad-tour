import {
	IoManOutline,
	IoAirplaneOutline,
	IoBedOutline,
	IoBusinessOutline,
	IoEarth,
} from "react-icons/io5";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { TbPlaneInflight } from "react-icons/tb";

const sidebarMenu = [
	{
		id: 1,
		name: "users",
		route: "/admin/user",
		icon: IoManOutline,
	},
	{
		id: 2,
		name: "Airports",
		route: "/admin/airport",
		icon:IoBusinessOutline,
	},
	{
		id: 3,
		name: "Hotels",
		route: "/admin/hotel",
		icon: IoBedOutline,
	},
	{
		id: 4,
		name: "Flights",
		route: "/admin/flight",
		icon: IoAirplaneOutline,
	},
	// {
	// 	id: 5,
	// 	name: "Country",
	// 	route: "/admin/country",
	// 	icon: IoEarth,
	// },
	{
		id: 6,
		name: "Airlines",
		route: "/admin/airlines",
		icon: TbPlaneInflight,
	},
	// {
	// 	id: 7,
	// 	name: "Ticket",
	// 	route: "/admin/ticket",
	// 	icon: MdOutlineAirplaneTicket,
	// },
	// {
	// 	id: 8,
	// 	name: "Order",
	// 	route: "/admin/order",
	// 	icon: MdOutlineBorderColor,
	// },
];

const shortDay = [
	{ name: "Mo" },
	{ name: "Tu" },
	{ name: "We" },
	{ name: "Th" },
	{ name: "Fr" },
	{ name: "Sa" },
	{ name: "Su" },
];

const calenderDate = [
	{ name: "1" },
	{ name: "2" },
	{ name: "3" },
	{ name: "4" },
	{ name: "5" },
	{ name: "6" },
	{ name: "7" },
	{ name: "8" },
	{ name: "9" },
	{ name: "10" },
	{ name: "11" },
	{ name: "12" },
	{ name: "13" },
	{ name: "14" },
	{ name: "15" },
	{ name: "16" },
	{ name: "17" },
	{ name: "18" },
	{ name: "19" },
	{ name: "20" },
	{ name: "21" },
	{ name: "22" },
	{ name: "23" },
	{ name: "24" },
	{ name: "25" },
	{ name: "26" },
	{ name: "27" },
	{ name: "28" },
	{ name: "29" },
	{ name: "30" },
	{ name: "31" },
	{ name: "1" },
	{ name: "2" },
	{ name: "3" },
	{ name: "4" },
];

export { sidebarMenu, shortDay, calenderDate };