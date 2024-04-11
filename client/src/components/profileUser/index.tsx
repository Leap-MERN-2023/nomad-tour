import React, { useContext } from "react";
import { carouselImages } from "@/constants";
import { UserContext } from "@/context/UserProvider";

export const ProfileUser = () => {
  const { user, isUserLoggedIn, logOut } = useContext(UserContext);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 h-screen relative">
      <img src="https://images.unsplash.com/photo-1517429128955-67ff5c1e29da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      <div className="w-[50%] absolute ">
        <p className="font-bold text-4xl">Profile</p>
        <div className="flex items-center gap-4">
          <p className="items-center text-2xl font-bold">Name:</p>
          <p className="text-xl">{user.name}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="items-center text-2xl font-bold">Email:</p>
          <p className="text-xl">{user.email}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="items-center text-2xl font-bold">PhoneNumber:</p>
          <p className="text-xl">{user.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};
