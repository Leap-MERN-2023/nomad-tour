import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

function HeaderAccount() {
	return (
		<div className="flex justify-between">
			<div className="flex gap-8 items-center">
				<Image
					priority
					src={"/assets/flag-uk.svg"}
					height={28}
					width={28}
					alt=""
				/>
				<Image
					priority
					src={"/assets/notification-icon.svg"}
					height={32}
					width={32}
					alt=""
				/>
			</div>
			<div className="flex items-center gap-5">
				<div className="text-base text-[#27292C]">Nick McMilan</div>
				<Image
					priority
					src={"/assets/avatar-nick.svg"}
					height={48}
					width={48}
					alt=""
				/>
			</div>
		</div>
	);
}

export default HeaderAccount;
