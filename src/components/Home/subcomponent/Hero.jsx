import React from "react";
import p1 from "../assets/JHJH.jpg"
const Hero = () => {
  return (
    <div className="h-[800px] bg-white">
      <div className="max-w-[1640px] mx-auto ">
        <div className="max-h-[800px] relative">
          {/* Overlay */}
          <div className="absolute w-full h-full text-gray-200 max-h-[800px] bg-black/50 flex flex-col justify-center px-[10rem]">
            <h1 className=" text-4xl sm:text-5xl md:text-3xl lg:text-6xl font-bold ">
              HURRY <span className="text-orange-500">!</span>
            </h1>
            <h1 className=" text-4xl sm:text-5xl md:text-3xl lg:text-5xl font-bold">
              GET THE BEST <span className="text-orange-500">VILLA</span> FOR YOU
            </h1>
          </div>
          <img className="w-full max-h-[800px] object-cover" src={p1} alt="/" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
