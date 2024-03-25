import {
	IoCalendarOutline,
	IoAirplaneOutline,
	IoBedOutline,
	IoCarOutline,
	IoBusinessOutline,
} from "react-icons/io5";

const sidebarMenu = [
	{
		id: 1,
		name: "All trips",
		route: "/admin/all-trips",
		icon: IoCalendarOutline,
	},
	{
		id: 2,
		name: "Travels",
		route: "/admin/travels",
		icon: IoAirplaneOutline,
	},
	{
		id: 3,
		name: "Rooms",
		route: "/admin/rooms",
		icon: IoBedOutline,
	},
	{
		id: 4,
		name: "Transport",
		route: "/admin/transport",
		icon: IoCarOutline,
	},
	{
		id: 5,
		name: "Attractions",
		route: "/admin/attractions",
		icon: IoBusinessOutline,
	},
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