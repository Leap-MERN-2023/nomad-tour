"use client";

import { sidebarMenu } from "@/lib/constants";
import Image from "next/image";
import Weather from "@/components/weather/weather";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";

function SideBar() {
	const segment = useSelectedLayoutSegment();
	return (
		<div className="p-6 fixed h-screen text-black ">
			<div className="bg-white h-full rounded-2xl p-6 flex flex-col">
				<Link
					href={"/admin"}
					className="flex items-center place-content-center gap-5 py-4 hover:bg-tripit hover:rounded-2xl hover:cursor-pointer"
				>
					<Image
						priority
						src={"/assets/tripit-logo.svg"}
						height={42}
						width={36}
						alt=""
					/>
					<div className="font-bold text-4xl">Tripit</div>
				</Link>
				<div className="py-4">
					<div className="text-center text-white font-semibold rounded-2xl bg-[#346AFF] w-60 p-3">
						New Trip +
					</div>
				</div>
				{sidebarMenu.map((item) => (
					<Link
						href={item.route}
						key={item.id}
						className={cn(
							item.route.includes(segment)
								? "bg-tripit rounded-2xl hover:bg-tripit hover:rounded-2xl hover:cursor-pointer"
								: "bg-white text-[#9AA2AC]",
							"flex gap-4 p-4 items-center font-semibold hover:bg-tripit hover:rounded-2xl hover:cursor-pointer my-1"
						)}
					>
						<item.icon />
						<div>{item.name}</div>
					</Link>
				))}
				<div className="flex flex-col justify-end h-full">
					<Weather />
					<div className="flex gap-4 pt-4 items-center font-semibold">
						<Image
							priority
							src={"/assets/support-icon.svg"}
							height={20}
							width={20}
							alt=""
						/>
						Support
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;