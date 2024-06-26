"use client";
import React from "react";

const Oppurtunity = ({ isAgree, setIsAgree, agreeMessage }: any) => {
  return (
    <div className="bg-white rounded-xl p-6 lg:w-[900px]">
      <p className="text-black text-xl font-semibold">
        Oppurtunity and conditions
      </p>
      <p className="text-gray-800">Please read carefully</p>
      <hr className="w-full  bg-gray-400 h-[1.5px] my-3"></hr>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold text-black my-2">terms of service</h1>
      </div>
      <ul className="w-76 lg:w-[850px] scroll-my-9">
        <li className="text-black">
          1. The customer has the right to purchase and receive services from
          Nomad-tour on the basis of full acceptance and confirmation of
          Nomad-tour's terms of service.
        </li>
        <li className="text-black">
          2. The client is a citizen of 18 years of age who is legally
          responsible.
        </li>
        <li className="text-black">
          3. The selling party "Nomad-tour" LLC sells airline ticket, hotel,
          insurance, and i-SIM bookings through its web and mobile applications
          in accordance with the above service conditions, and the customer
          party, "hereinafter referred to as the customer party", purchases the
          above services. regulates the rights and responsibilities of the
          parties.
        </li>
        <li className="text-black">
          4. With the consent of the client, access the State electronic
          database through the HUR and DAN system to verify the accuracy of the
          user's information.
        </li>
        <li className="text-black">
          5. AYTRIP does not guarantee the accuracy and completeness of the
          information entered by the client, or undertakes to change or correct
          them.
        </li>
        <p className="text-black">
          All information, software, bookings, etc. posted on the Nomad-tour
          reservation system offered by us are prohibited to be sold through
          others without permission, copied or traded using other links.
        </p>
      </ul>
      <p className="text-black">Rights and obligations of the client</p>
      <div className="flex items-center mt-10 gap-4">
        <input
          checked={isAgree}
          onChange={() => setIsAgree(!isAgree)}
          type="checkbox"
          className="checkbox"
        />
        <p className="font-medium text-black">Agree to Terms and Condition</p>
        <p className="text-red-400 text-sm">{agreeMessage}</p>
      </div>
    </div>
  );
};

export default Oppurtunity;
