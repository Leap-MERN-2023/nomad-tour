import React, {useContext} from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from '@/context/authProvider';

function HeaderAccount() {
	const Router = useRouter();
	const {user,logout} =useContext(AuthContext)
	const handlelogout = () => {
	   logout(),Router.push("/")
	} 
	return (
		<div className="flex justify-between">
			<div className="flex gap-8 items-center">
			</div>
			<div className="flex items-center gap-5">
				<div className="text-base text-[#27292C]">{user.name}</div>
				<img
					priority
					src={"/assets/nomad.png"}
					height={48}
					width={48}
					className="rounded-full"
					alt=""
				/>
				<button className="btn hover:btn-info hover:text-white" onClick={handlelogout}>logout</button>
			</div>
		</div>
	);
}

export default HeaderAccount;
