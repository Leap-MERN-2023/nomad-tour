"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import MySelect from "./MySelect";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Country: [
      {
        id: 1,
        title: "Select country to travel",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
    Flight: [
      {
        id: 1,
        title: "Search flights",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
    Hotel: [
      {
        id: 1,
        title: "Search hotels that located in",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
    ],
  });

  return (
    <div
      className="w-11/12 px-2 py-10 sm:px-9
    absolute top-[300px] sm:top-[540px] z-30 bg-white rounded-3xl
    shadow-xl
    "
    >
      <h1 className="text-blue-400 font-bold text-5xl sm:text-7xl tracking-tighter">
        Good Morning!
      </h1>
      <p className="text-[22px]">
        Explore beautiful places in the world with Nomad tour
      </p>
      <Tab.Group>
        <Tab.List className="flex rounded-3xl bg-white mt-4 sm:mt-10 border-[1px]">
          {Object.keys(categories).map((category) => {
            console.log("CATEGORY", category);
            return (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-3xl py-5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-[#0281B0] text-white shadow"
                      : "text-dark bg-white hover:bg-white/[0.12] hover:text-blue-400"
                  )
                }
              >
                <h1>{category}</h1>
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <div>
                    <h2>{post.title}</h2>
                    <MySelect />
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
