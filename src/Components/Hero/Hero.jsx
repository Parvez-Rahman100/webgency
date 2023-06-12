import React from "react";
import heroRight from "../../assests/hero-right.png";
import HeroImg from "../../assests/web-design-hero-min.jpg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-  blue-500 to-teal-700 py-40 ">
      <div className="container mx-auto ">
        <div className="absolute z-10 top-36 left-1/4">
          <h1 className=" text-[125px] font-bold italic ">
            WEB <br />
            <span className="text-black">DESIGN</span>
            <br /> AGENCY
          </h1>
        </div>
        <div className="relative flex flex-col  justify-end items-end">
          <div className="mb-36">
            <img src={heroRight} alt="hero-right" />
          </div>
          <div className=" bg-cover bg-center w-full ">
            <img src={HeroImg} alt="hero" className="bg-cover bg-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
