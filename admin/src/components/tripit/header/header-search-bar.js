import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

function HeaderSearchBar() {
	return (
		<div className="flex justify-between">
			<div className="flex gap-10 items-center">
				<div>Travels</div>
				<IoIosArrowDown className="w-5 h-5" />
				<div className="text-[#6B7178]">Search</div>
			</div>
			<FiSearch className="w-6 h-6" />
		</div>
	);
}

export default HeaderSearchBar;