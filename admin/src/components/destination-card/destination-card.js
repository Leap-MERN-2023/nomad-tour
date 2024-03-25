import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { IoAirplane } from "react-icons/io5";

function DestinationCard({ endDestination, durationDestination }) {
	return (
		<div className="p-6 flex flex-col justify-between h-full">
			<div className="flex justify-between items-center">
				<div className="font-semibold text-base text-[#9AA2AC]">
					Destination
				</div>
				<BsThreeDotsVertical className="text-[#6B7178]" />
			</div>
			<div className="font-bold text-3xl text-[#27292C]">Rome</div>
			<div className="flex justify-between">
				<div className="flex gap-4 font-semibold items-center text-sm text-[#27292C]">
					<div>🇵🇱 Poland</div>
					<HiOutlineSwitchHorizontal className="text-[#9AA2AC]" />
					<div>{endDestination}</div>
				</div>
				<div className="flex gap-2 items-center">
					<IoAirplane className="text-[#9AA2AC]" />
					<div className="font-semibold text-[#27292C] text-sm">{`${durationDestination} flight`}</div>
				</div>
			</div>
		</div>
	);
}

export default DestinationCard;
