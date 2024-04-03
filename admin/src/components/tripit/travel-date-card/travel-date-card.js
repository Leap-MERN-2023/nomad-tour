import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

function TravelDateCard({ totalTravelDate, startTravelDate, endTravelDate }) {
	return (
		<div className="p-6 flex flex-col justify-between h-full">
			<div className="flex justify-between items-center">
				<div className="font-semibold text-base text-[#9AA2AC]">
					Travel date
				</div>
				<BsThreeDotsVertical className="text-[#6B7178]" />
			</div>
			<div className="font-bold text-3xl text-[#27292C]">{`${totalTravelDate} days`}</div>
			<div className="flex justify-between items-center font-semibold text-sm text-[#27292C]">
				<div>{`${startTravelDate}`}</div>
				<HiOutlineSwitchHorizontal className="text-[#1D85FF]" />
				<div>{`${endTravelDate}`}</div>
			</div>
		</div>
	);
}

export default TravelDateCard;
