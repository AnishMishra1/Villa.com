import React from "react";

//local files
import "./Card.css"

const Card = () => {
    let width = 560;
    let height = 315;

    if (window.innerWidth <= 620) {
      width = 350;
      height = 197;
    }
    
  return (
    <>
      <div>
        <div className=" bg h-[30rem] flex flex-col justify-center items-center w-full relative p-[2rem] bg-black/100">
          <div className="text-white flex flex-row justify-evenly items-center absolute top-[5rem] w-[10rem] h-auto ">
            <div className="h-[1.5rem] w-[0.3rem] bg-orange-600 "></div>
            <div className="font-serif font-bold text-1xl  ">
              <h3> VIDEO VIEW</h3>
            </div>
          </div>
          <div className="text-white font-serif text-4xl px-[5rem] font-bold absolute  top-[8rem]   h-auto">
            <h1>
              Get Closer View <span className="text-orange-600 text-5xl"> &</span> Different Feeling
            </h1>
          </div>
          <div className=" xl:h-[25rem] h-auto w-auto sm:h-[18rem] sm:w-[25rem] xl:w-[60rem] absolute xl:top-[15rem] xl:left-[15rem] rounded-lg z-50  sm:top-[20rem] top-[20rem] border-2">
            <iframe
             
              src="https://jumpshare.com/embed/sSUGaOTjUNYfbE44oHBJ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              webkitallowfullscreen
              mozallowfullscreen
              className=" rounded-lg h-full w-full "
              title="none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
