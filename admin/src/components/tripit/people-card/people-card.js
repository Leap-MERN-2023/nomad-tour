import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";

function PeopleCard() {
	return (
		<div className="p-6 flex flex-col justify-between h-full">
			<div className="flex justify-between items-center">
				<div className="font-semibold text-base text-[#9AA2AC]">People</div>
				<BsThreeDotsVertical className="text-[#6B7178]" />
			</div>
			<div className="flex items-baseline gap-2">
				<div className="font-bold text-3xl text-[#27292C]">2</div>
				<div className="font-semibold text-base text-[#27292C]">/adults</div>
			</div>
			<div className="flex justify-between text-sm text-[#27292C]">
				<div className="flex items-center gap-2">
					<Image
						priority
						src={"/assets/avatar-concated.svg"}
						height={32}
						width={56}
						alt=""
					/>
					<div>Marta, Artur</div>
				</div>
				<div className="text-2xl border rounded-full px-[9px]">+</div>
			</div>
		</div>
	);
}

export default PeopleCard;
