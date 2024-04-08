"use client";
import { useContext, useState } from "react";
import { Tab } from "@headlessui/react";
import MySelect from "./MySelect";
import FlightSearch from "./FlightSearch";
import { IoLocationOutline } from "react-icons/io5";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdOutlineBed } from "react-icons/md";
import { CountryContext } from "@/context/CountryProvider";
import { ICountry } from "@/types";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  const { countries, handleSelectCountry } = useContext(CountryContext);
  const [selectedItem, setSelectedItem] = useState("Country");
  let [categories] = useState([
    {
      name: "Country",
      value: {
        id: 1,
        title: "Select country",
        icon: <IoLocationOutline size="35px" />,
        commentCount: 5,
        shareCount: 2,
      },
    },

    {
      name: "Flight",
      value: {
        id: 1,
        title: "Search flights",
        icon: <IoAirplaneOutline size="35px" />,
        commentCount: 29,
        shareCount: 16,
      },
    },
    {
      name: "Hotel",
      value: {
        id: 1,
        title: "Search hotels",
        icon: <MdOutlineBed size="35px" />,
        commentCount: 9,
        shareCount: 5,
      },
    },
  ]);

  return (
    <div
      className="w-full max-w-7xl px-2 py-10 sm:px-9
     bg-white rounded-3xl
    shadow-xl 
    "
    >
      <h1 className="text-blue-400 font-bold text-3xl sm:text-5xl tracking-tighter">
        Good Morning!
      </h1>
      <p className="text-[14px]">
        Explore beautiful places in the world with Nomad tour
      </p>
      <Tab.Group manual>
        <Tab.List className="flex rounded-3xl bg-white mt-4 sm:mt-10 border-[1px]">
          {categories.map((category) => {
            return (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-3xl p-5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selectedItem === category.name
                      ? "bg-[#0281B0] text-white shadow"
                      : "text-dark bg-white hover:bg-white/[0.12] hover:text-blue-400"
                  )
                }
                onClick={() => setSelectedItem(category.name)}
              >
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="hidden sm:block">{category.value.icon}</div>
                  <div className="sm:text-left text-center">
                    <h1 className="">{category.name}</h1>
                    <p className="font-light hidden sm:block">
                      {category.value.title}
                    </p>
                  </div>
                </div>
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categories.map((category, idx) => {
            switch (category.name) {
              case "Country":
                return (
                  <Tab.Panel
                    key={idx}
                    className={classNames("rounded-xl border-[1px] p-3")}
                  >
                    <ul>
                      <div>
                        <h2>{category.value.title}</h2>
                        <select
                          defaultValue=""
                          onChange={handleSelectCountry}
                          className="select bg-zinc-100 w-full"
                          name="hotelCountry"
                          id=""
                        >
                          <option disabled selected>
                            Select country to travel
                          </option>
                          {countries?.map((country) => (
                            <option key={country._id} value={country._id}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </ul>
                  </Tab.Panel>
                );
                break;
              case "Flight":
                return (
                  <Tab.Panel
                    key={idx}
                    className={classNames("rounded-xl border-[1px] p-3")}
                  >
                    <FlightSearch />
                  </Tab.Panel>
                );
                break;
              case "Hotel":
                return (
                  <Tab.Panel
                    key={idx}
                    className={classNames("rounded-xl border-[1px] p-3")}
                  >
                    <ul>
                      <div>
                        <h2>{category.value.title}</h2>
                        <div className="flex gap-6 items-center">
                          <select
                            defaultValue=""
                            onChange={handleSelectCountry}
                            className="select bg-zinc-100 w-full"
                            name="hotelCountry"
                            id=""
                          >
                            <option disabled selected>
                              Select country
                            </option>
                            {countries?.map((country) => (
                              <option key={country._id} value={country._id}>
                                {country.name}
                              </option>
                            ))}
                          </select>
                          <Link href="/hotels">
                            <button className="btn bg-[#0281B0] border-0 text-white hover:bg-blue-300">
                              Search
                            </button>
                          </Link>
                        </div>
                      </div>
                    </ul>
                  </Tab.Panel>
                );
              default:
                break;
            }
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
