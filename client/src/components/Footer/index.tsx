"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center  text-white bg-black pt-10">
      <div className="flex w-full justify-evenly lg:w-3/4 lg:justify-between 2xl:w-3/4 2xl:justify-between items-center p-7 2xl:py-10">
        <div className=" flex flex-col  gap-3 lg:flex-row lg:gap-16  2xl:w-1/2 2xl:justify-between 2xl:mr-28">
          <div className="flex-initial ">
            <h1 className="text-lg md:text-2xl font-bold lg:text-4xl 2xl:text-4xl 2xl:my-5">
              Support
            </h1>
            <div className="text-sm lg:text-lg 2xl:text-xl">
              <h1>Help center</h1>
              <h1>Safety information</h1>
              <h1>Cancelation options</h1>
            </div>
          </div>
          <div className="flex-initial">
            <h1 className="text-lg md:text-2xl font-bold lg:text-4xl 2xl:text-4xl 2xl:my-5">
              Company
            </h1>
            <div className="text-sm lg:text-lg 2xl:text-xl">
              <h1>About us</h1>
              <h1>Privacy policy</h1>
              <h1>Community Blog</h1>
              <h1>Terms of servise</h1>
            </div>
          </div>
        </div>
        {/* //////// */}
        <div className=" flex flex-col justify-between gap-12 lg:flex-row lg:gap-16 2xl:w-1/2 2xl:justify-between 2xl:ml-28">
          <div className="flex-initial">
            <h1 className="text-lg md:text-2xl font-bold lg:text-4xl 2xl:text-4xl 2xl:my-5">
              Contact
            </h1>
            <div className="text-sm lg:text-lg 2xl:text-xl">
              <h1>FAQ</h1>
              <h1>CAQ</h1>
              <h1>Get in touch</h1>
              <h1>Partnerships</h1>
            </div>
          </div>
          <div className="flex-initial ">
            <h1 className="text-lg md:text-2xl font-bold mb-1 lg:text-4xl 2xl:text-4xl 2xl:my-5">
              Social
            </h1>
            <div className="flex text-xl  gap-5 lg:text-2xl  2xl:text-4xl">
              <FaFacebook />
              <FaTwitter />
              <FaTiktok />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-7 flex flex-col gap-3 2xl:py-14 ">
        <div className="border-t-[1px] border-white w-full"></div>
        <div className="flex justify-between ">
          <h1 className="text-xl">@Nomad Tour 2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
