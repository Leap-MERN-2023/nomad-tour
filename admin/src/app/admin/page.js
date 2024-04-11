"use client";

import { Button } from "@/components/tripit/ui/button";
import { datasFromAPI } from "@/lib/datas";
import { useState } from "react";
import Link from "next/link";
// import HeaderSearchBar from "@/components/tripit/header/header-search-bar";
import HeaderAccount from "@/components/tripit/header/header-account";
import Featured from "@/components/tripit/featured/featured";
import Chart from "@/components/tripit/chart/chart";
import Calendar from "@/components/tripit/calendar/calendar";
import TravelDateCard from "@/components/tripit/travel-date-card/travel-date-card";
import PeopleCard from "@/components/tripit/people-card/people-card";
import DestinationCard from "@/components/tripit/destination-card/destination-card";
import Map from "@/components/tripit/map/map";
import Todos from "@/components/tripit/todos/todos";
import Timeline from "@/components/tripit/timeline/timeline";

function Admin() {
	const [currentData, setCurrentData] = useState(datasFromAPI[0]);

	function prevPage() {
		setCurrentData(datasFromAPI[0]);
	}

	function nextPage() {
		setCurrentData(datasFromAPI[1]);
	}

	return (
		<div className="h-full w-full space-y-5">
			<div className="flex gap-5">
				<div className="flex h-fit w-10/12">
					{/* <div className="flex flex-col justify-center border-b-[1px] border-[#27292c21] w-full h-20">
						<HeaderSearchBar />
					</div> */}
				</div>
				<div className="flex h-fit w-4/12">
					<div className="flex flex-col justify-center border-b-[1px] border-[#27292c21] w-full h-20">
						<HeaderAccount />
					</div>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="flex flex-col h-fit w-10/12 gap-5">
					<div className="flex gap-6 w-full">
						<div className="w-8/12 h-fit">
							<Featured
								name={currentData.name}
								tripImage={currentData.tripImage}
								onClickPrev={(event) => {
									prevPage();
								}}
								onClickNext={nextPage}
							/>
						</div>
						<div className="w-4/12 h-fit">
							<Chart expensesImage={currentData.expensesImage} />
						</div>
					</div>
					<div className="flex gap-5 w-full">
						<div className="bg-white w-4/6 h-44 rounded-2xl">
							<TravelDateCard
								totalTravelDate={currentData.totalTravelDate}
								startTravelDate={currentData.startTravelDate}
								endTravelDate={currentData.endTravelDate}
							/>
						</div>
						<div className="bg-white w-4/6 h-44 rounded-2xl">
							<PeopleCard />
						</div>
						<div className="bg-white w-full h-44 rounded-2xl">
							<DestinationCard
								endDestination={currentData.endDestination}
								durationDestination={currentData.durationDestination}
							/>
						</div>
					</div>
				</div>
				<div className="h-fit w-4/12">
					<div className="w-full h-fit">
						<Calendar
							timelineMonth={currentData.timelineMonth}
							timelineDate={currentData.timelineDate}
							timelineSuggestedDate={currentData.timelineSuggestedDate}
							timelineRecommendedDate={currentData.timelineRecommendedDate}
						/>
					</div>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="flex h-fit w-10/12 gap-5 pb-5">
					<div className="bg-transparent w-2/5 h-[508px]">
						<Map mapImage={currentData.mapImage} />
					</div>
					<div className="bg-transparent w-full h-[508px]">
						<Todos listTodos={currentData.todos}/>
					</div>
				</div>
				<div className="h-fit w-4/12">
					<div className="bg-transparent w-full h-[528px]">
						<Timeline timelineImage={currentData.timelineImage}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
