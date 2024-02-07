import React from "react";
import { FaSquareFull } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

const content = [
  {
    title1: "250 m2",
    title2: "Total Flat Space",
    image: FaSquareFull,
  },
  {
    title1: "Contract",
    title2: "Contract Ready",
    image: FaFileContract,
  },
  {
    title1: "Payment",
    title2: "Payment",
    image: MdPayments,
  },
  {
    title1: "Safety",
    title2: "24/7 Under Control",
    image: AiFillSafetyCertificate,
  },
];

const Details = () => {
  return (
    <div className="h-auto drop-shadow-2xl">
      <div className="flex flex-col items-start justify-between gap-5 py-[1rem] h-auto px-[1rem] ">
        {content.map((e) => (
          <div className="flex flex-row justify-evenly items-center ">
            <div className="text-red-500  ">{<e.image className="h-[4rem] w-[10rem]" />}</div>
            <div>
              <h1 className="font-bold font-serif text-2xl text-black">
                {e.title1} <br />
                <span className="text-gray-500 text-[1rem] font-serif font-semibold ">{e.title2}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
