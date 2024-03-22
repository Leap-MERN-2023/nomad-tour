import { calenderDate, shortDay } from "@/lib/constants";
import { HiPlus, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import React from "react";
import { cn } from "@/lib/utils";
function Calendar({ timelineMonth, timelineDate, timelineSuggestedDate, timelineRecommendedDate }) {
	return (
		<div className="flex flex-col pt-6 -mb-2">
			<div className="flex justify-between pb-10 items-center">
				<div className="font-bold text-[32px] text-[#27292C]">Timeline</div>
				<button className="font-semibold text-base bg-[#27292C] text-white px-8 py-3 rounded-2xl flex items-center gap-2">
					<div>Add Event</div>
					<HiPlus className="h-6 w-6 text-white font-bold text-base" />
				</button>
			</div>
			<div className="flex justify-between pb-6">
				<div className="text-xl font-bold text-[#27292C]">{timelineMonth}</div>
				<div className="text-[#27292C] flex gap-2">
					<HiOutlineChevronLeft className="text-[#9AA2AC]" />
					<HiOutlineChevronRight className="text-[#27292C]"/>
				</div>
			</div>
			<div className="grid grid-cols-7 justify-items-center pb-2">
				{shortDay.map((item) => (
					<div key={item.name} className="text-[#9AA2AC]">
						{item.name}
					</div>
				))}
			</div>
			<div className="grid grid-cols-7 justify-items-center gap-y-2">
				{calenderDate
					.map((item) => (
						<div
							key={item.name}
							className={cn(
								item.name === timelineDate
									? "bg-[#346AFF] text-white"
									: timelineSuggestedDate.includes(item.name)
									? "text-black"
									: item.name === timelineRecommendedDate
									? "p-5 border"
									: "text-black"
									, "flex w-14 h-14 items-center justify-center rounded-full"
							)}
						>
							{item.name}
							{timelineSuggestedDate.includes(item.name) && (
								<div className="w-1.5 h-1.5 bg-[#9AA2AC] absolute mt-10 rounded-full "> </div>
							)}
						</div>
					))
					.slice(0, -4)}
				{calenderDate
					.map((item) => (
						<div
							key={item.name}
							className="flex w-14 h-14 text-[#6B7178] items-center justify-center rounded-full"
						>
							{item.name}
						</div>
					))
					.slice(-4)}
			</div>
		</div>
	);
}

export default Calendar;