import { UserContext } from "@/context/UserProvider";
import React, { useState } from "react";
import { useContext } from "react";

export const LoginForm = ({ open, closeForm }: any) => {
  const {login}=useContext(UserContext)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
     
    });
    console.log(value)
  };

  const handleSubmit = () => {
 
    login(formData.email, formData.password);
    console.log("work",formData.email )
  };

  return (

    <dialog
      open={open} className="modal flex justify-center items-center w-[100] h-screen rounded-xl absolute z-50 bg-black bg-opacity-40"
    >
        <div className="modal-box flex flex-col gap-4  bg-white w-[330px] h-[450px] md:w-[420px] absolute z-50 ">
          <div className="flex justify-around">
            <div className="">
              <button className="text-blue-900 font-bold">Нэвтрэх </button>
              <button className="text-blue-900 font-bold">/ Бүртгүүлэх </button>
            </div>
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black"
          />
          <input
          
            type="text"
            placeholder="password"
            className="input input-bordered p-3 max-w-xs rounded-md bg-slate-100 text-black"
            value={formData.password}
            onChange={handleChange}
            name="password"
            
          />
          <div className="flex justify-end">
            <button className="btn btn-outline btn-success">
              Нууц үг мартсан
            </button>
          </div>
          <button className="btn btn-neutral" onClick={handleSubmit}>Үргэлжлүүлэх</button>
          <div className="divider divider-neutral text-black">OR</div>
          <div className="flex justify-between">
            <button className="border-[1px] sm:w-24 w-16 p-3 hover:bg-gray-200 rounded-md flex justify-center">
              <img
                src="https://cdn.icon-icons.com/icons2/730/PNG/512/gmail_icon-icons.com_62758.png"
                className="w-6 rounded-full "
              />
            </button>
            <button className="border-[1px] w-16 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
              <img
                src="https://www.cabriniclinic.org/wp-content/uploads/2014/02/facebook-icon.png"
                className="w-6 rounded-full"
              />
            </button>
            <button className="border-[1px] w-16 p-3 sm:w-24 hover:bg-gray-200 rounded-md flex justify-center">
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
