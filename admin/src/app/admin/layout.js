import SideBar from "@/components/sidebar/sidebar";

function AdminLayout({ children }) {
	return (
		<div>
			<SideBar />
			<main className="flex h-screen flex-col pl-[355px] pr-10 pt-6">
				{children}
			</main>
		</div>
	);
}

export default AdminLayout;