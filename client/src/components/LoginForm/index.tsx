import React, { useState } from "react";

export const LoginForm = ({ open, closeForm }: any) => {
  return (
    <dialog
      open={open}
      className="modal bg-slate-200 w-96 flex h-96 rounded-xl my-36 mx-24"
    >
      <div className="modal-box flex flex-col gap-4 w-full h-full">
        <div className="flex justify-around">
          <p className="text-blue-900 font-bold">Нэвтрэх / Бүртгүүлэх</p>
          <button
            onClick={closeForm}
            className="hover:text-black  text-gray-700"
          >
            X
          </button>
        </div>

        <input
          type="text"
          placeholder="email"
          className="input input-bordered w-full p-3 max-w-xs rounded-md "
        />
        <input
          type="text"
          placeholder="password"
          className="input input-bordered w-full p-3 max-w-xs rounded-md"
        />
        <div className="flex justify-end">
          <button className="btn btn-outline btn-success">
            Нууц үг мартсан
          </button>
        </div>
        <button className="btn  btn-neutral">Үргэлжлүүлэх</button>
        <div className="divider divider-neutral text-black">OR</div>
        <div className="flex justify-between">
          <button className="border-[1px]  w-24 p-3 hover:bg-gray-200 rounded-md flex justify-center">
            <img
              src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
              className="w-6 rounded-full"
            />
          </button>
          <button className="border-[1px] w-24 p-3 hover:bg-gray-200 rounded-md flex justify-center">
            <img
              src="https://www.cabriniclinic.org/wp-content/uploads/2014/02/facebook-icon.png"
              className="w-6 rounded-full"
            />
          </button>
          <button className="border-[1px] w-24 p-3 hover:bg-gray-200 rounded-md flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/695/original/twitter-logo-twitter-icon-transparent-free-free-png.png"
              className="w-6 rounded-full"
            />
          </button>
        </div>
      </div>
    </dialog>
  );
};
