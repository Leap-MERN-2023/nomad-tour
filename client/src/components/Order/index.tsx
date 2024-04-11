"use client";

import axios from "axios";
import React, { useContext, useState } from "react";
import * as yup from "yup";
import { UserContext } from "@/context/UserProvider";
import { RoomContext } from "@/context/RoomProvider";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  name: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
}

const HotelOrderPage = () => {
  const { user } = useContext(UserContext);
  const { selectedRoom } = useContext(RoomContext);
  const userId = user;
  const [hotelPrice, setHotelPrice] = useState(selectedRoom[0].price.USD);

  const validationSchema = yup.object({
    name: yup.string().required("You must enter your name."),
    email: yup
      .string()
      .required("You must enter your email address.")
      .email("You must enter a valid email."),
    checkInDate: yup.string().required("You must enter your check-in date."),
    checkOutDate: yup.string().required("You must enter your check-out date."),
  });

  const calculateTotalPrice = (checkInDate: string, checkOutDate: string) => {
    const pricePerNight = selectedRoom[0]?.price.USD || 0;
    const numberOfNights =
      checkInDate && checkOutDate
        ? Math.ceil(
            (new Date(checkOutDate).getTime() -
              new Date(checkInDate).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        : 0;
    return pricePerNight * numberOfNights;
  };

  const createOrder = async (values: Values) => {
    try {
      const totalPrice = calculateTotalPrice(
        values.checkInDate,
        values.checkOutDate
      );
      console.log("TotalPrice", totalPrice);
      const {
        data: { orderedRoom },
      } = await axios.post(
        "http://localhost:8008/order/" + "661762fcadc76ed07a3575c8",
        {
          ...values,
          totalPrice,
          roomId: selectedRoom[0]?._id,
        }
      );

      console.log("Ordered room:", orderedRoom);
    } catch (error) {
      console.log("Err", error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        createOrder(values);
        setSubmitting(false);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <div className="bg-white rounded-xl p-6 lg:w-[900px]">
            <p className="text-black text-xl font-bold">Hotel Order Page</p>
            <hr className="w-full bg-gray-400 h-[1.5px] my-3" />

            <div className="flex flex-col gap-1">
              <div>
                <p className="text-black">Name:</p>
                <Field
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[1px] p-2 bg-white text-black w-full lg:h-10"
                />
              </div>
              <div>
                <p className="text-black">Email:</p>
                <Field
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl p-2 border-[1px] bg-white w-full lg:h-10"
                />
              </div>
              <div>
                <p className="text-black">Check-in Date:</p>
                <Field
                  type="date"
                  name="checkInDate"
                  value={values.checkInDate}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10"
                />
              </div>
              <div>
                <p className="text-black">Check-out Date:</p>
                <Field
                  type="date"
                  name="checkOutDate"
                  value={values.checkOutDate}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-[1px] p-2 bg-white w-full lg:h-10"
                />
              </div>
              <div className=" border-black font-bold text-xl my-4">
                Hotel price by day:
                {hotelPrice}$
              </div>{" "}
              <div className=" border-black font-bold text-xl my-4">
                Total Price:
                {calculateTotalPrice(values.checkInDate, values.checkOutDate)}$
              </div>
            </div>

            <button type="submit" className="btn btn-outline font-extrabold">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default HotelOrderPage;
