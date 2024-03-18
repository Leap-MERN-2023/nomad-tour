import React, { useState } from "react";

export const LoginForm = ({ open, closeForm }: any) => {


  return (
    <dialog open={open} className="modal bg-slate-200 w-64 flex mt-96 rounded-xl flex-col justify-center items-center my-3">
      <div className="modal-box ">
        <div className="flex justify-around">
       <p className="text-blue-900 font-bold">Нэвтрэх / Бүртгүүлэх</p>
       <button  onClick={closeForm} className="hover:text-black  text-gray-700">
             X
            </button>
            </div>
          <div className="flex flex-col gap-2">
          <input type="text" placeholder="email" className="input input-bordered w-56 p-1 max-w-xs rounded-md" />
          <input type="text" placeholder="password" className="input input-bordered w-56 p-1 max-w-xs rounded-md" />
          </div>
          <button className="btn btn-outline btn-success">Success</button>
           
           
         
        
      </div>
    </dialog>
  );
};
