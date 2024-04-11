"use client";
import React from "react";
import LeftCardOne from "@/components/orderCards/left/leftCardOne";
import RightCardOne from "@/components/orderCards/right/rightCardOne";
import * as yup from "yup";
import { useFormik } from "formik";

const touristValidation = yup.object({
  name: yup.string().required("required name"),
  birthDate: yup.date().required("required date of birthd"),
  gender: yup.string().required("required gender"),
  citizen: yup.string().required("citizen"),
  passportId: yup
    .string()
    .required("required passport id")
    .min(8, "Must be passport id")
    .max(9, "Must be passport id"),
  passportDate: yup.date().required("required passport date"),
  passportValidity: yup.date().required("required"),
  email: yup.string().required("required email").email("please include '@'"),
  userName: yup.string().required("required name"),
  userBirthDate: yup.date().required("required date of birthd"),
  userPhone: yup.string().required("required phone number"),
  userCitizen: yup.string().required("citizen"),
  userEmail: yup
    .string()
    .required("required email")
    .email("please include '@'"),
});
const Order = ({ params }: { params: { id: string } }) => {
  const formik = useFormik({
    onSubmit: async (values) => {
      console.log(values);
    },
    initialValues: {
      name: "",
      birthDate: "",
      gender: "",
      citizen: "",
      passportId: "",
      passportDate: "",
      passportValidity: "",
      email: "",
      userName: "",
      userBirthDate: "",
      userPhone: "",
      userCitizen: "",
      userEmail: "",
    },
    validateOnChange: true,
    validateOnBlur: false,
    validationSchema: touristValidation,
  });
  return (
    <div className=" bg-gray-200  lg:flex lg:justify-center pt-16">
      <LeftCardOne formik={formik} />
      <RightCardOne formik={formik} id={params.id} />
    </div>
  );
};

export default Order;
