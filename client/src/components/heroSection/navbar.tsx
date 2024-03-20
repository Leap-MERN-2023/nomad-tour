"use client";
import { navItems } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { LoginForm } from "../LoginForm";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

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
    <nav
      className="sm:px-16 px-6 w-full text-white 
    flex items-center py-5 relative z-20 "
    >
      <div
        className="w-full flex justify-between 
      items-center max-w-7xl mx-auto "
      >
        <Link
          href="/"
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
                <a href={`#${nav.url}`}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10 font-extralight">
          {navItems.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
        <button onClick={openForm}>Login</button>
      </div>
      <LoginForm open={open} closeForm={closeForm} />
    </nav>
  );
};

export default Navbar;
