"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Root() {
	const Router = useRouter()
	return (
		<div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-4 w-1/4 justify-center items-center border-2 rounded-2xl border-black">
        <h1 className="text-3xl mt-4">Login</h1>
		<input
          type="text"
          placeholder="email"
          name="email"
          className="input input-bordered p-3 max-w-xs rounded-xl bg-slate-100 text-black w-[400px]"
        />
        <input
          type="text"
          placeholder="password"
          className="input input-bordered p-3 max-w-xs rounded-xl bg-slate-100 text-black w-[400px]"
          name="password"
        />
        <button
          className="btn btn-success w-[160px] text-white text-xl"
          type="button"
          onClick={() => {Router.push("/admin")}}
        >
          Login
        </button>
        <div className="flex justify-end">
          <button className="btn btn-primary text-white">
            Forget password
          </button>
        </div>

      <div className="divider divider-neutral text-black  sm:mx-6">OR</div>
      <div className="flex sm:gap-5 gap-8 mb-10">
        <button className="border-[1px] sm:w-24 w-20 p-3 hover:bg-gray-200 rounded-md flex justify-center">
          <img
            src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
            className="w-6 rounded-full "
          />
        </button>
        <button className="border-[1px] w-20 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
          <img
            src="https://www.cabriniclinic.org/wp-content/uploads/2014/02/facebook-icon.png"
            className="w-6 rounded-full"
          />
        </button>
        <button className="border-[1px] w-20 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/930/695/original/twitter-logo-twitter-icon-transparent-free-free-png.png"
            className="w-8 rounded-full"
          />
        </button>
      </div>
    </div>
	</div>
	);
}