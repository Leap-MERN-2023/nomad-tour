import Image from "next/image";

export default function Root() {
	return (
		<Image
			width={200}
			height={50}
			alt=""
			src="https://img.shields.io/badge/status_tripit_server-running-green"
			className="p-4"
		/>
	);
}