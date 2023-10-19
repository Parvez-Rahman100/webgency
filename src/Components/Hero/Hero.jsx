import React from "react";
import heroBg from "../../assests/HeroBackground.png";
import heroRight from "../../assests/hero-right.png";
import HeroImg from "../../assests/web-design-hero-min.jpg";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-tr from-black to-[#0A1B1A] py-40 ">
        <div
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundRepeat: "round",
          }}
        >
          <div className="absolute z-[1] top-20 left-1/4">
            <h1 className=" lg:text-[120px] text-[50px] font-bold italic text-white select-none ">
              WEB <br />
              <span className="font-new text-emerald-500">DESIGN</span>
              <br /> AGENCY
            </h1>
          </div>
          <div className="relative flex-row flex lg:flex-col  justify-end items-end">
            <div className=" lg:mb-20 mb-32 select-none">
              <img src={heroRight} alt="hero-right" />
            </div>
            <div className="bg-cover lg:w-11/12 w-full bg-center mx-auto select-none ">
              <img src={HeroImg} className=" rounded-xl" alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
