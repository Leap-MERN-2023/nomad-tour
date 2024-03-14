"use client";
import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav
      className="sm:px-16 px-6 w-full text-white 
    flex items-center py-5  top-0 z-20 
    bg-[#0082B0] backdrop-blur-2xl"
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
        <ul className="list-none hidden sm:flex flex-row gap-10 font-extralight">
          {navItems.map((item) => (
            <li>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
