function Timeline({ timelineImage }) {
	return (
		<div
			className="bg-transparent h-full w-full"
			style={{
				backgroundImage: `url(${timelineImage})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		></div>
	);
}

export default Timeline;
