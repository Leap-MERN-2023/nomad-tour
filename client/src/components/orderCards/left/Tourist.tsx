"use client";
import { useFlightOrder } from "@/context/FlightOrderProvider";
import React from "react";

const Tourist = ({ formik }: any) => {
  const { handleTourist } = useFlightOrder();

  return (
    <div className="bg-white rounded-xl lg:w-[900px] lg:flex lg:flex-col lg:justify-between p-6">
      <div className="flex justify-between ">
        <p className="text-black text-xl font-bold">Information of tourist</p>
      </div>
      <hr className="w-full  bg-gray-400 h-[1.5px] my-3"></hr>
      <div className="">
        <div className="lg:justify-between lg:flex lg:gap-3">
          <div>
            <p className="text-black">First name </p>
            <span className="text-red-400">{formik.errors["name"]}</span>
            <input
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="rounded-xl p-2 border-[1px]  bg-white lg:w-[250px] w-full lg:h-10 text-black "
            />
          </div>
          <div>
            <p className="text-black">Second name</p>
            <span className="text-red-400">{formik.errors["name"]}</span>
            <input className="rounded-xl  border-[1px] p-2  bg-white w-full lg:w-[250px] lg:h-10 text-black" />
          </div>
          <div>
            <p className="text-black">Date of birth </p>
            <span className="text-red-400">{formik.errors["birthDate"]}</span>
            <input
              type="date"
              name="birthDate"
              onChange={formik.handleChange}
              value={formik.values.birthDate}
              className="rounded-xl   border-[1px] p-2  bg-white w-full lg:w-[250px] lg:h-10 text-black"
            />
          </div>
        </div>
        <div className="lg:flex gap-1 lg:justify-between">
          <div>
            <p className="text-black">Gender </p>
            <span className="text-red-400">{formik.errors["gender"]}</span>
            <select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10 text-black"
            >
              <option disabled selected>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <p className="text-black">Citizen </p>
            <span className="text-red-400">{formik.errors["citizen"]}</span>
            <input
              name="citizen"
              onChange={formik.handleChange}
              value={formik.values.citizen}
              className="rounded-xl  p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10 text-black"
            />
          </div>
          <div>
            <p className="text-black">Passport Id </p>
            <span className="text-red-400">{formik.errors["passportId"]}</span>
            <input
              name="passportId"
              onChange={formik.handleChange}
              value={formik.values.passportId}
              placeholder="E1234567"
              className="rounded-xl p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10 text-black"
            />
          </div>
        </div>
        <div className="lg:flex gap-1 lg:justify-between">
          <div>
            <p className="text-black">Date of passport issue </p>
            <span className="text-red-400">
              {formik.errors["passportDate"]}
            </span>
            <input
              name="passportDate"
              onChange={formik.handleChange}
              value={formik.values.passportDate}
              type="date"
              className="rounded-xl - p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10 text-black"
            />
          </div>
          <div>
            <p className="text-black">Date of passport validity </p>
            <span className="text-red-400">
              {formik.errors["passportValidity"]}
            </span>
            <input
              name="passportValidity"
              onChange={formik.handleChange}
              value={formik.values.passportValidity}
              type="date"
              className="rounded-xl  p-2  border-[1px]  bg-white w-full lg:w-[250px] lg:h-10 text-black"
            />
          </div>
          <div>
            <p className="text-black">
              Email{" "}
              <span className="text-red-400">{formik.errors["email"]}</span>
            </p>
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="rounded-xl  p-2  border-[1px] bg-white w-full lg:w-[250px] lg:h-10 text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourist;
