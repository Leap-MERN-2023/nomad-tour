"use client";
import { navItems } from "@/constants";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { LoginForm } from "../LoginForm";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { UserContext } from "@/context/UserProvider";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const openForm = () => {
    setOpen(() => true);
  };
  const closeForm = () => {
    setOpen(() => false);
  };

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <>
      <div
        className="sm:px-16 px-6 w-full
    flex items-center py-5 fixed z-40 bg-gray-600 h-20 opacity-60 "
      ></div>
      <nav
        className="sm:px-16 px-6 w-full text-white 
<<<<<<< Updated upstream
    flex items-center py-5 fixed z-50 backdrop-blur-sm"
=======
    flex items-center py-5 fixed z-50 "
        className="w-full flex justify-between 
      items-center max-w-7xl mx-auto bg-black "
>>>>>>> Stashed changes
      >
        <div
          className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="#home"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <h1 className="font-bold text-2xl ">Nomad Tour</h1>
          </Link>
          <div
            className="sm:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <IoClose size="30px" /> : <CiMenuBurger size="30px" />}
          </div>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg bg-white`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navItems.map((nav) => (
                <li
                  key={nav.name}
                  className={`${
                    active === nav.name ? "text-black" : "text-gray-700"
                  } font-poppins hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(nav.name);
                    setToggle(!toggle);
                  }}
                >
                  {nav.url === "login" ? (
                    <button
                      className="bg-blue-400 text-white"
                      onClick={openForm}
                    >
                      Login / Signup
                    </button>
                  ) : (
                    <a href={`${nav.url}`}>{nav.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <ul className="list-none hidden sm:flex items-center flex-row gap-10 font-extralight">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.url === "login" ? (
                  <button
                    className="btn border-0 hover:bg-blue-500 bg-[#0281B0] text-white"
                    onClick={openForm}
                  >
                    Login / Signup
                  </button>
                ) : (
                  <a href={item.url}>{item.name}</a>
                )}
              </li>
            ))}
          </ul>
          <LoginForm open={open} closeForm={closeForm} />
        </div>
<<<<<<< Updated upstream
      </nav>
    </>
=======
        <ul className="list-none hidden sm:flex flex-row gap-10 font-extralight">
          {navItems.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
        <button onClick={openForm}>Login</button>
        <LoginForm open={open} closeForm={closeForm} />
      </div>
    </nav>
>>>>>>> Stashed changes
  );
};

export default Navbar;
