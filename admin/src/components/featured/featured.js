import { datasFromAPI } from "@/lib/datas";
import { cn } from "@/lib/utils";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";

function Featured({ name, tripImage, onClickPrev, onClickNext }) {
	return (
		<div className="relative rounded-2xl pt-6">
			<div
				className={cn(
					name == datasFromAPI[0].name ? "bg-[#FEECCF]" : "bg-[#CFEDFE]",
					"bg-contain bg-right-bottom bg-no-repeat font-semibold rounded-2xl h-[270px] w-full"
					)}
				style={{ backgroundImage: `url(${tripImage})` }}
			></div>

			<div className="absolute left-10 top-16">
				<div className="font-semibold pb-5">Nearest trip</div>
				<div className="text-7xl font-bold pb-28">
					{name}
				</div>
				<div className="absolute bottom-0 flex p-2 pb-6 pl-0 pt-0 text-xl">
					<button
						disabled={name === datasFromAPI[0].name}
						className={cn(
							name === datasFromAPI[0].name ? "bg-transparent" : "bg-white",
							"p-4 rounded-full"
						)}
						onClick={onClickPrev}
					>
						<HiOutlineArrowLeft />
					</button>
					<button
						disabled={name === datasFromAPI[1].name}
						className={cn(
							name === datasFromAPI[1].name ? "bg-transparent" : "bg-white",
							"p-4 rounded-full"
						)}
						onClick={onClickNext}
					>
						<HiOutlineArrowRight />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Featured;