import Image from "next/image";

function Chart({ expensesImage }) {
	return (
		<div className="h-full w-full flex flex-col pt-6">
			<div className="text-[#9AA2AC] font-semibold">Expenses</div>
			<Image
				alt=""
				src={expensesImage}
				height={174.1}
				width={200}
				className="w-full px-16 my-5"
			/>
			<div className="flex justify-between text-sm font-semibold">
				<div className="flex items-center gap-2">
					<span className="w-2 h-2 outline-2 outline-[#02AF72] outline rounded-full"></span>
					Transport
				</div>
				<div className="flex items-center gap-2">
					<span className="w-2 h-2 outline-2 outline-[#6C50FC] outline rounded-full"></span>
					Hotel
				</div>
				<div className="flex items-center gap-2">
					<span className="w-2 h-2 outline-2 outline-[#FF742C] outline rounded-full"></span>
					Other
				</div>
			</div>
		</div>
	);
}

export default Chart;