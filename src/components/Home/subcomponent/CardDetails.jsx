import React from 'react'

const CardDetails = () => {
  return (
    <div className="h-[30rem] flex flex-col lg:flex-row justify-evenly items-center bg-white lg:relative ">
      <div className=" h-[7rem] w-[17rem] bg-pink-200 rounded-lg lg:absolute relative lg:top-[15rem] lg:left-[4rem] ">
        <div className="flex flex-row items-center justify-between ">
          <div className="text-red-500 font-bold font-serif text-3xl p-[1rem] mb-[3rem]">
            <h1>34</h1>
          </div>
          <div className="text-black font-serif font-bold text-[1.1rem] p-[2rem] mb-[2rem]">
            <h3>Building Finished Now</h3>
          </div>
        </div>
        <div className="absolute h-[4rem] w-[4rem] bg-red-500 rounded-full right-[-2rem] top-[-2rem]  "></div>
      </div>

      <div className=" h-[7rem] w-[17rem] bg-pink-200 rounded-lg lg:absolute lg:top-[15rem] relative">
        <div className="flex flex-row items-center justify-between ">
          <div className="text-red-500 font-bold font-serif text-3xl p-[1rem] mb-[3rem]">
            <h1>12</h1>
          </div>
          <div className="text-black font-bold font-serif text-[1.1rem] p-[2rem] mb-[2rem]">
            <h3>Years Experience</h3>
          </div>
        </div>
        <div className="absolute h-[4rem] w-[4rem] bg-red-500 rounded-full right-[-2rem] top-[-2rem]  "></div>
      </div>

      <div className=" h-[7rem] w-[17rem] bg-pink-200 rounded-lg lg:absolute  relative  lg:top-[15rem] lg:right-[4rem] ">
        <div className="flex flex-row items-center justify-between ">
          <div className="text-red-500 font-bold font-serif text-3xl p-[1rem] mb-[3rem]">
            <h1>23</h1>
          </div>
          <div className="text-black font-bold font-serif text-[1.1rem] p-[2rem] mb-[2rem]">
            <h3>Awards Won in 2023</h3>
          </div>
        </div>
        <div className="absolute h-[4rem] w-[4rem] bg-red-500 rounded-full right-[-2rem] top-[-2rem]  "></div>
      </div>
    </div>
  );
}

export default CardDetails