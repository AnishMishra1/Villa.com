import React from 'react'

const CardDetails = () => {
  return (
    <div className="lg:h-[30rem] md:h-[35rem] h-auto  flex flex-col  md:flex-row justify-evenly items-center bg-white relative ">
      <div className=" lg:h-[7rem] lg:w-[17rem] md:h-[5rem] md:w-[12rem] bg-pink-200 rounded-lg  absolute md:top-[15rem]  lg:top-[15rem] lg:left-[33rem] ">
        <div className="flex flex-row items-center justify-between ">
          <div className="text-red-500 font-bold font-serif lg:text-3xl md:text-1xl p-[1rem] mb-[3rem]">
            <h1>34</h1>
          </div>
          <div className="text-black font-serif font-bold lg:text-[1.1rem] md:text-[1xl] lg:p-[2rem] mb-[2rem]">
            <h3>Building Finished Now1</h3>
          </div>
        </div>
        <div className="absolute h-[4rem] w-[4rem] bg-red-500 rounded-full right-[-2rem] top-[-2rem]  "></div>
      </div>

      <div className=" lg:h-[7rem] lg:w-[17rem] md:h-[5rem] md:w-[12rem] bg-pink-200 rounded-lg absolute md:top-[15rem] md:right-[3rem] lg:top-[15rem] lg:right-[5rem]  ">
        <div className="flex flex-row items-center justify-between ">
          <div className="text-red-500 font-bold font-serif lg:text-3xl md:text-1xl p-[1rem] mb-[3rem]">
            <h1>34</h1>
          </div>
          <div className="text-black font-serif font-bold lg:text-[1.1rem] md:text-[1xl] lg:p-[2rem] mb-[2rem]">
            <h3>Building Finished Now2</h3>
          </div>
        </div>
        <div className="absolute h-[4rem] w-[4rem] bg-red-500 rounded-full right-[-2rem] top-[-2rem]  "></div>
      </div>

      <div className=" lg:h-[7rem] lg:w-[17rem] md:h-[5rem] md:w-[12rem] bg-pink-200 rounded-lg absolute md:left-[2rem] lg:top-[15rem] lg:left-[5rem]  ">
        <div className="flex flex-row items-center justify-between ">
          <div className="text-red-500 font-bold font-serif lg:text-3xl md:text-1xl p-[1rem] mb-[3rem]">
            <h1>34</h1>
          </div>
          <div className="text-black font-serif font-bold lg:text-[1.1rem] md:text-[1xl] lg:p-[2rem] mb-[2rem]">
            <h3>Building Finished Now3</h3>
          </div>
        </div>
        <div className="absolute h-[4rem] w-[4rem] bg-red-500 rounded-full right-[-2rem] top-[-2rem]  "></div>
      </div>
    </div>
  );
}

export default CardDetails