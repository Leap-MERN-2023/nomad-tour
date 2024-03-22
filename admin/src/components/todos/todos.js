import { cn } from "@/lib/utils";
import { BsArrowDownUp } from "react-icons/bs";

function Todos({ listTodos }) {
	return (
		<div className="flex flex-col gap-7 h-full">
			<div className="flex justify-between items-center px-5">
				<div className="font-bold text-3xl">{`To do’s`}</div>
				<div className="font-semibold flex gap-3 items-center">
					<div>Sort</div>
					<BsArrowDownUp className="text-[#212121]" />
				</div>
			</div>
			<table className="table-fixed w-full border-separate border-spacing-y-3 text-sm text-[#9AA2AC]">
				<thead className="text-left">
					<tr>
						<th className="px-5 py-2 w-1/12 font-normal">#</th>
						<th className="px-5 py-2 w-1/12 font-normal"></th>
						<th className="px-5 py-2 w-full font-normal">Task name</th>
						<th className="px-5 py-2 w-4/12 font-normal">Assignee</th>
						<th className="px-5 py-2 w-4/12 font-normal">Priority</th>
					</tr>
				</thead>
				<tbody>
					{listTodos?.map((todos, index) => (
						<tr
							key={index}
							className="text-[#27292C] hover:bg-white cursor-pointer"
						>
							<td className="px-5 py-4 rounded-l-2xl">{todos.id}</td>
							<td className="px-4 py-4">
								<div className="outline outline-[#faf9ff] outline-2 rounded-full h-5 w-5 bg-white"></div>
							</td>
							<td className="px-5 pt-4 line-clamp-1 ">{todos.taskName}</td>
							<td className="px-5 py-4">{todos.assignee}</td>
							<td className="px-5 py-4 rounded-r-2xl">
								<div
									className={cn(
										todos.priority === "Low"
											? "bg-[#9AA2AC]"
											: todos.priority == "Medium"
											? "bg-[#FF742C]"
											: "bg-[#DE1C22]",
										"rounded-full p-0.5 text-center text-xs text-white"
									)}
								>
									{todos.priority}
								</div>
							</td>
						</tr>
						// <div key={index}>{todos.id}+{todos.taskName}+{todos.assignee}+{todos.priority}</div>
					))}
					{/* <tr className="text-[#27292C] hover:bg-white cursor-pointer">
						<td className="px-5 py-4 rounded-l-2xl">1</td>
						<td className="px-4 py-4">
							<div className="outline outline-[#faf9ff] outline-2 rounded-full h-5 w-5 bg-white"></div>
						</td>
						<td className="px-5 pt-4 line-clamp-1 ">
							Vitae id lobortis neque adipiscing id enim viverra.
						</td>
						<td className="px-5 py-4">Artur</td>
						<td className="px-5 py-4 rounded-r-2xl">
							<div className="rounded-full bg-[#FF742C] p-0.5 text-center text-xs text-white">
								Medium
							</div>
						</td>
					</tr>
					<tr className="text-[#27292C] hover:bg-white cursor-pointer">
						<td className="px-5 py-4 rounded-l-2xl">1</td>
						<td className="px-4 py-4">
							<div className="outline outline-[#faf9ff] outline-2 rounded-full h-5 w-5 bg-white"></div>
						</td>
						<td className="px-5 pt-4 line-clamp-1 ">
							Vitae id lobortis neque adipiscing id enim viverra.
						</td>
						<td className="px-5 py-4">Artur</td>
						<td className="px-5 py-4 rounded-r-2xl">
							<div className="rounded-full bg-[#FF742C] p-0.5 text-center text-xs text-white">
								Medium
							</div>
						</td>
					</tr>
					<tr className="text-[#27292C] hover:bg-white cursor-pointer">
						<td className="px-5 py-4 rounded-l-2xl">1</td>
						<td className="px-4 py-4">
							<div className="outline outline-[#faf9ff] outline-2 rounded-full h-5 w-5 bg-white"></div>
						</td>
						<td className="px-5 pt-4 line-clamp-1 ">
							Vitae id lobortis neque adipiscing id enim viverra.
						</td>
						<td className="px-5 py-4">Artur</td>
						<td className="px-5 py-4 rounded-r-2xl">
							<div className="rounded-full bg-[#FF742C] p-0.5 text-center text-xs text-white">
								Medium
							</div>
						</td>
					</tr>
					<tr className="text-[#27292C] hover:bg-white cursor-pointer">
						<td className="px-5 py-4 rounded-l-2xl">1</td>
						<td className="px-4 py-4">
							<div className="outline outline-[#faf9ff] outline-2 rounded-full h-5 w-5 bg-white"></div>
						</td>
						<td className="px-5 pt-4 line-clamp-1 ">
							Vitae id lobortis neque adipiscing id enim viverra.
						</td>
						<td className="px-5 py-4">Artur</td>
						<td className="px-5 py-4 rounded-r-2xl">
							<div className="rounded-full bg-[#DE1C22] p-0.5 text-center text-xs text-white">
								High
							</div>
						</td>
					</tr>
					<tr className="text-[#27292C] hover:bg-white cursor-pointer">
						<td className="px-5 py-4 rounded-l-2xl">1</td>
						<td className="px-4 py-4">
							<div className="outline outline-[#faf9ff] outline-2 rounded-full h-5 w-5 bg-white"></div>
						</td>
						<td className="px-5 pt-4 line-clamp-1 ">
							Vitae id lobortis neque adipiscing id enim viverra.
						</td>
						<td className="px-5 py-4">Artur</td>
						<td className="px-5 py-4 rounded-r-2xl">
							<div className="rounded-full bg-[#9AA2AC] p-0.5 text-center text-xs text-white">
								Low
							</div>
						</td>
					</tr> */}
				</tbody>
			</table>
			<div className="flex justify-center items-center px-5 outline outline-1 outline-[#9AA2AC] rounded-2xl cursor-pointer hover:bg-white">
				<div className="p-1.5 text-[#6B7178]">Add new task +</div>
			</div>
		</div>
	);
}

export default Todos;
