import React from "react";

const content = [
  {
    title: "Total Flat Space",
    des: "185 m2",
  },
  {
    title: "Floor Number",
    des: "26th",
  },
  {
    title: "Numbers of Rooms",
    des: "4",
  },
  {
    title: "Parking Avilable",
    des: "Yes",
  },
  {
    title: "Payment Process",
    des: "Bank",
  },
];

const SecDes = () => {
  return (
    <>
      <div className="h-auto px-[2rem]">
        <div className="flex flex-col justify-between items-center h-auto px-[1rem] bg-white drop-shadow-2xl ">
          {content.map((e) => (
            <div className="flex flex-row items-start justify-between gap-4   px-[2rem] py-[2rem] border-b-2 border-gray-200">
              <div>
                <h2 className="text-1xl font-thin font-serif text-gray-500">{e.title}</h2>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center text-black">{e.des}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecDes;
